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
    { icon: "🛡️", color: "#4b7bec", bg: "rgba(75, 123, 236, 0.1)" },
    { icon: "✅", color: "#20bf6b", bg: "rgba(32, 191, 107, 0.1)" },
    { icon: "🔄", color: "#f7b731", bg: "rgba(247, 183, 49, 0.1)" },
    { icon: "📊", color: "#eb3b5a", bg: "rgba(235, 59, 90, 0.1)" },
    { icon: "💬", color: "#3867d6", bg: "rgba(56, 103, 214, 0.1)" }
  ];

  const benefitIcons = [
    { icon: "❤️", percent: "87%" },
    { icon: "🏆", percent: "65%" },
    { icon: "👥", percent: "80%" },
    { icon: "🛡️", percent: "95%" }
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
          <h2 className="section-title">За что вы платите</h2>
          <p className="section-subtitle">Профессиональный подход к каждому клиенту</p>
        </motion.div>
        
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="service-card"
            variants={itemVariants}
            whileHover={{ 
              y: -10, 
              boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
              backgroundColor: "rgba(75, 123, 236, 0.03)" 
            }}
          >
            <div 
              className="service-icon"
              style={{ backgroundColor: serviceIcons[0].bg }}
            >
              <span className="icon">{serviceIcons[0].icon}</span>
            </div>
            <h3>Минимум риска</h3>
            <p>Отзывы публикуют реальные люди со своих личных аккаунтов, которые находятся в вашем регионе. Никаких ботов и риска блокировки профиля.</p>
            <motion.div 
              className="card-indicator"
              initial={{ width: 0 }}
              whileInView={{ width: "40%" }}
              transition={{ duration: 1, delay: 0.3 }}
            ></motion.div>
          </motion.div>
          
          <motion.div 
            className="service-card"
            variants={itemVariants}
            whileHover={{ 
              y: -10, 
              boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
              backgroundColor: "rgba(32, 191, 107, 0.03)" 
            }}
          >
            <div 
              className="service-icon"
              style={{ backgroundColor: serviceIcons[1].bg }}
            >
              <span className="icon">{serviceIcons[1].icon}</span>
            </div>
            <h3>Гарантия на отзывы</h3>
            <p>Если наш отзыв не опубликовался или был удалён, мы бесплатно опубликуем новый. Гарантия действует целый год!</p>
            <motion.div 
              className="card-indicator"
              initial={{ width: 0 }}
              whileInView={{ width: "60%" }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ backgroundColor: "#20bf6b" }}
            ></motion.div>
          </motion.div>
          
          <motion.div 
            className="service-card"
            variants={itemVariants}
            whileHover={{ 
              y: -10, 
              boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
              backgroundColor: "rgba(247, 183, 49, 0.03)" 
            }}
          >
            <div 
              className="service-icon"
              style={{ backgroundColor: serviceIcons[2].bg }}
            >
              <span className="icon">{serviceIcons[2].icon}</span>
            </div>
            <h3>Удобство</h3>
            <p>Минимум затрат вашего времени. Мы самостоятельно придумаем отзывы и проконтролируем равномерность их публикации.</p>
            <motion.div 
              className="card-indicator"
              initial={{ width: 0 }}
              whileInView={{ width: "75%" }}
              transition={{ duration: 1, delay: 0.7 }}
              style={{ backgroundColor: "#f7b731" }}
            ></motion.div>
          </motion.div>
          
          <motion.div 
            className="service-card"
            variants={itemVariants}
            whileHover={{ 
              y: -10, 
              boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
              backgroundColor: "rgba(235, 59, 90, 0.03)" 
            }}
          >
            <div 
              className="service-icon"
              style={{ backgroundColor: serviceIcons[3].bg }}
            >
              <span className="icon">{serviceIcons[3].icon}</span>
            </div>
            <h3>Отчётность и прогнозы</h3>
            <p>Составим для вас отчёт со всеми скриншотами и сделаем примерный прогноз количества отзывов для улучшения рейтинга.</p>
            <motion.div 
              className="card-indicator"
              initial={{ width: 0 }}
              whileInView={{ width: "55%" }}
              transition={{ duration: 1, delay: 0.9 }}
              style={{ backgroundColor: "#eb3b5a" }}
            ></motion.div>
          </motion.div>
          
          <motion.div 
            className="service-card"
            variants={itemVariants}
            whileHover={{ 
              y: -10, 
              boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
              backgroundColor: "rgba(56, 103, 214, 0.03)" 
            }}
          >
            <div 
              className="service-icon"
              style={{ backgroundColor: serviceIcons[4].bg }}
            >
              <span className="icon">{serviceIcons[4].icon}</span>
            </div>
            <h3>Постоянная поддержка</h3>
            <p>С вами будет работать ваш личный менеджер и ответит на любой ваш вопрос в любое время.</p>
            <motion.div 
              className="card-indicator"
              initial={{ width: 0 }}
              whileInView={{ width: "90%" }}
              transition={{ duration: 1, delay: 1.1 }}
              style={{ backgroundColor: "#3867d6" }}
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
            <h2 className="section-title">Для чего нужны отзывы</h2>
            <p className="section-subtitle">Положительные отзывы — мощный инструмент для развития вашего бизнеса</p>
          </motion.div>
          
          <motion.div 
            className="benefits-grid"
            variants={containerVariants}
            initial="hidden"
            animate={benefitsInView ? "visible" : "hidden"}
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