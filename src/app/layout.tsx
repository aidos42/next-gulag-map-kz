import { Header } from '@/components/header';
import './globals.css';
import { Footer } from '@/components/footer';

export const metadata = {
  title: 'Карта исправительно-трудовых лагерей (ГУЛАГ) на территории Казахстана',
  description: 'На интерактивной карте отмечены расположение лагерей ГУЛАГ, их типы, а на самом сайте представлены исторические факты. Лагеря в Казахстане были одними из крупнейших в СССР. Карта помогает визуализировать масштабы репрессий и сохранить память о прошлом.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main className="container">
          {children}
        </main>
        <Footer />
        </body>
    </html>
  )
};
