import { useState, useEffect } from 'react';
import { ArrowUp, Phone, Mail } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import './FloatingWidgets.css';

const WhatsAppIcon = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const FloatingWidgets = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="floating-widgets-container">
      {/* Scroll to Top */}
      <button 
        className={`floating-btn scroll-top-btn ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} color="#ffffff" />
      </button>

      {/* WhatsApp */}
      <a 
        href={`https://wa.me/${SITE_CONFIG.contact.phone.replace(/[^0-9]/g, '')}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`floating-btn whatsapp-btn ${showScrollTop ? 'hidden' : ''}`} 
        aria-label="WhatsApp"
      >
        <WhatsAppIcon size={22} color="#ffffff" />
      </a>
      
      {/* Email */}
      <a 
        href={`mailto:${SITE_CONFIG.contact.email}`} 
        className={`floating-btn email-btn ${showScrollTop ? 'hidden' : ''}`} 
        aria-label="Email"
      >
        <Mail size={22} color="#ffffff" />
      </a>

      {/* Call */}
      <a 
        href={`tel:${SITE_CONFIG.contact.phone.replace(/[^0-9+]/g, '')}`} 
        className={`floating-btn phone-btn ${showScrollTop ? 'hidden' : ''}`} 
        aria-label="Call Us"
      >
        <Phone size={22} color="#ffffff" />
      </a>
    </div>
  );
};

export default FloatingWidgets;
