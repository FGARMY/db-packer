import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Target, Eye, BadgeCheck, Cpu, Briefcase, Tag, Globe2, ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { products } from '../data/products';
import './Home.css';

const Home = () => {
  const [currentHeroIdx, setCurrentHeroIdx] = useState(0);
  const heroImages = [
    "/assets/clean-warehouse.png",
    "/assets/boxes.png",
    "/assets/stretch-film.png",
    "/assets/bubble-wrap.png"
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (processRef.current) {
        const rect = processRef.current.getBoundingClientRect();
        const start = window.innerHeight * 0.85;
        const end = window.innerHeight * 0.35;
        let progress = (start - rect.top) / (start - end);
        progress = Math.max(0, Math.min(1, progress));
        setScrollProgress(progress);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIdx((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const whyChoose = [
    { icon: <BadgeCheck size={32} />, title: "High Quality Materials", desc: "We use premium raw materials for strength and durability." },
    { icon: <Cpu size={32} />, title: "Advanced Technology", desc: "Modern machines ensure consistent quality and precision." },
    { icon: <Briefcase size={32} />, title: "Experienced Team", desc: "Skilled professionals committed to delivering the best." },
    { icon: <Tag size={32} />, title: "Competitive Pricing", desc: "Best quality packaging solutions at fair and competitive rates." },
    { icon: <Globe2 size={32} />, title: "Wide Industry Reach", desc: "Serving a diverse range of industries across the country." }
  ];



  const processSteps = [
    { num: 1, title: "Request a Quote", desc: "Tell us your requirements and volume." },
    { num: 2, title: "Design Solution", desc: "We tailor the perfect packaging specs." },
    { num: 3, title: "Production & QA", desc: "Manufactured to high quality standards." },
    { num: 4, title: "Delivered to You", desc: "Fast and reliable shipping nationwide." }
  ];

  const testimonials = [
    { quote: "DBPack completely transformed our logistics. Their corrugated boxes are the strongest we've used.", name: "John Doe", company: "RetailPlus" }, // {/* TODO: replace with real testimonial */}
    { quote: "Outstanding service and 98% on-time delivery. They truly act as a partner in our supply chain.", name: "Sarah Jenkins", company: "TechCorp Logistics" }, // {/* TODO: replace with real testimonial */}
    { quote: "The custom stretch films they provide helped us reduce damage during transit by over 40%.", name: "Mike Alvarez", company: "GlobalShipping Co." }, // {/* TODO: replace with real testimonial */}
    { quote: "Reliable, high-quality, and cost-effective. We couldn't ask for a better packaging partner.", name: "David Chen", company: "FreshFoods Inc." } // {/* TODO: replace with real testimonial */}
  ];

  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <section className="hero-section">
        {heroImages.map((img, idx) => (
          <div 
            key={idx}
            className="hero-bg-slide"
            style={{ 
              backgroundImage: `url(${img})`,
              opacity: currentHeroIdx === idx ? 1 : 0
            }}
          />
        ))}
        <div className="hero-overlay"></div>

        <div className="container hero-content">
          <div className="hero-text animate-fade-in">
            <h1>SMART PACKAGING<br />STRONGER FUTURE</h1>
            <p>High quality packaging solutions for every industry.<br />Reliable. Sustainable. Customizable.</p>
            <Link to="/quote" className="btn btn-primary hero-btn">
              REQUEST A QUOTE <ChevronRight size={18} style={{marginLeft: '5px'}}/>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Featured Products */}
      <section className="products-section section">
        <div className="container">
          <div className="section-header products-section-header">
            <div>
              <h4 className="section-subtitle">OUR PRODUCTS</h4>
              <h2>Packaging Solutions Built for Every Need</h2>
            </div>
            <Link to="/products" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>VIEW ALL PRODUCTS</Link>
          </div>
        </div>
          
        <div className="carousel-container" style={{ position: 'relative', boxSizing: 'border-box', width: '100%' }}>
          <button className="carousel-btn left" onClick={scrollLeft} aria-label="Previous Products">
            <ArrowLeft size={20} />
          </button>
          <div className="products-grid" ref={carouselRef} style={{ padding: '10px 0' }}>
            {products.map((p, i) => (
                <Link to={`/product/${p.id}`} key={i} className="product-card" style={{ display: 'block', textDecoration: 'none' }}>
                  <div className="product-img-mock" style={{ overflow: 'hidden', padding: '20px', backgroundColor: 'var(--white)', borderBottom: '1px solid var(--border-color)' }}>
                    <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <div className="product-info">
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                    <span className="view-details" style={{ display: 'inline-block', marginTop: '15px', color: 'var(--secondary-color)', fontWeight: '600', fontSize: '0.9rem' }}>View details →</span>
                  </div>
                </Link>
            ))}
          </div>
          <button className="carousel-btn right" onClick={scrollRight} aria-label="Next Products">
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* 3. About Section */}
      <section className="about-snippet section bg-surface-1">
        <div className="container about-grid">
          <div className="about-text">
            <h4 className="section-subtitle">ABOUT US</h4>
            <h2>Who We Are</h2>
            <p>
              DBPack is a trusted name in the packaging industry, delivering high-quality, cost-effective, and sustainable packaging solutions to businesses of all sizes. 
            </p>
            <p style={{ color: 'var(--text-light)', marginBottom: '20px' }}>
              <strong>Our Story:</strong> Starting with a small facility over a decade ago, we recognized a gap in reliable B2B packaging. Today, we've grown into a comprehensive manufacturing partner that ensures your products are well-protected and presented at their best.
            </p>
            
            <div className="about-stats">
              <div className="about-stat">
                <strong>50,000+</strong>
                <span>Sq.Ft Facility</span>
                {/* TODO: replace with real facility size */}
              </div>
              <div className="about-stat">
                <strong>120+</strong>
                <span>Team Members</span>
                {/* TODO: replace with real team size */}
              </div>
              <div className="about-stat">
                <strong>15+</strong>
                <span>Product Lines</span>
              </div>
            </div>

            <div className="mission-vision-grid" style={{ marginTop: '0' }}>
              <div className="mv-item">
                <Target size={24} className="mv-icon"/>
                <div>
                  <h5 style={{ fontSize: '1.05rem' }}>Our Mission</h5>
                  <p style={{ fontSize: '0.85rem' }}>To deliver innovative and sustainable packaging solutions.</p>
                </div>
              </div>
              <div className="mv-item">
                <Eye size={24} className="mv-icon"/>
                <div>
                  <h5 style={{ fontSize: '1.05rem' }}>Our Vision</h5>
                  <p style={{ fontSize: '0.85rem' }}>To be a leading provider known for quality and reliability.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-photo-grid">
             {/* TODO: replace with real facility/team photos */}
            <img src="/assets/clean-warehouse.png" alt="Facility Main" className="about-photo-main" />
            <img src="/assets/boxes.png" alt="Production Line 1" className="about-photo-sub" />
            <img src="/assets/stretch-film.png" alt="Production Line 2" className="about-photo-sub" />
          </div>
        </div>
      </section>

      {/* CTA Patch */}
      <section className="cta-patch">
        <div className="container cta-patch-container">
          <h3 className="cta-patch-text">Schedule A Call Back Now!</h3>
          <Link to="/contact" className="cta-patch-btn">SEND REQUEST</Link>
        </div>
      </section>

      {/* 4. Client Logos (Trust Banner) */}
      <section className="client-logos">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h4 style={{ color: 'var(--text-light)', fontWeight: '500' }}>Trusted by businesses across industries</h4>
          </div>
        </div>
        
        <div className="marquee-wrapper">
          <div className="marquee-content">
            {[1, 2].map((track) => (
              <div key={track} className="marquee-track">
                <div className="logo-placeholder">TechCorp</div>
                <div className="logo-placeholder">GlobalShipping</div>
                <div className="logo-placeholder">RetailPlus</div>
                <div className="logo-placeholder">EcoGoods</div>
                <div className="logo-placeholder">FreshFoods</div>
                <div className="logo-placeholder">BuildRight</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Process / How it works */}
      <section className="process-section section bg-surface-2" ref={processRef}>
        <div className="container">
          <h4 className="section-subtitle">HOW IT WORKS</h4>
          <h2>Simple & Seamless Process</h2>
          
          <div className="process-grid" style={{ '--progress': scrollProgress } as React.CSSProperties}>
            {processSteps.map((step, i) => {
              const stepThreshold = i * 0.25;
              const isActive = scrollProgress > stepThreshold;
              return (
                <div key={i} className={`process-step ${isActive ? 'active' : ''}`}>
                  <div className="process-number">{step.num}</div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us */}
      <section className="why-choose-section section bg-surface-1">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <h4 className="section-subtitle">WHY CHOOSE DBPACK?</h4>
            <h2>The DBPack Advantage</h2>
          </div>
          <div className="why-choose-grid">
            {whyChoose.map((w, i) => (
              <div key={i} className="why-choose-item">
                <div className="wc-icon">{w.icon}</div>
                <div>
                  <h5>{w.title}</h5>
                  <p>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="testimonials-section section bg-white">
        <div className="container">
          <h4 className="section-subtitle">CLIENT FEEDBACK</h4>
          <h2>What Our Partners Say</h2>
          
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <Quote size={24} className="quote-icon" />
                <div className="stars">
                  {'★★★★★'.split('').map((star, idx) => <span key={idx}>{star}</span>)}
                </div>
                <p className="testimonial-text">"{t.quote}"</p>
                <div className="client-info">
                  <h6>{t.name}</h6>
                  <span>{t.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA Section */}
      <section className="cta-section">
        <div className="container cta-content">
          <div className="cta-text">
            <h2>Need a Custom Packaging Solution?</h2>
            <p>Request a quote or send us your requirements.</p>
            <Link to="/quote" className="btn btn-secondary cta-btn">REQUEST A QUOTE</Link>
          </div>
          <div className="cta-graphics">
            <div className="mock-clipboard">📋</div>
            <div className="mock-box-small">📦</div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
