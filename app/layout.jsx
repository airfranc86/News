import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TechNews | Hub Central',
  description: 'Blog de tecnología e Inteligencia Artificial',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gray-950 text-gray-100 min-h-screen p-6`}>
        {children}
      </body>
    </html>
  )
}