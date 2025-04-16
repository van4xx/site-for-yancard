import React, { useState } from 'react';
import './Contact.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { WhatsAppIcon, TelegramIcon } from './icons';

const Contact: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [contactMethod, setContactMethod] = useState('call');
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitMessage('');
    setSubmitStatus(null);
    
    try {
      // Create form data
      const formData = new FormData();
      formData.append('name', name);
      formData.append('phone', phone);
      formData.append('contactMethod', contactMethod);
      
      // Send to PHP script
      const response = await fetch('/send_to_telegram.php', {
        method: 'POST',
        body: formData
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus('success');
        setSubmitMessage(result.message || 'Форма отправлена! Мы свяжемся с вами в ближайшее время.');
        setPhone('');
        setName('');
        setContactMethod('call');
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.message || 'Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.');
    } finally {
      setSubmitting(false);
    }
  };

  const platformOptions = [
    { name: "Google", icon: "🌐" },
    { name: "Яндекс", icon: "🔍" },
    { name: "Отзовик", icon: "📝" },
    { name: "Flamp", icon: "📊" },
    { name: "Zoon", icon: "👥" },
    { name: "2ГИС", icon: "🗺️" }
  ];
  
  return (
    <section className="section contact" id="contact">
      <div className="contact-bg">
        <div className="contact-shape shape1"></div>
        <div className="contact-shape shape2"></div>
        <div className="contact-shape shape3"></div>
      </div>
      
      <div className="container" ref={ref}>
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="section-title">Начните получать отзывы уже сегодня</h2>
          <p className="section-subtitle">Свяжитесь с нами для получения консультации и оформления заказа</p>
        </motion.div>

        <div className="contact-layout">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="info-card">
              <div className="info-header">
                <div className="info-icon">📞</div>
                <h3>Контактная информация</h3>
              </div>
              <div className="info-content">
                <div className="info-item">
                  <span className="info-label">Телефон:</span>
                  <a 
                    href="tel:+79240038931" 
                    className="info-value"
                  >
                    +7 (924) 003-89-31
                  </a>
                </div>
                <div className="info-item">
                  <span className="info-label">Telegram:</span>
                  <a 
                    href="https://t.me/MENEGKindReviews" 
                    className="info-value"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @MENEGKindReviews
                  </a>
                </div>
                <div className="info-item">
                  <span className="info-label">WhatsApp:</span>
                  <a 
                    href="https://wa.me/79240038931" 
                    className="info-value"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +7 (924) 003-89-31
                  </a>
                </div>
                <div className="info-item">
                  <span className="info-label">График работы:</span>
                  <span className="info-value">Пн-Пт: 9:00-18:00</span>
                </div>
              </div>
              
              <div className="messenger-options">
                <a 
                  href="https://wa.me/79240038931" 
                  className="messenger-option whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="messenger-icon-svg" fill="#ffffff" />
                  <span>WhatsApp</span>
                </a>
                
                <a 
                  href="https://t.me/MENEGKindReviews" 
                  className="messenger-option telegram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TelegramIcon className="messenger-icon-svg" fill="#ffffff" />
                  <span>Telegram</span>
                </a>
              </div>
            </div>

            <div className="platform-container">
              <h3>Площадки, с которыми мы работаем</h3>
              <div className="platform-grid">
                {platformOptions.map((platform, index) => (
                  <motion.div 
                    className="platform-item" 
                    key={index}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
                    }}
                  >
                    <span className="platform-icon">{platform.icon}</span>
                    <span className="platform-name">{platform.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <div className="form-card">
              <h3><span className="accent">Заполните форму</span> для связи</h3>
              <p>Наш менеджер свяжется с вами в течение часа</p>
              
              {submitStatus && (
                <div className={`form-message ${submitStatus}`}>
                  {submitMessage}
                </div>
              )}
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">
                    <span className="form-icon">👤</span>
                    Ваше имя
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Иван Иванов" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">
                    <span className="form-icon">📞</span>
                    Номер телефона *
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="+7 (___) ___-__-__" 
                    required 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                
                <div className="form-group">
                  <label className="contact-method-label">
                    <span className="form-icon">💬</span>
                    Как с вами связаться?
                  </label>
                  <div className="contact-methods">
                    <label className="method-option">
                      <input 
                        type="radio" 
                        name="contactMethod" 
                        value="call" 
                        checked={contactMethod === 'call'}
                        onChange={() => setContactMethod('call')}
                      />
                      <span className="method-checkmark"></span>
                      <span className="method-text">Звонок</span>
                    </label>
                    
                    <label className="method-option">
                      <input 
                        type="radio" 
                        name="contactMethod" 
                        value="whatsapp" 
                        checked={contactMethod === 'whatsapp'}
                        onChange={() => setContactMethod('whatsapp')}
                      />
                      <span className="method-checkmark"></span>
                      <span className="method-text">
                        <WhatsAppIcon className="method-icon-svg" fill="#28a745" /> WhatsApp
                      </span>
                    </label>
                    
                    <label className="method-option">
                      <input 
                        type="radio" 
                        name="contactMethod" 
                        value="telegram" 
                        checked={contactMethod === 'telegram'}
                        onChange={() => setContactMethod('telegram')}
                      />
                      <span className="method-checkmark"></span>
                      <span className="method-text">
                        <TelegramIcon className="method-icon-svg" fill="#0088cc" /> Telegram
                      </span>
                    </label>
                  </div>
                </div>
                
                <motion.button 
                  type="submit" 
                  className="submit-btn"
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
                  whileTap={{ scale: 0.97 }}
                  disabled={submitting}
                >
                  {submitting ? 'Отправка...' : 'Отправить заявку'}
                </motion.button>
                
                <div className="form-note">
                  <span className="note-icon">🔒</span>
                  <p>Мы гарантируем конфиденциальность ваших данных</p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 