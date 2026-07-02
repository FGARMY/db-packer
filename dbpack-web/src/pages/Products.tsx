
import { Link } from 'react-router-dom';

const Products = () => {
  const allProducts = [
    { title: "Corrugated Boxes", desc: "Strong, durable & customizable boxes for safe packaging of goods of all sizes.", img: "/assets/boxes.png", category: "Boxes" },
    { title: "Stretch Film Rolls", desc: "High-performance stretch wraps for secure bundling and palletizing.", img: "/assets/stretch-film.png", category: "Films" },
    { title: "Bubble Wrap Rolls", desc: "Protective cushioning for fragile & delicate items during transit.", img: "/assets/bubble-wrap.png", category: "Protection" },
    { title: "Packing Tape", desc: "High-adhesion tapes for secure sealing of cartons and packages.", img: "/assets/tape.png", category: "Tapes" },
    { title: "PP Strapping Roll", desc: "Heavy-duty strapping for load securement and reinforcement.", img: "/assets/strapping.png", category: "Strapping" },
    { title: "Zip Lock Pouches", desc: "Durable pouches for safe storage, packaging, and retail display.", img: "/assets/pouches.png", category: "Pouches" },
    { title: "Mailing Envelopes", desc: "Tear-resistant, waterproof envelopes for secure document and small item shipping.", img: "/assets/boxes.png", category: "Envelopes" },
    { title: "Foam Sheets", desc: "Lightweight, non-abrasive foam for surface protection and void fill.", img: "/assets/bubble-wrap.png", category: "Protection" }
  ];

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
          <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px' }}>
            {allProducts.map((p, i) => (
              <div key={i} className="product-card" style={{ background: 'white', borderRadius: 'var(--radius)', border: '1px solid var(--border-color)', overflow: 'hidden', transition: 'var(--transition)' }}>
                <div style={{ height: '200px', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                  <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '25px', textAlign: 'center' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--secondary-color)', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '10px', display: 'block' }}>{p.category}</span>
                  <h4 style={{ marginBottom: '10px' }}>{p.title}</h4>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '20px' }}>{p.desc}</p>
                  <Link to="/quote" className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>Get a Quote</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
