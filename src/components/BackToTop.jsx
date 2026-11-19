import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const shouldBeVisible = window.scrollY > 560;
      setIsVisible((visible) =>
        visible === shouldBeVisible ? visible : shouldBeVisible
      );
    };

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateVisibility);
    };
  }, []);

  const scrollToTop = () => {
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'auto'
      : 'smooth';

    window.scrollTo({ top: 0, behavior });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      className="back-to-top"
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Back to top"
    >
      <ArrowUp size={20} aria-hidden="true" />
    </button>
  );
}

export default BackToTop;
