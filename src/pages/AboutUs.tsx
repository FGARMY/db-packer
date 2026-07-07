import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './AboutUs.css';

const AboutUs = () => {
  const timelineMilestones = [
    { year: "2018", title: "Company Founded", desc: "DBPack was established with a small production unit, serving local manufacturing businesses with corrugated solutions." },
    { year: "2020", title: "ISO 9001 Certification & Expansion", desc: "Obtained ISO 9001:2015 registration and expanded production facility to 20,000 sq.ft to support large retail clients." },
    { year: "2023", title: "State-of-the-Art facility", desc: "Inaugurated a fully-equipped 50,000 sq.ft manufacturing plant with modern offset printing and automated carton lines." },
    { year: "2026", title: "B2B E-Procurement", desc: "Registered on GeM (Government e Marketplace) and rolled out customized flexible pouches and adhesive label production lines." }
  ];

  return (
    <div className="page-container about-page-container">
      <div className="page-breadcrumb">
        <Link to="/">Home</Link> &bull; About Us
      </div>

      <div className="minimal-page-header">
        <h1>About DBPack</h1>
        <p>Excellence, Quality, and Innovation in Packaging Solutions</p>
      </div>

      {/* Story section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2 about-intro-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="section-subtitle">OUR STORY</h4>
              <h2>Committed to Protecting What Matters Most</h2>
              <p>
                Founded on the principles of quality and reliability, DBPack has grown to become a leading provider of innovative packaging solutions. We understand that packaging is more than just a box or a wrap; it is the first impression of your product, the safeguard during transit, and a reflection of your brand's commitment to quality.
              </p>
              <p>
                Our team of experienced professionals works closely with clients across diverse industries to develop customized packaging strategies that not only protect their products but also optimize their supply chain efficiency and reduce environmental impact.
              </p>
            </motion.div>
            <motion.div 
              className="about-img-wrap"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src="/facility.png" alt="State-of-the-art DBPack Facility" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Profile */}
      <section className="section">
        <div className="container">
          <motion.div 
            className="grid grid-2 leadership-profile-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="founder-img-wrap">
              <img src="/founder.png" alt="Latika Upadhyay, Founder &amp; CEO" />
            </div>
            <div>
              <h4 className="section-subtitle">LEADERSHIP</h4>
              <h2 className="founder-name">Latika Upadhyay</h2>
              <h5 className="founder-title">Founder &amp; CEO</h5>
              <p className="founder-quote">
                "True leadership isn't measured by the products you sell, but by the trust you earn. Every partnership we build and every box we deliver reflects our promise of quality, integrity, and excellence."
              </p>
              <p>
                Driven by a passion for excellence and innovation, Latika Upadhyay has helped establish DBPack as a trusted packaging partner for businesses across industries. With a strong focus on quality, reliability, and sustainable solutions, she continues to lead the company with a customer-first approach, building lasting relationships and delivering packaging that brands can depend on.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="about-timeline-section section bg-surface-3">
        <div className="container">
          <div className="timeline-title">
            <h4 className="section-subtitle">MILESTONES</h4>
            <h2>Our Growth &amp; Journey</h2>
            <div className="header-divider centered"></div>
          </div>
          <div className="timeline-wrap">
            {timelineMilestones.map((item, idx) => (
              <motion.div 
                className="timeline-item"
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title">Industry Standard Certifications</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 40px', color: 'var(--text-light)' }}>
            We adhere to the strictest quality and environmental standards to guarantee the safety and reliability of our packaging solutions.
          </p>
          <div className="grid grid-3" style={{ gap: '30px' }}>
            <motion.div 
              className="cert-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img src="/Certification/ISO_9001.png" alt="ISO 9001:2015 certificate" className="cert-img" />
              <h3>ISO 9001:2015</h3>
              <p>Certified Quality Management System ensuring consistent high-quality manufacturing.</p>
            </motion.div>
            
            <motion.div 
              className="cert-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img src="/Certification/gem-logo.png" alt="GeM Registered seller logo" className="cert-img" />
              <h3>GeM Registered</h3>
              <p>Registered seller on Government e Marketplace, committed to transparent and efficient public procurement.</p>
            </motion.div>
            
            <motion.div 
              className="cert-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <CheckCircle size={48} color="var(--success-color)" style={{ marginBottom: '20px' }} />
              <h3>100% Recyclable</h3>
              <p>Our core corrugated lines are fully recyclable, minimizing environmental footprint.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;