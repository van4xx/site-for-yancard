import React, { useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

function App() {
  // Обновляем title и description динамически для лучшего SEO
  useEffect(() => {
    // Используем текущее время для указания Last-Modified в meta тегах
    const lastModified = new Date().toISOString();
    document.querySelector('meta[name="last-modified"]')?.setAttribute('content', lastModified);
    
    // Добавляем микроразметку schema.org динамически
    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Размещение отзывов на популярных площадках',
      'provider': {
        '@type': 'Organization',
        'name': 'KindReviews'
      },
      'description': 'Размещаем отзывы на 2ГИС, Яндекс Картах, Google Maps и других площадках',
      'offers': {
        '@type': 'Offer',
        'price': '450',
        'priceCurrency': 'RUB'
      }
    };
    
    // Добавляем микроразметку динамически в DOM
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(serviceSchema);
    document.head.appendChild(script);
    
    // Метод для работы со ссылками - плавная прокрутка
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      const href = target.getAttribute('href');
      
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const elementId = href.substring(1);
        const element = document.getElementById(elementId);
        
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
          // Обновляем URL без перезагрузки страницы
          window.history.pushState(null, '', href);
        }
      }
    };
    
    // Добавляем обработчики для плавной прокрутки
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleScroll);
    });
    
    // Убираем обработчики при размонтировании
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleScroll);
      });
      // Удаляем динамически добавленный скрипт
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);
  
  return (
    <div className="App">
      <header role="banner">
        <Hero />
      </header>
      
      <main role="main">
        <section id="services" aria-labelledby="services-title">
          <Services />
        </section>
        
        <section id="pricing" aria-labelledby="pricing-title">
          <Pricing />
        </section>
        
        <section id="process" aria-labelledby="process-title">
          <Process />
        </section>
        
        <section id="faq" aria-labelledby="faq-title">
          <FAQ />
        </section>
      </main>
      
      <footer role="contentinfo">
        <section id="contact" aria-labelledby="contact-title">
          <Contact />
        </section>
        
        <div className="copyright">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} KindReviews. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
