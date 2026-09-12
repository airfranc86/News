export default function CustodyStamp({ items, className = '' }) {
  return (
    <div className={`flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-ink-muted ${className}`}>
      <span className="w-2 h-2 rounded-full border border-ribbon shrink-0" aria-hidden="true" />
      <span>{items.join('  ·  ')}</span>
    </div>
  );
}
