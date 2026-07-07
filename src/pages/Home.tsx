import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowLeft, ArrowRight, Quote, Plus, Minus, CheckCircle, Factory, ShieldCheck, Trophy, ShoppingCart, Coffee, HeartPulse, MousePointerClick, MessageSquare, PackageCheck, Truck, TrendingUp, Headset } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { products } from '../data/products';
import { SITE_CONFIG } from '../config/site';
import './Home.css';

// Counter component for animated stats
const StatCounter = ({ value, label, children }: { value: string; label: string; children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const numericVal = parseInt(value.replace(/[^0-9]/g, ''));
    if (isNaN(numericVal)) return;

    let start = 0;
    const end = numericVal;
    const duration = 1500;
    const stepTime = Math.max(Math.floor(duration / end), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / 100);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div className="cap-stat-item" ref={ref}>
      <div className="cap-stat-icon-wrap">
        {children}
      </div>
      <h3 className="cap-stat-number">
        {count.toLocaleString()}{value.includes('+') ? '+' : ''}
      </h3>
      <p className="cap-stat-label">{label}</p>
    </div>
  );
};

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
        const triggerPoint = window.innerHeight * 0.65;
        let progress = (triggerPoint - rect.top) / (rect.height * 0.85);
        progress = Math.max(0, Math.min(1, progress));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIdx((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [heroImages.length]);

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
    { num: 1, title: "Tell Us", desc: "Your Need", details: "We listen to your specific needs and B2B requirements.", icon: MessageSquare },
    { num: 2, title: "Get Solution", desc: "& Quote", details: "We propose custom designs and a transparent bulk quote.", icon: PackageCheck },
    { num: 3, title: "We Manufacture", desc: "& Deliver", details: "Precision production at our ISO facility with fast delivery.", icon: Truck },
    { num: 4, title: "You Grow", desc: "We Support", details: "We provide dedicated post-delivery support for long-term growth.", icon: TrendingUp }
  ];

  const testimonials = [
    { quote: "DBPack completely transformed our B2B logistics. Their corrugated boxes are the strongest we've used.", name: "John Doe", company: "RetailPlus Ltd", initial: "JD" },
    { quote: "Outstanding service and 98% on-time delivery. They truly act as a partner in our supply chain.", name: "Sarah Jenkins", company: "TechCorp Logistics", initial: "SJ" },
    { quote: "The custom stretch films they provide helped us reduce damage during transit by over 40%.", name: "Mike Alvarez", company: "GlobalShipping Co", initial: "MA" },
    { quote: "Reliable, high-quality, and cost-effective. We couldn't ask for a better packaging partner.", name: "David Chen", company: "FreshFoods Inc", initial: "DC" }
  ];

  const industries = [
    { name: "E-commerce\n& Retail", icon: ShoppingCart, img: "/assets/ind-ecommerce.png" },
    { name: "Food &\nBeverage", icon: Coffee, img: "/assets/ind-food.png" },
    { name: "Industrial\nManufacturing", icon: Factory, img: "/assets/ind-manufacturing.png" },
    { name: "Logistics &\nHealthcare", icon: HeartPulse, img: "/assets/ind-logistics.png" }
  ];

  const faqs = [
    { q: "What is your minimum order quantity (MOQ)?", a: "Our MOQ depends on the specific product category (typically starting from 1,000 units for custom cartons). We cater to mid-sized and enterprise volumes. Contact us for a precise quote based on your requirements." },
    { q: "Do you offer custom branding and printing?", a: "Yes, we provide full customization services, including custom sizes, multi-color high-quality flexographic and offset printing, and branding for all boxes, tapes, and cartons." },
    { q: "How fast is your typical delivery time?", a: "Standard inventory products are dispatched within 24-48 hours. Custom printed or die-cut packaging orders typically take 7-10 business days depending on design approval." },
    { q: "Are your packaging materials eco-friendly?", a: "We prioritize sustainability. Many of our corrugated boxes are made from recycled kraft paper and are 100% recyclable and biodegradable." },
    { q: "Do you supply samples before production?", a: "Yes, we can provide digital mockups and physical pre-production samples upon request to ensure dimensions and printing align perfectly with your standards." }
  ];

  return (
    <div className="home-page">
      {/* 1. Unified Hero Section */}
      <section className="hero-section" aria-label="Welcome Banner">
        <div className="hero-slides-container">
          {heroImages.map((img, idx) => (
            <div
              key={idx}
              className={`hero-bg-slide ${currentHeroIdx === idx ? 'active' : ''}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>
        <div className="hero-overlay"></div>

        <div className="container hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-iso-badge" role="status">
              <ShieldCheck size={16} className="badge-icon" /> 
              <span>ISO 9001:2015 Certified Company</span>
            </div>
            <h1>SMART PACKAGING.<br />STRONGER FUTURE.</h1>
            <p>Reliable. Sustainable. Custom packaging solutions engineered for every industry.</p>
            <div className="hero-actions">
              <Link to="/quote" className="btn btn-primary hero-btn">
                REQUEST A QUOTE <ChevronRight size={18} style={{ marginLeft: '4px' }} />
              </Link>
              <Link to="/products" className="btn btn-secondary hero-btn-secondary">
                EXPLORE CATALOG
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Trust Strip */}
      <div className="top-strip" role="note">
        <div className="top-strip-content">
          <div className="top-strip-left">
            <span className="bullet-glow">•</span> An ISO 9001:2015 Quality Assured Manufacturer
          </div>
          <div className="top-strip-right">
            <span>Call Our Experts:</span>
            <a href={`tel:${SITE_CONFIG.contact.phone.split(',')[0].trim()}`} className="top-strip-btn">
              CALL NOW
            </a>
          </div>
        </div>
      </div>

      {/* 3. Featured Products */}
      <section className="products-section section" style={{ position: 'relative' }}>
        <div className="products-bg-watermark" aria-hidden="true">
          CATALOG
        </div>

        <div className="products-section-header">
          <div>
            <h4 className="section-subtitle">OUR PRODUCT LINE</h4>
            <h2>Engineered for Excellence</h2>
            <div className="header-divider"></div>
          </div>
          <Link to="/products" className="btn btn-primary products-view-btn">
            VIEW ALL PRODUCTS <ChevronRight size={16} style={{ marginLeft: '4px' }} />
          </Link>
        </div>

        <div className="carousel-container">
          <button className="carousel-btn left" onClick={scrollLeft} aria-label="Scroll left">
            <ArrowLeft size={20} />
          </button>
          
          <div className="products-grid" ref={carouselRef}>
            {products.map((p, i) => (
              <motion.div
                key={p.id}
                className="product-card-wrapper"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Link to={`/product/${p.id}`} className="product-card">
                  <div className="product-img-mock">
                    <img src={p.img} alt={p.title} loading="lazy" />
                  </div>
                  <div className="product-info">
                    <span className="product-card-cat">{p.category}</span>
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                    <span className="view-details">View specifications →</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <button className="carousel-btn right" onClick={scrollRight} aria-label="Scroll right">
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* 4. Trusted By Logo Marquee */}
      <section className="trusted-ticker-section" aria-label="Trusted partners">
        <p className="ticker-label">Trusted by leading enterprises pan-India</p>
        <div className="ticker-container">
          <div className="ticker-track">
            {[...Array(5)].map((_, i) => (
              <span className="ticker-group" key={i} aria-hidden={i > 0}>
                <span className="ticker-item">TechCorp B2B</span>
                <span className="ticker-dot">•</span>
                <span className="ticker-item">GlobalShipping</span>
                <span className="ticker-dot">•</span>
                <span className="ticker-item">RetailPlus</span>
                <span className="ticker-dot">•</span>
                <span className="ticker-item">EcoGoods India</span>
                <span className="ticker-dot">•</span>
                <span className="ticker-item">FreshFoods Group</span>
                <span className="ticker-dot">•</span>
                <span className="ticker-item">BuildRight Packaging</span>
                <span className="ticker-dot">•</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. About & Industries Combined */}
      <section className="about-industries-combined section bg-surface-1">
        <div className="aic-container">
          {/* Left Column: About Us */}
          <div className="aic-about-col">
            <h4 className="section-subtitle">WHO WE ARE</h4>
            <h2 className="aic-title">
              We <span className="text-highlight">Pack.</span><br />You Relax.
            </h2>
            <p className="aic-desc">
              DBPack delivers high-durability, cost-effective, and fully recyclable packaging solutions to support your supply chain and elevate brand presentation.
            </p>
            <Link to="/about" className="btn btn-secondary aic-btn">
              OUR JOURNEY <ArrowRight size={18} style={{ marginLeft: '6px' }} />
            </Link>
          </div>

          {/* Middle Column: Slanted Facility Image */}
          <div className="aic-image-col">
            <div className="aic-slanted-wrapper">
              <div className="aic-image-inner">
                <img src="/facility.png" alt="DBPack manufacturing facility" className="aic-image" loading="lazy" />
              </div>
            </div>
          </div>

          {/* Right Column: Industries We Serve */}
          <div className="aic-industries-col">
            <h4 className="section-subtitle">INDUSTRIES WE SERVE</h4>
            <h2 className="aic-title-small">Custom Solutions per Sector</h2>
            <div className="aic-icons-row">
              {industries.map((ind, i) => (
                <div key={i} className="aic-icon-item">
                  <div className="aic-icon-box">
                    <img src={ind.img} alt={ind.name.replace('\n', ' ')} className="ind-img" loading="lazy" />
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

      {/* 6. CTA Banner Section */}
      <section className="cta-banner-section" aria-label="Call to action banner">
        <div className="cta-banner-bg">
          <img src="/facility.png" alt="Warehouse backdrop" loading="lazy" />
          <div className="cta-banner-overlay"></div>
        </div>
        <div className="cta-banner-content">
          <h2>Ready to Transform Your Packaging?</h2>
          <p>Get in touch with our design experts and optimize your logistics today.</p>
          <Link to="/contact" className="btn btn-primary cta-btn">
            TALK TO AN EXPERT <MousePointerClick size={16} style={{ marginLeft: '4px' }} />
          </Link>
        </div>
      </section>

      {/* 7. Capabilities Section */}
      <section className="capabilities-section section bg-white">
        <div className="container">
          <div className="section-header-centered">
            <h4 className="section-subtitle">OUR CAPACITY</h4>
            <h2>Scale &amp; Quality Assured</h2>
            <div className="header-divider centered"></div>
          </div>

          <div className="capabilities-stats-grid">
            <StatCounter value="50000" label="Sq.Ft Facility">
              <Factory size={36} strokeWidth={1.5} />
            </StatCounter>
            <div className="cap-stat-divider" role="separator"></div>
            <StatCounter value="9001" label="ISO certified">
              <ShieldCheck size={36} strokeWidth={1.5} />
            </StatCounter>
            <div className="cap-stat-divider" role="separator"></div>
            <StatCounter value="10000000" label="Units Monthly">
              <Trophy size={36} strokeWidth={1.5} />
            </StatCounter>
            <div className="cap-stat-divider" role="separator"></div>
            <StatCounter value="100" label="Quality Inspected">
              <CheckCircle size={36} strokeWidth={1.5} />
            </StatCounter>
          </div>
        </div>
      </section>

      {/* 8. Process Section */}
      <section className="process-section section bg-surface-3" ref={processRef}>
        <div className="container">
          <div className="dp-header">
            <h4 className="dp-subtitle">OUR PROCESS</h4>
            <h2 className="dp-title">Turning Ideas Into Impact</h2>
            <p className="dp-desc">Our proven, step-by-step workflow to deliver high-performance B2B packaging.</p>
            <div className="header-divider centered"></div>
          </div>

          {/* Responsive Process Flow */}
          <div className="process-flow-container">
            {/* Desktop Connector Line SVG */}
            <svg className="process-line-svg" viewBox="0 0 1000 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M 50 50 Q 175 0 300 50 T 550 50 T 800 50 T 950 50" stroke="#cbd5e1" strokeWidth="3" strokeDasharray="6,6" />
              <path d="M 50 50 Q 175 0 300 50 T 550 50 T 800 50 T 950 50" stroke="var(--primary-color)" strokeWidth="3" strokeDasharray="6,6" strokeDashoffset={1000 - (scrollProgress * 1000)} />
            </svg>

            <div className="process-steps-grid">
              {processSteps.map((step, i) => {
                const Icon = step.icon;
                const stepThreshold = i * 0.25;
                const isActive = scrollProgress > stepThreshold;
                return (
                  <div key={i} className={`process-step-block ${isActive ? 'active' : ''}`}>
                    <div className="dp-icon-wrapper">
                      <Icon size={30} strokeWidth={2} />
                    </div>
                    <div className="dp-num">0{step.num}</div>
                    <h4 className="dp-step-title">{step.title}<br />{step.desc}</h4>
                    <p className="dp-step-details">{step.details}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Testimonials */}
      <section className="testimonials-section section bg-white">
        <div className="container">
          <div className="section-header-centered">
            <h4 className="section-subtitle">PARTNER FEEDBACK</h4>
            <h2>What Our Clients Say</h2>
            <div className="header-divider centered"></div>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <Quote size={32} className="quote-icon" />
                <div className="stars" aria-label="5 star rating">
                  {[...Array(5)].map((_, idx) => (
                    <span key={idx} className="star-icon">★</span>
                  ))}
                </div>
                <p className="testimonial-text">"{t.quote}"</p>
                <div className="client-info-row">
                  <div className="client-avatar">{t.initial}</div>
                  <div>
                    <h6>{t.name}</h6>
                    <span>{t.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ Section */}
      <section className="faq-section section bg-surface-1">
        <div className="container">
          <div className="faq-header">
            <h4 className="section-subtitle">FAQ</h4>
            <h2>Common Questions</h2>
            <div className="header-divider centered"></div>
          </div>

          <div className="faq-container">
            <div className="faq-list">
              {faqs.map((faq, i) => (
                <div key={i} className="faq-item">
                  <button
                    className={`faq-question-btn ${openFaq === i ? 'open' : ''}`}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <h5>{faq.q}</h5>
                    <div className="faq-icon-wrapper">
                      {openFaq === i ? <Minus size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div
                        className="faq-answer-wrapper"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="faq-answer-content">
                          <p>{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="faq-cta-box">
              <div className="faq-cta-icon">
                <Headset size={28} />
              </div>
              <div className="faq-cta-text">
                <p>Can't find what you are looking for?</p>
                <Link to="/contact" className="faq-cta-link">Talk to our packaging expert &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Bottom CTA */}
      <section className="cta-section-bottom">
        <div className="container cta-bottom-card">
          <div className="cta-bottom-text">
            <h2>Optimize Your Packaging Today</h2>
            <p>Get wholesale B2B pricing and customizable design solutions for your bulk shipments.</p>
            <Link to="/quote" className="btn btn-secondary cta-bottom-btn">
              GET A FREE QUOTE
            </Link>
          </div>
          <div className="cta-graphics-wrap" aria-hidden="true">
            <div className="glow-circle"></div>
            <div className="floating-box-graphic">📦</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
