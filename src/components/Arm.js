import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { SECTIONS, HERO_POSE } from '../data/sections';
import useMediaQuery from '../hooks/useMediaQuery';

const VB_H = 800;
const BASE = { x: 200, y: 690 };
const L1 = 130;
const L2 = 210;
const L3 = 185;
const L4 = 56;
const TOOL = 60;
const COLLAR = 85;
const LABEL_X = 680;
const LABEL_Y = [100, 180, 260, 340, 420, 500, 580];
// The labels are stations on a vertical rail the arm indexes to; the claw aims at the station mark.
const RAIL_X = 654;
// The compact (phone) drawing crops the sheet to the arm's hero pose so it stays short.
// Desktop crops the sheet's empty margins so the drawing fills the column.
const VIEW = { x: 20, y: 0, w: 840, h: VB_H };
const VIEW_COMPACT = { x: 30, y: 235, w: 640, h: 545 };
const LABEL_Y_COMPACT = [265, 315, 365, 415, 465, 515, 565];
const VMAX = 95;
const AMAX = 220;
const RAD = Math.PI / 180;
// Seventh "joint": gripper opening, driven by the same velocity profile (0 closed, GRIP_OPEN open).
const GRIP_OPEN = 30;
const GRIP_TRAVEL = 10;
const WRIST_LIMIT = 110;

function fk(q) {
  const [t1, t2, t3, t4, t5, t6] = q;
  const p2 = { x: BASE.x, y: BASE.y - L1 };
  const a2 = t2;
  const p3 = { x: p2.x + L2 * Math.sin(a2 * RAD), y: p2.y - L2 * Math.cos(a2 * RAD) };
  const a3 = a2 + t3;
  const p4 = { x: p3.x + COLLAR * Math.sin(a3 * RAD), y: p3.y - COLLAR * Math.cos(a3 * RAD) };
  const p5 = { x: p3.x + L3 * Math.sin(a3 * RAD), y: p3.y - L3 * Math.cos(a3 * RAD) };
  const a5 = a3 + t5;
  const p6 = { x: p5.x + L4 * Math.sin(a5 * RAD), y: p5.y - L4 * Math.cos(a5 * RAD) };
  const p1 = { x: BASE.x, y: BASE.y - 95 };
  return { t1, t4, t6, p1, p2, a2, p3, a3, p4, p5, a5, p6 };
}

// Aim the whole arm at a point: planar two-link IK puts the wrist on the straight line
// from the shoulder to the target (elbow up), the gripper lies along that same line, and the
// fingertips stop STANDOFF short of the mark; out-of-reach targets get the fully extended
// arm along the line, so the direction still reads unambiguously.
const TOOL_LEN = L4 + TOOL;
const STANDOFF = 40;
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
function aimPose(at, grip, reach) {
  const S = { x: BASE.x, y: BASE.y - L1 };
  const dx = at.x - S.x;
  const dy = at.y - S.y;
  const dist = Math.hypot(dx, dy);
  const ux = dx / dist;
  const uy = dy / dist;
  // Out-of-reach targets get the fully extended arm along the line.
  const wristDist = reach ?? clamp(dist - STANDOFF - TOOL_LEN, 60, L2 + L3 - 2);
  const W = { x: S.x + ux * wristDist, y: S.y + uy * wristDist };
  const rayAngle = Math.atan2(ux, -uy) / RAD;
  const alpha = Math.acos(clamp((L2 * L2 + wristDist * wristDist - L3 * L3) / (2 * L2 * wristDist), -1, 1)) / RAD;
  const t2 = rayAngle - alpha;
  const E = { x: S.x + L2 * Math.sin(t2 * RAD), y: S.y - L2 * Math.cos(t2 * RAD) };
  const a3 = Math.atan2(W.x - E.x, -(W.y - E.y)) / RAD;
  const t3 = ((a3 - t2 + 540) % 360) - 180;
  const t5 = clamp(((rayAngle - a3 + 540) % 360) - 180, -WRIST_LIMIT, WRIST_LIMIT);
  return [0, t2, t3, 0, t5, 0, grip];
}

// Trapezoidal velocity profile per joint: accelerate at AMAX, cruise at VMAX,
// decelerate once the remaining travel equals the stopping distance.
function stepJoint(q, v, target, dt) {
  const err = target - q;
  if (Math.abs(err) < 0.05 && Math.abs(v) < 3) return [target, 0, true];
  const dir = Math.sign(err);
  const stopping = (v * v) / (2 * AMAX);
  const movingToward = Math.sign(v) === dir;
  const accel = movingToward && Math.abs(err) <= stopping ? -dir * AMAX : dir * AMAX;
  let nv = Math.max(-VMAX, Math.min(VMAX, v + accel * dt));
  let nq = q + nv * dt;
  if (Math.sign(target - nq) !== dir && movingToward) {
    nq = target;
    nv = 0;
  }
  return [nq, nv, false];
}

