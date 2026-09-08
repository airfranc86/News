import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 flex flex-col min-h-[90vh]">
      
      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-2">Tech<span className="text-sky-400">News</span>.sys</h1>
        <p className="text-gray-400 font-mono text-sm">{'>'} root/var/log/latest_articles</p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
        {/* Tarjeta de Noticia 1 */}
        <Link href="/bill-gates-ia" className="block bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-sky-400 hover:-translate-y-1 transition-all shadow-lg">
          <span className="text-xs font-mono text-purple-400 uppercase mb-3 block">Opinión / AI</span>
          <h2 className="text-2xl font-bold text-white mb-3">Un Cambio Epochal: La Era de la IA</h2>
          <p className="text-gray-400 mb-6 text-sm">El plan crítico para asegurar que lo bueno supere a lo malo en la transición tecnológica.</p>
          <div className="flex justify-between items-center text-sky-400 font-mono text-xs border-t border-gray-800 pt-4">
            <span>Autor: B. Gates</span>
            <span>Leer {'->'}</span>
          </div>
        </Link>
      </main>

      {/* --- INICIO DEL FOOTER --- */}
      <footer className="mt-16 pt-8 border-t border-gray-800 flex items-center justify-center gap-4 text-gray-400 font-mono text-sm">
        <img 
          src="/tu-foto.jpg" 
          alt="Foto de perfil del creador" 
          className="w-10 h-10 rounded-full object-cover border-2 border-gray-700 hover:border-sky-400 transition-colors"
        />
        <p>
          Desarrollado y curado por <span className="text-white font-semibold">Tu Nombre Aquí</span>
        </p>
      </footer>
      {/* --- FIN DEL FOOTER --- */}

    </div>
  );
}