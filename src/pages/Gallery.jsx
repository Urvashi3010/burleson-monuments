import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import galleryImages from '../galleryImages';

function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const closeButtonRef = useRef(null);
  const triggerButtonRef = useRef(null);
  const isLightboxOpen = selectedIndex !== null;

  useEffect(() => {
    if (!isLightboxOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedIndex(null);
      } else if (event.key === 'ArrowRight') {
        setSelectedIndex((current) =>
          current === null ? current : (current + 1) % galleryImages.length
        );
      } else if (event.key === 'ArrowLeft') {
        setSelectedIndex((current) =>
          current === null
            ? current
            : (current - 1 + galleryImages.length) % galleryImages.length
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      triggerButtonRef.current?.focus();
    };
  }, [isLightboxOpen]);

  const closeLightbox = () => setSelectedIndex(null);

  return (
    <main>
      <section className="page-banner">
        <h1>Our Gallery</h1>
        <p>A collection of memorial designs and craftsmanship.</p>
      </section>

      <section className="gallery-section">
        <h2>Our Work</h2>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <button
              className="gallery-item"
              type="button"
              key={image}
              onClick={(event) => {
                triggerButtonRef.current = event.currentTarget;
                setSelectedIndex(index);
              }}
              aria-label={`View memorial design ${index + 1}`}
            >
              <img
                src={image}
                alt={`Memorial design ${index + 1}`}
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </section>

      {selectedIndex !== null && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Memorial image viewer"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeLightbox();
            }
          }}
        >
          <div className="gallery-lightbox-panel">
            <button
              className="gallery-lightbox-close"
              type="button"
              ref={closeButtonRef}
              onClick={closeLightbox}
              aria-label="Close image viewer"
            >
              <X size={22} />
            </button>

            <button
              className="gallery-lightbox-nav"
              type="button"
              onClick={() =>
                setSelectedIndex(
                  (selectedIndex - 1 + galleryImages.length) %
                    galleryImages.length
                )
              }
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>

            <figure>
              <img
                src={galleryImages[selectedIndex]}
                alt={`Memorial design ${selectedIndex + 1}`}
              />
              <figcaption>
                Design {selectedIndex + 1} of {galleryImages.length}
              </figcaption>
            </figure>

            <button
              className="gallery-lightbox-nav"
              type="button"
              onClick={() =>
                setSelectedIndex((selectedIndex + 1) % galleryImages.length)
              }
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default Gallery;