import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Target, Eye, ArrowLeft, ArrowRight, Quote, Plus, Minus, CheckCircle, Factory, ShieldCheck, Trophy } from 'lucide-react';
import { products } from '../data/products';
import SubHeader from '../components/SubHeader';
import './Home.css';

const Home = () => {
  const [currentHeroIdx, setCurrentHeroIdx] = useState(0);
  const heroImages = [
    "/assets/hero-mono-cartons.png",
    "/assets/hero-corrugated-boxes.png",
    "/assets/hero-rigid-boxes.png",
    "/assets/hero-pouches.png"
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (processRef.current) {
        const rect = processRef.current.getBoundingClientRect();
        let progress = 0;
        
        if (window.innerWidth <= 768) {
          // Mobile: line fills vertically as user scrolls through the section
          const triggerPoint = window.innerHeight * 0.6;
          progress = (triggerPoint - rect.top) / (rect.height * 0.85);
        } else {
          // Desktop: line fills horizontally quickly as section enters viewport
          const start = window.innerHeight * 0.85;
          const end = window.innerHeight * 0.35;
          progress = (start - rect.top) / (start - end);
        }
        
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

  const processSteps = [
    { num: 1, title: "Request a Quote", desc: "Tell us your requirements and volume." },
    { num: 2, title: "Design Solution", desc: "We tailor the perfect packaging specs." },
    { num: 3, title: "Production & QA", desc: "Manufactured to high quality standards." },
    { num: 4, title: "Delivered to You", desc: "Fast and reliable shipping nationwide." }
  ];

  const testimonials = [
    { quote: "DBPack completely transformed our logistics. Their corrugated boxes are the strongest we've used.", name: "John Doe", company: "RetailPlus" }, 
    { quote: "Outstanding service and 98% on-time delivery. They truly act as a partner in our supply chain.", name: "Sarah Jenkins", company: "TechCorp Logistics" }, 
    { quote: "The custom stretch films they provide helped us reduce damage during transit by over 40%.", name: "Mike Alvarez", company: "GlobalShipping Co." }, 
    { quote: "Reliable, high-quality, and cost-effective. We couldn't ask for a better packaging partner.", name: "David Chen", company: "FreshFoods Inc." } 
  ];

  const industries = [
    { name: "E-commerce & Retail", img: "/assets/ind-ecommerce.png" },
    { name: "Food & Beverage", img: "/assets/ind-food.png" },
    { name: "Industrial Manufacturing", img: "/assets/ind-manufacturing.png" },
    { name: "Logistics & Healthcare", img: "/assets/ind-logistics.png" }
  ];

  const faqs = [
    { q: "What is your minimum order quantity (MOQ)?", a: "Our MOQ depends on the specific product category, but we generally cater to both mid-sized and enterprise volumes. Contact us for a precise quote based on your needs." },
    { q: "Do you offer custom branding and printing?", a: "Yes! We provide full customization services, including custom dimensions, high-quality printing, and branding for all our corrugated boxes and tapes." },
    { q: "How fast is your typical delivery time?", a: "Standard products are typically dispatched within 24-48 hours. Custom printed orders generally take 7-10 business days." },
    { q: "Are your packaging materials eco-friendly?", a: "We prioritize sustainability. Many of our corrugated solutions are made from recycled materials and are 100% recyclable." }
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

      <SubHeader />

      {/* 2. Featured Products */}
      <section className="products-section section">
        <div className="container">
          <div className="section-header products-section-header">
            <div>
              <h2>OUR PRODUCTS</h2>

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

      {/* 3. Industries We Serve */}
      <section className="industries-section section bg-surface-1">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h4 className="section-subtitle">INDUSTRIES WE SERVE</h4>
            <h2>Packaging for Every Sector</h2>
          </div>
          <div className="industries-grid">
            {industries.map((ind, i) => (
              <div key={i} className="industry-card">
                <img src={ind.img} alt={ind.name} className="industry-img" />
                <div className="industry-overlay">
                  <h4>{ind.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. About Section */}
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

      {/* 5. Capabilities / Quality */}
      <section className="capabilities-section section bg-primary dark-theme">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h4 className="section-subtitle" style={{ color: 'var(--surface-2)' }}>OUR CAPABILITIES</h4>
            <h2 style={{ color: 'var(--white)' }}>Scale & Quality You Can Trust</h2>
          </div>
          <div className="capabilities-grid">
            <div className="capability-card">
              <Factory size={40} className="cap-icon" />
              <h3>50,000+</h3>
              <p>Sq.Ft Manufacturing Facility</p>
            </div>
            <div className="capability-card">
              <ShieldCheck size={40} className="cap-icon" />
              <h3>ISO 9001</h3>
              <p>Certified for Quality Management</p>
            </div>
            <div className="capability-card">
              <Trophy size={40} className="cap-icon" />
              <h3>10M+</h3>
              <p>Units Produced Monthly</p>
            </div>
            <div className="capability-card">
              <CheckCircle size={40} className="cap-icon" />
              <h3>100%</h3>
              <p>Quality Inspected</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Process / How it works */}
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

      {/* 8. FAQ Section */}
      <section className="faq-section section bg-surface-1">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h4 className="section-subtitle">FAQ</h4>
            <h2>Common Questions</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`faq-item ${openFaq === i ? 'open' : ''}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="faq-question">
                  <h5>{faq.q}</h5>
                  {openFaq === i ? <Minus size={20} className="faq-icon" /> : <Plus size={20} className="faq-icon" />}
                </div>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA Section */}
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
