import React from 'react';
import './Process.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Process: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stepsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const numberVariants = {
    hidden: { scale: 0, rotate: -45 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 15,
        duration: 0.8 
      }
    }
  };

  const iconItems = [
    { icon: "💬", label: "messenger" },
    { icon: "📝", label: "reviews" },
    { icon: "📊", label: "publish" },
    { icon: "📋", label: "report" }
  ];

  return (
    <section className="section process" id="process">
      <div className="process-bg"></div>
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="section-header"
        >
          <h2 className="section-title">Простой старт работы</h2>
          <p className="section-subtitle">Всего 4 шага до получения качественных отзывов</p>
        </motion.div>
        
        <motion.div 
          className="process-steps"
          variants={stepsVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div 
            className="process-step"
            variants={stepVariants}
          >
            <motion.div 
              className="step-number-container"
              variants={numberVariants}
            >
              <div className="step-number">01</div>
              <div className="step-icon">{iconItems[0].icon}</div>
            </motion.div>
            <div className="step-content">
              <div className="step-header">
                <h3>Напишите в мессенджер</h3>
                <div className="step-line"></div>
              </div>
              <p>Наш менеджер всегда на связи и ответит на любой ваш вопрос</p>
              
              <div className="step-cta">
                <motion.button 
                  className="btn messenger-btn whatsapp"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="btn-icon">📱</span> WhatsApp
                </motion.button>
                <motion.button 
                  className="btn messenger-btn telegram"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="btn-icon">✈️</span> Telegram
                </motion.button>
              </div>
              
              <div className="contact-phone">
                <motion.h4 
                  whileHover={{ scale: 1.03, color: "var(--primary-color)" }}
                >
                  +7 (999) 444-21-81
                </motion.h4>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="process-step"
            variants={stepVariants}
          >
            <motion.div 
              className="step-number-container"
              variants={numberVariants}
            >
              <div className="step-number">02</div>
              <div className="step-icon">{iconItems[1].icon}</div>
            </motion.div>
            <div className="step-content">
              <div className="step-header">
                <h3>Составим для вас первые отзывы</h3>
                <div className="step-line"></div>
              </div>
              <p>Попросим ссылку на ваш профиль в 2ГИС, обсудим количество и в этот же день отправим вам отзывы на согласование с учётом ваших пожеланий</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="process-step"
            variants={stepVariants}
          >
            <motion.div 
              className="step-number-container"
              variants={numberVariants}
            >
              <div className="step-number">03</div>
              <div className="step-icon">{iconItems[2].icon}</div>
            </motion.div>
            <div className="step-content">
              <div className="step-header">
                <h3>После согласования запускаем публикацию</h3>
                <div className="step-line"></div>
              </div>
              <p>Если качество устраивает - начинаем публикацию с периодичностью раз в 1-2 дня. Если нужно в отзывах что-то добавить - будем дорабатывать пока результат вас не устроит :)</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="process-step"
            variants={stepVariants}
          >
            <motion.div 
              className="step-number-container"
              variants={numberVariants}
            >
              <div className="step-number">04</div>
              <div className="step-icon">{iconItems[3].icon}</div>
            </motion.div>
            <div className="step-content">
              <div className="step-header">
                <h3>Отчёт по окончанию работы и оплата</h3>
                <div className="step-line"></div>
              </div>
              <p>Мы подготовим для вас отчёт со всеми скриншотами для подтверждения нашей работы, вы сами убедитесь в результате и только теперь возьмём плату</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="process-footer"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <motion.button 
            className="btn cta-button"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            Начать сотрудничество
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Process; 