

const RequestQuote = () => {
  return (
    <div className="page-container">
      <div className="page-header" style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ color: 'white' }}>Request A Quote</h1>
          <p>Get a custom packaging solution tailored to your business needs</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px' }}>
            <div>
              <h4 className="section-subtitle">CUSTOM REQUIREMENTS</h4>
              <h2>Let's discuss your packaging needs</h2>
              <p>
                Fill out the form with your specific requirements, and our packaging experts will get back to you with a customized quote within 24 hours.
              </p>
              
              <div style={{ marginTop: '40px' }}>
                <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', alignItems: 'flex-start' }}>
                  <div style={{ background: '#f1f5f9', padding: '15px', borderRadius: '50%', color: 'var(--primary-color)' }}>
                     📋
                  </div>
                  <div>
                    <h5>Detailed Specifications</h5>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>The more details you provide about dimensions, materials, and quantity, the more accurate our quote will be.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', alignItems: 'flex-start' }}>
                  <div style={{ background: '#f1f5f9', padding: '15px', borderRadius: '50%', color: 'var(--primary-color)' }}>
                     📞
                  </div>
                  <div>
                    <h5>Consultation Available</h5>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Not sure what you need? Request a callback and our team will guide you to the best solution.</p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ background: 'white', padding: '40px', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-lg)' }}>
              <form>
                <div className="grid grid-2" style={{ gap: '20px' }}>
                  <div className="form-group">
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-control" placeholder="John" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-control" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-control" placeholder="john@company.com" />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Product of Interest</label>
                  <select className="form-control">
                    <option>Corrugated Boxes</option>
                    <option>Stretch Film Rolls</option>
                    <option>Bubble Wrap Rolls</option>
                    <option>Packing Tape</option>
                    <option>Other / Custom</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Estimated Quantity</label>
                  <input type="text" className="form-control" placeholder="e.g. 10,000 units" />
                </div>

                <div className="form-group">
                  <label className="form-label">Additional Specifications</label>
                  <textarea className="form-control" rows={4} placeholder="Please provide dimensions, print requirements, or any other details..."></textarea>
                </div>

                <button type="button" className="btn btn-primary" style={{ width: '100%', padding: '15px', fontSize: '1.1rem' }}>
                  SUBMIT REQUEST
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RequestQuote;
