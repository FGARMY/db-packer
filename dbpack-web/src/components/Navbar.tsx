import { Link, useLocation } from 'react-router-dom';
import { Package, Menu, X } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Products' },
    { path: '/quote', label: 'Request Quote' },
    { path: '/contact', label: 'Contact Us' },
  ];

  return (
    <header className="navbar-container">
      <div className="container navbar-content">
        <Link to="/" className="navbar-logo">
          <Package size={32} color="#0f3d81" />
          <div className="logo-text">
            <span className="logo-title">DBPack</span>
            <span className="logo-subtitle">Excellence in Packaging Solutions</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/quote" className="btn btn-primary nav-btn">
            REQUEST A QUOTE
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button className="mobile-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <div className="mobile-nav">
          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/quote" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>
                REQUEST A QUOTE
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
