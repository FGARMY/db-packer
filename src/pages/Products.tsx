
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const Products = () => {

  return (
    <div className="page-container">
      <div className="page-header" style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ color: 'white' }}>Our Products</h1>
          <p>Comprehensive Packaging Solutions for Every Industry</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px' }}>
            {products.map((p, i) => (
              <Link to={`/product/${p.id}`} key={i} className="product-card" style={{ background: 'white', borderRadius: 'var(--radius)', border: '1px solid var(--border-color)', overflow: 'hidden', transition: 'var(--transition)', textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '260px', backgroundColor: 'var(--white)', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', borderBottom: '1px solid var(--border-color)' }}>
                  <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div style={{ padding: '25px', textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--secondary-color)', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '10px', display: 'block' }}>{p.category}</span>
                  <h4 style={{ marginBottom: '10px' }}>{p.title}</h4>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '20px', flex: 1 }}>{p.desc}</p>
                  <span className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '0.85rem', width: '100%' }}>View Details</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
