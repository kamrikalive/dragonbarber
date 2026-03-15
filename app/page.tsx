import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Барбершоп Black Dragon — Мужские стрижки в Одинцово',
  description:
    'Барбершоп Black Dragon в Трехгорке (Одинцово). Мужские стрижки, моделирование бороды, комплексы. Онлайн запись.',
  alternates: {
    canonical: 'https://dragonbarber.ru',
  },
  openGraph: {
    title: 'Black Dragon Barber',
    description: 'Барбершоп в Одинцово — мужские стрижки и борода',
    url: 'https://dragonbarber.ru',
    images: [
      {
        url: 'https://dragonbarber.ru/rov.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
}

const pricingData = {
  categories: [
    {
      title: 'Основные услуги',
      services: [
        { name: 'Мужская стрижка', price: 1000, duration: '45 мин' },
        { name: 'Моделирование бороды', price: 800, duration: '45 мин' },
        { name: 'Стрижка машинкой (1 насадка)', price: 500, duration: '30 мин' },
        { name: 'Стрижка машинкой (2 насадки)', price: 800, duration: '30 мин' },
        { name: 'Детская стрижка (5–12 лет)', price: 800, duration: '45 мин' },
        { name: 'Бритье шейвером', price: 700, duration: '30 мин' },
      ],
    },
    {
      title: 'Комплекс',
      services: [
        { name: 'Отец + сын', price: 1500, duration: '1 ч' },
        { name: 'Стрижка + борода', price: 1500, duration: '1 ч' },
        { name: 'Стрижка + борода + воск', price: 1800, duration: '1 ч' },
      ],
    },
    {
      title: 'Дополнительные услуги',
      services: [
        { name: 'Восковая депиляция', price: 350, duration: '15 мин' },
        { name: 'Тонирование головы', price: 1300, duration: '30 мин' },
        { name: 'Тонировка бороды', price: 800, duration: '30 мин' },
        { name: 'DETOX кожи лица', price: 800, duration: '30 мин' },
      ],
    },
  ],
}

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HairSalon',
    name: 'Black Dragon Barber',
    image: 'https://dragonbarber.ru/rov.jpg',
    url: 'https://dragonbarber.ru',
    telephone: '+79804091478',

    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ул. Чистяковой, 84',
      addressLocality: 'Одинцово',
      addressRegion: 'Московская область',
      postalCode: '143005',
      addressCountry: 'RU',
    },

    geo: {
      '@type': 'GeoCoordinates',
      latitude: 55.707371,
      longitude: 37.323608,
    },

    priceRange: '500-1800 RUB',

    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '10:00',
      closes: '20:00',
    },

    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Услуги барбершопа',
      itemListElement: pricingData.categories.flatMap((cat) =>
        cat.services.map((service) => ({
          '@type': 'Offer',
          name: service.name,
          price: service.price,
          priceCurrency: 'RUB',
        }))
      ),
    },

    sameAs: [
      'https://yandex.ru/maps/-/CCUuJYq0cB',
      'https://dragonbarber.ru',
    ],
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}

      <section className="hero">

        <div className="hero-bg-wrapper">
          <Image
            src="/rov.jpg"
            alt="Барбершоп Black Dragon"
            fill
            priority
            sizes="100vw"
            quality={80}
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className="hero-logo">
          <Image
            src="/lo.png"
            width={170}
            height={170}
            alt="Логотип Black Dragon"
            priority
          />
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            Барбершоп Black Dragon в Одинцово
          </h1>

          <p className="hero-subtitle">
            Мужские стрижки и борода в Трехгорке
          </p>

          <div className="cta-buttons">
            <a
              href="https://n1939386.yclients.com/company/1708875/personal/menu"
              className="cta-button"
              rel="noopener"
            >
              Записаться онлайн
            </a>
          </div>
        </div>

      </section>

      {/* PRICE */}

      <section className="section price-section">
        <div className="container">

          <h2 className="section-title">Прайс-лист барбершопа</h2>

          <div className="price-categories">

            {pricingData.categories.map((category, i) => (
              <div key={i} className="price-category">

                <h3 className="category-title">{category.title}</h3>

                <div className="services-list">

                  {category.services.map((service, j) => (
                    <div key={j} className="service-item">

                      <div className="service-name">
                        {service.name}
                      </div>

                      <div className="service-details">
                        <span className="service-price">
                          {service.price} ₽
                        </span>

                        <span className="service-duration">
                          {service.duration}
                        </span>
                      </div>

                    </div>
                  ))}

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CONTACTS */}

      <section className="section contacts-section" id="contacts">

        <div className="container">

          <h2 className="section-title">
            Контакты барбершопа Black Dragon
          </h2>

          <div className="contacts-grid">

            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h3>Адрес</h3>
              <p>ул. Чистяковой 84<br />Одинцово</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>Телефон</h3>

              <a href="tel:+79804091478">
                +7 (980) 409-14-78
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">🕒</div>
              <h3>Время работы</h3>
              <p>10:00 — 20:00</p>
            </div>

          </div>

        </div>

      </section>
    </main>
  )
}