import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { WhatsAppIcon, TelegramIcon } from './icons';

const Hero: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const platforms = ["2ГИС", "Яндекс Карты", "Google Maps", "Zoon", "Flamp"];

  return (
    <section className="section hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <div className="animated-bg"></div>
      </div>
      
      <div className="container hero-container" ref={ref}>
        <motion.div 
          className="brand-logo"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="brand-name">KindReviews<span className="heart">🤍</span></h1>
        </motion.div>
        
        <motion.div 
          className="messenger-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <motion.a 
            href="https://wa.me/79240038931" 
            className="messenger-btn whatsapp pulse"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="messenger-icon-svg" /> WhatsApp
          </motion.a>
          <motion.a 
            href="https://t.me/MENEGKindReviews" 
            className="messenger-btn telegram pulse"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TelegramIcon className="messenger-icon-svg" /> Telegram
          </motion.a>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-title"
        >
          Опубликуем отзывы на<br />
          <motion.div 
            className="platforms-container"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {platforms.map((platform, index) => (
              <motion.span 
                key={index}
                className="platform-name"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              >
                {platform}
                {index < platforms.length - 1 && <span className="platform-separator"> • </span>}
              </motion.span>
            ))}
          </motion.div>
        </motion.h2>
        
        <motion.div 
          className="hero-features"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <motion.div 
            className="hero-feature"
            whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
          >
            <div className="feature-icon">⭐</div>
            <h3>Без предоплат</h3>
          </motion.div>
          
          <motion.div 
            className="hero-feature"
            whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
            transition={{ delay: 0.1 }}
          >
            <div className="feature-icon">🛡️</div>
            <h3>Гарантия год</h3>
            <p>Если наш отзыв удалили, то бесплатно опубликуем новый</p>
          </motion.div>
          
          <motion.div 
            className="hero-feature"
            whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
            transition={{ delay: 0.2 }}
          >
            <div className="feature-icon">⏱️</div>
            <h3>Удобство и минимум затрат времени</h3>
            <p>Самостоятельно придумаем отзывы и согласуем с вами</p>
          </motion.div>
        </motion.div>

        <motion.div
          className="tariff-container"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          <div className="tariff-card">
            <h3>Стандартный отзыв</h3>
            <div className="tariff-price">450₽</div>
            <p>За один отзыв на любой площадке</p>
          </div>
          
          <div className="tariff-card competitor">
            <h3>Отзыв конкуренту</h3>
            <div className="tariff-price">1000₽</div>
            <p>Размещение отзыва на странице вашего конкурента</p>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        >
          <div className="contact-info">
            <p>Напишите нашему менеджеру прямо сейчас:</p>
            <motion.a 
              href="tel:+79240038931"
              className="phone-number"
              whileHover={{ scale: 1.05 }}
            >
              +7 (924) 003-89-31
            </motion.a>
          </div>
        </motion.div>
        
        <div className="scroll-down">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="scroll-text">Узнать больше</div>
        </div>
      </div>
      
      <div className="floating-bubbles">
        <div className="bubble b1"></div>
        <div className="bubble b2"></div>
        <div className="bubble b3"></div>
        <div className="bubble b4"></div>
        <div className="bubble b5"></div>
        <div className="bubble b6"></div>
      </div>
    </section>
  );
};

export default Hero; 