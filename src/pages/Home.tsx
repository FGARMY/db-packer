import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowLeft, ArrowRight, Quote, Plus, Minus, CheckCircle, Factory, ShieldCheck, Trophy, ShoppingCart, Coffee, HeartPulse, MousePointerClick, MessageSquare, PackageCheck, Truck, TrendingUp, Headset } from 'lucide-react';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import { SITE_CONFIG } from '../config/site';
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
    }, 5000);
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
    { num: 1, title: "Tell Us", desc: "Your Need", icon: MessageSquare },
    { num: 2, title: "Get Solution", desc: "& Quote", icon: PackageCheck },
    { num: 3, title: "We Manufacture", desc: "& Deliver", icon: Truck },
    { num: 4, title: "You Grow", desc: "We Support", icon: TrendingUp }
  ];

  const testimonials = [
    { quote: "DBPack completely transformed our logistics. Their corrugated boxes are the strongest we've used.", name: "John Doe", company: "RetailPlus" },
    { quote: "Outstanding service and 98% on-time delivery. They truly act as a partner in our supply chain.", name: "Sarah Jenkins", company: "TechCorp Logistics" },
    { quote: "The custom stretch films they provide helped us reduce damage during transit by over 40%.", name: "Mike Alvarez", company: "GlobalShipping Co." },
    { quote: "Reliable, high-quality, and cost-effective. We couldn't ask for a better packaging partner.", name: "David Chen", company: "FreshFoods Inc." }
  ];

  const industries = [
    { name: "E-commerce\n& Retail", icon: ShoppingCart },
    { name: "Food &\nBeverage", icon: Coffee },
    { name: "Industrial\nManufacturing", icon: Factory },
    { name: "Logistics &\nHealthcare", icon: HeartPulse }
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

        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1>SMART PACKAGING<br />STRONGER FUTURE</h1>
            <p>High quality packaging solutions for every industry.<br />Reliable. Sustainable. Customizable.</p>
            <Link to="/quote" className="btn btn-primary hero-btn">
              REQUEST A QUOTE <ChevronRight size={18} style={{ marginLeft: '5px' }} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Strip / Top Strip (replacing the old SubHeader) */}
      <div className="top-strip">
        <div className="container top-strip-content">
          <div className="top-strip-left">
            An ISO 9001:2015 Certified Company
          </div>
          <div className="top-strip-right">
            <span>Call Us!</span>
            <a href={`tel:${SITE_CONFIG.contact.phone.replace(/[^0-9+]/g, '')}`} className="top-strip-btn">
              CALL NOW
            </a>
          </div>
        </div>
      </div>

      {/* 2. Featured Products */}
      <section className="products-section section" style={{ position: 'relative' }}>
        {/* Large faint watermark to fill empty space */}
        <div style={{ position: 'absolute', top: '10px', left: '5%', fontSize: '7rem', fontWeight: 900, color: 'rgba(45,45,191,0.04)', pointerEvents: 'none', zIndex: 0, letterSpacing: '4px', lineHeight: 1, userSelect: 'none' }}>
          CATALOG
        </div>

        <div className="products-section-header" style={{ position: 'relative', zIndex: 1, alignItems: 'center' }}>
          <div>
            <h2>OUR PRODUCTS</h2>
            <div style={{ width: '40px', height: '4px', backgroundColor: 'var(--secondary-color)', marginTop: '8px', borderRadius: '2px' }}></div>
          </div>
          <Link to="/products" className="btn btn-primary" style={{ alignSelf: 'center', display: 'flex', alignItems: 'center', gap: '6px' }}>
            VIEW ALL PRODUCTS <ChevronRight size={16} />
          </Link>
        </div>

        <div className="carousel-container" style={{ position: 'relative', boxSizing: 'border-box', width: '100%' }}>
          <button className="carousel-btn left" onClick={scrollLeft} aria-label="Previous Products">
            <ArrowLeft size={20} />
          </button>
          <div className="products-grid" ref={carouselRef} style={{ padding: '10px 0' }}>
            {products.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link to={`/product/${p.id}`} className="product-card" style={{ display: 'block', textDecoration: 'none' }}>
                  <div className="product-img-mock" style={{ overflow: 'hidden', padding: '20px', backgroundColor: 'var(--white)', borderBottom: '1px solid var(--border-color)' }}>
                    <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <div className="product-info">
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                    <span className="view-details" style={{ display: 'inline-block', marginTop: '15px', color: 'var(--secondary-color)', fontWeight: '600', fontSize: '0.9rem' }}>View details →</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <button className="carousel-btn right" onClick={scrollRight} aria-label="Next Products">
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* 3. About & Industries Combined */}
      <section className="about-industries-combined section bg-surface-1">
        <div className="aic-container">

          {/* Left: About Us */}
          <div className="aic-about-col">
            <h4 className="section-subtitle">ABOUT US</h4>
            <h2 className="aic-title">
              Packaging Solutions<br />That <span style={{ color: 'var(--primary-color)' }}>Protect.</span> Always.
            </h2>
            <p className="aic-desc">
              DBPack delivers high-quality, cost-effective, and sustainable packaging solutions to businesses of all sizes.
            </p>
            <Link to="/about" className="btn btn-primary aic-btn">
              Learn More<ArrowRight size={18} />
            </Link>
          </div>

          {/* Center: Slanted Image */}
          <div className="aic-image-col">
            <div className="aic-slanted-wrapper">
              <div className="aic-image-inner">
                <img src="/assets/clean-warehouse.png" alt="Warehouse Facility" className="aic-image" />
              </div>
            </div>
          </div>

          {/* Right: Industries */}
          <div className="aic-industries-col">
            <h4 className="section-subtitle" style={{ textAlign: 'left' }}>INDUSTRIES WE SERVE</h4>
            <h2 className="aic-title-small" style={{ textAlign: 'left' }}>Packaging for Every Sector</h2>

            <div className="aic-icons-row">
              {industries.map((ind, i) => (
                <div key={i} className="aic-icon-item">
                  <div className="aic-icon-box">
                    <ind.icon size={30} strokeWidth={1.5} />
                  </div>
                  <span className="aic-icon-text">
                    {ind.name.split('\n').map((part, idx) => (
                      <span key={idx}>{part}<br /></span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner-section">
        <div className="cta-banner-bg">
          <img src="/assets/clean-warehouse.png" alt="Warehouse Background" />
          <div className="cta-banner-overlay"></div>
        </div>

        <div className="cta-banner-content">
          <h2>Schedule A Call Back Now!</h2>
          <p>Let's find the right packaging solution for your business.</p>
          <Link to="/contact" className="btn btn-primary cta-btn">
            SEND REQUEST <MousePointerClick size={16} />
          </Link>
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
      <section className="capabilities-section section bg-white">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h4 className="section-subtitle" style={{ color: 'var(--primary-color)' }}>OUR CAPABILITIES</h4>
            <h2 style={{ color: 'var(--text-color)' }}>Scale & Quality You Can Trust</h2>
          </div>

          <div className="capabilities-stats-grid">
            <div className="cap-stat-item">
              <div className="cap-stat-icon-wrap">
                <Factory size={36} strokeWidth={1.5} />
              </div>
              <h3 className="cap-stat-number">50,000+</h3>
              <p className="cap-stat-label">Sq.Ft Manufacturing<br />Facility</p>
            </div>

            <div className="cap-stat-divider"></div>

            <div className="cap-stat-item">
              <div className="cap-stat-icon-wrap">
                <ShieldCheck size={36} strokeWidth={1.5} />
              </div>
              <h3 className="cap-stat-number">ISO 9001</h3>
              <p className="cap-stat-label">Certified for Quality<br />Management</p>
            </div>

            <div className="cap-stat-divider"></div>

            <div className="cap-stat-item">
              <div className="cap-stat-icon-wrap">
                <Trophy size={36} strokeWidth={1.5} />
              </div>
              <h3 className="cap-stat-number">10M+</h3>
              <p className="cap-stat-label">Units Produced<br />Monthly</p>
            </div>

            <div className="cap-stat-divider"></div>

            <div className="cap-stat-item">
              <div className="cap-stat-icon-wrap">
                <CheckCircle size={36} strokeWidth={1.5} />
              </div>
              <h3 className="cap-stat-number">100%</h3>
              <p className="cap-stat-label">Quality inspected</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Process / How it works */}
      <section className="process-section section bg-surface-2" ref={processRef}>
        <div className="container">
          <h4 className="section-subtitle" style={{ color: 'var(--primary-color)' }}>HOW IT WORKS</h4>
          <h2 style={{ color: 'var(--text-color)' }}>Simple & Seamless Process</h2>

          <div className="process-grid" style={{ '--progress': scrollProgress } as React.CSSProperties}>
            {processSteps.map((step, i) => {
              const stepThreshold = i * 0.25;
              const isActive = scrollProgress > stepThreshold;
              const Icon = step.icon;
              return (
                <div key={i} className={`process-step ${isActive ? 'active' : ''}`}>
                  <div className="process-number">
                    <Icon size={28} />
                  </div>
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
          <div className="faq-header">
            <h4 className="section-subtitle" style={{ color: 'var(--primary-color)' }}>FAQ</h4>
            <h2 style={{ color: 'var(--primary-color)', marginBottom: '15px' }}>Common Questions</h2>
            <div className="faq-title-underline"></div>
          </div>

          <div className="faq-container">
            <div className="faq-list">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`faq-item ${openFaq === i ? 'open' : ''}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className="faq-question">
                    <h5>{faq.q}</h5>
                    <div className="faq-icon-wrapper">
                      {openFaq === i ? <Minus size={16} strokeWidth={3} /> : <Plus size={16} strokeWidth={3} />}
                    </div>
                  </div>
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="faq-cta-box">
              <div className="faq-cta-icon">
                <Headset size={28} />
              </div>
              <div className="faq-cta-text">
                <p>Can't find what you're looking for?</p>
                <Link to="/contact" className="faq-cta-link">Talk to our expert &rarr;</Link>
              </div>
            </div>
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
