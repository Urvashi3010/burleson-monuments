import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const getLinkClass = ({ isActive }) =>
    isActive ? 'active-link' : '';

  return (
    <>
      {/* TOP BRAND HEADER */}
      <div className="brand-header">
        <NavLink to="/" className="brand-image" onClick={closeMenu}>
          <img
            src="https://www.burlesonmonuments.com/headstones/BurlesonmonAngellogo.png"
            alt="Burleson Monuments"
          />
        </NavLink>

        <div className="brand-content">
          <h1>Burleson Monuments</h1>
          <p>Since 1970, Burleson Monuments has been</p>
          <p>helping families create an everlasting expression</p>
          <p>of their devotion and love.</p>
        </div>

       <div className="brand-dove">
        <img
          src={`${import.meta.env.BASE_URL}images/bird-logo.png`}
          alt="Burleson Monuments Dove"
        />
      </div>
      </div>

      {/* EXISTING NAVBAR */}
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <NavLink
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
        >
          BURLESON
          <span>MONUMENTS</span>
        </NavLink>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <NavLink to="/" end className={getLinkClass} onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/memorials" className={getLinkClass} onClick={closeMenu}>
            Memorials
          </NavLink>

          <NavLink to="/ordering-prices" className={getLinkClass} onClick={closeMenu}>
            Ordering &amp; Prices
          </NavLink>

          <NavLink to="/about" className={getLinkClass} onClick={closeMenu}>
            About Us
          </NavLink>

          <NavLink to="/testimonials" className={getLinkClass} onClick={closeMenu}>
            Testimonials
          </NavLink>

          <NavLink to="/faq" className={getLinkClass} onClick={closeMenu}>
            FAQ
          </NavLink>

          <NavLink to="/contact" className={getLinkClass} onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default Navbar;