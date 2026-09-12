'use client';

import { useRef } from 'react';
import Link from 'next/link';
import RibbonTag from './RibbonTag';
import CustodyStamp from './CustodyStamp';
import CopyCitationStamp from './CopyCitationStamp';
import ReadingProgress from './ReadingProgress';
import SectionIndex from './SectionIndex';
import ArticleBody from './ArticleBody';
import { formatDate } from '../../lib/formatDate';

export default function ArticleView({ post }) {
  const articleRef = useRef(null);

  return (
    <div className="max-w-6xl mx-auto py-10 sm:py-14 px-5 sm:px-8">
      <ReadingProgress targetRef={articleRef} />
      {/* Navegación */}
      <nav className="mb-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-ink-muted font-mono text-sm hover:text-ribbon transition-colors"
        >
          <span>{'<-'}</span> Volver al archivo
        </Link>
      </nav>

      <div className="flex gap-12 justify-center items-start">
        {/* Contenedor Principal del Registro */}
        <article ref={articleRef} className="relative w-full max-w-3xl bg-paper-raised border border-rule">
          <RibbonTag className="absolute -top-1 left-8 md:left-12 w-6 h-8 text-ribbon" />

          {/* Cabecera del Registro */}
          <header className="p-8 md:p-12 border-b border-rule">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-ink leading-tight mb-4 tracking-tight">
              {post.title}
            </h1>
            <h2 className="text-xl text-ink-muted font-light mb-6">
              {post.subtitle}
            </h2>
            <CustodyStamp
              items={[
                `FUENTE: ${post.source.label}`,
                `AUTOR: ${post.author.name.toUpperCase()}`,
                post.kind === 'translation' ? 'TRADUCCIÓN: TECHNEWS.SYS' : 'ANÁLISIS: TECHNEWS.SYS',
                `PUBLICADO: ${formatDate(post.publishedAt)}`,
              ]}
              className="mb-8"
            />

            <div className="flex items-center gap-4 mt-8">
              <div className="w-12 h-12 border-2 border-ink flex items-center justify-center font-display font-bold text-ink text-lg">
                {post.author.initials}
              </div>
              <div>
                <p className="font-bold text-ink">{post.author.name}</p>
                <p className="text-xs text-ribbon font-mono uppercase tracking-wide">{post.author.role}</p>
              </div>
            </div>
          </header>

          {/* --- FUENTE ORIGINAL (siempre al comienzo del registro) --- */}
          <div className="px-8 md:px-12 py-6 border-b border-dashed border-gap flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <span className="text-ink-muted font-mono text-sm">
              {post.sourceNote}
            </span>
            <div className="flex items-center gap-6">
              <CopyCitationStamp citation={post.citationText} />
              <a
                href={post.source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ribbon hover:text-ribbon-dark transition-colors font-mono text-sm border border-ribbon px-4 py-2 hover:bg-ribbon/10"
              >
                {post.sourceLinkLabel} {'->'}
              </a>
            </div>
          </div>

          {/* Cuerpo del Registro */}
          <ArticleBody blocks={post.body} />
        </article>

        <SectionIndex sections={post.sections} />
      </div>
    </div>
  );
}
