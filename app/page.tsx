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
  return (
    <main>
      <section className="hero">
        <div className="hero-logo">
          <Image
            src="/logo.png"
            width={150}
            height={150}
            alt="Black Dragon Barbershop Logo"
          />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">BLACK DRAGON</h1>
          <p className="hero-subtitle">Барбершоп в Одинцово</p>
        </div>
      </section>

      <section className="section contacts-section">
        <div className="container">
          <h2 className="section-title">Контакты</h2>
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
              <p className="contact-info">Открыто до 20:00</p>
            </div>
          </div>
        </div>
      </section>

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

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Black Dragon Barber. Все права защищены.</p>
        </div>
      </footer>
    </main>
  )
}
