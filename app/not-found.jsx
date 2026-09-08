import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-[75vh] flex flex-col items-center justify-center px-4 text-center relative">
      {/* Luz radial de fondo */}
      <div className="absolute w-72 h-72 bg-sky-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-8 sm:p-12 max-w-lg w-full backdrop-blur-xl shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-mono text-xs mb-6">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          SYSTEM_ERROR // HTTP_404
        </div>

        <h1 className="text-7xl font-black text-white font-mono tracking-tighter mb-2">
          4<span className="text-sky-400">0</span>4
        </h1>

        <h2 className="text-xl font-bold text-slate-200 mb-3">
          Ruta no localizada
        </h2>

        <p className="text-slate-400 text-sm mb-8 leading-relaxed">
          La dirección a la que intentas acceder no existe en el sistema o fue movida a otra ubicación.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center font-mono text-sm">
          <Link
            href="/"
            className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20"
          >
            <span>←</span> Volver al Hub Central
          </Link>
        </div>
      </div>
    </main>
  );
}