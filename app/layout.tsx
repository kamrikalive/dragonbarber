import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Black Dragon Barber - Барбершоп в Одинцово',
  description: 'Мужская стрижка, моделирование бороды и другие услуги барбера в Одинцово. Ул. Чистяковой, 84.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
