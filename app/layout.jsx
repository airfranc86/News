import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'TechNews.sys | Intelligence & Future',
  description: 'Análisis de vanguardia sobre Inteligencia Artificial y tecnología.',
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
              <Link href="/bill-gates-ia" className="hover:text-sky-400 transition-colors">Artículos</Link>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20">
                v1.0.0
              </span>
            </nav>
          </div>
        </header>

        {/* Contenido Principal */}
        <div className="relative z-10 flex-grow">
          {children}
        </div>
      </body>
    </html>
  );
}