'use client';

import { useEffect, useState } from 'react';

export default function SectionIndex({ sections }) {
  const [activeId, setActiveId] = useState(sections[0]?.id);

  useEffect(() => {
    const elements = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
    if (!elements.length) return undefined;

    const update = () => {
      const line = window.innerHeight * 0.3;
      let current = elements[0].id;
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= line) {
          current = el.id;
        }
      }
      setActiveId(current);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [sections]);

  return (
    <nav
      aria-label="Índice del registro"
      className="hidden xl:block sticky top-24 self-start w-56 shrink-0 font-mono text-xs"
    >
      <p className="uppercase tracking-widest text-ink-muted mb-3">Índice</p>
      <ol className="space-y-2 border-l border-rule pl-4">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={`block leading-snug transition-colors ${
                activeId === s.id ? 'text-ribbon' : 'text-ink-muted hover:text-ink'
              }`}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
