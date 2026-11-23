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
    const subjectText = form.elements.subject.value;
    const findUs = form.elements.findUs.value;
    const memorial = form.elements.memorial.value;
    const message = form.elements.message.value;

    const subject = encodeURIComponent(subjectText || 'Website Enquiry');

    const body = encodeURIComponent(
      `Name: ${name}
Subject: ${subjectText}
Email: ${email}
Phone: ${phone}
How did you find us?: ${findUs}
Memorial Type: ${memorial}
Message: ${message}`
    );

    window.location.href =
      `mailto:info@burlesonmonuments.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="contact-page-wrapper">

      <section className="page-with-sidebar">

        <aside className="page-sidebar">
          <MemorialSidebar />
        </aside>

        <div className="page-main-content">

          {/* Contact Introduction */}
          <section className="contact-intro">

            <h2>
              Burleson Monuments extends their great service to the 48
              contiguous states. Our office is located conveniently near
              I35W just south of Fort Worth.
            </h2>

          </section>

          {/* Contact Details and Office Hours */}
          <section className="contact-details-section">

            <div className="contact-details-list">

              <p><strong>Address:</strong> 216 East Ellison St., Burleson, Texas 76028</p>

              <p><strong>Office:</strong> 817-295-2662</p>

              <p><strong>Toll Free:</strong> 800-863-2662</p>

              <p><strong>Fax:</strong> 817-295-3639</p>

              <p>
                <strong>Email:</strong>
                <a href="mailto:info@burlesonmonuments.com">
                  info@burlesonmonuments.com
                </a>
              </p>

            </div>

            <div className="office-hours-box">
              <h3>Office Hours:</h3>
              <p>Tuesday - Friday</p>
              <p>10:00am - 5:00pm</p>
              <p>Saturday</p>
              <p>10:00am - 3:00pm</p>
              <br />
              <p>Closed Sunday and Monday</p>
            </div>

          </section>

          {/* Contact Form and Map */}
          <section className="contact-form-section">

            <h2>- Contact Information -</h2>

            <div className="contact-form-layout">

              {/* Google Map */}
              <div className="contact-map">
                <iframe
                  title="Burleson Monuments Location"
                  src="https://maps.google.com/maps?q=216%20East%20Ellison%20St%2C%20Burleson%2C%20Texas%2076028&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Contact Form */}
              <div className="contact-form-container">

                <p className="required-note">
                  Required fields are bold
                </p>

                <form onSubmit={handleSubmit}>

                  <label htmlFor="contact-name">Name:</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                  />

                  <label htmlFor="contact-subject">Subject:</label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    required
                  />

                  <label htmlFor="contact-email">E-mail:</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                  />

                  <label htmlFor="contact-phone">Phone:</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                  />

                  <label htmlFor="contact-find-us">
                    How did you find us?
                  </label>

                  <select id="contact-find-us" name="findUs">
                    <option value="">-- Please select --</option>
                    <option value="Google">Google</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Friend or Family">Friend or Family</option>
                    <option value="Advertisement">Advertisement</option>
                    <option value="Other">Other</option>
                  </select>

                  <input
                    type="hidden"
                    name="memorial"
                    value={selectedMemorial}
                  />

                  <label htmlFor="contact-message">
                    How can we help you:
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    required
                  ></textarea>

                  <button type="submit">
                    Send it!
                  </button>

                  <span className="contact-powered">
                    Powered by <strong>Burleson Monuments</strong>
                  </span>

                </form>

              </div>

            </div>

          </section>

        </div>

      </section>

    </main>
  );
}

export default Contact;