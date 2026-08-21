import React from 'react';

export const metadata = {
  title: 'Политика конфиденциальности',
  description: 'Политика обработки персональных данных барбершопа Black Dragon.',
  alternates: {
    canonical: '/privacy',
  },
}

const PrivacyPolicyPage = () => {
  return (
    <div className="container" style={{ padding: '40px 20px', color: '#fff' }}>
      <h1 className="section-title" style={{ marginTop: '40px' }}>Политика конфиденциальности</h1>
      <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
        <p>Дата вступления в силу: {new Date().toLocaleDateString()}</p>

        <h2 style={{ color: '#d4af37', marginTop: '30px', marginBottom: '15px' }}>1. Введение</h2>
        <p>
          Добро пожаловать в Black Dragon Barber. Мы
          ценим вашу конфиденциальность и стремимся защищать вашу личную
          информацию. Настоящая Политика конфиденциальности объясняет, как мы
          собираем и используем вашу информацию при посещении сайта dragonbarber.ru.
        </p>

        <h2 style={{ color: '#d4af37', marginTop: '30px', marginBottom: '15px' }}>2. Сбор информации</h2>
        <p>
          Мы можем собирать следующие данные, когда вы записываетесь на услуги:
          имя и номер телефона. Эти данные используются исключительно для подтверждения записи и связи с вами.
        </p>

        <h2 style={{ color: '#d4af37', marginTop: '30px', marginBottom: '15px' }}>3. Использование информации</h2>
        <p>
          Мы используем информацию для:
          <ul style={{ listStyle: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
            <li>Обработки вашей записи на стрижку.</li>
            <li>Связи с вами для подтверждения или переноса визита.</li>
            <li>Улучшения качества наших услуг.</li>
          </ul>
        </p>

        <h2 style={{ color: '#d4af37', marginTop: '30px', marginBottom: '15px' }}>4. Защита данных</h2>
        <p>
          Мы принимаем все необходимые меры для защиты ваших данных от несанкционированного доступа. Мы не передаем ваши личные данные третьим лицам.
        </p>

        <h2 style={{ color: '#d4af37', marginTop: '30px', marginBottom: '15px' }}>5. Контакты</h2>
        <p>
          По вопросам конфиденциальности вы можете связаться с нами:
          <ul style={{ listStyle: 'none', marginTop: '10px' }}>
            <li>📍 Адрес: г. Одинцово, ул. Чистяковой, 84</li>
            <li>📞 Телефон: +7 (980) 409-14-78</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;