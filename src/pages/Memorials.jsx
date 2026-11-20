import { Link } from 'react-router-dom';
import MemorialSidebar from '../components/MemorialSidebar';
import { MotionLink } from '../components/Motion';

function Memorials() {
 const categories = [
  {
    title: 'Upright Monuments',
    description: 'Traditional monuments crafted with elegance and care.',
    image: `${import.meta.env.BASE_URL}images/memorials/single-monuments/single-monuments-16.jpg`,
    link: '/memorials/single-monuments',
  },
  {
    title: 'Memorial Markers',
    description: 'Beautiful markers to preserve precious memories.',
    image: `${import.meta.env.BASE_URL}images/memorials/single-markers-granite/single-markers-granite-21.jpg`,
    link: '/memorials/single-markers-granite',
  },
  {
    title: 'Custom Memorials',
    description: 'Personalized memorials designed to honor unique lives.',
    image: `${import.meta.env.BASE_URL}images/memorials/premium-monuments/premium-monuments-03.jpg`,
    link: '/memorials/premium-monuments',
  },
];

  return (
    <main>
      <section className="page-banner">
        <h1>Our Memorials</h1>
        <p>Meaningful tributes crafted to last generations.</p>
      </section>

      <div className="memorials-layout">
        <MemorialSidebar />

        <section className="memorials-content">
          <h2>Explore Our Collection</h2>
          <p>
            Find a memorial that beautifully celebrates your loved one's life.
          </p>

          <div className="memorials-grid">
            {categories.map((item) => (
              <div className="memorial-item" key={item.title}>
                <Link to={item.link} className="memorial-image-link">
                  <img src={item.image} alt={item.title} />
                </Link>

                <h3>
                  <Link to={item.link}>{item.title}</Link>
                </h3>

                <p>{item.description}</p>

                <MotionLink to={item.link} className="memorial-view-link">
                  Explore Collection →
                </MotionLink>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="memorial-cta">
        <h2>Need Help Choosing a Memorial?</h2>
        <p>Our team is here to help you find the right design.</p>
        <MotionLink to="/contact">Contact Our Team</MotionLink>
      </section>
    </main>
  );
}

export default Memorials;