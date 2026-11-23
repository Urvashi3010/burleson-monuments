import { useSearchParams } from 'react-router-dom';
import MemorialSidebar from '../components/MemorialSidebar';

function Contact() {
  const [searchParams] = useSearchParams();
  const selectedMemorial = searchParams.get('memorial') || '';

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const phone = form.elements.phone.value;
    const memorial = form.elements.memorial.value;
    const message = form.elements.message.value;

    const subject = encodeURIComponent('Website Enquiry');

    const body = encodeURIComponent(
      `Name: ${name}
Email: ${email}
Phone: ${phone}
Memorial Type: ${memorial}
Message: ${message}`
    );

    window.location.href =
      `mailto:info@burlesonmonuments.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="contact-page-wrapper">

      <section className="page-banner">
        <h1>Contact Us</h1>
        <p>We're here to help you create a meaningful memorial.</p>
      </section>

      <div className="page-with-sidebar">

        <aside className="page-sidebar">
          <MemorialSidebar />
        </aside>

        <div className="page-main-content">

          <section className="contact-page">

            <div>
              <h2>Let's Talk</h2>
              <p>Have questions about memorial designs? Get in touch with us.</p>
              <p>Email: info@burlesonmonuments.com</p>
            </div>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="memorial"
                placeholder="Memorial Type"
                value={selectedMemorial}
                readOnly
              />

              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
              />

              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
              />

              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                required
              />

              <button type="submit">Send Message</button>
            </form>

          </section>

        </div>
      </div>

    </main>
  );
}

export default Contact;