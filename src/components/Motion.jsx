import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

const burstDirections = Array.from({ length: 7 }, (_, index) => {
  const angle = (index / 7) * Math.PI * 2;
  return {
    x: Math.cos(angle) * 28,
    y: Math.sin(angle) * 28,
  };
});

export function WordReveal({ text }) {
  const reducedMotion = useReducedMotion();
  const words = text.split(/\s+/);

  return (
    <>
      <span className="sr-only">{text}</span>
      <span className="word-reveal" aria-hidden="true">
        {words.map((word, index) => (
          <motion.span
            className="word-reveal__word"
            key={`${word}-${index}`}
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{
              duration: reducedMotion ? 0 : 0.48,
              delay: reducedMotion ? 0 : index * 0.09,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
            {index < words.length - 1 ? '\u00a0' : ''}
          </motion.span>
        ))}
      </span>
    </>
  );
}

export function Reveal({
  as = 'div',
  className,
  children,
  delay = 0,
  ...props
}) {
  const MotionElement = motion[as];
  const reducedMotion = useReducedMotion();

  return (
    <MotionElement
      className={className}
      data-framer-reveal=""
      initial={reducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reducedMotion ? 0 : 0.65,
        delay: reducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      {...props}
    >
      {children}
    </MotionElement>
  );
}

function Sparkle({ index, pointerX, pointerY, reducedMotion }) {
  const depth = 0.08 + ((index * 13) % 7) / 100;
  const x = useTransform(pointerX, (value) => value * depth);
  const y = useTransform(pointerY, (value) => value * depth);
  const left = `${(index * 37 + 13) % 97}%`;
  const top = `${(index * 53 + 19) % 91 + 4}%`;

  return (
    <motion.span
      className="hero-particle-track"
      style={{ left, top, x, y }}
    >
      <motion.span
        className="hero-particle"
        animate={
          reducedMotion
            ? { opacity: 0.42, scale: 1 }
            : { opacity: [0.18, 0.8, 0.28], scale: [0.8, 1.15, 0.85], y: [0, -5, 1, 0] }
        }
        transition={{
          duration: 2.8 + (index % 5) * 0.55,
          delay: (index % 7) * 0.3,
          repeat: reducedMotion ? 0 : Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.span>
  );
}

export function ParticleField() {
  const reducedMotion = useReducedMotion();
  const pointerX = useSpring(useMotionValue(0), { stiffness: 90, damping: 22 });
  const pointerY = useSpring(useMotionValue(0), { stiffness: 90, damping: 22 });

  const fieldRef = useRef(null);

  useEffect(() => {
    const hero = fieldRef.current?.parentElement;
    if (!hero) return undefined;

    const handlePointerMove = (event) => {
      if (reducedMotion || event.pointerType === 'touch') return;

      const bounds = hero.getBoundingClientRect();
      pointerX.set((event.clientX - bounds.left - bounds.width / 2) * 0.035);
      pointerY.set((event.clientY - bounds.top - bounds.height / 2) * 0.035);
    };
    const resetPointer = () => {
      pointerX.set(0);
      pointerY.set(0);
    };

    hero.addEventListener('pointermove', handlePointerMove);
    hero.addEventListener('pointerleave', resetPointer);
    return () => {
      hero.removeEventListener('pointermove', handlePointerMove);
      hero.removeEventListener('pointerleave', resetPointer);
    };
  }, [pointerX, pointerY, reducedMotion]);

  return (
    <div
      ref={fieldRef}
      className="hero-particle-field"
      aria-hidden="true"
    >
      {Array.from({ length: 18 }, (_, index) => (
        <Sparkle
          key={index}
          index={index}
          pointerX={pointerX}
          pointerY={pointerY}
          reducedMotion={reducedMotion}
        />
      ))}
    </div>
  );
}

export function Parallax({ children }) {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [16, -16]);

  return (
    <motion.div
      ref={ref}
      className="about-parallax"
      style={reducedMotion ? undefined : { y }}
    >
      {children}
    </motion.div>
  );
}

export function MotionLink({ to, className, children, ...props }) {
  const navigate = useNavigate();
  const reducedMotion = useReducedMotion();
  const [burst, setBurst] = useState(false);
  const navigationTimer = useRef(null);

  useEffect(
    () => () => {
      if (navigationTimer.current) window.clearTimeout(navigationTimer.current);
    },
    [],
  );

  const handlePointerMove = (event) => {
    if (reducedMotion || event.pointerType === 'touch') return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left - bounds.width / 2) * 0.1;
    const y = (event.clientY - bounds.top - bounds.height / 2) * 0.1;
    event.currentTarget.style.setProperty('--magnetic-x', `${x}px`);
    event.currentTarget.style.setProperty('--magnetic-y', `${y}px`);
  };

  const handlePointerLeave = (event) => {
    event.currentTarget.style.setProperty('--magnetic-x', '0px');
    event.currentTarget.style.setProperty('--magnetic-y', '0px');
  };

  const handleClick = (event) => {
    if (
      event.defaultPrevented
      || event.button !== 0
      || event.metaKey
      || event.ctrlKey
      || event.shiftKey
      || event.altKey
    ) {
      return;
    }

    event.preventDefault();
    if (navigationTimer.current) return;
    if (reducedMotion) {
      navigate(to);
      return;
    }

    setBurst(true);
    navigationTimer.current = window.setTimeout(() => {
      navigationTimer.current = null;
      setBurst(false);
      navigate(to);
    }, 340);
  };

  return (
    <Link
      to={to}
      className={['motion-link', className].filter(Boolean).join(' ')}
      onClick={handleClick}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      {...props}
    >
      {children}
      {burst && (
        <span className="motion-link__burst" aria-hidden="true">
          {burstDirections.map((direction, index) => (
            <motion.span
              className="motion-link__particle"
              key={index}
              initial={{ opacity: 0.9, scale: 1, x: 0, y: 0 }}
              animate={{ opacity: 0, scale: 0.35, x: direction.x, y: direction.y }}
              transition={{ duration: 0.34, ease: 'easeOut' }}
            />
          ))}
        </span>
      )}
    </Link>
  );
}

export function PageMotion({ children, locationKey }) {
  const rootRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root || reducedMotion || !('IntersectionObserver' in window)) return undefined;

    const targets = root.querySelectorAll([
      'main section:not(.hero):not(.gallery-section)',
      'main h1',
      'main h2',
      'main h3',
      'main p',
      'main li',
      'main img',
      'main .category-card',
      'main .testimonial-card',
      'main .memorial-item',
      'main .gallery-item',
      'main .faq-item',
      'main .related-memorial-card',
    ].join(','));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.dataset.motion = 'visible';
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );

    targets.forEach((target) => {
      if (
  target.hasAttribute('data-framer-reveal')
  || target.closest('.hero')
  || target.closest('.about-legacy-section')
) {
  return;
}
      target.dataset.motion = 'pending';
      observer.observe(target);
    });

    return () => {
      observer.disconnect();
      targets.forEach((target) => delete target.dataset.motion);
    };
  }, [locationKey, reducedMotion]);

  return (
    <motion.div
      ref={rootRef}
      className="page-motion"
      initial={reducedMotion ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reducedMotion ? undefined : { opacity: 0, y: -6 }}
      transition={{ duration: reducedMotion ? 0 : 0.24, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
