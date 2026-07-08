import { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { ArrowRight, Search, SlidersHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Products.css';

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Available categories based on actual product data
  const categories = ['All', 'Boxes', 'Cartons', 'Blisters', 'Pouches', 'Tapes', 'Labels'];

  // Filter logic
  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="products-page-container">
      {/* Hero Banner */}
      <section className="products-hero" aria-label="Catalog Hero">
        <div className="products-hero-overlay"></div>
        <motion.div 
          className="container products-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Our Packaging Catalog</h1>
          <p>Explore our premium range of industrial and retail B2B packaging solutions, engineered for maximum durability, security, and branding appeal.</p>
        </motion.div>
      </section>

      {/* Catalog Search, Filter, and Grid Section */}
      <section className="products-main-section">
        <div className="container">
          <div className="page-breadcrumb" style={{ marginBottom: '30px', textAlign: 'left', paddingTop: '0' }}>
            <Link to="/">Home</Link> 
            <span style={{ margin: '0 10px', color: 'var(--text-light)', opacity: 0.5 }}>/</span> 
            <span style={{ color: 'var(--text-color)', fontWeight: '600' }}>Products</span>
          </div>

          {/* Search & Category Filter Controls */}
          <div className="catalog-controls-container">
            {/* Search input wrapper */}
            <div className="search-and-toggle-wrapper">
              <div className="search-bar-wrapper">
                <Search className="search-icon" size={20} />
                <input 
                  type="text" 
                  placeholder="Search products, materials, boxes..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                  aria-label="Search catalog"
                />
                {searchQuery && (
                  <button 
                    className="clear-search-btn"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search"
                  >
                    &times;
                  </button>
                )}
              </div>
              <button 
                className="mobile-filter-toggle-btn" 
                onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                aria-label="Toggle Filters"
              >
                <SlidersHorizontal size={20} />
                <span>Filters</span>
              </button>
            </div>

            {/* Category Filter Tabs */}
            <div className={`filter-tabs-wrapper ${isMobileFilterOpen ? 'mobile-open' : ''}`} role="tablist" aria-label="Product categories">
              <div className="filter-label-icon">
                <SlidersHorizontal size={16} />
                <span>Filters:</span>
              </div>
              <div className="filter-tabs">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={selectedCategory === cat}
                    className={`filter-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setIsMobileFilterOpen(false); // Close on selection on mobile
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid display */}
          <div className="catalog-results-info">
            Showing {filteredProducts.length} B2B products
          </div>

          {filteredProducts.length > 0 ? (
            <motion.div 
              layout
              className="premium-products-grid"
            >
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((p) => (
                  <motion.div
                    layout
                    key={p.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link to={`/product/${p.id}`} className="premium-product-card">
                      <div className="premium-product-img-wrapper">
                        <img src={p.img} alt={p.title} loading="lazy" />
                      </div>
                      <div className="premium-product-info">
                        <span className={`premium-product-cat cat-${p.category.toLowerCase()}`}>
                          {p.category}
                        </span>
                        <h4 className="premium-product-title">{p.title}</h4>
                        <p className="premium-product-desc">{p.desc}</p>
                        <div className="premium-product-btn" role="button">
                          View Specifications <ArrowRight size={16} style={{ verticalAlign: 'middle', marginLeft: '5px' }}/>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="no-results-message">
              <h3>No packaging products match your search.</h3>
              <p>Try searching for general terms like "box", "kraft paper", or select another category filter.</p>
              <button className="btn btn-primary" onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}>
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="products-cta-section" aria-label="Custom Quote request">
        <div className="container products-cta-content">
          <h2>Need a Custom Solution?</h2>
          <p>We manufacture highly customized packaging tailored to your exact product dimensions, specific B2B material requirements, and custom brand graphics.</p>
          <Link to="/quote" className="btn btn-primary products-cta-pill-btn">
            REQUEST A CUSTOM QUOTE
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