const Triad = () => (
  <g aria-hidden>
    <line x1="0" y1="0" x2="44" y2="0" stroke="var(--axis-x)" strokeWidth="1.5" markerEnd="url(#arrow-x)" />
    <line x1="0" y1="0" x2="0" y2="-44" stroke="var(--axis-y)" strokeWidth="1.5" markerEnd="url(#arrow-y)" />
    <circle r="5.5" fill="var(--sheet)" stroke="var(--axis-z)" strokeWidth="1.5" />
    <circle r="1.7" fill="var(--axis-z)" />
  </g>
);

// The floor runs past the drawing on both sides; the aside clips it at the column edge.
const FLOOR_FROM = -1200;
const FLOOR_TO = 2100;
const HATCH = Array.from({ length: Math.ceil((FLOOR_TO - FLOOR_FROM) / 16) }, (_, i) => FLOOR_FROM + i * 16);

export default function Arm({ active, compact, onNavigate }) {
  const [hover, setHover] = useState(null);
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  const q = useRef([...HERO_POSE, 0]);
  const v = useRef([0, 0, 0, 0, 0, 0, 0]);
  const target = useRef([...HERO_POSE, 0]);
  const raf = useRef(0);
  const last = useRef(0);
  const pending = useRef(null);

  const upperRef = useRef(null);
  const foreRef = useRef(null);
  const wristRef = useRef(null);
  const markRef = useRef(null);
  const tickRef = useRef(null);
  const fingerTopRef = useRef(null);
  const fingerBotRef = useRef(null);

  const shown = hover ?? (compact ? 'hero' : active);
  const view = compact ? VIEW_COMPACT : VIEW;
  const labelY = compact ? LABEL_Y_COMPACT : LABEL_Y;

  const apply = useCallback(() => {
    const k = fk(q.current);
    upperRef.current?.setAttribute('transform', `translate(${k.p2.x} ${k.p2.y}) rotate(${k.a2 - 90})`);
    foreRef.current?.setAttribute('transform', `translate(${k.p3.x} ${k.p3.y}) rotate(${k.a3 - 90})`);
    wristRef.current?.setAttribute('transform', `translate(${k.p5.x} ${k.p5.y}) rotate(${k.a5 - 90})`);
    markRef.current?.setAttribute('cx', BASE.x + 30 * Math.sin(k.t1 * RAD));
    tickRef.current?.setAttribute('transform', `translate(${COLLAR} ${14 * Math.sin(k.t4 * RAD)})`);
    const spread = (q.current[6] / GRIP_OPEN) * GRIP_TRAVEL;
    fingerTopRef.current?.setAttribute('y', -17 - spread);
    fingerBotRef.current?.setAttribute('y', 10 + spread);
  }, []);

  // Layout effect: under reduced motion the landing pose must be applied before the first paint.
  useLayoutEffect(() => {
    // The claw aims at the current section's label, and opens while a label is hovered.
    // Phones have no rail, so the compact drawing keeps the hero pose instead of aiming off-crop.
    const aimId = hover ?? (compact ? null : shown);
    const aimIndex = aimId ? SECTIONS.findIndex((s) => s.id === aimId) : -1;
    const station = aimIndex >= 0 ? { x: RAIL_X, y: labelY[aimIndex] } : null;
    const finalPose = station ? aimPose(station, GRIP_OPEN) : [...HERO_POSE, 0];
    if (reduceMotion) {
      target.current = finalPose;
      pending.current = null;
      q.current = [...finalPose];
      v.current = [0, 0, 0, 0, 0, 0, 0];
      apply();
      return;
    }
    // The claw closes for the move and opens again once the arm arrives at the station.
    target.current = station ? aimPose(station, 0) : finalPose;
    pending.current = station ? finalPose : null;
    if (raf.current) return; // the running loop reads target.current on its next frame
    last.current = performance.now();
    const loop = (now) => {
      const dt = Math.min((now - last.current) / 1000, 0.05);
      last.current = now;
      let settled = true;
      for (let i = 0; i < 7; i += 1) {
        const [nq, nv, done] = stepJoint(q.current[i], v.current[i], target.current[i], dt);
        q.current[i] = nq;
        v.current[i] = nv;
        if (!done) settled = false;
      }
      apply();
      if (settled && pending.current) {
        target.current = pending.current;
        pending.current = null;
        settled = false;
      }
      raf.current = settled ? 0 : window.requestAnimationFrame(loop);
    };
    raf.current = window.requestAnimationFrame(loop);
  }, [shown, hover, compact, labelY, reduceMotion, apply]);

  // Runs after the target effect above, so the first paint already reflects the landing pose.
  useLayoutEffect(() => {
    apply();
    return () => {
      if (raf.current) window.cancelAnimationFrame(raf.current);
      raf.current = 0;
    };
  }, [apply]);

  const isActive = (id) => shown === id;

  return (
    <div
      className={compact ? 'relative mx-auto w-full max-w-[19rem]' : 'relative mx-auto'}
      style={
        compact
          ? { aspectRatio: `${view.w} / ${view.h}` }
          : { aspectRatio: `${view.w} / ${view.h}`, width: 'min(100%, calc((100vh - 3.5rem) * 1.125))', maxHeight: '100%' }
      }
    >
      <svg
        viewBox={`${view.x} ${view.y} ${view.w} ${view.h}`}
        className="block h-full w-full overflow-visible"
        role="img"
        aria-label="Drawing of a six-axis robot arm that points its gripper at the current section"
      >
        <defs>
          <marker id="arrow-x" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0 0 L8 4 L0 8 z" fill="var(--axis-x)" />
          </marker>
          <marker id="arrow-y" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0 0 L8 4 L0 8 z" fill="var(--axis-y)" />
          </marker>
          {/* Cylindrical shading across each link, in the link's own frame. */}
          <linearGradient id="link" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="var(--arm-hi)" />
            <stop offset="0.55" stopColor="var(--arm)" />
            <stop offset="1" stopColor="var(--arm-lo)" />
          </linearGradient>
          <marker id="dim" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" orient="auto-start-reverse">
            <path d="M0 1 L10 5 L0 9 z" fill="var(--ink)" />
          </marker>
        </defs>

        {/* Ground, centerline, and the two dimensions the sheet carries. */}
        <g stroke="var(--ink)" strokeWidth="1" vectorEffect="non-scaling-stroke" aria-hidden>
          <line x1={FLOOR_FROM} y1="706" x2={FLOOR_TO} y2="706" />
          {HATCH.map((x) => (
            <line key={x} x1={x} y1="706" x2={x - 9} y2="716" />
          ))}
        </g>
        <line
          x1={BASE.x}
          y1="740"
          x2={BASE.x}
          y2="505"
          stroke="var(--ink-3)"
          strokeWidth="1"
          strokeDasharray="16 5 3 5"
          vectorEffect="non-scaling-stroke"
          aria-hidden
        />
        <g stroke="var(--ink)" strokeWidth="1" vectorEffect="non-scaling-stroke" fill="none" aria-hidden>
          <line x1="160" y1="706" x2="66" y2="706" />
          <line x1="180" y1="560" x2="66" y2="560" />
          <line x1="74" y1="702" x2="74" y2="564" markerStart="url(#dim)" markerEnd="url(#dim)" />
          <line x1="110" y1="712" x2="110" y2="746" />
          <line x1="290" y1="712" x2="290" y2="746" />
          <line x1="114" y1="738" x2="286" y2="738" markerStart="url(#dim)" markerEnd="url(#dim)" />
        </g>
        <text x="200" y="766" textAnchor="middle" fill="var(--ink)" fontSize="15" fontFamily="osifont, monospace" aria-hidden>
          180
        </text>
        <text
          x="62"
          y="633"
          transform="rotate(-90 62 633)"
          textAnchor="middle"
          fill="var(--ink)"
          fontSize="15"
          fontFamily="osifont, monospace"
          aria-hidden
        >
          146
        </text>

        {/* Base: plate, pedestal, turntable (J1), neck. Every part carries its own outline. */}
        <g aria-hidden stroke="var(--arm-line)" strokeWidth="2" strokeLinejoin="round">
          <rect x="110" y="692" width="180" height="14" rx="1" fill="var(--joint)" />
          <path d="M170 692 L230 692 L222 602 L178 602 Z" fill="url(#link)" />
          <rect x="158" y="588" width="84" height="16" rx="4" fill="var(--joint)" />
          <circle ref={markRef} cx={BASE.x} cy="596" r="3" fill="var(--sheet)" />
          <rect x="186" y="556" width="28" height="34" fill="var(--joint)" />
        </g>

        {/* Upper arm: shoulder (J2) at origin, elbow at L2. */}
        <g ref={upperRef} aria-hidden stroke="var(--arm-line)" strokeWidth="2" strokeLinejoin="round">
          <rect x="0" y="-22" width={L2} height="44" rx="8" fill="url(#link)" />
          <circle r="30" fill="var(--joint)" />
          <circle r="9" fill="var(--sheet)" />
          <circle cx={L2} r="26" fill="var(--joint)" />
          <Triad />
        </g>

        {/* Forearm: elbow (J3) at origin, roll collar (J4), wrist at L3. */}
        <g ref={foreRef} aria-hidden stroke="var(--arm-line)" strokeWidth="2" strokeLinejoin="round">
          <rect x="0" y="-17" width={L3} height="34" rx="7" fill="url(#link)" />
          <rect x={COLLAR - 13} y="-23" width="26" height="46" rx="3" fill="var(--joint)" />
          <circle ref={tickRef} r="3" fill="var(--sheet)" />
          <circle r="8" fill="var(--sheet)" />
          <circle cx={L3} r="24" fill="var(--joint)" />
          <Triad />
        </g>

        {/* Wrist: pitch (J5) at origin, flange (J6) at L4, gripper beyond. */}
        <g ref={wristRef} aria-hidden stroke="var(--arm-line)" strokeWidth="2" strokeLinejoin="round">
          <rect x="0" y="-10" width={L4} height="20" rx="4" fill="url(#link)" />
          <circle r="8" fill="var(--sheet)" />
          <rect x={L4 - 2} y="-19" width="14" height="38" rx="2" fill="var(--joint)" />
          <rect ref={fingerTopRef} x={L4 + 12} y="-17" width={TOOL - 12} height="7" rx="2" fill="var(--joint)" />
          <rect ref={fingerBotRef} x={L4 + 12} y="10" width={TOOL - 12} height="7" rx="2" fill="var(--joint)" />
          <Triad />
        </g>

        {/* Station rail: six index positions the arm points to; the active one is filled, the hovered one gets a crosshair. */}
        {!compact && (
          <g aria-hidden>
            <line
              x1={RAIL_X}
              y1={labelY[0] - 34}
              x2={RAIL_X}
              y2={labelY[labelY.length - 1] + 34}
              stroke="var(--ink-3)"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
            <line x1={RAIL_X - 8} y1={labelY[0] - 34} x2={RAIL_X + 8} y2={labelY[0] - 34} stroke="var(--ink-3)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            <line x1={RAIL_X - 8} y1={labelY[labelY.length - 1] + 34} x2={RAIL_X + 8} y2={labelY[labelY.length - 1] + 34} stroke="var(--ink-3)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            {SECTIONS.map((s, i) => {
              const on = isActive(s.id);
              return (
                <g key={s.id}>
                  {hover === s.id && (
                    <g stroke="var(--signal)" strokeWidth="1" vectorEffect="non-scaling-stroke">
                      <line x1={RAIL_X - 16} y1={labelY[i]} x2={RAIL_X + 16} y2={labelY[i]} />
                      <line x1={RAIL_X} y1={labelY[i] - 16} x2={RAIL_X} y2={labelY[i] + 16} />
                    </g>
                  )}
                  <circle
                    cx={RAIL_X}
                    cy={labelY[i]}
                    r="6"
                    fill={on ? 'var(--signal)' : 'var(--sheet)'}
                    stroke={on ? 'var(--signal)' : 'var(--ink)'}
                    strokeWidth="1.5"
                    vectorEffect="non-scaling-stroke"
                  />
                </g>
              );
            })}
          </g>
        )}
      </svg>

      {/* On phones the header menu carries navigation; six labels at this size would be unusable tap targets. */}
      {!compact && (
      <nav aria-label="Sections">
        <ul className="m-0 list-none p-0">
          {SECTIONS.map((s, i) => {
            const activeCls = isActive(s.id) ? 'text-signal-ink' : 'text-ink';
            const common = `font-cad flex items-baseline gap-2 whitespace-nowrap uppercase tracking-wide no-underline hover:text-signal-ink ${activeCls}`;
            const style = {
              position: 'absolute',
              left: `${((LABEL_X - view.x) / view.w) * 100}%`,
              top: `${((labelY[i] - view.y) / view.h) * 100}%`,
              transform: 'translateY(-50%)',
              fontSize: compact ? 'clamp(0.7rem, 2.6vw, 0.95rem)' : 'clamp(0.75rem, 1.05vw, 0.95rem)',
            };
            return (
              <li key={s.id}>
                {s.href ? (
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={common}
                    style={style}
                    onMouseEnter={() => setHover(s.id)}
                    onMouseLeave={() => setHover(null)}
                    onFocus={() => setHover(s.id)}
                    onBlur={() => setHover(null)}
                  >
                    <span>{s.label}</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    className={common}
                    style={style}
                    onClick={() => onNavigate(s.id)}
                    onMouseEnter={() => setHover(s.id)}
                    onMouseLeave={() => setHover(null)}
                    onFocus={() => setHover(s.id)}
                    onBlur={() => setHover(null)}
                    aria-current={active === s.id ? 'location' : undefined}
                  >
                    <span>{s.label}</span>
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
      )}
    </div>
  );
}
