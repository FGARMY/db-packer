import { MapPin, Phone, Mail } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="page-container">
      <div className="page-header" style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ color: 'white' }}>Contact Us</h1>
          <p>We are here to help and answer any question you might have</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid grid-3" style={{ gap: '30px', marginBottom: '60px' }}>
            <div style={{ background: 'white', padding: '30px', borderRadius: 'var(--radius)', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ background: '#f1f5f9', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: 'var(--primary-color)' }}>
                <MapPin size={24} />
              </div>
              <h4>Visit Us</h4>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '0' }}>
                123 Packaging Street,<br />
                Industrial Area,<br />
                Your City - 123456
              </p>
            </div>
            
            <div style={{ background: 'white', padding: '30px', borderRadius: 'var(--radius)', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ background: '#f1f5f9', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: 'var(--primary-color)' }}>
                <Phone size={24} />
              </div>
              <h4>Call Us</h4>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '0' }}>
                +91 98765 43210<br />
                +91 98765 43211
              </p>
            </div>
            
            <div style={{ background: 'white', padding: '30px', borderRadius: 'var(--radius)', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ background: '#f1f5f9', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: 'var(--primary-color)' }}>
                <Mail size={24} />
              </div>
              <h4>Email Us</h4>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '0' }}>
                info@dbpack.com<br />
                sales@dbpack.com
              </p>
            </div>
          </div>

          <div className="grid grid-2" style={{ gap: '50px', alignItems: 'center' }}>
            <div>
              <h4 className="section-subtitle">GET IN TOUCH</h4>
              <h2>Send us a message</h2>
              <form style={{ marginTop: '30px' }}>
                <div className="grid grid-2" style={{ gap: '20px' }}>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Your Name" />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Your Email" />
                  </div>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Subject" />
                </div>
                <div className="form-group">
                  <textarea className="form-control" rows={5} placeholder="Your Message"></textarea>
                </div>
                <button type="button" className="btn btn-primary">SEND MESSAGE</button>
              </form>
            </div>

            <div style={{ height: '450px', backgroundColor: '#e2e8f0', borderRadius: 'var(--radius)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-light)', flexDirection: 'column' }}>
              <MapPin size={48} style={{ marginBottom: '15px' }} />
              <h3>Interactive Map</h3>
              <p>Google Maps Integration Here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
