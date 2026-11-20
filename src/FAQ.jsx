import { useState } from 'react';
import { MotionLink } from './components/Motion';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What types of memorials do you offer?',
      answer:
        'We offer different memorial options, including granite markers, bronze markers, upright monuments, slant memorials, cremation memorials, memorial benches, and personalized designs.'
    },
    {
      question: 'Can I customize a memorial?',
      answer:
        'Yes. Memorials can be personalized with inscriptions, designs, photographs, and other available options to create a meaningful tribute.'
    },
    {
      question: 'How do I choose the right memorial?',
      answer:
        'Choosing a memorial depends on your preferences, design requirements, and available options. You can explore our memorial collection or contact our team for assistance.'
    },
    {
      question: 'Can photographs be added to memorials?',
      answer:
        'Personalized memorial options may include photographs and custom designs. Contact us to discuss the available choices.'
    },
    {
      question: 'What information should I provide when requesting a memorial?',
      answer:
        'You can share the memorial type, preferred design, inscription details, and any special requirements you have in mind.'
    },
    {
      question: 'How can I request information or assistance?',
      answer:
        'Visit our Contact page and submit an inquiry. Include your requirements so our team can better understand what you are looking for.'
    },
    {
      question: 'Can I see different memorial designs before deciding?',
      answer:
        'Yes. Visit our Gallery and Memorials pages to explore different memorial styles and design options.'
    },
    {
      question: 'How do I get started?',
      answer:
        'Start by exploring our memorial collection. Once you have an idea of what you want, visit our Contact page to submit your inquiry.'
    }
  ];

  return (
    <main className="faq-page">

      <section className="page-banner">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about our memorials and services.</p>
      </section>

      <section className="faq-section">

        <div className="section-heading">
          <span>WE ARE HERE TO HELP</span>
          <h2>How Can We Help You?</h2>
          <p>
            Explore answers to common questions about memorial designs,
            personalization, and getting started.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>

              <button
                className="faq-question"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                aria-expanded={activeIndex === index}
              >
                <span>{faq.question}</span>
                <span>{activeIndex === index ? '−' : '+'}</span>
              </button>

              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}

            </div>
          ))}
        </div>

      </section>

      <section className="faq-cta">
        <h2>Still Have Questions?</h2>
        <p>
          We are here to help you find the right way to honor a loved one.
        </p>

        <MotionLink to="/contact">
          Contact Our Team
        </MotionLink>
      </section>

    </main>
  );
}

export default FAQ;