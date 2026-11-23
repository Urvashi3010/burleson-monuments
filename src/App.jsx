import { AnimatePresence } from 'framer-motion';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { PageMotion } from './components/Motion';

import Home from './pages/Home';
import Memorials from './pages/Memorials';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import OrderingPrices from './pages/OrderingPrices';

import MemorialsDetails from './MemorialsDetails';
import FAQ from './FAQ';
import Testimonials from './Testimonials';

import MemorialSidebar from './components/MemorialSidebar';
import './App.css';

function NotFound() {
  return (
    <main className="page-banner">
      <h1>Page Not Found</h1>
      <p>Sorry, the page you are looking for doesn't exist.</p>
      <Link to="/">Back to Home</Link>
    </main>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <PageMotion key={location.pathname} locationKey={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/memorials" element={<Memorials />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ordering-prices" element={<OrderingPrices />} />
          <Route path="/memorials/:category" element={<MemorialsDetails />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageMotion>
    </AnimatePresence>
  );
}
function App() {
  return (
    <BrowserRouter basename="/burleson-monuments">
      <ScrollToTop />
      <Navbar />
      <AnimatedRoutes />
      <BackToTop />
      <Footer />
    </BrowserRouter>
  );
}

export default App;