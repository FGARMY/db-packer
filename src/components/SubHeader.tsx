import { Phone } from 'lucide-react';
import './SubHeader.css';

const SubHeader = () => {
  return (
    <div className="subheader-wrapper">
      <div className="container subheader-container">
        
        <div className="subheader-left">
          <span className="cert-text">An ISO 9001:2015 Certified Company</span>
        </div>
        
        <div className="subheader-right">
          <span className="call-text">Call Us!</span>
          <a href="tel:+1234567890" className="call-btn">
            <Phone size={16} style={{ marginRight: '8px' }} />
            CALL NOW
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default SubHeader;
