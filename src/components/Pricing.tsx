import React from 'react';
import './Pricing.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Pricing: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="section pricing" id="pricing">
      <div className="container" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Наши тарифы на отзывы
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Выберите подходящий именно вам
        </motion.p>
        
        <motion.div 
          className="pricing-cards"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div 
            className="pricing-card"
            variants={cardVariants}
            whileHover={{ y: -15, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)" }}
          >
            <div className="card-badge">Стандартный</div>
            <h3>Отзыв на любой площадке</h3>
            <div className="price">
              <span className="amount">450₽</span>
              <span className="period">за один отзыв</span>
            </div>
            
            <ul className="features">
              <li>Составим отзывы и опубликуем</li>
              <li>Сделаем отчёт и прогноз рейтинга</li>
              <li>Дадим гарантию на каждый отзыв</li>
              <li>Личный менеджер</li>
            </ul>
            
            <motion.button 
              className="btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Заказать
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="pricing-card featured"
            variants={cardVariants}
            whileHover={{ y: -15, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)" }}
          >
            <div className="card-badge popular">Конкуренту</div>
            <h3>Отзыв на странице конкурента</h3>
            <div className="price">
              <span className="amount">1000₽</span>
              <span className="period">за один отзыв</span>
            </div>
            
            <ul className="features">
              <li>Размещение отзыва у конкурента</li>
              <li>Контроль за модерацией</li>
              <li>Гарантия публикации</li>
              <li>Полная анонимность</li>
            </ul>
            
            <motion.button 
              className="btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Заказать
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing; 