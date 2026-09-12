import Link from 'next/link';
import RibbonTag from './components/RibbonTag';

export default function NotFound() {
  return (
    <main className="min-h-[75vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="relative bg-paper-raised border border-dashed border-gap p-8 sm:p-12 max-w-lg w-full">
        <RibbonTag className="absolute -top-1 left-1/2 -translate-x-1/2 w-5 h-7 text-ribbon" />

        <p className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-6">
          Registro no catalogado
        </p>

        <h1 className="font-display text-7xl font-bold text-ink tracking-tight mb-2">
          4<span className="text-ribbon">0</span>4
        </h1>

        <h2 className="font-display text-xl font-semibold text-ink mb-3">
          Sin coincidencia en el archivo
        </h2>

        <p className="text-ink-muted text-sm mb-8 leading-relaxed">
          La dirección que buscás no está catalogada en este sistema, o fue movida a otra ubicación.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border-2 border-ink text-ink font-mono text-sm font-bold hover:bg-ribbon hover:border-ribbon hover:text-paper transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ribbon focus-visible:ring-offset-2 focus-visible:ring-offset-paper-raised"
        >
          <span>←</span> Volver al archivo
        </Link>
      </div>
    </main>
  );
}
