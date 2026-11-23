import { Link } from 'react-router-dom';
import { Check, Flower2, Heart, Ruler, ShieldCheck } from 'lucide-react';
import MemorialSidebar from '../components/MemorialSidebar';

const orderDetails = [
  {
    number: '01',
    title: 'Design selection',
    description: 'Choose a memorial style that reflects the person you are honoring.',
    icon: Heart,
  },
  {
    number: '02',
    title: 'Granite color',
    description: 'Select from a variety of granite colors and finishes.',
    icon: Ruler,
  },
  {
    number: '03',
    title: 'Inscription',
    description: 'Share names, dates, verses, and any other inscription details.',
    icon: Check,
  },
  {
    number: '04',
    title: 'Cemetery',
    description: 'Let us know the cemetery so we can help with its requirements.',
    icon: ShieldCheck,
  },
];

function OrderingPrices() {
  return (
    <main className="ordering-prices-page">
      <section className="page-banner">
        <h1>Ordering &amp; Prices</h1>
        <p>
          Thoughtful guidance, clear next steps, and no pressure while you
          choose a lasting tribute.
        </p>
      </section>

      <div className="page-with-sidebar">
        <aside className="page-sidebar">
          <MemorialSidebar />
        </aside>

        <div className="page-main-content">
          <section className="ordering-content">
            <div className="ordering-intro">
              <span className="ordering-eyebrow">Here to help, every step of the way</span>
              <h2>A simple, personal ordering process</h2>
              <p>
                We understand this can be a difficult time. Our staff will help
                you select a memorial and guide you through the ordering
                process with care.
              </p>
            </div>

            <ol className="ordering-steps">
              {orderDetails.map(({ number, title, description, icon: Icon }) => (
                <li className="ordering-step" key={number}>
                  <span className="ordering-step-number">{number}</span>
                  <div className="ordering-step-icon">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="ordering-options">
              <div className="ordering-options-icon">
                <Flower2 size={24} aria-hidden="true" />
              </div>
              <div>
                <h3>Personal touches</h3>
                <p>Many memorials can be complemented with additional options:</p>
                <ul>
                  <li>Flower vases</li>
                  <li>Memorial portraits</li>
                </ul>
              </div>
            </div>

            <section className="ordering-price-card">
              <span className="ordering-eyebrow">A personal quote, with no surprises</span>
              <h2>Granite prices fluctuate annually</h2>
              <p>
                Pricing depends on the memorial, granite, and design details you
                choose. Contact our staff for a current quote tailored to your
                selection.
              </p>
              <a className="ordering-call-button" href="tel:18008632662">
                Call 1-800-863-2662
              </a>
            </section>

            <section className="ordering-promise">
              <h2>Care you can count on</h2>
              <ul>
                <li>
                  <Check size={18} aria-hidden="true" />
                  There is never any pressure or obligation.
                </li>
                <li>
                  <Check size={18} aria-hidden="true" />
                  All of our gravestones are guaranteed.
                </li>
                <li>
                  <Check size={18} aria-hidden="true" />
                  We complete required cemetery forms at no charge.
                </li>
                <li>
                  <Check size={18} aria-hidden="true" />
                  Choose a stock design or work with us on a custom memorial.
                </li>
              </ul>
              <p>
                We are proud of our craftsmanship, reputation, and affordable,
                straightforward pricing.
              </p>
              <Link to="/contact">Have a question? Contact our team</Link>
            </section>
          </section>
        </div>
      </div>
    </main>
  );
}

export default OrderingPrices;
