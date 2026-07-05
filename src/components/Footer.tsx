import { Link } from 'react-router-dom';
import { Package, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import './Footer.css';

const FacebookIcon = ({ size = 20, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = ({ size = 20, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = ({ size = 20, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container footer-content grid grid-4">
        
        {/* About DBPack Column */}
        <div className="footer-col">
          <div className="footer-logo">
            <Package size={28} color="#ffffff" />
            <span className="footer-logo-title">DBPack</span>
          </div>
          <p className="footer-desc">
            DBPack provides high-quality, reliable, and sustainable packaging solutions tailored to businesses of all sizes. We are committed to protecting what matters most—your products.
          </p>
          <div className="social-links">
            <a href={SITE_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
              <FacebookIcon size={20} color="#ffffff" />
            </a>
            <a href={SITE_CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <LinkedinIcon size={20} color="#ffffff" />
            </a>
            <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
              <InstagramIcon size={20} color="#ffffff" />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-col">
          <h4 className="footer-heading">QUICK LINKS</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/quote">Request Quote</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Our Products Column */}
        <div className="footer-col">
          <h4 className="footer-heading">OUR PRODUCTS</h4>
          <ul className="footer-links">
            <li><Link to="/products">Corrugated Boxes</Link></li>
            <li><Link to="/products">Stretch Film Rolls</Link></li>
            <li><Link to="/products">Bubble Wrap Rolls</Link></li>
            <li><Link to="/products">Packing Tape</Link></li>
            <li><Link to="/products">PP Strapping Roll</Link></li>
            <li><Link to="/products">Zip Lock Pouches</Link></li>
          </ul>
        </div>

        {/* Contact Us Column */}
        <div className="footer-col">
          <h4 className="footer-heading">CONTACT US</h4>
          <ul className="footer-contact">
            <li>
              <MapPin size={18} color="#b59a68" className="contact-icon" />
              <span>
                {SITE_CONFIG.contact.address.map((line, i) => (
                  <span key={i}>{line}<br/></span>
                ))}
              </span>
            </li>
            <li>
              <Phone size={18} color="#b59a68" className="contact-icon" />
              <span>{SITE_CONFIG.contact.phone}</span>
            </li>
            <li>
              <Mail size={18} color="#b59a68" className="contact-icon" />
              <span>{SITE_CONFIG.contact.email}</span>
            </li>
            <li>
              <Clock size={18} color="#b59a68" className="contact-icon" />
              <span>{SITE_CONFIG.contact.hours}</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>&copy; 2026 DBPack. All Rights Reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <span className="separator">|</span>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
