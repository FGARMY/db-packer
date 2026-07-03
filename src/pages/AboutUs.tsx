
import { Award, Leaf, CheckCircle } from 'lucide-react';

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
              <h2 style={{ marginBottom: '10px' }}>Kundan Tiwary</h2>
              <h5 style={{ color: 'var(--secondary-color)', textTransform: 'uppercase', marginBottom: '20px', letterSpacing: '1px' }}>Founder & CEO</h5>
              <p style={{ fontStyle: 'italic', color: 'var(--text-light)', borderLeft: '4px solid var(--primary-color)', paddingLeft: '15px', marginBottom: '20px' }}>
                "Trust isn't built in a day; it's built in every single box we ship. Our commitment to quality is what separates us from the rest."
              </p>
              <p>
                With over 25 years of experience in industrial packaging and supply chain logistics, Kundan founded DBPack with a singular vision: to provide uncompromising quality that businesses can rely on. Under his leadership, DBPack has expanded from a local supplier to a nationwide manufacturing powerhouse, always maintaining its core focus on customer trust and sustainable innovation.
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
              <Award size={48} color="var(--primary-color)" style={{ marginBottom: '15px' }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>ISO 9001:2015</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', margin: 0 }}>Certified Quality Management System ensuring consistent high-quality manufacturing.</p>
            </div>
            <div style={{ background: 'white', padding: '30px', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)' }}>
              <Leaf size={48} color="var(--primary-color)" style={{ marginBottom: '15px' }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>FSC® Certified</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', margin: 0 }}>Sourcing materials from responsibly managed forests that provide environmental benefits.</p>
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
