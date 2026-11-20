import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const cards = [
  {
    image: `${import.meta.env.BASE_URL}images/fan-cards/card-1.webp`,
    title: 'Upright Monuments',
  },
  {
    image: `${import.meta.env.BASE_URL}images/fan-cards/card-2.jpg`,
    title: 'Memorial Markers',
  },
  {
    image: `${import.meta.env.BASE_URL}images/fan-cards/card-3.jpg`,
    title: 'Custom Memorials',
  },
];

function FanCardCarousel() {
  const [activeCard, setActiveCard] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((current) => (current + 1) % cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const positions = [
    { x: 0, y: 0, rotate: 0, scale: 1, zIndex: 3 },
    { x: -65, y: 12, rotate: -12, scale: 0.88, zIndex: 2 },
    { x: 65, y: 12, rotate: 12, scale: 0.88, zIndex: 1 },
  ];

  return (
    <div className="fan-carousel">
      {cards.map((card, index) => {
        const position =
          positions[(index - activeCard + cards.length) % cards.length];

        return (
          <motion.div
            className="fan-card"
            key={card.title}
            animate={{
              x: position.x,
              y: position.y,
              rotate: position.rotate,
              scale: position.scale,
              zIndex: position.zIndex,
            }}
            transition={{
              duration: reducedMotion ? 0 : 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="fan-card-inner">
              <img src={card.image} alt={card.title} />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default FanCardCarousel;