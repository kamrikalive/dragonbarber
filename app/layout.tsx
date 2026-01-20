import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'
import Link from 'next/link';

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: 'Black Dragon Barber | Мужские стрижки и оформление бороды в Одинцово (Трехгорка)',
  description: 'Профессиональный барбершоп Black Dragon в Одинцово (Трехгорка). Мужские и детские стрижки, моделирование бороды, опасное бритье, камуфляж седины. Онлайн-запись. Ул. Чистяковой, 84.',
  keywords: [
    // Основные и Брендовые
    'барбершоп одинцово', 'барбершоп трехгорка', 'black dragon barber', 'барбершоп блэк драгон', 
    'black dragon barbershop', 'блек драгон барбер', 'черный дракон барбершоп',
    
    // Гео и Локация
    'барбершоп на чистяковой', 'парикмахерская чистяковой 84', 'мужской салон одинцово',
    'барбершоп новая трехгорка', 'мужские стрижки микрорайон новая трехгорка', 'барбершоп рядом со мной',
    'парикмахерская рядом', 'барбершоп одинцово сколковская', 'барбершоп кутузовская',
    
    // Услуги - Стрижки
    'мужская стрижка одинцово', 'мужская стрижка трехгорка', 'детская стрижка одинцово', 
    'стрижка машинкой', 'модельная мужская стрижка', 'спортивная стрижка',
    'стрижка фейд', 'fade стрижка одинцово', 'стрижка кроп', 'crop', 'андеркат', 'undercut', 
    'мужская стрижка ножницами', 'удлиненная мужская стрижка',
    
    // Услуги - Борода и бритье
    'оформление бороды одинцово', 'моделирование бороды', 'стрижка бороды и усов', 
    'бритье опасной бритвой', 'королевское бритье', 'бритье головы', 'окантовка бороды',
    'спа уход для лица', 'тонировка бороды',
    
    // Дополнительные услуги
    'камуфляж седины', 'восковая депиляция для мужчин', 'удаление волос воском нос уши', 
    'комплекс стрижка и борода', 'стрижка отец и сын', 'детская стрижка для мальчика',
    'черная маска', 'detox уход',
    
    // Поисковые запросы
    'записаться в барбершоп', 'барбершоп цены', 'барбершоп отзывы одинцово', 
    'лучший барбершоп трехгорка', 'топ барбершопов одинцово', 'недорогая мужская стрижка одинцово',
    'мужской парикмахер', 'мастер барбер', 'салон красоты для мужчин'
  ],
  metadataBase: new URL('https://dragonbarber.ru/'),
  alternates: {
    canonical: '/',
  },
  manifest: '/site.webmanifest',
  // ВОТ ЭТА ЧАСТЬ ОТВЕЧАЕТ ЗА ФАВИКОНКИ ДЛЯ ЯНДЕКСА:
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' }, // Для старых браузеров
      { url: '/favicon.svg', type: 'image/svg+xml' }, // РЕКОМЕНДУЕТСЯ ЯНДЕКСОМ
      { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' }, // PNG высокого качества
    ],
    apple: '/apple-touch-icon.png', // Для iPhone/iPad
  },
  openGraph: {
    title: 'Black Dragon Barber - Барбершоп в Одинцово',
    description: 'Стильные мужские стрижки и оформление бороды. Ждем вас на ул. Чистяковой, 84.',
    url: 'https://dragonbarber.ru/',
    siteName: 'Black Dragon Barber',
    images: [
      {
        url: 'https://storage.yandexcloud.net/relaxdev/dragonbarber/rov.jpg',
        width: 1200,
        height: 630,
        alt: 'Интерьер и атмосфера барбершопа Black Dragon Barber',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Сюда вставьте код из Яндекс.Вебмастера, когда он у вас будет
    // yandex: 'код_верификации',
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
        {/* Yandex.Metrika counter */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=106320194', 'ym');

            ym(106320194, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
          `}
        </Script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/106320194" style={{ position: 'absolute', left: '-9999px' }} alt="" />
          </div>
        </noscript>
        {/* /Yandex.Metrika counter */}

        {children}
        
        <footer className="main-footer">
          <div className="container footer-content">
            {/* Социальные сети */}
            <div className="social-links">
              {/* Telegram */}
              <a href="https://t.me/rovlik" target="_blank" rel="noopener noreferrer" className="social-icon telegram" aria-label="Написать в Telegram">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </a>
              
              {/* Телефон */}
              <a href="tel:+79804091478" className="social-icon phone" aria-label="Позвонить">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.49-5.15-3.8-6.62-6.62l1.97-1.57c.23-.23.31-.56.25-.87-.36-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3.43 3 3.88 3 4.43 3 14.01 10.99 22 20.57 22c.55 0 .99-.65.99-1.19v-3.66c-.01-.55-.46-1.77-1.55-1.77z"/></svg>
              </a>
              
              {/* VK */}
              <a href="https://vk.com/rovlashka11" target="_blank" rel="noopener noreferrer" className="social-icon vk" aria-label="Группа ВКонтакте">
                 <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.162 18.994c.609 0 1.016-.085 1.363-.233.368-.143.63-.48.63-.95 0-.444-.057-1.025-.057-1.025s-.012-.338.168-.513c.188-.182.49-.062.49-.062s2.615 2.455 2.984 2.784c.35.31.755.262.755.262l2.365-.034s1.238-.08.648-1.055c-.048-.079-.344-.725-1.76-2.074-1.48-1.408-1.282-1.182.502-3.559 1.085-1.448 1.518-2.33 1.383-2.709-.129-.363-.889-.267-.889-.267l-2.546.017c-.368-.016-.67.114-.847.575 0 0-1.002 2.435-2.417 4.02-.456.513-.665.676-.913.676-.124 0-.303-.143-.303-.553V9.124c0-.495.143-1.936-.838-2.08-.31-.046-.537-.076-1.393-.081-1.074-.006-1.984.004-2.499.255-.347.17-.614.545-.452.566.2.025.65.12.89.435.31.41.3.133.3 3.864 0 .809-.145.96-.462.96-.85 0-2.915-3.098-4.14-6.64-.236-.689-.473-.604-.473-.604l-2.418.016c-.722.016-.879.39-.636 1.055.034.095 2.879 6.643 6.138 9.774 2.17 2.085 4.628 1.91 4.628 1.91z"/></svg>
              </a>
            </div>

            {/* Ссылка на политику */}
            <div className="footer-links">
               <Link href="/privacy" className="privacy-link">
                 Политика конфиденциальности
               </Link>
            </div>
            
            <p className="copyright">&copy; {new Date().getFullYear()} Black Dragon Barber</p>
          </div>
        </footer>
      </body>
    </html>
  )
}