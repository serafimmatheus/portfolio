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
      <body className={`${poppins.className} dark`}>{children}</body>
    </html>
  )
}
