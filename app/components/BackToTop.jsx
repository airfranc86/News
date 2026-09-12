'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 480);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  if (!visible) return null;

  return (
    <Link
      href="/"
      aria-label="Volver al inicio"
      className="fixed bottom-4 right-4 z-[60] w-10 h-10 flex items-center justify-center border-2 border-ink bg-paper-raised text-ink hover:bg-ink hover:text-paper transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ribbon focus-visible:ring-offset-2"
    >
      <svg viewBox="0 0 16 16" className="w-4 h-4" aria-hidden="true">
        <path d="M8 2.5 L13 8.5 H9.5 V13.5 H6.5 V8.5 H3 Z" fill="currentColor" />
      </svg>
    </Link>
  );
}
