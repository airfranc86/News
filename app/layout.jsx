import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

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
  return (
    <html lang="es" className="dark">
      <body className={`${inter.className} bg-slate-950 text-slate-100 min-h-screen flex flex-col relative overflow-x-hidden`}>
        {/* Fondo con brillo radial tecnológico */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(56,189,248,0.15),rgba(255,255,255,0))] pointer-events-none z-0" />

        {/* Navbar Global */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <img src="/icon.svg" alt="Logo" className="w-8 h-8 group-hover:scale-105 transition-transform" />
              <span className="font-extrabold text-xl tracking-tight">
                Tech<span className="text-sky-400">News</span><span className="text-slate-500 font-mono text-xs">.sys</span>
              </span>
            </Link>
            
            <nav className="flex items-center gap-6 text-sm font-medium text-slate-400">
              <Link href="/" className="hover:text-sky-400 transition-colors">Inicio</Link>
              <Link href="/bill-gates-ai" className="hover:text-sky-400 transition-colors">Artículos</Link>
            </nav>
          </div>
        </header>

        {/* Contenido Principal */}
        <div className="relative z-10 flex-grow">
          {children}
        </div>

        {/* Footer Global */}
        <footer className="relative z-10 border-t border-slate-800/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
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
          </div>
        </footer>
      </body>
    </html>
  );
}