import Link from 'next/link';
import RibbonTag from './components/RibbonTag';
import CustodyStamp from './components/CustodyStamp';
import DustGatherText from './components/DustGatherText';
import { getFeaturedPost } from '../data/posts';
import { formatDate } from '../lib/formatDate';

export default function Home() {
  const post = getFeaturedPost();

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Encabezado del Archivo */}
      <section className="mb-12 border-b border-rule pb-8">
        <DustGatherText
          as="h1"
          text="Explorando la frontera de la Inteligencia Artificial"
          className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-ink mb-4"
        >
          Explorando la frontera de la <span className="text-ribbon">Inteligencia Artificial</span>
        </DustGatherText>
        <p className="text-ink-muted max-w-2xl text-base sm:text-lg mb-3">
          Análisis críticos, ensayos de líderes de la industria y las transformaciones tecnológicas que están redefiniendo el futuro — cada uno con su procedencia a la vista.
        </p>
        <p className="font-mono text-xs uppercase tracking-widest text-ink-muted">
          TechNews.sys — Archivo Vol. 01
        </p>
      </section>

      {/* Grilla de Registros */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">

        {/* Registro Destacado (Ocupa 2 columnas en pantallas grandes) */}
        <article className="lg:col-span-2 relative bg-paper-raised border border-rule pt-8 px-6 sm:px-8 pb-6 sm:pb-8 flex flex-col justify-between">
          <RibbonTag className="absolute -top-1 left-6 w-5 h-7 text-ribbon" />

          <div>
            <Link href={`/${post.slug}`} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-ribbon focus-visible:ring-offset-2 focus-visible:ring-offset-paper-raised rounded-sm">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink hover:text-ribbon transition-colors mb-4">
                {post.title}
              </h2>
              <p className="text-ink-muted text-sm sm:text-base leading-relaxed mb-4">
                {post.excerpt}
              </p>
            </Link>

            <CustodyStamp
              items={[`FUENTE: ${post.source.label}`, `TRADUCCIÓN: ${post.translation}`, formatDate(post.publishedAt), post.readingTime.toUpperCase()]}
              className="mb-2"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-rule pt-4 mt-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-ink flex items-center justify-center font-display font-bold text-xs text-ink">
                {post.author.initials}
              </div>
              <span className="text-xs font-medium text-ink">{post.author.name}</span>
            </div>
            <Link href={`/${post.slug}`} className="text-xs font-mono font-bold text-ink hover:text-ribbon transition-colors flex items-center gap-1 underline decoration-rule underline-offset-4 hover:decoration-ribbon">
              Leer registro completo <span>→</span>
            </Link>
          </div>
        </article>

        {/* Tarjeta Secundaria (Placeholder para futuras publicaciones) */}
        <div className="bg-paper border border-dashed border-gap p-6 flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 border border-dashed border-gap flex items-center justify-center text-ink-muted mb-4">
            +
          </div>
          <h3 className="font-display font-semibold text-sm text-ink mb-1">Próximo registro</h3>
          <p className="text-ink-muted text-xs max-w-[200px]">
            El archivo se amplía pronto.
          </p>
        </div>

      </section>
    </main>
  );
}
