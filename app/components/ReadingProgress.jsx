'use client';

import { useEffect, useRef } from 'react';

export default function ReadingProgress({ targetRef }) {
  const barRef = useRef(null);
  const pctRef = useRef(null);

  useEffect(() => {
    const target = targetRef.current;
    const bar = barRef.current;
    if (!target || !bar) return undefined;

    const update = () => {
      const rect = target.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const progress = total > 0 ? Math.min(Math.max(-rect.top / total, 0), 1) : 1;
      bar.style.transform = `scaleX(${progress})`;
      if (pctRef.current) {
        pctRef.current.textContent = `${Math.round(progress * 100)}%`;
      }
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [targetRef]);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-rule/50">
        <div
          ref={barRef}
          className="h-full w-full bg-ribbon origin-left"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>
      <div
        ref={pctRef}
        className="fixed top-20 right-4 z-[60] font-mono text-[11px] uppercase tracking-widest text-ink-muted bg-paper-raised border border-rule px-2 py-1"
      >
        0%
      </div>
    </>
  );
}
