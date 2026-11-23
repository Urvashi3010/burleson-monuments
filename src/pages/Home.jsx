import MemorialSidebar from '../components/MemorialSidebar';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  MotionLink,
  ParticleField,
  Reveal,
  WordReveal,
} from '../components/Motion';

import FanCardCarousel from '../components/FanCardCarousel';

const homeProducts = [
  {
    title: 'Single Markers',
    subtitle: '(Granite)',
    slug: 'single-markers-granite',
    image: 'single-markers-granite-01.jpg',
    folder: 'single-markers-granite',
  },
  {
    title: 'Companion Markers',
    subtitle: '(Granite)',
    slug: 'companion-markers-granite',
    image: 'companion-markers-granite-01.jpg',
    folder: 'companion-markers-granite',
  },
  {
    title: 'Single Markers',
    subtitle: '(Bronze)',
    slug: 'single-markers-bronze',
    image: 'single-markers-bronze-01.jpg',
    folder: 'single-markers-bronze',
  },
  {
    title: 'Companion Markers',
    subtitle: '(Bronze)',
    slug: 'companion-markers-bronze',
    image: 'companion-markers-bronze-01.jpg',
    folder: 'companion-markers-bronze',
  },
  {
    title: 'Single Monuments',
    slug: 'single-monuments',
    image: 'single-monuments-01.jpg',
    folder: 'single-monuments',
  },
  {
    title: 'Companion Monuments',
    slug: 'companion-monuments',
    image: 'companion-monuments-01.jpg',
    folder: 'companion-monuments',
  },
  {
    title: 'Premium Monuments',
    slug: 'premium-monuments',
    image: 'premium-monuments-01.jpg',
    folder: 'premium-monuments',
  },
  {
    title: 'Cremation Memorials',
    slug: 'cremation-memorials',
    image: 'cremation-memorials-01.jpg',
    folder: 'cremation-memorials',
  },
  {
    title: 'Memorial Photos',
    slug: 'memorial-photos',
    image: 'memorial-photos-01.jpg',
    folder: 'memorial-photos',
  },
  {
    title: 'Memorial Benches',
    slug: 'memorial-benches',
    image: 'memorial-benches-01.jpg',
    folder: 'memorial-benches',
  },
];
function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-black-shimmer" aria-hidden="true"></div>
        <ParticleField />

        <div className="hero-content">
          <p className="hero-subtitle">
            CRAFTING MEMORIES SINCE 1970
          </p>

          <h1 aria-label="Honoring Memories. Creating Legacies.">
            <WordReveal text="Honoring Memories." /><br />
            <span><WordReveal text="Creating Legacies." /></span>
          </h1>

          <p className="hero-description">
            Thoughtfully crafted memorials that celebrate a life,
            preserve memories and create lasting legacies.
          </p>

          <div className="hero-buttons">
            <MotionLink to="/memorials" className="btn-primary">
              Explore Memorials <ArrowRight size={17} />
            </MotionLink>

            <MotionLink to="/contact" className="btn-secondary">
              Speak With Our Team
            </MotionLink>
          </div>
        </div>

        <div className="hero-bottom">
          <span>YEARS OF CRAFTSMANSHIP</span>
          <span>MEMORIAL DESIGNS</span>
          <span>PERSONALIZED OPTIONS</span>
        </div>
      </section>

{/* Original Burleson Home Page Content */}
<section className="original-home-content">

  <div className="original-home-layout">

    {/* LEFT SIDEBAR */}
    <aside className="original-home-sidebar">

      <div className="original-sidebar-contact">
        <h3>Contact Us</h3>

        <p>817-295-2662</p>
        <p>1-800-863-2662</p>

        <Link to="/contact">Contact Burleson Monuments</Link>
      </div>

      <MemorialSidebar />

    </aside>

<div className="original-home-main">

  <h3 className="original-home-intro-text">
  Burleson Monuments offers beautiful designs, quality materials
  and workmanship at reasonable prices.
</h3>
  {/* PRODUCT CATEGORIES */}
  <div className="original-home-products">

    {homeProducts.map((product) => (

      <Link
        to={`/memorials/${product.slug}`}
        className="original-home-product"
        key={product.slug}
      >

        <div className="original-product-image">

          <img
            src={`${import.meta.env.BASE_URL}images/memorials/${product.folder}/${product.image}`}
            alt={product.title}
            loading="lazy"
            onError={(e) => {
  e.currentTarget.closest('.original-home-product').style.display = 'none';
}}
          />

        </div>

        <h3>{product.title}</h3>

        {product.subtitle && (
          <span>{product.subtitle}</span>
        )}

      </Link>

    ))}

  </div>

