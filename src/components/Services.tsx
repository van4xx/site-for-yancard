import React from 'react';
import './Services.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services: React.FC = () => {
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [benefitsRef, benefitsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const benefitVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const serviceIcons = [
    { icon: "🛡️", color: "#000000", bg: "rgba(0, 0, 0, 0.05)", alt: "Безопасность" },
    { icon: "✅", color: "#000000", bg: "rgba(0, 0, 0, 0.05)", alt: "Гарантия" },
    { icon: "🔄", color: "#000000", bg: "rgba(0, 0, 0, 0.05)", alt: "Удобство" },
    { icon: "📊", color: "#000000", bg: "rgba(0, 0, 0, 0.05)", alt: "Отчётность" },
    { icon: "💬", color: "#000000", bg: "rgba(0, 0, 0, 0.05)", alt: "Поддержка" }
  ];

  const benefitIcons = [
    { icon: "❤️", percent: "87%", alt: "Лояльность" },
    { icon: "🏆", percent: "65%", alt: "Рейтинг" },
    { icon: "👥", percent: "80%", alt: "Клиенты" },
    { icon: "🛡️", percent: "95%", alt: "Защита" }
  ];
  
  return (
    <section className="section services" id="services">
      <div className="services-bg">
        <div className="services-shape shape1"></div>
        <div className="services-shape shape2"></div>
      </div>
      
      <div className="container">
        <motion.div 
          className="services-header"
          initial={{ opacity: 0, y: 20 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          ref={servicesRef}
        >
          <h2 className="section-title" id="services-title">За что вы платите</h2>
          <p className="section-subtitle">Профессиональный подход к каждому клиенту</p>
        </motion.div>
        
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
          role="list"
          aria-label="Наши услуги"
        >
          <motion.div 
            className="service-card"
            variants={itemVariants}
            whileHover={{ 
              y: -10, 
              boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
              backgroundColor: "rgba(0, 0, 0, 0.03)" 
            }}
            role="listitem"
          >
            <div 
              className="service-icon"
              style={{ backgroundColor: serviceIcons[0].bg }}
              aria-hidden="true"
            >
              <span className="icon" role="img" aria-label={serviceIcons[0].alt}>{serviceIcons[0].icon}</span>
            </div>
            <h3>Минимум риска</h3>
            <p>Отзывы публикуют реальные люди со своих личных аккаунтов, которые находятся в вашем регионе. Никаких ботов и риска блокировки профиля.</p>
            <motion.div 
              className="card-indicator"
              initial={{ width: 0 }}
              whileInView={{ width: "40%" }}
              transition={{ duration: 1, delay: 0.3 }}
              aria-hidden="true"
            ></motion.div>
          </motion.div>
          
          <motion.div 
            className="service-card"
            variants={itemVariants}
            whileHover={{ 
              y: -10, 
              boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
              backgroundColor: "rgba(0, 0, 0, 0.03)" 
            }}
            role="listitem"
          >
            <div 
              className="service-icon"
              style={{ backgroundColor: serviceIcons[1].bg }}
              aria-hidden="true"
            >
              <span className="icon" role="img" aria-label={serviceIcons[1].alt}>{serviceIcons[1].icon}</span>
            </div>
            <h3>Гарантия на отзывы</h3>
            <p>Если наш отзыв не опубликовался или был удалён, мы бесплатно опубликуем новый. Гарантия действует целый год!</p>
            <motion.div 
              className="card-indicator"
              initial={{ width: 0 }}
              whileInView={{ width: "60%" }}
              transition={{ duration: 1, delay: 0.5 }}
              aria-hidden="true"
            ></motion.div>
          </motion.div>
          
          <motion.div 
            className="service-card"
            variants={itemVariants}
            whileHover={{ 
              y: -10, 
              boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
              backgroundColor: "rgba(0, 0, 0, 0.03)" 
            }}
            role="listitem"
          >
            <div 
              className="service-icon"
              style={{ backgroundColor: serviceIcons[2].bg }}
              aria-hidden="true"
            >
              <span className="icon" role="img" aria-label={serviceIcons[2].alt}>{serviceIcons[2].icon}</span>
            </div>
            <h3>Удобство</h3>
            <p>Минимум затрат вашего времени. Мы самостоятельно придумаем отзывы и проконтролируем равномерность их публикации.</p>
            <motion.div 
              className="card-indicator"
              initial={{ width: 0 }}
              whileInView={{ width: "75%" }}
              transition={{ duration: 1, delay: 0.7 }}
              aria-hidden="true"
            ></motion.div>
          </motion.div>
          
          <motion.div 
            className="service-card"
            variants={itemVariants}
            whileHover={{ 
              y: -10, 
              boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
              backgroundColor: "rgba(0, 0, 0, 0.03)" 
            }}
            role="listitem"
          >
            <div 
              className="service-icon"
              style={{ backgroundColor: serviceIcons[3].bg }}
              aria-hidden="true"
            >
              <span className="icon" role="img" aria-label={serviceIcons[3].alt}>{serviceIcons[3].icon}</span>
            </div>
            <h3>Отчётность и прогнозы</h3>
            <p>Составим для вас отчёт со всеми скриншотами и сделаем примерный прогноз количества отзывов для улучшения рейтинга.</p>
            <motion.div 
              className="card-indicator"
              initial={{ width: 0 }}
              whileInView={{ width: "55%" }}
              transition={{ duration: 1, delay: 0.9 }}
              aria-hidden="true"
            ></motion.div>
          </motion.div>
          
          <motion.div 
            className="service-card"
            variants={itemVariants}
            whileHover={{ 
              y: -10, 
              boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
              backgroundColor: "rgba(0, 0, 0, 0.03)" 
            }}
            role="listitem"
          >
            <div 
              className="service-icon"
              style={{ backgroundColor: serviceIcons[4].bg }}
              aria-hidden="true"
            >
              <span className="icon" role="img" aria-label={serviceIcons[4].alt}>{serviceIcons[4].icon}</span>
            </div>
            <h3>Постоянная поддержка</h3>
            <p>С вами будет работать ваш личный менеджер и ответит на любой ваш вопрос в любое время.</p>
            <motion.div 
              className="card-indicator"
              initial={{ width: 0 }}
              whileInView={{ width: "90%" }}
              transition={{ duration: 1, delay: 1.1 }}
              aria-hidden="true"
            ></motion.div>
          </motion.div>
        </motion.div>
        
        <div className="service-benefits" ref={benefitsRef}>
          <motion.div 
            className="benefits-header"
            initial={{ opacity: 0, y: 20 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="section-title" id="benefits-title">Для чего нужны отзывы</h2>
            <p className="section-subtitle">Положительные отзывы — мощный инструмент для развития вашего бизнеса</p>
          </motion.div>
          
          <motion.div 
            className="benefits-grid"
            variants={containerVariants}
            initial="hidden"
            animate={benefitsInView ? "visible" : "hidden"}
            role="list"
            aria-labelledby="benefits-title"
          >
            <motion.div 
              className="benefit-card"
              variants={benefitVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="benefit-icon">{benefitIcons[0].icon}</div>
              <div className="benefit-content">
                <h3>Лояльность клиентов</h3>
                <p>При виде положительных отзывов клиенты становятся более лояльными и проявляют доверие к организации</p>
                <div className="stat-container">
                  <motion.div 
                    className="stat-bar"
                    initial={{ width: 0 }}
                    whileInView={{ width: "87%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  >
                    <span className="stat-percent">{benefitIcons[0].percent}</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="benefit-card"
              variants={benefitVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="benefit-icon">{benefitIcons[1].icon}</div>
              <div className="benefit-content">
                <h3>Повышенная конкурентоспособность</h3>
                <p>За счёт положительных отзывов вы поднимаетесь выше в картах, а клиенты отдают предпочтение вам</p>
                <div className="stat-container">
                  <motion.div 
                    className="stat-bar"
                    initial={{ width: 0 }}
                    whileInView={{ width: "65%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  >
                    <span className="stat-percent">{benefitIcons[1].percent}</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="benefit-card"
              variants={benefitVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="benefit-icon">{benefitIcons[2].icon}</div>
              <div className="benefit-content">
                <h3>Больше клиентов</h3>
                <p>Более 80% клиентов не обратятся в организацию с плохими отзывами и низким рейтингом</p>
                <div className="stat-container">
                  <motion.div 
                    className="stat-bar"
                    initial={{ width: 0 }}
                    whileInView={{ width: "80%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  >
                    <span className="stat-percent">{benefitIcons[2].percent}</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="benefit-card"
              variants={benefitVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="benefit-icon">{benefitIcons[3].icon}</div>
              <div className="benefit-content">
                <h3>Защита от негативных отзывов</h3>
                <p>Большое количество положительных отзывов нейтрализует влияние негативных и ваш рейтинг не упадёт</p>
                <div className="stat-container">
                  <motion.div 
                    className="stat-bar"
                    initial={{ width: 0 }}
                    whileInView={{ width: "95%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  >
                    <span className="stat-percent">{benefitIcons[3].percent}</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="benefits-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
          >
            <motion.button 
              className="btn cta-button"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)" }}
              whileTap={{ scale: 0.95 }}
            >
              Начать сотрудничество
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services; 