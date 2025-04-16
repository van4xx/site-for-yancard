import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.css';

// Типы для вопросов и ответов
interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Массив вопросов и ответов
  const faqItems: FAQItem[] = [
    {
      question: 'Как быстро публикуются отзывы после заказа?',
      answer: 'Публикация отзывов начинается в течение 24 часов после оформления и оплаты заказа. Скорость размещения зависит от выбранного тарифа и объема заказа. В среднем мы размещаем до 10 отзывов в день для одного клиента.'
    },
    {
      question: 'Даете ли вы гарантию на свои услуги?',
      answer: 'Да, мы предоставляем полную гарантию на все наши услуги. Если отзывы будут удалены площадкой в течение 30 дней после размещения, мы бесплатно разместим новые. Все условия гарантии прописаны в договоре, который заключается с каждым клиентом.'
    },
    {
      question: 'Можно ли заказать отзывы для нескольких платформ сразу?',
      answer: 'Конечно! Мы предлагаем комплексные решения для размещения отзывов на различных площадках. При заказе отзывов для нескольких платформ вы получаете скидку до 15%, а также возможность управлять всеми размещениями через единый личный кабинет.'
    },
    {
      question: 'Что делать, если я не доволен качеством отзывов?',
      answer: 'Мы дорожим своей репутацией и гарантируем высокое качество отзывов. Если вы остались недовольны, свяжитесь с вашим персональным менеджером в течение 3 дней после публикации. Мы оперативно решим любые вопросы и при необходимости заменим отзывы на новые бесплатно.'
    },
    {
      question: 'Есть ли у вас скидки для постоянных клиентов?',
      answer: 'Да, для постоянных клиентов у нас действует гибкая система скидок. После первого заказа вы получаете скидку 5% на все последующие размещения. Для клиентов, сделавших более 5 заказов, действует скидка 10%. Также мы регулярно проводим сезонные акции с дополнительными бонусами.'
    }
  ];

  // Переключатель для аккордеона
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Анимация для контейнера
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Анимация для элементов
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Часто задаваемые вопросы
        </motion.h2>
        
        <motion.div 
          className="faq-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {faqItems.map((item, index) => (
            <motion.div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              variants={itemVariants}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
              >
                <span>{item.question}</span>
                <span className="icon">{activeIndex === index ? '−' : '+'}</span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div 
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ; 