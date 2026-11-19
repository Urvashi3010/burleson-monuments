import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const getLinkClass = ({ isActive }) =>
    isActive ? 'active-link' : '';

  return (
    <header className="navbar">
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
  );
}

export default Navbar;