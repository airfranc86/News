'use client';

import { useState, useRef } from 'react';

export default function CopyCitationStamp({ citation }) {
  const [stamped, setStamped] = useState(false);
  const timeoutRef = useRef(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(citation);
    } catch {
      return;
    }
    setStamped(false);
    requestAnimationFrame(() => setStamped(true));
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setStamped(false), 1800);
  };

  return (
    <div className="relative inline-flex">
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center gap-2 text-ink-muted hover:text-ink font-mono text-sm underline decoration-rule underline-offset-4 hover:decoration-ink transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ribbon focus-visible:ring-offset-2 focus-visible:ring-offset-paper-raised"
      >
        Copiar cita
      </button>

      {stamped && (
        <span
          role="status"
          className="stamp-pop absolute left-1/2 -top-2 -translate-x-1/2 -translate-y-full whitespace-nowrap bg-ribbon text-paper font-mono text-xs uppercase tracking-widest px-3 py-1"
        >
          Copiado
        </span>
      )}

      <style>{`
        @keyframes stamp-press {
          0% { transform: translate(-50%, -100%) scale(0.5); border-radius: 50%; opacity: 0; }
          60% { transform: translate(-50%, -100%) scale(1.05); border-radius: 50%; opacity: 1; }
          100% { transform: translate(-50%, -100%) scale(1); border-radius: 0; opacity: 1; }
        }
        .stamp-pop {
          animation: stamp-press 420ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @media (prefers-reduced-motion: reduce) {
          .stamp-pop {
            animation: none;
            transform: translate(-50%, -100%);
          }
        }
      `}</style>
    </div>
  );
}
