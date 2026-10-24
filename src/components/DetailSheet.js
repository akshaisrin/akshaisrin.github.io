import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import useMediaQuery from '../hooks/useMediaQuery';

// Overlay used by Experience and Projects for the full write-up of one entry.
export default function DetailSheet({ open, onClose, title, subtitle, meta, children }) {
  const closeRef = useRef(null);
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  useEffect(() => {
    if (!open) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  const slide = reduceMotion ? {} : { y: 14 };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="sheet-root"
          className="fixed inset-0 z-50 flex items-end justify-center overflow-y-auto p-0 sm:items-center sm:p-6"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.16 }}
        >
          <div className="absolute inset-0 bg-scrim" aria-hidden />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="sheet-title"
            className="relative z-10 my-auto max-h-[100dvh] w-full max-w-3xl overflow-y-auto rounded-t-3xl border border-rule-2 bg-surface p-6 sm:max-h-[90vh] sm:rounded-3xl sm:p-9"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, ...slide }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: [0.2, 0, 0, 1] }}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl border border-rule-2 text-ink transition-colors hover:border-coral hover:text-coral sm:right-6 sm:top-6"
            >
              <X className="h-5 w-5" strokeWidth={1.75} aria-hidden />
            </button>

            <header className="pr-12">
              <h2 id="sheet-title" className="text-[1.75rem] font-extrabold leading-tight tracking-tight sm:text-[2rem]">
                {title}
              </h2>
              {subtitle && <p className="mt-1 text-ink-2">{subtitle}</p>}
              {meta && <p className="tnum mt-1 font-mono text-[0.8rem] text-ink-3">{meta}</p>}
            </header>

            <div className="mt-6 border-t border-rule pt-6">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Bullets({ text }) {
  const lines = text
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);
  return (
    <ul className="m-0 max-w-measure list-none space-y-3 p-0">
      {lines.map((line) => (
        <li key={line} className="flex gap-3">
          <span className="mt-[0.6em] h-2 w-2 shrink-0 rounded-full bg-butter" aria-hidden />
          <span className="text-ink-2">{line}</span>
        </li>
      ))}
    </ul>
  );
}

export function StackList({ items }) {
  return (
    <div className="mt-7">
      <h3 className="font-mono text-[0.75rem] uppercase tracking-[0.12em] text-ink-3">Stack</h3>
      <ul className="mt-3 flex list-none flex-wrap gap-2 p-0">
        {items.map((s) => (
          <li key={s} className="rounded-full border border-rule-2 bg-bg px-3 py-1 text-[0.85rem] text-ink-2">
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}
