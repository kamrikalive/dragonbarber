import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Black Dragon Barber - Барбершоп в Одинцово',
  description: 'Мужская стрижка, моделирование бороды и другие услуги барбера в Одинцово. Ул. Чистяковой, 84.',
  // Добавляем настройки для превью (Open Graph)
  openGraph: {
    title: 'Black Dragon Barber - Барбершоп в Одинцово',
    description: 'Мужская стрижка и моделирование бороды. Записывайтесь!',
    url: 'https://dragonbarber.ru',
    siteName: 'Black Dragon Barber',
    images: [
      {
        url: 'https://storage.yandexcloud.net/relaxdev/dragonbarber/Gemini_Generated_Image_7zoven7zoven7zov.png',
        width: 1200,
        height: 630,
        alt: 'Black Dragon Barber',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        {children}
        <footer style={{ textAlign: 'center', padding: '20px', marginTop: '20px' }}>
          <Link href="/privacy">Политика конфиденциальности</Link>
        </footer>
      </body>
    </html>
  )
}