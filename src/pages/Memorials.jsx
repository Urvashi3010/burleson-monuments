import { Link } from 'react-router-dom';
import MemorialSidebar from '../components/MemorialSidebar';

function Memorials() {
  const categories = [
    {
  title: 'Upright Monuments',
  description: 'Traditional monuments crafted with elegance and care.',
  image: '/images/image_029f3854ea.png',
  link: '/memorials/single-monuments'
},
{
  title: 'Memorial Markers',
  description: 'Beautiful markers to preserve precious memories.',
  image: '/images/image_0741e3eea9.jpg',
  link: '/memorials/single-markers-granite'
},
{
  title: 'Custom Memorials',
  description: 'Personalized memorials designed to honor unique lives.',
  image: '/images/image_1224a6883e.jpg',
  link: '/memorials/premium-monuments'
}
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

                <Link to={item.link} className="memorial-view-link">
                  Explore Collection →
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="memorial-cta">
        <h2>Need Help Choosing a Memorial?</h2>
        <p>Our team is here to help you find the right design.</p>
        <Link to="/contact">Contact Our Team</Link>
      </section>
    </main>
  );
}

export default Memorials;