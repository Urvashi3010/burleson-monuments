
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { NavLink } from 'react-router-dom';

function MemorialSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const memorialLinks = [
    { name: 'Single Markers- Granite', slug: 'single-markers-granite' },
    { name: 'Companion Markers- Granite', slug: 'companion-markers-granite' },
    { name: 'Single Markers- Bronze', slug: 'single-markers-bronze' },
    { name: 'Companion Markers- Bronze', slug: 'companion-markers-bronze' },
    { name: 'Double Interment Markers', slug: 'double-interment-markers' },
    { name: 'Single Monuments', slug: 'single-monuments' },
    { name: 'Companion Monuments', slug: 'companion-monuments' },
    { name: 'Premium Monuments', slug: 'premium-monuments' },
    { name: 'Child Memorials', slug: 'child-memorials' },
    { name: 'Single Slant Memorials', slug: 'single-slant-memorials' },
    { name: 'Companion Slant Memorials', slug: 'companion-slant-memorials' },
    { name: 'Cremation Memorials', slug: 'cremation-memorials' },
    { name: 'Memorial Benches', slug: 'memorial-benches' },
    { name: 'Laser Etching', slug: 'laser-etching' },
    { name: 'Bronze Plaques', slug: 'bronze-plaques' },
    { name: 'Granite Colors', slug: 'granite-colors' },
    { name: 'Memorial Photos', slug: 'memorial-photos' },
    { name: 'Flower Vases', slug: 'flower-vases' },
    { name: 'Inscriptions', slug: 'inscriptions' },
    { name: 'Pet Memorials', slug: 'pet-memorials' }
  ];

  return (
    <aside className={`memorial-sidebar${isOpen ? ' is-open' : ''}`}>
      <h3 className="memorial-sidebar-heading">Memorial Products</h3>

      <button
        className="memorial-sidebar-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="memorial-sidebar-links"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span>Browse memorials</span>
        <ChevronDown size={18} aria-hidden="true" />
      </button>

      <nav
        className="memorial-sidebar-links"
        id="memorial-sidebar-links"
        aria-label="Memorial products"
      >
        {memorialLinks.map((item) => (
          <NavLink
            to={`/memorials/${item.slug}`}
            key={item.slug}
            className={({ isActive }) =>
              isActive ? 'active-memorial-link' : ''
            }
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default MemorialSidebar;