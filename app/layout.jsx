import './globals.css';
import { Vollkorn, Source_Sans_3, JetBrains_Mono } from 'next/font/google';
import Link from 'next/link';
import RibbonTag from './components/RibbonTag';
import BackToTop from './components/BackToTop';
import { getFeaturedPost } from '../data/posts';

const vollkorn = Vollkorn({ subsets: ['latin'], variable: '--font-vollkorn', weight: ['600', '700'] });
const sourceSans = Source_Sans_3({ subsets: ['latin'], variable: '--font-source-sans' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' });

export const metadata = {
  title: {
    default: 'TechNews.sys | Tecnología Aplicada & Vanguardia',
    template: '%s | TechNews.sys',
  },
  description: 'Radar de tecnología aplicada a la realidad: Inteligencia Artificial, meteorología computacional, ciencia y fronteras digitales.',
  keywords: ['Tecnología', 'Inteligencia Artificial', 'Meteorología', 'Ciencia', 'IoT', 'Futuro', 'TechNews'],
  authors: [{ name: 'Francisco' }],
  creator: 'Francisco',
  metadataBase: new URL('https://airfranc-news.vercel.app'),
  openGraph: {
    title: 'TechNews.sys | Tecnología Aplicada & Vanguardia',
    description: 'Análisis e impacto de la tecnología en la IA, el clima, la ciencia y la sociedad.',
    url: 'https://airfranc-news.vercel.app',
    siteName: 'TechNews.sys',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TechNews.sys - Radar de Tecnología Aplicada',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechNews.sys | Tecnología Aplicada',
    description: 'Análisis e impacto de la tecnología en la IA, el clima, la ciencia y la sociedad.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  const featuredPost = getFeaturedPost();

  return (
    <html lang="es">
      <body className={`${vollkorn.variable} ${sourceSans.variable} ${jetbrainsMono.variable} font-sans bg-paper text-ink min-h-screen flex flex-col`}>
        {/* Navbar Global */}
        <header className="border-b-2 border-ink bg-paper-raised">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
            <Link href="/" className="flex items-center gap-2 group shrink-0">
              <RibbonTag className="w-3 h-[18px] text-ribbon group-hover:text-ribbon-dark transition-colors" />
              <span className="font-display font-bold text-xl tracking-tight text-ink">
                TechNews<span className="text-ink-muted font-mono text-xs font-normal">.sys</span>
              </span>
            </Link>

            <nav className="flex items-center gap-4 sm:gap-6 font-mono text-xs uppercase tracking-widest text-ink-muted">
              <Link href="/" className="hover:text-ink underline decoration-transparent hover:decoration-ribbon underline-offset-4 transition-colors">Inicio</Link>
              <Link href={`/${featuredPost.slug}`} className="hover:text-ink underline decoration-transparent hover:decoration-ribbon underline-offset-4 transition-colors">Artículos</Link>
            </nav>
          </div>
        </header>

        {/* Contenido Principal */}
        <div className="flex-grow">
          {children}
        </div>

        <BackToTop />

        {/* Footer Global */}
        <footer className="border-t-2 border-dashed border-gap">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-ink-muted">
            <div className="flex items-center gap-3">
              <img
                src="/autor.jpg"
                alt="Autor"
                className="w-10 h-10 object-cover border-2 border-ink"
              />
              <div>
                <p className="font-sans font-semibold text-sm text-ink">TechNews.sys Editor</p>
                <p>Catalogado por Francisco</p>
              </div>
            </div>

            <p>© 2026 TechNews.sys</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
