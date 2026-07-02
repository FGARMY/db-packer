import { Link } from 'react-router-dom';
import { Package, MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Footer.css';

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
            <a href="#" className="social-icon">F</a>
            <a href="#" className="social-icon">In</a>
            <a href="#" className="social-icon">Ig</a>
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
              <MapPin size={18} className="contact-icon" />
              <span>123 Packaging Street,<br/>Industrial Area,<br/>Your City - 123456</span>
            </li>
            <li>
              <Phone size={18} className="contact-icon" />
              <span>+91 98765 43210</span>
            </li>
            <li>
              <Mail size={18} className="contact-icon" />
              <span>info@dbpack.com</span>
            </li>
            <li>
              <Clock size={18} className="contact-icon" />
              <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>&copy; 2026 DBPack. All Rights Reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="separator">|</span>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
