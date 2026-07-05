import './Products.css';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Products = () => {
  return (
    <div className="products-page-container">
      
      {/* Hero Banner */}
      <section className="products-hero">
        <div className="products-hero-overlay"></div>
        <motion.div 
          className="container products-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Our Packaging Catalog</h1>
          <p>Explore our premium range of industrial and retail packaging solutions, engineered for maximum protection and aesthetic appeal.</p>
        </motion.div>
      </section>

      {/* Main Grid */}
      <section className="products-main-section">
        <div className="container">
          <div className="page-breadcrumb" style={{ marginBottom: '40px', fontSize: '0.95rem' }}>
            <Link to="/" style={{ color: '#64748b', textDecoration: 'none' }}>DB Packer</Link> 
            <span style={{ margin: '0 10px', color: '#cbd5e1' }}>/</span> 
            <span style={{ color: '#0f172a', fontWeight: '500' }}>Products</span>
          </div>

          <div className="premium-products-grid">
            {products.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link to={`/product/${p.id}`} className="premium-product-card">
                  <div className="premium-product-img-wrapper">
                    <img src={p.img} alt={p.title} />
                  </div>
                  <div className="premium-product-info">
                    <span className="premium-product-cat">{p.category}</span>
                    <h4 className="premium-product-title">{p.title}</h4>
                    <p className="premium-product-desc">{p.desc}</p>
                    <div className="premium-product-btn">
                      View Specifications <ArrowRight size={16} style={{ verticalAlign: 'middle', marginLeft: '5px' }}/>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="products-cta-section">
        <div className="container products-cta-content">
          <h2>Need a Custom Solution?</h2>
          <p>We manufacture highly customized packaging tailored to your exact product dimensions, material requirements, and branding.</p>
          <Link to="/quote" className="btn btn-primary" style={{ padding: '15px 40px', fontSize: '1.1rem', borderRadius: '50px' }}>
            REQUEST A CUSTOM QUOTE
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Products;
