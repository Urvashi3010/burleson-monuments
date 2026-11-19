import { Link } from 'react-router-dom';

const testimonials = [
  {
    title: 'Personalized Attention',
    description:
      'Every family has unique wishes. We believe in listening carefully and understanding the details that make each memorial meaningful.'
  },
  {
    title: 'Quality Craftsmanship',
    description:
      'A memorial should be created with care and attention to detail. We value thoughtful designs and lasting materials.'
  },
  {
    title: 'Meaningful Remembrance',
    description:
      'From inscriptions to personalized designs, every detail can help preserve the memory and story of a loved one.'
  }
];

function Testimonials() {
  return (
    <main className="testimonials-page">
      <section className="page-banner testimonials-hero">
        <p>OUR COMMITMENT</p>
        <h1>Every Memory Deserves to Be Honored</h1>
        <p>
          Creating meaningful memorials through thoughtful
          attention, craftsmanship, and care.
        </p>
      </section>

      <section className="testimonials-content">
        <h2>What Matters to Us</h2>
        <p>
          We understand the importance of creating a lasting tribute.
          Our approach focuses on three things:
        </p>

        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <article className="testimonial-card" key={index}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonials-contact">
        <h2>Let Us Help You Create a Lasting Tribute</h2>
        <p>
          Have a question or a specific memorial in mind?
          We would be happy to hear from you.
        </p>
        <Link to="/contact">Get in Touch</Link>
      </section>
    </main>
  );
}

export default Testimonials;