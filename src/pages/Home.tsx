import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowLeft, ArrowRight, Quote, Plus, Minus, CheckCircle, Factory, ShieldCheck, Trophy, ShoppingCart, Coffee, HeartPulse, MousePointerClick, MessageSquare, PackageCheck, Truck, TrendingUp, Headset, Shield, Package, Leaf, Map } from 'lucide-react';
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
  const processRefMobile = useRef<HTMLDivElement>(null);
  const processRefDesktop = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth <= 768;
      const ref = isMobile ? processRefMobile.current : processRefDesktop.current;
      
      if (ref) {
        const rect = ref.getBoundingClientRect();
        let progress = 0;

        // Both desktop and mobile now use a vertical layout for the process section
        // Progress fills vertically as the user scrolls through the section height
        const triggerPoint = window.innerHeight * 0.65;
        progress = (triggerPoint - rect.top) / (rect.height * 0.85);

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
    { num: 1, title: "Tell Us", desc: "Your Need", details: "We listen to your needs and understand your goals.", icon: MessageSquare },
    { num: 2, title: "Get Solution", desc: "& Quote", details: "We provide the right solution and a transparent quote.", icon: PackageCheck },
    { num: 3, title: "We Manufacture", desc: "& Deliver", details: "We manufacture with precision and deliver on time.", icon: Truck },
    { num: 4, title: "You Grow", desc: "We Support", details: "We're with you for long-term growth and success.", icon: TrendingUp }
  ];

  const testimonials = [
    { quote: "DBPack completely transformed our logistics. Their corrugated boxes are the strongest we've used.", name: "John Doe", company: "RetailPlus" },
    { quote: "Outstanding service and 98% on-time delivery. They truly act as a partner in our supply chain.", name: "Sarah Jenkins", company: "TechCorp Logistics" },
    { quote: "The custom stretch films they provide helped us reduce damage during transit by over 40%.", name: "Mike Alvarez", company: "GlobalShipping Co." },
    { quote: "Reliable, high-quality, and cost-effective. We couldn't ask for a better packaging partner.", name: "David Chen", company: "FreshFoods Inc." }
  ];

  const industries = [
    { name: "E-commerce\n& Retail", icon: ShoppingCart, img: "/assets/ind-ecommerce.png" },
    { name: "Food &\nBeverage", icon: Coffee, img: "/assets/ind-food.png" },
    { name: "Industrial\nManufacturing", icon: Factory, img: "/assets/ind-manufacturing.png" },
    { name: "Logistics &\nHealthcare", icon: HeartPulse, img: "/assets/ind-logistics.png" }
  ];

  const faqs = [
    { q: "What is your minimum order quantity (MOQ)?", a: "Our MOQ depends on the specific product category, but we generally cater to both mid-sized and enterprise volumes. Contact us for a precise quote based on your needs." },
    { q: "Do you offer custom branding and printing?", a: "Yes! We provide full customization services, including custom dimensions, high-quality printing, and branding for all our corrugated boxes and tapes." },
    { q: "How fast is your typical delivery time?", a: "Standard products are typically dispatched within 24-48 hours. Custom printed orders generally take 7-10 business days." },
    { q: "Are your packaging materials eco-friendly?", a: "We prioritize sustainability. Many of our corrugated solutions are made from recycled materials and are 100% recyclable." }
  ];

  return (
    <div className="home-page">
      {/* --- MOBILE ONLY UI (Matches Mockup) --- */}
      <div className="mobile-only-home">
        {/* Mobile Hero */}
        <section className="mobile-hero">
          <div className="mobile-hero-bg">
            <div className="mobile-hero-overlay"></div>
          </div>
          <div className="mobile-hero-content">
            <div className="mobile-iso-badge">
              <ShieldCheck size={14} style={{ marginRight: '6px' }} /> <span>ISO 9001:2015 Certified Company</span>
            </div>
            <h1>Reliable Packaging.<br/>Every Time.</h1>
            <p>High-quality boxes and cartons<br/>for every business need.</p>
            <Link to="/quote" className="btn btn-primary mobile-hero-btn">
              Request a Quote <ArrowRight size={16} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </section>
      </div>

      <div className="desktop-only-home">
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
                className="product-card-wrapper"
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

      <div className="mobile-only-home">
        {/* Mobile About Section */}
        <section className="mobile-about-section">
          <div className="mobile-about-content">
            <h4 className="m-about-subtitle">ABOUT US</h4>
            <h2 className="m-about-title">We <span className="text-blue">Pack.</span><br/>You Relax.</h2>
            <p className="m-about-text">
              Reliable packaging solutions<br/>
              built to protect your products<br/>
              and strengthen your brand.
            </p>
            <Link to="/about" className="btn btn-primary m-about-btn">
              Learn More <ArrowRight size={16} style={{ marginLeft: '4px' }} />
            </Link>
          </div>
          
          <div className="mobile-about-visuals">
             <div className="m-about-dots"></div>
             <div className="m-about-image-wrapper">
                <img src="/assets/clean-warehouse.png" alt="Warehouse" />
                <div className="m-about-blue-curve"></div>
             </div>
             <div className="m-about-top-triangle"></div>
          </div>
        </section>

        {/* Mobile Industries Section */}
        <section className="mobile-industries-section">
          <div className="mobile-section-header">
            <h4 className="m-ind-subtitle">INDUSTRIES WE SERVE</h4>
            <h2 className="m-ind-title">Packaging for Every<br/>Sector</h2>
          </div>
          <div className="m-ind-grid">
            {industries.map((ind, i) => (
              <div key={i} className="m-ind-card">
                <div className="m-ind-img-wrap">
                  <img src={ind.img} alt={ind.name} />
                </div>
                <span className="m-ind-name">
                  {ind.name.split('\n').map((part, idx) => (
                    <span key={idx}>{part}<br /></span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Mobile Capabilities Section */}
        <section className="mobile-capabilities-section">
          <div className="m-cap-header">
            <h3 className="m-cap-title">OUR CAPABILITIES</h3>
            <div className="m-cap-divider"></div>
          </div>
          <div className="m-cap-grid">
            <div className="m-cap-item">
              <Map size={24} className="m-cap-icon" strokeWidth={1.5} />
              <span className="m-cap-num">50K+</span>
              <span className="m-cap-text">Sq.Ft Facility</span>
            </div>
            <div className="m-cap-separator"></div>
            <div className="m-cap-item">
              <ShieldCheck size={24} className="m-cap-icon" strokeWidth={1.5} />
              <span className="m-cap-num">ISO 9001</span>
              <span className="m-cap-text">Certified</span>
            </div>
            <div className="m-cap-separator"></div>
            <div className="m-cap-item">
              <Trophy size={24} className="m-cap-icon" strokeWidth={1.5} />
              <span className="m-cap-num">10M+</span>
              <span className="m-cap-text">Units Monthly</span>
            </div>
            <div className="m-cap-separator"></div>
            <div className="m-cap-item">
              <CheckCircle size={24} className="m-cap-icon" strokeWidth={1.5} />
              <span className="m-cap-num">100%</span>
              <span className="m-cap-text">Quality<br/>Assured</span>
            </div>
          </div>
        </section>

        {/* Mobile Process / How it works */}
        <section className="mobile-process-section section" ref={processRefMobile}>
          <div className="container">
            <div className="dp-header" style={{ marginBottom: '40px', textAlign: 'center' }}>
              <h4 className="dp-subtitle">HOW IT WORKS</h4>
              <h2 className="dp-title" style={{ fontSize: '2.2rem' }}>Turning Ideas Into Impact</h2>
              <p className="dp-desc" style={{ fontSize: '1rem' }}>Our proven process to deliver packaging that performs.</p>
            </div>

            <div className="process-grid m-process-grid" style={{ '--progress': scrollProgress } as React.CSSProperties}>
              {processSteps.map((step, i) => {
                const stepThreshold = i * 0.25;
                const isActive = scrollProgress > stepThreshold;
                const Icon = step.icon;
                return (
                  <div key={i} className={`process-step ${isActive ? 'active' : ''}`}>
                    <div className="dp-icon-wrapper" style={{ width: '70px', height: '70px', marginBottom: '15px' }}>
                      <Icon size={24} strokeWidth={2} />
                    </div>
                    <div className="dp-num" style={{ fontSize: '0.9rem', marginBottom: '5px' }}>0{step.num}</div>
                    <h4 className="dp-step-title" style={{ fontSize: '1.1rem', marginBottom: '5px' }}>{step.title}<br/>{step.desc}</h4>
                    <p className="dp-step-details" style={{ fontSize: '0.85rem' }}>{step.details}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* Mobile Testimonials */}
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

        {/* Mobile CTA */}
        <section className="mobile-cta-section">
          <div className="mobile-cta-card">
             <div className="mcta-icon-wrap">
               <PackageCheck size={28} color="#ffffff" strokeWidth={1.5} />
             </div>
             <div className="mcta-text">
               <h3>Need Custom Packaging<br/>for Your Business?</h3>
               <p>Our experts are ready to help.</p>
               <Link to="/contact" className="btn btn-secondary mcta-btn">
                 Contact Us <ArrowRight size={16} style={{ marginLeft: '8px' }} />
               </Link>
             </div>
          </div>
        </section>
      </div>

      <div className="desktop-only-home">
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
                    <img src={ind.img} alt={ind.name} className="ind-img" />
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

      {/* 6. Desktop Process / How it works (Matches Dark Theme Mockup) */}
      <section className="desktop-process-section section" ref={processRefDesktop}>
        <div className="container">
          <div className="dp-header">
            <h4 className="dp-subtitle">HOW IT WORKS</h4>
            <h2 className="dp-title">Turning Ideas Into Impact</h2>
            <p className="dp-desc">Our proven process to deliver packaging that performs.</p>
          </div>

          <div className="desktop-process-grid">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="desktop-process-step">
                  <div className="dp-icon-wrapper">
                    <Icon size={32} strokeWidth={2} />
                  </div>
                  <div className="dp-num">0{step.num}</div>
                  <h4 className="dp-step-title">
                    {step.title}<br/>{step.desc}
                  </h4>
                  <p className="dp-step-details">{step.details}</p>
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
    </div>
  );
};

export default Home;
