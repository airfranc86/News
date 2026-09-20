'use client';

import { useEffect, useRef, useState } from 'react';

export default function SectionIndex({ sections }) {
  const [activeId, setActiveId] = useState(sections[0]?.id);
  const [hoverId, setHoverId] = useState(null);
  const [marks, setMarks] = useState({});
  const listRef = useRef(null);
  const itemRefs = useRef({});

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

  // Rail geometry: vertical midpoint of each entry, remeasured whenever the list resizes.
  useEffect(() => {
    const list = listRef.current;
    if (!list) return undefined;

    const measure = () => {
      setMarks(
        Object.fromEntries(
          sections
            .filter((s) => itemRefs.current[s.id])
            .map((s) => {
              const el = itemRefs.current[s.id];
              return [s.id, el.offsetTop + el.offsetHeight / 2];
            }),
        ),
      );
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(list);
    return () => observer.disconnect();
  }, [sections]);

  const measured = marks[activeId] !== undefined;
  const preview = hoverId && hoverId !== activeId ? (marks[hoverId] ?? 0) : 0;

  return (
    <nav
      aria-label="Índice del registro"
      className="hidden xl:block sticky top-24 self-start w-56 shrink-0 font-mono text-xs"
    >
      <p className="uppercase tracking-widest text-ink-muted mb-3">Índice</p>
      <ol className="relative flex flex-col gap-2 border-l border-dashed border-rule pl-4" ref={listRef}>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-px top-0 w-0.5 bg-ink-muted/40 transition-[height] duration-200 motion-reduce:transition-none"
          style={{ height: preview }}
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-px top-0 w-0.5 bg-ribbon transition-[height,opacity] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-2 after:bg-ribbon after:content-['']"
          style={{ height: marks[activeId] ?? 0, opacity: measured ? 1 : 0 }}
        />
        {sections.map((s) => (
          <li
            key={s.id}
            ref={(el) => {
              itemRefs.current[s.id] = el;
            }}
          >
            <a
              href={`#${s.id}`}
              aria-current={activeId === s.id ? 'location' : undefined}
              onMouseEnter={() => setHoverId(s.id)}
              onMouseLeave={() => setHoverId(null)}
              onFocus={() => setHoverId(s.id)}
              onBlur={() => setHoverId(null)}
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
