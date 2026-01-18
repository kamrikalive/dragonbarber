import Image from 'next/image'

const pricingData = {
  categories: [
    {
      title: "Основные услуги",
      services: [
        { name: "Мужская стрижка", price: 1000, duration: "45 мин" },
        { name: "Моделирование бороды", price: 800, duration: "45 мин" },
        { name: "Стрижка машинкой (1 насадка)", price: 500, duration: "30 мин" },
        { name: "Стрижка машинкой (2 насадки)", price: 800, duration: "30 мин" },
        { name: "Детская стрижка (от 5 до 12 лет)", price: 800, duration: "45 мин" },
        { name: "Бритье шейвером", price: 700, duration: "30 мин" }
      ]
    },
    {
      title: "Комплекс",
      services: [
        { name: "Отец + сын", price: 1500, duration: "1 ч" },
        { name: "Стрижка + борода", price: 1500, duration: "1 ч" },
        { name: "Стрижка + борода + воск", price: 1800, duration: "1 ч" }
      ]
    },
    {
      title: "Дополнительные услуги",
      services: [
        { name: "Восковая депиляция", price: 350, duration: "15 мин" },
        { name: "Тонирование головы", price: 1300, duration: "30 мин" },
        { name: "Тонировка бороды", price: 800, duration: "30 мин" },
        { name: "DETOX кожи лица", price: 800, duration: "30 мин" }
      ]
    }
  ]
}

export default function Home() {
  // Добавляем микроразметку для SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "name": "Black Dragon Barber",
    "image": "https://storage.yandexcloud.net/relaxdev/dragonbarber/rov.jpg",
    "telephone": "+79804091478",
    "url": "https://dragonbarber.ru",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ул. Чистяковой, 84",
      "addressLocality": "Одинцово",
      "addressRegion": "Московская область",
      "postalCode": "143005",
      "addressCountry": "RU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 55.707371,
      "longitude": 37.323608
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "10:00",
      "closes": "20:00"
    },
    "priceRange": "500-1800 RUB"
  }

  return (
    <main>
      {/* ВАЖНО: Вот этот кусок выводит JSON-LD на страницу */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-logo">
          {/* Проверьте, что хотите использовать именно favicon.svg, а не logo.png */}
          <Image
            src="/lo.png" 
            width={170}
            height={170}
            alt="Black Dragon Barbershop Logo"
            priority
          />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">BLACK DRAGON</h1>
          <p className="hero-subtitle">Барбершоп в Трехгорке (Одинцово)</p>
          <div className="cta-buttons">
            <a href="https://n1939386.yclients.com/company/1708875/personal/menu?o=" className="cta-button">Записаться онлайн</a>
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section className="section price-section">
        <div className="container">
          <h2 className="section-title">Прайс-лист</h2>
          <div className="price-categories">
            {pricingData.categories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="price-category">
                <h3 className="category-title">{category.title}</h3>
                <div className="services-list">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="service-item">
                      <div className="service-name">{service.name}</div>
                      <div className="service-details">
                        <span className="service-price">{service.price}₽</span>
                        <span className="service-duration">{service.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section className="section contacts-section" id="contacts">
        <div className="container">
          <h2 className="section-title">Контакты</h2>
          
          <div className="contacts-wrapper">
            {/* Карточки контактов */}
            <div className="contacts-grid">
              <div className="contact-card">
                <div className="contact-icon">📍</div>
                <h3 className="contact-title">Адрес</h3>
                <p className="contact-info">ул. Чистяковой, 84<br />Одинцово</p>
              </div>
              <div className="contact-card">
                <div className="contact-icon">📞</div>
                <h3 className="contact-title">Телефон</h3>
                <p className="contact-info">
                  <a href="tel:+79804091478" className="contact-link">+7 (980) 409-14-78</a>
                </p>
              </div>
              <div className="contact-card">
                <div className="contact-icon">🕒</div>
                <h3 className="contact-title">Время работы</h3>
                <p className="contact-info">С 10:00 до 20:00</p>
              </div>
            </div>

            {/* Карта */}
            <div className="map-container">
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <a 
                  href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps" 
                  style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
                >
                  Москва
                </a>
                <a 
                  href="https://yandex.ru/maps/213/moscow/?ll=37.326563%2C55.705960&mode=routes&rtext=55.704384%2C37.326980~55.707371%2C37.323608&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D102399607919&utm_medium=mapframe&utm_source=maps&z=16.77" 
                  style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
                >
                  Яндекс Карты
                </a>
                <iframe 
                  src="https://yandex.ru/map-widget/v1/?ll=37.326563%2C55.705960&mode=routes&rtext=55.704384%2C37.326980~55.707371%2C37.323608&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D102399607919&z=16.77" 
                  width="100%" 
                  height="400" 
                  frameBorder="1" 
                  allowFullScreen={true} 
                  style={{ position: 'relative' }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}