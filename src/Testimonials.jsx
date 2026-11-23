import { MotionLink } from './components/Motion';
import MemorialSidebar from './components/MemorialSidebar';

const testimonials = [
  {
    title: 'Still People Who Take Pride in What They Do...',
    description:
      "Thanks for everything you have done for me and my family. You have shown me that there's still people who take pride in what they do, and still care about people.",
    name: 'Gene',
    location: 'Joshua, Texas'
  },
  {
    title: 'Richard, I Will Be Forever Grateful...',
    description:
      "I've seen Jeremy's monument. I love it with all my heart. It depicts my son, and those who see it, will know he lived and was loved.\n\nWe met in the most difficult time of my life. You are truly special people. Richard, I will forever be grateful for your God given artistic abilities, and for your workmanship.",
    name: 'LeAnn',
    location: 'Fort Worth, Texas'
  },
  {
    title: 'Above and Beyond the Call of Duty...',
    description:
      'In appreciation of your hard work that went above and beyond the call of duty as they worked to complete our memorial plaza. Their artistic and dedicated work truly honors our heroes.',
    name: 'River Oaks Volunteer Fire Dept.',
    location: 'River Oaks, Texas'
  },
  {
    title: 'Truly a Piece of Art...',
    description:
      'This is just a note to thank you for the beautiful headstone for Mom & Dad. It truly is a piece of art. I pray God continues to bless you.',
    name: 'Debbie',
    location: 'Glendive, Montana'
  },
  {
    title: 'A Company That Really Cares...',
    description:
      'You went beyond the normal in your care and workmanship. I can vouch for your honesty and integrity. Again, let me express our thanks from the whole family for a company that really cares.',
    name: 'Shelby K.',
    location: 'Franklin, Texas'
  },
  {
    title: 'As Kind and Considerate as You...',
    description:
      "It's wonderful knowing people as kind and considerate as you are. God bless you. Thanks again.",
    name: 'Rosemary',
    location: 'Pomona, California'
  },
  {
    title: 'Helpful, Sincere, Honest, Professional...',
    description:
      'A special thank-you for all of your help, sincerity, honesty, and professional workmanship.',
    name: 'Kathy & Larry',
    location: 'Arlington, Texas'
  },
  {
    title: 'Truly Appreciate Your Custom Work...',
    description:
      'I wanted to let you know how satisfied I am with the stone you made for my husband. With only the copies of the photos you had to work with, the ship and the palm trees came out perfectly.\n\nI truly appreciate your custom work. I am very pleased and proud to have this memorial for Bill. Thank you once again for the wonderful job you did on his stone.',
    name: 'Susan',
    location: 'Fort Worth, Texas'
  },
  {
    title: 'Thoughtfulness Like Yours Has Helped Us...',
    description:
      "Wayne and I want to thank you for Nathaniel's stone. It is thoughtfulness like yours that has helped us through these sad times.",
    name: 'Wayne & Alicia',
    location: 'Fort Worth, Texas'
  },
  {
    title: 'Beautiful... Thank You for Blessing Us...',
    description:
      "We want to take this opportunity to thank everyone at Burleson Monument for the great effort to place our mother's monument by the date requested.\n\nThe monument is beautiful and the craftsmanship is excellent. Thank all of you for blessing us.",
    name: 'The Ruby Family',
    location: 'Venus, Texas'
  },
  {
    title: 'We Appreciate Your Help and Concern...',
    description:
      'We went to the cemetery last week and we were very pleased with the marker. Thank you for everything. We appreciate your help and concern at this sad time.',
    name: 'Shirley & Charlie',
    location: 'McCloud, Oklahoma'
  },
  {
    title: 'A Blessing...',
    description:
      'Your sweet spirit has been a blessing to me and my kids.',
    name: 'Kathy',
    location: 'Arlington, Texas'
  },
  {
    title: 'Thanks for Being So Patient...',
    description:
      'Thank you very much for making my mothers resting place so beautiful. Also, for being so patient with us.',
    name: 'Bob & Carol',
    location: 'Burleson, Texas'
  },
  {
    title: 'Everyone Loves the Benches...',
    description:
      'Thank you so very much for the lovely benches. Everyone loves them. Thank you for all you do and have done for Mission Arlington and for us.',
    name: 'Wanda & Neil',
    location: 'Arlington, Texas'
  },
  {
    title: 'As Lovely as Can Be...',
    description:
      'Thank you for the effort you have put into Mother and Dads marker. It is as lovely as can be. Thanks once again.',
    name: 'Linda',
    location: 'Crowley, Texas'
  },
  {
    title: 'My Sincere Appreciation...',
    description:
      'You have my sincere appreciation for the beautiful family memorial in memory of my dear husband.',
    name: 'Juanita',
    location: 'Keene, Texas'
  },
  {
    title: 'Very Pleased...',
    description:
      "Just wanted to thank you for my family's nice monument. I am very pleased with it.",
    name: 'Betty',
    location: 'Buchanan Dam, Texas'
  }
];

function Testimonials() {
  return (
    <main className="testimonials-page">

      <section className="page-banner testimonials-hero">
        <h1>Client Testimonials</h1>
      </section>

      <div className="page-with-sidebar">

        <aside className="page-sidebar">
          <MemorialSidebar />
        </aside>

        <div className="page-main-content">

          <section className="testimonials-content">

            <p className="testimonials-intro">
              Burleson Monument's success is because of our customers.
              We understand this is a difficult time and we greatly
              appreciate your time expressing your comments and concerns.
              Please send your comments via our{' '}
              <MotionLink to="/contact">contact form</MotionLink>.
              Thank You in advance.
            </p>

            <div className="testimonials-tagline">
              <strong>Striving Daily to fulfill our customers satisfaction and respect.</strong>
            </div>

            <h2 className="client-testimonials-heading">
              Client Testimonials
            </h2>

            <div className="client-testimonials-list">

              {testimonials.map((item, index) => (
                <article className="client-testimonial" key={index}>

                  <h3>{item.title}</h3>

                  <p className="client-testimonial-description">
                    {item.description}
                  </p>

                  <div className="client-testimonial-author">
                    <strong>{item.name}</strong>
                    <span>{item.location}</span>
                  </div>

                </article>
              ))}

            </div>

            <section className="testimonials-contact">
              <h2>We Appreciate Your Feedback</h2>
              <p>
                Have a comment or would like to share your experience
                with Burleson Monuments?
              </p>
              <MotionLink to="/contact">
                Contact Us
              </MotionLink>
            </section>

          </section>

        </div>
      </div>

    </main>
  );
}

export default Testimonials;