import './RequestQuote.css';
import { Link } from 'react-router-dom';

const RequestQuote = () => {
  return (
    <div className="quote-page-wrapper">
      
      {/* Sidebar Graphics Section */}
      <div className="quote-sidebar">
        <div className="quote-sidebar-overlay"></div>
        <div className="quote-sidebar-content">
          <h2>Let's Build Something Great Together</h2>
          <p>
            Whether you need sturdy corrugated boxes for shipping, or premium luxury packaging for retail, 
            our team is ready to design the perfect solution for your business.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: '#b59a68', fontSize: '1.2rem' }}>✓</span> Custom Dimensions & Materials
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: '#b59a68', fontSize: '1.2rem' }}>✓</span> High-Quality Branding & Printing
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: '#b59a68', fontSize: '1.2rem' }}>✓</span> Wholesale Bulk Discounts
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: '#b59a68', fontSize: '1.2rem' }}>✓</span> Reliable Fast Turnaround
            </li>
          </ul>
        </div>
      </div>

      {/* Form Section */}
      <div className="quote-form-area">
        <div className="page-breadcrumb" style={{ marginBottom: '40px' }}>
          <Link to="/" style={{ color: '#6b7280', textDecoration: 'none' }}>DB Packer</Link> <span style={{ margin: '0 8px', color: '#9ca3af' }}>&bull;</span> <span style={{ color: '#111827', fontWeight: '500' }}>Request A Quote</span>
        </div>
        
        <div style={{ marginBottom: '30px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', color: '#111827' }}>Request a Detailed Quote</h1>
          <p style={{ color: '#6b7280', fontSize: '1.1rem' }}>Please fill in the details below to help us understand your packaging needs accurately.</p>
        </div>

        <form className="detailed-quote-form">
          <h3 className="form-section-title">1. Your Information</h3>
          <div className="dq-row">
            <div className="dq-group">
              <label>First Name *</label>
              <input type="text" className="dq-input" required />
            </div>
            <div className="dq-group">
              <label>Last Name *</label>
              <input type="text" className="dq-input" required />
            </div>
          </div>
          <div className="dq-row">
            <div className="dq-group">
              <label>Company Name *</label>
              <input type="text" className="dq-input" required />
            </div>
            <div className="dq-group">
              <label>Industry</label>
              <select className="dq-select">
                <option>E-Commerce / Retail</option>
                <option>Food & Beverage</option>
                <option>Manufacturing / Industrial</option>
                <option>Healthcare / Pharma</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div className="dq-row">
            <div className="dq-group">
              <label>Email Address *</label>
              <input type="email" className="dq-input" required />
            </div>
            <div className="dq-group">
              <label>Phone Number *</label>
              <input type="tel" className="dq-input" required />
            </div>
          </div>

          <h3 className="form-section-title">2. Project Details</h3>
          <div className="dq-row">
            <div className="dq-group">
              <label>Primary Product of Interest *</label>
              <select className="dq-select" required defaultValue="">
                <option value="" disabled>Select a product...</option>
                <option>Corrugated Boxes</option>
                <option>Mono Cartons</option>
                <option>Rigid Boxes</option>
                <option>Self Adhesive Labels</option>
                <option>Blister Packaging</option>
                <option>Pouches</option>
                <option>Tapes & Films</option>
                <option>Other / Not Sure</option>
              </select>
            </div>
            <div className="dq-group">
              <label>Estimated Quantity *</label>
              <select className="dq-select" required defaultValue="">
                <option value="" disabled>Select quantity...</option>
                <option>Under 1,000 units</option>
                <option>1,000 - 5,000 units</option>
                <option>5,000 - 20,000 units</option>
                <option>20,000+ units</option>
              </select>
            </div>
          </div>
          <div className="dq-row">
            <div className="dq-group">
              <label>Approximate Dimensions (L x W x H)</label>
              <input type="text" className="dq-input" placeholder="e.g. 10x10x10 inches" />
            </div>
            <div className="dq-group">
              <label>Do you need custom printing?</label>
              <select className="dq-select">
                <option>Yes, custom logo/design</option>
                <option>No, plain packaging</option>
                <option>Not sure yet</option>
              </select>
            </div>
          </div>
          
          <div className="dq-group">
            <label>Additional Information & Requirements</label>
            <textarea className="dq-textarea" rows={5} placeholder="Tell us about the weight of your product, specific material requests, timeline, or any other details..."></textarea>
          </div>

          <button type="submit" className="dq-submit">Submit Request For Quote</button>
        </form>
      </div>

    </div>
  );
};

export default RequestQuote;
