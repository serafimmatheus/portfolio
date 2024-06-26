import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Home / Serafim',
  description:
    'Sou um desenvolvedor web e mobile, apaixonado por tecnologia e inovação. Trabalho com desenvolvimento de software desde 2022 e estou sempre em busca de novos desafios e aprendizados.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="PT-BR">
      <head>
     
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-3J3N537PH0"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-3J3N537PH0');
        </script>
      </head>
      <body className={`${poppins.className} dark scroll-smooth`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W47TTF9V"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        {children}
      </body>
    </html>
  )
}
