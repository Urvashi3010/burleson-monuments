import { Link } from 'react-router-dom';

function About() {
  return (
    <main className="about-page">

      <section className="page-banner">
        <h1>About Burleson Monuments</h1>
        <p>Creating lasting tributes with care, experience and craftsmanship.</p>
      </section>

      <section className="about-content">

        <div>
          <h2>A Legacy of Remembrance Since 1970</h2>

          <p>
            Since 1970, Burleson Monuments has been helping families
            create lasting expressions of love and devotion for their
            loved ones.
          </p>

          <p>
            Our experienced memorial consultants, designers and
            craftsmen understand how important it is to create a
            meaningful tribute. We are here to guide families through
            the memorial selection and design process with care and
            understanding.
          </p>
        </div>

        <div>
          <h2>Our Approach</h2>

          <p>
            We believe choosing a memorial should be a comfortable
            and informed experience. We provide design assistance
            and memorial information without sales pressure.
          </p>

          <p>
            Our team works with families to explore different
            materials, designs, inscriptions and personalization
            options.
          </p>
        </div>

        <div>
          <h2>What We Offer</h2>

          <ul>
            <li>Granite and bronze memorials</li>
            <li>Single and companion monuments</li>
            <li>Memorial benches and cremation memorials</li>
            <li>Custom inscriptions and laser etching</li>
            <li>Memorial portraits and flower vases</li>
          </ul>
        </div>

        <div>
          <h2>Our Commitment to Families</h2>

          <p>
            We offer written order confirmation and a computer-generated
            drawing of the memorial. We also work with cemeteries to
            provide the required documentation at no extra charge.
          </p>

          <p>
            Our goal is to help families create a beautiful and
            durable memorial that preserves precious memories.
          </p>
        </div>

        <div className="about-cta">
          <h2>Let Us Help You Create a Lasting Tribute</h2>

          <p>
            Explore our memorial designs or get in touch with our team
            for more information.
          </p>

          <Link to="/memorials">Explore Memorials</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

      </section>
    </main>
  );
}

export default About;