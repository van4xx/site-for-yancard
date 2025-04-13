import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <div className="animated-bg"></div>
      </div>
      
      <div className="container hero-container" ref={ref}>
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-title"
        >
          Опубликуем отзывы <br />
          <span className="highlight">на 2ГИС</span>
        </motion.h1>
        
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
          className="hero-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        >
          <div className="messenger-buttons">
            <motion.button 
              className="btn messenger-btn whatsapp pulse"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="btn-icon">📱</span> WhatsApp
            </motion.button>
            <motion.button 
              className="btn messenger-btn telegram pulse"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="btn-icon">✈️</span> Telegram
            </motion.button>
          </div>
          
          <div className="contact-info">
            <p>Напишите нашему менеджеру прямо сейчас:</p>
            <motion.h3 
              className="phone-number"
              whileHover={{ scale: 1.05, color: "#ffffff" }}
            >
              +7 (999) 444-21-81
            </motion.h3>
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