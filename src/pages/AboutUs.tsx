
import { Target, Eye, ShieldCheck, Users } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="page-container">
      <div className="page-header" style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ color: 'white' }}>About DBPack</h1>
          <p>Excellence in Packaging Solutions</p>
        </div>
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
            <div style={{ background: '#f1f5f9', padding: '40px', borderRadius: 'var(--radius)', textAlign: 'center' }}>
               <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🏢</div>
               <h3>State-of-the-art Facility</h3>
               <p>Equipped with advanced manufacturing technology to ensure consistent quality and precision in every product we deliver.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="grid grid-4">
            <div style={{ background: 'white', padding: '30px', borderRadius: 'var(--radius)', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
              <ShieldCheck size={40} color="var(--primary-color)" style={{ marginBottom: '15px' }} />
              <h4>Quality</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Uncompromising standards in materials and manufacturing.</p>
            </div>
            <div style={{ background: 'white', padding: '30px', borderRadius: 'var(--radius)', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
              <Target size={40} color="var(--primary-color)" style={{ marginBottom: '15px' }} />
              <h4>Innovation</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Continuously exploring better, smarter packaging methods.</p>
            </div>
            <div style={{ background: 'white', padding: '30px', borderRadius: 'var(--radius)', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
              <Users size={40} color="var(--primary-color)" style={{ marginBottom: '15px' }} />
              <h4>Customer First</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Building lasting relationships based on trust and service.</p>
            </div>
            <div style={{ background: 'white', padding: '30px', borderRadius: 'var(--radius)', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
              <Eye size={40} color="var(--primary-color)" style={{ marginBottom: '15px' }} />
              <h4>Sustainability</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Committed to eco-friendly practices for a greener future.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
