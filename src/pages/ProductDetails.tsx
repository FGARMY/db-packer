import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Check, Package, ShieldCheck, Truck, ArrowLeft, ZoomIn, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getProductById, products } from '../data/products';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState(id ? getProductById(id) : undefined);
  const [activeImage, setActiveImage] = useState<string>('');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (id) {
      const found = getProductById(id);
      if (found) {
        setProduct(found);
        setActiveImage(found.img);
      } else {
        navigate('/products');
      }
    }
    // Simulate page load for skeleton shimmer effect
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, [id, navigate]);

  if (!product) {
    return <div className="page-container" style={{ padding: '100px', textAlign: 'center' }}>Loading...</div>;
  }

  // Get related products from same category or different
  const relatedProducts = products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.category === 'Boxes'))
    .slice(0, 3);

  // JSON-LD Structured SEO Schema Markup
  const schemaMarkup = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.title,
    "image": `https://adbpack.com${product.img}`,
    "description": product.fullDesc,
    "brand": {
      "@type": "Brand",
      "name": "ADBPack"
    },
    "category": product.category,
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "Contact for bulk wholesale B2B pricing",
      "price": "B2B wholesale pricing upon inquiry",
      "priceCurrencySign": "₹",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "ADBPack"
      }
    }
  };

  return (
    <div className="page-container product-details-page-container">
      {/* Inject JSON-LD to Head dynamically */}
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>

      <div className="container">
        {/* Back and Breadcrumb Links */}
        <div className="product-breadcrumb-wrap">
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">›</span>
            <Link to="/products">Products</Link>
            <span className="breadcrumb-separator">›</span>
            <span className="breadcrumb-current">{product.title}</span>
          </div>
          <Link to="/products" className="back-catalog-link">
            <ArrowLeft size={16} /> Back to Catalog
          </Link>
        </div>

        {loading ? (
          /* Shimmer Skeleton Screen Loader */
          <div className="product-skeleton-screen">
            <div className="skeleton-image-gallery"></div>
            <div className="skeleton-info-block">
              <div className="skeleton-line title"></div>
              <div className="skeleton-line tag"></div>
              <div className="skeleton-line text"></div>
              <div className="skeleton-line text"></div>
              <div className="skeleton-line button"></div>
            </div>
          </div>
        ) : (
          /* Top Product Info block */
          <div className="product-top-section">
            {/* Left Column: Interactive Image Gallery */}
            <div className="product-gallery-block">
              <div className="main-image-container-wrap">
                <img src={activeImage} alt={product.title} className="product-main-img" />
                <button 
                  className="lightbox-zoom-btn"
                  onClick={() => setIsLightboxOpen(true)}
                  aria-label="Zoom image"
                >
                  <ZoomIn size={18} />
                </button>
              </div>
              
              {product.gallery && product.gallery.length > 0 && (
                <div className="thumbnail-list-row">
                  {/* Keep main image as first thumbnail if not already present */}
                  <button 
                    className={`thumbnail-item-btn ${activeImage === product.img ? 'active' : ''}`}
                    onClick={() => setActiveImage(product.img)}
                    aria-label={`View primary image`}
                  >
                    <img src={product.img} alt={`${product.title} main thumbnail`} />
                  </button>
                  {product.gallery.map((img, idx) => {
                    // Skip if thumbnail matches main image to avoid duplicates
                    if (img === product.img) return null;
                    return (
                      <button 
                        key={idx} 
                        className={`thumbnail-item-btn ${activeImage === img ? 'active' : ''}`}
                        onClick={() => setActiveImage(img)}
                        aria-label={`View details image ${idx + 1}`}
                      >
                        <img src={img} alt={`${product.title} thumbnail ${idx + 1}`} />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Middle Column: Technical and Marketing Info */}
            <div className="product-info-column-wrap">
              <span className="product-cat-badge">{product.category}</span>
              <h1>{product.title}</h1>
              <p className="product-short-desc-text">{product.desc}</p>
              
              <div className="features-list-box">
                <h4>Core Packaging Features</h4>
                <ul className="product-features-check-list">
                  {product.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="check-bullet">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: B2B Call to Action Box */}
            <div className="product-cta-sidebar-box">
              <div className="cta-price-mock-tag">Wholesale B2B Pricing</div>
              <div className="cta-stock-badge">Bulk Orders Available</div>
              <p className="cta-box-desc-text">
                We manufacture to your custom size requirements. Get factory wholesale rates on your bulk ordering.
              </p>
              
              <Link to="/quote" className="btn btn-primary btn-quote-full-width">
                Get a Bulk Quote
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-sample-request-width" style={{ marginTop: '10px', width: '100%' }}>
                Request Sample
              </Link>

              <ul className="cta-benefits-list">
                <li><Check size={16} className="benefit-icon" /> ISO 9001 quality check</li>
                <li><Truck size={16} className="benefit-icon" /> Timely delivery across India</li>
                <li><Package size={16} className="benefit-icon" /> Factory direct wholesale</li>
                <li><ShieldCheck size={16} className="benefit-icon" /> Custom branding option</li>
              </ul>
            </div>
          </div>
        )}

        {/* Bottom Details Section: Full description & specifications */}
        <div className="product-bottom-specifications-section">
          <div className="description-section">
            <h2>Product Overview</h2>
            <p className="product-full-desc-para">{product.fullDesc}</p>
          </div>

          <div className="specifications-section">
            <h2>Technical Specifications</h2>
            <table className="specs-table-striped">
              <tbody>
                {Object.entries(product.specifications).map(([key, value], idx) => (
                  <tr key={idx}>
                    <th>{key}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Product Feature Showcase 1 */}
        <div className="product-feature-showcase">
          <div className="feature-image-col">
            <img src="/assets/product-feature.png" alt="Premium Printing Quality" className="feature-showcase-img" loading="lazy" />
          </div>
          <div className="feature-text-col">
            <h2>Unmatched Print Quality</h2>
            <p>
              Experience packaging that truly stands out. We ensure crisp edges, flawless folds, and high-definition color reproduction that elevates your brand identity.
            </p>
            <ul className="feature-highlights">
              <li><Check size={16} className="highlight-icon" /> High-definition offset and digital printing</li>
              <li><Check size={16} className="highlight-icon" /> Precise die-cutting and structural folds</li>
              <li><Check size={16} className="highlight-icon" /> Premium value-adding finishes</li>
            </ul>
          </div>
        </div>

        {/* Product Feature Showcase 2 (Reversed) */}
        <div className="product-feature-showcase reverse">
          <div className="feature-image-col">
            <img src="/assets/product-feature-2.png" alt="Structural Strength and Durability" className="feature-showcase-img" loading="lazy" />
          </div>
          <div className="feature-text-col">
            <h2>Strength & Durability</h2>
            <p>
              Protect your products with confidence. We utilize premium-grade materials engineered for maximum burst strength and crush resistance during transit.
            </p>
            <ul className="feature-highlights">
              <li><Check size={16} className="highlight-icon" /> 3-Ply, 4-Ply, and 5-Ply rigid configurations</li>
              <li><Check size={16} className="highlight-icon" /> High-impact resistance for B2B logistics</li>
              <li><Check size={16} className="highlight-icon" /> Eco-friendly and 100% recyclable materials</li>
            </ul>
          </div>
        </div>

        {/* Product Feature Showcase 3 */}
        <div className="product-feature-showcase">
          <div className="feature-image-col">
            <img src="/assets/product-feature-3.png" alt="Custom Branding Solutions" className="feature-showcase-img" loading="lazy" />
          </div>
          <div className="feature-text-col">
            <h2>Custom Crafted for You</h2>
            <p>
              Your packaging is your silent ambassador. We offer end-to-end customization, tailoring dimensions, structures, and finishes perfectly to your unique brand requirements.
            </p>
            <ul className="feature-highlights">
              <li><Check size={16} className="highlight-icon" /> Bespoke sizes and structural engineering</li>
              <li><Check size={16} className="highlight-icon" /> Advanced technical coatings (Matt, Gloss, Metallic)</li>
              <li><Check size={16} className="highlight-icon" /> Dedicated B2B support and rapid prototyping</li>
            </ul>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="related-products-section">
            <h2 className="related-title">Related Packaging Products</h2>
            <div className="related-products-grid">
              {relatedProducts.map((p) => (
                <Link to={`/product/${p.id}`} className="related-product-card" key={p.id}>
                  <div className="related-img-wrap">
                    <img src={p.img} alt={p.title} loading="lazy" />
                  </div>
                  <div className="related-info">
                    <h4>{p.title}</h4>
                    <span className="related-details-link">View details &rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Full Screen Image Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div 
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
          >
            <button 
              className="lightbox-close-btn"
              onClick={() => setIsLightboxOpen(false)}
              aria-label="Close zoom"
            >
              <X size={24} />
            </button>
            <motion.div 
              className="lightbox-img-container"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <img src={activeImage} alt={product.title} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductDetails;
