import { MapPin, Phone, Mail, Navigation } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="page-container">
      {/* Premium Header */}
      <div className="contact-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We are here to help and answer any question you might have. We look forward to hearing from you.</p>
        </div>
      </div>

      <section className="section contact-form-section">
        <div className="container">
          {/* Form & Map Section (Pulled up into header) */}
          <div className="grid grid-2 form-map-grid" style={{ gap: '50px', alignItems: 'center', marginBottom: '80px' }}>
            <div className="contact-form-container">
              <h4 className="section-subtitle" style={{ marginBottom: '10px' }}>GET IN TOUCH</h4>
              <h2 style={{ marginBottom: '30px', fontSize: '2rem' }}>Send us a message</h2>
              <form>
                <div className="grid grid-2" style={{ gap: '20px', marginBottom: '20px' }}>
                  <div className="form-group" style={{ marginBottom: '0' }}>
                    <input type="text" className="form-control" placeholder="Your Name" required />
                  </div>
                  <div className="form-group" style={{ marginBottom: '0' }}>
                    <input type="email" className="form-control" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <input type="text" className="form-control" placeholder="Subject" required />
                </div>
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <textarea className="form-control" rows={6} placeholder="How can we help you?" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">SEND MESSAGE</button>
              </form>
            </div>

            {/* Premium Map Placeholder */}
            <div className="map-container">
              <div className="map-content">
                <Navigation size={48} className="map-icon" />
                <h3>Interactive Map</h3>
                <p>Google Maps integration goes here.</p>
              </div>
            </div>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-3 contact-cards-grid">
            <div className="contact-card">
              <div className="contact-icon-wrapper">
                <MapPin size={28} />
              </div>
              <h4>Visit Us</h4>
              <p>
                {SITE_CONFIG.contact.address.map((line, i) => (
                  <span key={i}>{line}<br /></span>
                ))}
              </p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon-wrapper">
                <Phone size={28} />
              </div>
              <h4>Call Us</h4>
              <p>
                {SITE_CONFIG.contact.phone}
              </p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon-wrapper">
                <Mail size={28} />
              </div>
              <h4>Email Us</h4>
              <p>
                {SITE_CONFIG.contact.email}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
