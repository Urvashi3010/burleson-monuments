import { motion } from 'framer-motion';

import {
  MotionLink,
  Reveal,
  WordReveal,
} from '../components/Motion';

import MemorialSidebar from '../components/MemorialSidebar';

function About() {
  return (
    <main className="about-page">

      {/* Full Width Banner */}
      <section className="page-banner">
        <h1>About Burleson Monuments</h1>
        <p>
          Creating lasting tributes with care, experience and craftsmanship.
        </p>
      </section>

      {/* Sidebar + Page Content */}
      <div className="page-with-sidebar">

        <aside className="page-sidebar">
          <MemorialSidebar />
        </aside>

        <div className="page-main-content">

          <section className="about-content">

            <motion.div
              className="about-legacy-section"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.18,
                  },
                },
              }}
            >
              <h2 className="legacy-heading">
                {['A Legacy', 'of Remembrance', 'Since 1970'].map((line) => (
                  <span className="legacy-heading-line" key={line}>
                    {line.split(' ').map((word) => (
                      <motion.span
                        className="legacy-heading-word"
                        key={word}
                        variants={{
                          hidden: {
                            opacity: 0,
                            y: 35,
                            rotateX: -35,
                          },
                          visible: {
                            opacity: 1,
                            y: 0,
                            rotateX: 0,
                          },
                        }}
                        transition={{
                          duration: 0.75,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </h2>

              <motion.div
                className="legacy-gold-line"
                variants={{
                  hidden: { scaleX: 0 },
                  visible: { scaleX: 1 },
                }}
                transition={{ duration: 0.9 }}
              />

              <motion.p
                variants={{
                  hidden: { opacity: 0, x: -35 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.8 }}
              >
                Since 1970, Burleson Monuments has been helping families
                create lasting expressions of love and devotion for their
                loved ones.
              </motion.p>

              <motion.p
                variants={{
                  hidden: { opacity: 0, x: -35 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.8 }}
              >
                Our experienced memorial consultants, designers and
                craftsmen understand how important it is to create a
                meaningful tribute. We are here to guide families through
                the memorial selection and design process with care and
                understanding.
              </motion.p>

            </motion.div>

            <div className="about-text-section">
              <h2>
                <WordReveal text="Our Approach" />
              </h2>

              <p>
                <WordReveal text="We believe choosing a memorial should be a comfortable and informed experience. We provide design assistance and memorial information without sales pressure." />
              </p>

              <p>
                <WordReveal text="Our team works with families to explore different materials, designs, inscriptions and personalization options." />
              </p>
            </div>

            <div className="about-text-section">
              <h2>
                <WordReveal text="Our Commitment to Families" />
              </h2>

              <p>
                <WordReveal text="We offer written order confirmation and a computer-generated drawing of the memorial. We also work with cemeteries to provide the required documentation at no extra charge." />
              </p>

              <p>
                <WordReveal text="Our goal is to help families create a beautiful and durable memorial that preserves precious memories." />
              </p>
            </div>

            <div className="about-cta">
              <h2>Let Us Help You Create a Lasting Tribute</h2>

              <p>
                Explore our memorial designs or get in touch with our team
                for more information.
              </p>

              <MotionLink to="/memorials">Explore Memorials</MotionLink>
              <MotionLink to="/contact">Contact Us</MotionLink>
            </div>

          </section>

        </div>
      </div>

    </main>
  );
}

export default About;