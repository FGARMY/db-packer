import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import logoImg from '../assets/dbpack-logo.png';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Products' },
    { path: '/contact', label: 'Contact Us' },
  ];

  const isHomePage = location.pathname === '/';
  const shouldBeSolid = isScrolled || !isHomePage;

  return (
    <header className={`navbar-container ${shouldBeSolid ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <Link to="/" className="navbar-logo" aria-label="DBPack Home">
          <img src={logoImg} alt="DBPack Logo" className="navbar-logo-img" />
        </Link>

        {/* Desktop Nav Links (Centered) */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                  aria-current={location.pathname === link.path ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Right Action */}
        <div className="nav-right">
          <button 
            onClick={toggleTheme} 
            className={`theme-toggle-btn ${shouldBeSolid ? 'scrolled' : ''}`}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link to="/quote" className="btn btn-primary nav-btn">
            REQUEST A QUOTE
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="mobile-toggle" 
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Menu with slideDown animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <ul className="mobile-nav-links">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={location.pathname === link.path ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mobile-theme-toggle">
                <button 
                  onClick={() => { toggleTheme(); setIsMenuOpen(false); }} 
                  style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: '10px 0', fontSize: '1rem', fontWeight: 500 }}
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? <><Sun size={20} /> Light Mode</> : <><Moon size={20} /> Dark Mode</>}
                </button>
              </li>
              <li>
                <Link to="/quote" className="btn btn-primary" style={{ width: '100%' }} onClick={() => setIsMenuOpen(false)}>
                  REQUEST A QUOTE
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
