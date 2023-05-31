import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['cyrillic'] })

export const metadata = {
  title: 'Карта исправительно-трудовых лагерей (ГУЛАГ) на территории Казахстана',
  description: 'На интерактивной карте отмечены расположение лагерей ГУЛАГ, их типы, а на самом сайте представлены исторические факты. Лагеря в Казахстане были одними из крупнейших в СССР. Карта помогает визуализировать масштабы репрессий и сохранить память о прошлом.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
