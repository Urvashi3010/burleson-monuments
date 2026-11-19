import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h2>BURLESON MONUMENTS</h2>
          <p>Honoring memories. Creating lasting legacies.</p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/memorials">Memorials</Link>
          <Link to="/about">About Us</Link>
        </div>

        <div>
          <h3>Explore</h3>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/faq">FAQs</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Burleson Monuments. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;