import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import RequestQuote from './pages/RequestQuote';
import ContactUs from './pages/ContactUs';
import ProductDetails from './pages/ProductDetails';
import ScrollToTop from './components/ScrollToTop';
import FloatingWidgets from './components/FloatingWidgets';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/quote" element={<RequestQuote />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
      <FloatingWidgets />
      <Footer />
    </Router>
  );
}

export default App;
