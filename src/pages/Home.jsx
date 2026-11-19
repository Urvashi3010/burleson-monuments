import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-sparkles" aria-hidden="true"></div>

        <div className="hero-content">
          <p className="hero-subtitle">
            CRAFTING MEMORIES SINCE 1970
          </p>

          <h1>
            Honoring Memories.<br />
            <span>Creating Legacies.</span>
          </h1>

          <p className="hero-description">
            Thoughtfully crafted memorials that celebrate a life,
            preserve memories and create lasting legacies.
          </p>

          <div className="hero-buttons">
          <Link to="/memorials" className="btn-primary">
            Explore Memorials <ArrowRight size={17} />
          </Link>

          <Link to="/contact" className="btn-secondary">
            Speak With Our Team
          </Link>
        </div>
        </div>

        <div className="hero-bottom">
          <span>YEARS OF CRAFTSMANSHIP</span>
          <span>MEMORIAL DESIGNS</span>
          <span>PERSONALIZED OPTIONS</span>
        </div>
      </section>
      {/* Memorial Categories */}
<section className="categories">
  <div className="section-heading">
    <span>OUR COLLECTION</span>
    <h2>Explore Our Memorials</h2>
    <p>Thoughtfully crafted memorials to honor a life and preserve memories.</p>
  </div>

  <div className="category-card">
  <Link to="/memorials/single-monuments">
    <div className="category-image">
      <img src="/images/image_029f3854ea.png" alt="Upright Monuments" />
    </div>
    <h3>Upright Monuments</h3>
  </Link>
  <p>Beautifully crafted monuments to honor loved ones.</p>
  <Link className="category-card-details" to="/memorials/single-monuments">
    Explore Details <ArrowRight size={15} />
  </Link>
</div>

  <div className="category-card">
  <Link to="/memorials/single-markers-granite">
    <div className="category-image">
      <img src="/images/image_0741e3eea9.jpg" alt="Memorial Markers" />
    </div>
    <h3>Memorial Markers</h3>
  </Link>
  <p>Elegant designs created to preserve precious memories.</p>
  <Link className="category-card-details" to="/memorials/single-markers-granite">
    Explore Details <ArrowRight size={15} />
  </Link>
</div>

   <div className="category-card">
  <Link to="/memorials/premium-monuments">
    <div className="category-image">
      <img src="/images/image_1221872f9f.jpg" alt="Custom Memorials" />
    </div>
    <h3>Custom Memorials</h3>
  </Link>
  <p>Personalized memorials designed with care and respect.</p>
  <Link className="category-card-details" to="/memorials/premium-monuments">
    Explore Details <ArrowRight size={15} />
  </Link>
</div>
</section>

{/* About Section */}
<section className="about">
  <div className="about-visual" role="img" aria-label="A soft illustration of a flowering plant in a pot">
    <svg className="about-flower" viewBox="0 0 320 320" aria-hidden="true" focusable="false">
      <circle className="about-flower-halo" cx="160" cy="148" r="112" />
      <path className="about-flower-stem" d="M160 216c0-36-1-68 0-108" />
      <path className="about-flower-stem" d="M160 180c-16-5-27-16-31-31m31 10c17-6 28-17 31-33" />
      <path className="about-flower-leaf" d="M157 176c-20-4-31-15-32-28 17 1 29 10 34 25m3-18c19-5 30-16 31-29-17 2-28 11-33 26" />
      <g className="about-flower-bloom" transform="translate(160 91)">
        <ellipse cx="0" cy="-16" rx="9" ry="16" />
        <ellipse cx="0" cy="-16" rx="9" ry="16" transform="rotate(60)" />
        <ellipse cx="0" cy="-16" rx="9" ry="16" transform="rotate(120)" />
        <ellipse cx="0" cy="-16" rx="9" ry="16" transform="rotate(180)" />
        <ellipse cx="0" cy="-16" rx="9" ry="16" transform="rotate(240)" />
        <ellipse cx="0" cy="-16" rx="9" ry="16" transform="rotate(300)" />
        <circle className="about-flower-center" r="8" />
      </g>
      <path className="about-flower-pot" d="M113 220h94l-10 69h-74z" />
      <path className="about-flower-pot-rim" d="M103 211h114v14H103z" />
      <path className="about-flower-pot-detail" d="M137 239h46m-43 12h40" />
    </svg>
    <div className="about-visual-caption" aria-hidden="true">
      <span>QUALITY CRAFTSMANSHIP</span>
      <span>BUILT TO LAST</span>
    </div>
  </div>

  <div className="about-content">
    <span>ABOUT BURLESON MONUMENTS</span>

    <h2>Honoring Memories That Last Forever</h2>

    <p>
      Every life tells a unique story. We believe a memorial should
      reflect that story with care, dignity, and timeless beauty.
    </p>

    <p>
      Our goal is to help families create meaningful tributes that
      preserve memories for generations to come.
    </p>

      <Link to="/about" className="about-btn">
        Learn More
      </Link>
  </div>
</section>

<section className="testimonials">
  <div className="section-heading">
    <span>OUR COMMITMENT</span>
    <h2>Care Behind Every Memorial</h2>
    <p>Every detail matters when creating a lasting tribute.</p>
  </div>

  <div className="testimonial-grid">
    <div className="testimonial-card">
      <h3>Personalized Attention</h3>
      <p>Every family's needs and wishes deserve thoughtful attention.</p>
    </div>

    <div className="testimonial-card">
      <h3>Quality Craftsmanship</h3>
      <p>Memorial designs created with care and attention to detail.</p>
    </div>

    <div className="testimonial-card">
      <h3>Lasting Remembrance</h3>
      <p>Meaningful tributes that help preserve precious memories.</p>
    </div>
  </div>

  <Link to="/testimonials">Learn More</Link>
</section>

{/* Contact Section */}
<section className="contact">
  <div className="contact-info">
    <span>GET IN TOUCH</span>
    <h2>We're Here to Help You</h2>
    <p>
      Have questions or need assistance choosing a memorial?
      Get in touch with our team.
    </p>

    <div className="contact-detail">
      <h4>Visit Us</h4>
      <p>Burleson Monuments</p>
    </div>

    <div className="contact-detail">
      <h4>Phone</h4>
      <p>Contact us for assistance</p>
    </div>

    <div className="contact-detail">
      <h4>Email</h4>
      <p>Send us your inquiry</p>
    </div>
  </div>

  <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
    <h3>Send an Inquiry</h3>

    <input type="text" placeholder="Your Name" required />
    <input type="email" placeholder="Your Email" required />
    <input type="tel" placeholder="Phone Number" />
    <textarea placeholder="How can we help you?" rows="5" required />

    <button type="submit">Submit Inquiry</button>
  </form>
</section>

    </main>
  );
}

export default Home;