</div>

  </div>


  {/* BOTTOM INFORMATION */}
  <div className="original-home-bottom">

    <p>
      The memorial consultants at Burleson Monuments understand
      that ordering a memorial can be a stressful experience.
      We make every effort to provide information and design
      assistance without sales pressure.
    </p>

    <p>
      Most of our memorial consultants are second or third
      generation in the monument business. We are pleased to
      offer our experience to help you design a beautiful
      memorial for your loved one.
    </p>

    <h3>OUR PRODUCTS INCLUDE:</h3>

    <p>
      Cemetery Headstones, Grave Markers, Cemetery Monuments,
      Memorial Benches, Memorial Portraits, Flower Vases,
      Slant Headstone Markers, Bevel Markers, Bronze Headstones,
      Bronze Plaques, Pet Memorials and Laser Etching.
    </p>

    <Link to="/contact">Contact Burleson Monuments</Link>

  </div>

</section>

{/* Memorial Categories */}
<section className="categories">
  <div className="section-heading">
    <span>OUR COLLECTION</span>
    <h2><WordReveal text="Explore Our Memorials" /></h2>
    <p>Thoughtfully crafted memorials to honor a life and preserve memories.</p>
  </div>

  <div className="category-showcase">

    <Reveal className="category-feature" delay={0}>
      <Link to="/memorials/single-monuments">
        <img
          src={`${import.meta.env.BASE_URL}images/memorials/single-monuments/single-monuments-16.jpg`}
          alt="Upright Monuments"
        />
        <h3>Upright Monuments</h3>
      </Link>
      <p>Beautifully crafted monuments to honor loved ones.</p>
      <MotionLink className="category-card-details" to="/memorials/single-monuments">
        Explore Details <ArrowRight size={15} />
      </MotionLink>
    </Reveal>

    <Reveal className="category-feature" delay={0.08}>
      <Link to="/memorials/single-markers-granite">
        <img
          src={`${import.meta.env.BASE_URL}images/memorials/single-markers-granite/single-markers-granite-21.jpg`}
          alt="Memorial Markers"
        />
        <h3>Memorial Markers</h3>
      </Link>
      <p>Elegant designs created to preserve precious memories.</p>
      <MotionLink className="category-card-details" to="/memorials/single-markers-granite">
        Explore Details <ArrowRight size={15} />
      </MotionLink>
    </Reveal>

    <Reveal className="category-feature" delay={0.16}>
      <Link to="/memorials/premium-monuments">
        <img
          src={`${import.meta.env.BASE_URL}images/memorials/premium-monuments/premium-monuments-03.jpg`}
          alt="Custom Memorials"
        />
        <h3>Custom Memorials</h3>
      </Link>
      <p>Personalized memorials designed with care and respect.</p>
      <MotionLink className="category-card-details" to="/memorials/premium-monuments">
        Explore Details <ArrowRight size={15} />
      </MotionLink>
    </Reveal>

  </div>
</section>

{/* About Section */}
<section className="about">
  <Reveal className="about-visual">
  <FanCardCarousel />

  <div className="about-visual-caption" aria-hidden="true">
    <span>QUALITY CRAFTSMANSHIP</span>
    <span>BUILT TO LAST</span>
  </div>
</Reveal>

  <Reveal className="about-content" delay={0.1}>
    <span>ABOUT BURLESON MONUMENTS</span>

    <h2><WordReveal text="Honoring Memories That Last Forever" /></h2>

    <p>
      Every life tells a unique story. We believe a memorial should
      reflect that story with care, dignity, and timeless beauty.
    </p>

    <p>
      Our goal is to help families create meaningful tributes that
      preserve memories for generations to come.
    </p>

      <MotionLink to="/about" className="about-btn">
        Learn More
      </MotionLink>
  </Reveal>
</section>

<section className="testimonials">
  <div className="section-heading">
    <span>OUR COMMITMENT</span>
    <h2><WordReveal text="Care Behind Every Memorial" /></h2>
    <p>Every detail matters when creating a lasting tribute.</p>
  </div>

  <div className="testimonial-grid">
    <Reveal className="testimonial-card" delay={0}>
      <h3>Personalized Attention</h3>
      <p>Every family's needs and wishes deserve thoughtful attention.</p>
    </Reveal>

    <Reveal className="testimonial-card" delay={0.08}>
      <h3>Quality Craftsmanship</h3>
      <p>Memorial designs created with care and attention to detail.</p>
    </Reveal>

    <Reveal className="testimonial-card" delay={0.16}>
      <h3>Lasting Remembrance</h3>
      <p>Meaningful tributes that help preserve precious memories.</p>
    </Reveal>
  </div>

  <MotionLink to="/testimonials">Learn More</MotionLink>
</section>

{/* Contact Section */}
<section className="contact">
  <div className="contact-info">
    <span>GET IN TOUCH</span>
    <h2><WordReveal text="We're Here to Help You" /></h2>
    <p>
      Have questions or need assistance choosing a memorial?
      Get in touch with our team.
    </p>

    <div className="contact-detail">
      <h4>Visit Us</h4>
      <p>www.burlesonmonuments.com</p>
    </div>

    <div className="contact-detail">
      <h4>Phone</h4>
      <p>817-295-2662</p>
    </div>

    <div className="contact-detail">
      <h4>Email</h4>
      <p>info@burlesonmonuments.com</p>
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