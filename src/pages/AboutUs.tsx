
import { CheckCircle } from 'lucide-react';

import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="page-container">
      <div className="page-breadcrumb">
        <Link to="/">DB Packer</Link> &bull; About Us
      </div>

      <div className="minimal-page-header">
        <h1>About DBPack</h1>
        <p>Excellence in Packaging Solutions</p>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '40px' }}>
            <div>
              <h4 className="section-subtitle">OUR STORY</h4>
              <h2>Committed to Protecting What Matters Most</h2>
              <p>
                Founded on the principles of quality and reliability, DBPack has grown to become a leading provider of innovative packaging solutions. We understand that packaging is more than just a box or a wrap; it is the first impression of your product, the safeguard during transit, and a reflection of your brand's commitment to quality.
              </p>
              <p>
                Our team of experienced professionals works closely with clients across diverse industries to develop customized packaging strategies that not only protect their products but also optimize their supply chain efficiency and reduce environmental impact.
              </p>
            </div>
            <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              <img src="/facility.png" alt="State-of-the-art DBPack Facility" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Profile */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '40px', background: 'var(--white)', padding: '50px', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-md)' }}>
            <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', maxWidth: '400px', margin: '0 auto' }}>
              <img src="/founder.png" alt="Kundan Tiwary, Founder" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div>
              <h4 className="section-subtitle">LEADERSHIP</h4>
              <h2 style={{ marginBottom: '10px' }}>Latika Upadhyay</h2>
              <h5 style={{ color: 'var(--secondary-color)', textTransform: 'uppercase', marginBottom: '20px', letterSpacing: '1px' }}>Founder & CEO</h5>
              <p style={{ fontStyle: 'italic', color: 'var(--text-light)', borderLeft: '4px solid var(--primary-color)', paddingLeft: '15px', marginBottom: '20px' }}>
                "True leadership isn't measured by the products you sell, but by the trust you earn. Every partnership we build and every box we deliver reflects our promise of quality, integrity, and excellence."."
              </p>
              <p>
                Driven by a passion for excellence and innovation, Latika Upadhyay has helped establish DBPack as a trusted packaging partner for businesses across industries. With a strong focus on quality, reliability, and sustainable solutions, she continues to lead the company with a customer-first approach, building lasting relationships and delivering packaging that brands can depend on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section" style={{ backgroundColor: 'var(--bg-color)', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title">Industry Standard Certifications</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 40px', color: 'var(--text-light)' }}>
            We adhere to the strictest quality and environmental standards to guarantee the safety and reliability of our packaging solutions.
          </p>
          <div className="grid grid-3" style={{ gap: '30px' }}>
            <div style={{ background: 'white', padding: '30px', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)' }}>
              <img src="/Certification/ISO_9001.png" alt="ISO 9001:2015" style={{ height: '100px', marginBottom: '15px', objectFit: 'contain' }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>ISO 9001:2015</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', margin: 0 }}>Certified Quality Management System ensuring consistent high-quality manufacturing.</p>
            </div>
            <div style={{ background: 'white', padding: '30px', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)' }}>
              <img src="/Certification/gem-logo.png" alt="GeM Registered" style={{ height: '100px', marginBottom: '15px', objectFit: 'contain' }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>GeM Registered</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', margin: 0 }}>Registered seller on Government e Marketplace, committed to transparent and efficient public procurement.</p>
            </div>
            <div style={{ background: 'white', padding: '30px', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)' }}>
              <CheckCircle size={48} color="var(--primary-color)" style={{ marginBottom: '15px' }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>100% Recyclable</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', margin: 0 }}>Our core corrugated lines are fully recyclable, minimizing environmental footprint.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;