import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BRAND_COLORS, PIXEL_ICONS, PIXEL_ORDER } from '../data/pixelIcons';
import useMediaQuery from '../hooks/useMediaQuery';

const N = 18; // dots per side; the 16x16 icons sit centered with a 1-dot margin
const CYCLE_MS = 4200;
const MORPH_MS = 380;
const RIPPLE_MS_PER_DOT = 28;

function targetsFor(name) {
  const { px, shadow } = PIXEL_ICONS[name];
  const off = (N - 16) / 2;
  const at = (x, y) => px[y - off]?.[x - off];
  const lit = (ch) => ch && ch !== '.';
  const out = [];
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      const ch = at(x, y);
      if (lit(ch)) out.push({ v: 1, c: ch });
      else if (shadow && lit(at(x - 1, y - 1))) out.push({ v: 1, c: shadow }); // logo drop shadow
      else out.push({ v: 0, c: '0' });
    }
  }
  return out;
}

function readPalette() {
  const css = (n) => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
  return {
    0: css('--rule-2'),
    1: css('--blue'),
    2: css('--coral'),
    3: css('--butter'),
    4: css('--ink'),
    ...BRAND_COLORS,
  };
}

// A dot-matrix screen that morphs between pixel icons. `hold` pins one icon (nav hover) and pauses the rotation.
export default function PixelGrid({ hold }) {
  const canvasRef = useRef(null);
  const dotsRef = useRef(null);
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const [index, setIndex] = useState(0);
  const shown = hold ?? PIXEL_ORDER[index];

  if (!dotsRef.current) {
    dotsRef.current = Array.from({ length: N * N }, (_, i) => ({
      x: i % N,
      y: Math.floor(i / N),
      from: { v: 0, c: '0' },
      to: { v: 0, c: '0' },
      cur: { v: 0, c: '0' },
      start: 0,
    }));
  }

  // Retarget every dot, rippling outward from the center.
  useEffect(() => {
    const now = performance.now();
    const targets = targetsFor(shown);
    dotsRef.current.forEach((d, i) => {
      d.from = d.cur;
      d.to = targets[i];
      d.start = reduceMotion ? 0 : now + Math.hypot(d.x - N / 2, d.y - N / 2) * RIPPLE_MS_PER_DOT;
    });
  }, [shown, reduceMotion]);

  // Idle rotation, paused while an icon is held; off entirely for reduced motion.
  useEffect(() => {
    if (hold || reduceMotion) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % PIXEL_ORDER.length), CYCLE_MS);
    return () => clearInterval(id);
  }, [hold, reduceMotion, index]);

  // Draw loop, only while the canvas is on screen.
  useEffect(() => {
    const canvas = canvasRef.current;
    const g = canvas.getContext('2d');
    const palette = readPalette();
    let size = 0;
    let gap = 0;
    let pointer = { x: -1e3, y: -1e3 };
    let frame = 0;
    let visible = true;

    const fit = () => {
      const dpr = window.devicePixelRatio || 1;
      size = canvas.clientWidth;
      canvas.width = canvas.height = Math.round(size * dpr);
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      gap = size / N;
    };

    const draw = (now) => {
      g.clearRect(0, 0, size, size);
      for (const d of dotsRef.current) {
        const p = Math.min(1, Math.max(0, (now - d.start) / MORPH_MS));
        const e = p < 0.5 ? 2 * p * p : 1 - (-2 * p + 2) ** 2 / 2;
        const v = d.from.v + (d.to.v - d.from.v) * e;
        const c = e < 0.5 ? d.from.c : d.to.c;
        d.cur = { v, c };
        const cx = (d.x + 0.5) * gap;
        const cy = (d.y + 0.5) * gap;
        const near = Math.max(0, 1 - Math.hypot(cx - pointer.x, cy - pointer.y) / (gap * 3.5));
        // Lit dots nearly touch so the art reads as solid pixels; the cursor swells unlit dots more than lit ones.
        const r = gap * (0.12 + 0.34 * v) * (1 + near * (0.5 - 0.42 * v));
        g.fillStyle = palette[v < 0.08 && near > 0.3 ? '1' : c];
        g.beginPath();
        g.arc(cx, cy, r, 0, Math.PI * 2);
        g.fill();
      }
      frame = visible ? requestAnimationFrame(draw) : 0;
    };

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      pointer = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const onLeave = () => {
      pointer = { x: -1e3, y: -1e3 };
    };
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !frame) frame = requestAnimationFrame(draw);
    });

    fit();
    io.observe(canvas);
    window.addEventListener('resize', fit);
    canvas.addEventListener('pointermove', onMove);
    canvas.addEventListener('pointerleave', onLeave);
    return () => {
      io.disconnect();
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('resize', fit);
      canvas.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  const next = useCallback(() => setIndex((i) => (i + 1) % PIXEL_ORDER.length), []);
  const icon = PIXEL_ICONS[shown];

  return (
    <figure className="m-0 mx-auto flex w-full max-w-[19rem] flex-col sm:max-w-[26rem] items-center gap-2 rounded-3xl border-2 border-transparent p-3 sm:p-4 xl:max-w-none">
      <button
        type="button"
        onClick={next}
        className="block w-full rounded-2xl"
        aria-label={`Pixel drawing of ${icon.label}. Show the next drawing.`}
      >
        <canvas ref={canvasRef} className="block aspect-square w-full" aria-hidden />
      </button>
      {/* Two lines reserved so longer captions don't shift the layout as they rotate. */}
      <figcaption className="flex min-h-[3em] max-w-[28rem] items-center justify-center text-balance text-center font-mono text-[0.9rem] leading-[1.5] text-coral">
        <span>
        {icon.caption[0]}
        <span className="text-butter">{icon.caption[1]}</span>
        {icon.caption[2]}
        </span>
      </figcaption>
    </figure>
  );
}
