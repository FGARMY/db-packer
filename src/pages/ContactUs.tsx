import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONFIG } from '../config/site';
import { supabase } from '../utils/supabaseClient';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone is required';
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone.replace(/[^0-9+]/g, ''))) {
      errors.phone = 'Invalid phone number format';
    }
    if (!formData.interest) errors.interest = 'Please select your inquiry area';
    if (!formData.message.trim()) errors.message = 'Message cannot be empty';
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_inquiries')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            interest: formData.interest,
            message: formData.message,
          }
        ]);

      if (error) throw error;

      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
    } catch (err: any) {
      console.error('Error submitting contact form:', err);
      setSubmitError(err.message || 'Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const phoneNumbers = SITE_CONFIG.contact.phone.split(',');
  const primaryPhone = phoneNumbers[0].trim();

  return (
    <div className="contact-page-container">
      <div className="page-breadcrumb">
        <Link to="/">Home</Link> &bull; Contact Us
      </div>

      <div className="minimal-page-header">
        <h1>Contact Us</h1>
        <p>Get in touch and ask us anything. Whether you need custom packaging solutions, want to check our manufacturing capacity, or just have a general question — we answer it all.</p>
      </div>

      {/* Main Grid: Form Left, Details Right */}
      <section className="contact-form-section section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '50px', position: 'relative' }}>
          
          <div className="contact-main-grid-layout" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', position: 'relative', zIndex: 10 }}>
            {/* Left Column: Interactive Form */}
            <div className="contact-form-block-wrap">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    onSubmit={handleSubmit} 
                    className="minimal-contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {submitError && (
                      <div className="submit-error-banner" style={{ color: '#dc3545', backgroundColor: 'rgba(220, 53, 69, 0.1)', padding: '12px', borderRadius: 'var(--radius)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                        <AlertCircle size={16} />
                        <span>{submitError}</span>
                      </div>
                    )}
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="contact-name" className="visually-hidden">Your Name</label>
                        <input 
                          type="text" 
                          id="contact-name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`form-control ${formErrors.name ? 'input-error' : ''}`} 
                          placeholder="Your name *" 
                          required 
                        />
                        {formErrors.name && <span className="error-message-text"><AlertCircle size={12} /> {formErrors.name}</span>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="contact-email" className="visually-hidden">Email Address</label>
                        <input 
                          type="email" 
                          id="contact-email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`form-control ${formErrors.email ? 'input-error' : ''}`} 
                          placeholder="Email address *" 
                          required 
                        />
                        {formErrors.email && <span className="error-message-text"><AlertCircle size={12} /> {formErrors.email}</span>}
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <div className={`phone-input-group ${formErrors.phone ? 'input-error' : ''}`}>
                          <div className="country-code-select" aria-hidden="true">
                            <span>🇮🇳</span>
                            <span>&#8964;</span>
                          </div>
                          <label htmlFor="contact-phone" className="visually-hidden">Phone Number</label>
                          <input 
                            type="tel" 
                            id="contact-phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="form-control phone-input" 
                            placeholder="+91 Phone number *" 
                            required 
                          />
                        </div>
                        {formErrors.phone && <span className="error-message-text"><AlertCircle size={12} /> {formErrors.phone}</span>}
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="contact-interest" className="visually-hidden">Interested in</label>
                        <select 
                          id="contact-interest"
                          name="interest"
                          value={formData.interest}
                          onChange={handleInputChange}
                          className={`form-control ${formErrors.interest ? 'input-error' : ''}`} 
                          required
                        >
                          <option value="" disabled>Interested in *</option>
                          <option value="manufacturing">Custom Manufacturing</option>
                          <option value="bulk">Bulk Order Quote</option>
                          <option value="sample">Request Sample</option>
                          <option value="other">Other Inquiry</option>
                        </select>
                        {formErrors.interest && <span className="error-message-text"><AlertCircle size={12} /> {formErrors.interest}</span>}
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-message" className="visually-hidden">Message</label>
                      <textarea 
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`form-control ${formErrors.message ? 'input-error' : ''}`} 
                        rows={5} 
                        placeholder="How can we help? *" 
                        required
                      ></textarea>
                      {formErrors.message && <span className="error-message-text"><AlertCircle size={12} /> {formErrors.message}</span>}
                    </div>

                    <div className="form-submit-wrapper">
                      <button 
                        type="submit" 
                        disabled={isSubmitting} 
                        className="btn btn-primary btn-submit-pill"
                        style={{ width: '100%' }}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                      <p className="terms-text" style={{ marginTop: '15px' }}>
                        By clicking, you agree to our <a href="#terms">Terms &amp; Conditions</a> and <a href="#privacy">Privacy Policy</a>
                      </p>
                    </div>
                  </motion.form>
                ) : (
                  /* Form Success Message Box */
                  <motion.div 
                    className="contact-success-msg-box"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    style={{ textAlign: 'center', padding: '40px', backgroundColor: 'var(--white)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-md)' }}
                  >
                    <CheckCircle2 size={56} className="success-icon" style={{ color: 'var(--success-color)', marginBottom: '20px', display: 'inline-block' }} />
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--text-color)' }}>Message Sent Successfully!</h3>
                    <p style={{ color: 'var(--text-light)', marginBottom: '25px', lineHeight: '1.6' }}>
                      Thank you for contacting ADBPack. One of our packaging specialists will review your requirements and reach out to you within the next 2-4 business hours.
                    </p>
                    <button className="btn btn-primary" onClick={() => setIsSubmitted(false)}>
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right Column: Address, Phone details card */}
            <div className="contact-details-sidebar-card" style={{ backgroundColor: 'var(--surface-3)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius)', padding: '35px', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '25px', color: 'var(--text-color)' }}>Office &amp; Factory Info</h3>
              
              <ul className="sidebar-details-info-list" style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                <li style={{ display: 'flex', gap: '15px' }}>
                  <MapPin size={24} className="detail-icon" style={{ color: 'var(--primary-color)', flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '5px', color: 'var(--text-color)' }}>Corporate Address</h4>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-light)', margin: 0 }}>{SITE_CONFIG.contact.address}</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '15px' }}>
                  <Phone size={24} className="detail-icon" style={{ color: 'var(--primary-color)', flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '5px', color: 'var(--text-color)' }}>Phone &amp; Bulk Support</h4>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-light)', margin: 0 }}>
                      <a href={`tel:${primaryPhone}`}>{SITE_CONFIG.contact.phone}</a>
                    </p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '15px' }}>
                  <Mail size={24} className="detail-icon" style={{ color: 'var(--primary-color)', flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '5px', color: 'var(--text-color)' }}>Email Inquiry</h4>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-light)', margin: 0 }}>
                      <a href={`mailto:${SITE_CONFIG.contact.email}`}>{SITE_CONFIG.contact.email}</a>
                    </p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '15px' }}>
                  <Clock size={24} className="detail-icon" style={{ color: 'var(--primary-color)', flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '5px', color: 'var(--text-color)' }}>Business Hours</h4>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-light)', margin: 0 }}>Mon - Sat: 9:00 AM - 6:30 PM (Sunday Closed)</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Illustrations - Keep absolute positioned but adjust layout */}
          <div className="illustration-left" aria-hidden="true" style={{ opacity: 0.15 }}>
            <img src="/contact-left.png" alt="" />
          </div>
          <div className="illustration-right" aria-hidden="true" style={{ opacity: 0.15 }}>
            <img src="/contact-right.png" alt="" />
          </div>
        </div>
      </section>

      {/* Embedded Maps Section */}
      <section className="section contact-maps-section" style={{ paddingTop: '0' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '25px', textAlign: 'center' }}>Locate Our Plant</h2>
          <div className="maps-iframe-wrapper" style={{ width: '100%', height: '400px', borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.748530467554!2d77.16781297598852!3d28.517178075729737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1e34e5658e37%3s0x390d1e34e5658e37!2sADBPack%20Packaging!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
