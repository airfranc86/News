import Link from 'next/link';

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 flex flex-col justify-between min-h-[calc(100vh-4rem)]">
      
      <div>
        {/* Encabezado del Blog */}
        <section className="mb-12 text-center sm:text-left border-b border-slate-800/60 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-sky-400 mb-4">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
            SISTEMA OPERATIVO DE NOTICIAS
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-4">
            Explorando el frontera de la <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Inteligencia Artificial</span>
          </h1>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg">
            Análisis críticos, ensayos de líderes de la industria y las transformaciones tecnológicas que están redefiniendo el futuro.
          </p>
        </section>

        {/* Grilla de Artículos */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Artículo Destacado (Ocupa 2 columnas en pantallas grandes) */}
          <article className="lg:col-span-2 group relative bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 sm:p-8 hover:border-sky-500/50 hover:shadow-2xl hover:shadow-sky-500/5 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono mb-4">
                <span className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/20 font-semibold">
                  OPINIÓN / IA
                </span>
                <span className="text-slate-500">10 min de lectura</span>
              </div>
              
              <Link href="/bill-gates-ai" className="focus:outline-none">
                <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-sky-400 transition-colors mb-4">
                  Un Cambio Epochal: La Era de la Inteligencia Artificial ha Comenzado
                </h2>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                  Bill Gates expone su visión sobre cómo la IA transformará la educación, la medicina y el empleo, detallando las responsabilidades éticas necesarias para esta transición.
                </p>
              </Link>
            </div>

            <div className="flex items-center justify-between border-t border-slate-800/80 pt-4 mt-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-xs text-sky-400">
                  BG
                </div>
                <span className="text-xs font-medium text-slate-300">Bill Gates</span>
              </div>
              <Link href="/bill-gates-ai" className="text-xs font-mono font-bold text-sky-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                Leer artículo completo <span>→</span>
              </Link>
            </div>
          </article>

          {/* Tarjeta Secundaria (Placeholder para futuras publicaciones) */}
          <div className="bg-slate-900/20 border border-slate-800/40 border-dashed rounded-2xl p-6 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-500 mb-4">
              +
            </div>
            <h3 className="text-slate-300 font-semibold text-sm mb-1">Próxima publicación</h3>
            <p className="text-slate-500 text-xs max-w-[200px]">
              El equipo está preparando nuevo contenido.
            </p>
          </div>

        </section>
      </div>

      {/* Footer Pro */}
      <footer className="border-t border-slate-800/80 pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
        <div className="flex items-center gap-3">
          <img 
            src="/autor.jpg" 
            alt="Autor" 
            className="w-9 h-9 rounded-full object-cover border border-slate-700"
          />
          <div>
            <p className="text-slate-300 font-sans font-semibold text-sm">TechNews.sys Editor</p>
            <p className="text-slate-500">Creado por Francisco</p>
          </div>
        </div>

        <p>© 2026 TechNews.sys</p>
      </footer>

    </main>
  );
}