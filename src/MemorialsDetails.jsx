import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import MemorialSidebar from './components/MemorialSidebar';
import { MotionLink } from './components/Motion';
import galleryImages from './galleryImages';

const memorialData = {
  'single-markers-granite': {
    title: 'Single Markers - Granite',
    description: 'Granite single markers provide a meaningful and lasting way to honor an individual. Available in different shapes, finishes and engraving styles.',
    details: 'Each marker can be personalized with a name, dates, meaningful messages and decorative artwork.',
    features: ['Durable granite construction', 'Personalized lettering and engraving', 'Different granite colors and finishes']
  },

  'companion-markers-granite': {
    title: 'Companion Markers - Granite',
    description: 'Companion markers are designed to honor two individuals together. They offer a shared memorial space with room for personalized details.',
    details: 'Families can choose lettering, layouts and decorative elements that reflect the lives being remembered.',
    features: ['Designed for two individuals', 'Personalized inscriptions', 'Multiple design possibilities']
  },

  'single-markers-bronze': {
    title: 'Single Markers - Bronze',
    description: 'Bronze single markers offer a classic and elegant way to remember a loved one.',
    details: 'These memorials can include personalized names, dates, messages and decorative details.',
    features: ['Classic bronze appearance', 'Custom lettering', 'Personalized memorial designs']
  },

  'companion-markers-bronze': {
    title: 'Companion Markers - Bronze',
    description: 'Bronze companion markers provide a shared tribute for two loved ones.',
    details: 'Their design allows space for individual names and important dates within one memorial.',
    features: ['Two-person memorial design', 'Custom inscriptions', 'Elegant bronze finish']
  },

  'double-interment-markers': {
    title: 'Double Interment Markers',
    description: 'Double interment markers are designed to commemorate two individuals in a shared memorial.',
    details: 'They can be personalized to include individual names, dates and meaningful design elements.',
    features: ['Shared memorial design', 'Personalized inscriptions', 'Different design options']
  },

  'single-monuments': {
    title: 'Single Monuments',
    description: 'Single monuments create a distinctive tribute to an individual and their life story.',
    details: 'Families can personalize the monument with inscriptions, symbols, shapes and other meaningful details.',
    features: ['Individual memorial designs', 'Custom engraving', 'Different granite options']
  },

  'companion-monuments': {
    title: 'Companion Monuments',
    description: 'Companion monuments honor two people together through one thoughtfully designed memorial.',
    details: 'They provide space for personalized inscriptions and design elements that represent both individuals.',
    features: ['Shared memorial designs', 'Personalized lettering', 'Multiple styles and finishes']
  },

  'premium-monuments': {
    title: 'Premium Monuments',
    description: 'Premium monuments feature distinctive designs and carefully selected details for a personalized tribute.',
    details: 'Families can explore different shapes, finishes, engraving styles and decorative elements.',
    features: ['Distinctive designs', 'Detailed craftsmanship', 'Personalized options']
  },

  'child-memorials': {
    title: 'Child Memorials',
    description: 'Child memorials provide a gentle and meaningful way to remember a young life.',
    details: 'Designs can include special symbols, artwork, inscriptions and personal touches that celebrate precious memories.',
    features: ['Thoughtful memorial designs', 'Personalized inscriptions', 'Meaningful decorative details']
  },

  'single-slant-memorials': {
    title: 'Single Slant Memorials',
    description: 'Single slant memorials feature an angled design that provides a distinctive presentation for an individual tribute.',
    details: 'They can be customized with names, dates, lettering and decorative artwork.',
    features: ['Angled memorial design', 'Personalized engraving', 'Different finish options']
  },

  'companion-slant-memorials': {
    title: 'Companion Slant Memorials',
    description: 'Companion slant memorials offer an angled shared design for remembering two individuals.',
    details: 'The layout can accommodate personalized information and meaningful details for both people.',
    features: ['Shared angled design', 'Space for two inscriptions', 'Customizable appearance']
  },

  'cremation-memorials': {
    title: 'Cremation Memorials',
    description: 'Cremation memorials provide a special place to honor and remember loved ones.',
    details: 'Families can explore personalized memorial designs that reflect their wishes and memories.',
    features: ['Personalized memorial options', 'Meaningful inscriptions', 'Different design styles']
  },

  'memorial-benches': {
    title: 'Memorial Benches',
    description: 'Memorial benches combine remembrance with a peaceful place for reflection.',
    details: 'They can be personalized with inscriptions and design details to create a lasting tribute.',
    features: ['Memorial seating designs', 'Custom inscriptions', 'Personalized details']
  },

  'laser-etching': {
    title: 'Laser Etching',
    description: 'Laser etching allows detailed images and artwork to become part of a memorial design.',
    details: 'Photographs, portraits and meaningful artwork can help create a more personal tribute.',
    features: ['Detailed artwork', 'Photo-inspired designs', 'Personalized memorials']
  },

  'bronze-plaques': {
    title: 'Bronze Plaques',
    description: 'Bronze plaques offer a timeless way to display names, dates and commemorative messages.',
    details: 'They can be customized for different memorial and remembrance purposes.',
    features: ['Bronze finish', 'Custom lettering', 'Personalized messages']
  },

  'granite-colors': {
    title: 'Granite Colors',
    description: 'Granite is available in a variety of natural colors and patterns, allowing families to choose a look that feels meaningful.',
    details: 'Each granite selection has its own natural character, texture and appearance.',
    features: ['Variety of natural colors', 'Unique stone patterns', 'Different visual finishes']
  },

  'memorial-photos': {
    title: 'Memorial Photos',
    description: 'Memorial photos add a personal visual element to a lasting tribute.',
    details: 'Photographs can help preserve the memory and personality of someone special.',
    features: ['Personal photo options', 'Meaningful visual tributes', 'Custom placement']
  },

  'flower-vases': {
    title: 'Flower Vases',
    description: 'Memorial flower vases provide a dedicated place for floral tributes and remembrance.',
    details: 'Different styles can complement the appearance of a memorial.',
    features: ['Memorial vase options', 'Different styles', 'Designed to complement memorials']
  },

  inscriptions: {
    title: 'Inscriptions',
    description: 'Inscriptions give a memorial its personal meaning through names, dates, messages and meaningful words.',
    details: 'Families can select wording and lettering styles that reflect the person being remembered.',
    features: ['Personalized wording', 'Lettering styles', 'Meaningful messages']
  },

  'pet-memorials': {
    title: 'Pet Memorials',
    description: 'Pet memorials celebrate the special bond shared with beloved animal companions.',
    details: 'Personalized names, dates, messages and artwork can create a meaningful tribute to a cherished pet.',
    features: ['Personalized pet tributes', 'Custom inscriptions', 'Meaningful design details']
  }
};

function MemorialsDetails() {
  const [selectedImage, setSelectedImage] = useState(null);
  const { category } = useParams();
  const memorial = memorialData[category];

  
  const imagePrefixes = {
    'companion-markers-bronze': 'companion-markers-bronze',
    'double-interment-markers': 'double-interment-markers',
    'child-memorials': 'child-memorials',
    'cremation-memorials': 'cremation-memorials',
  };

  const imagePrefix = imagePrefixes[category] || category;

  const categoryImages = Array.from({ length: 30 }, (_, index) => {
  const imageNumber = String(index + 1).padStart(2, '0');

  return `${import.meta.env.BASE_URL}images/memorials/${category}/${imagePrefix}-${imageNumber}.jpg`;
});
  if (!memorial) {
  return (
    <main>
      <section className="page-banner">
        <h1>Memorial Not Found</h1>
        <p>The requested memorial category could not be found.</p>
        <Link to="/memorials">Explore All Memorials</Link>
      </section>
    </main>
  );
}
  return (
  <main className="memorial-detail">

    <div className="memorials-layout">

      <MemorialSidebar />

      <div className="memorial-detail-main">

        <section className="page-banner">
          <h1>{memorial.title}</h1>
          <p>Thoughtfully crafted to preserve memories.</p>
        </section>

        <section className="memorial-detail-content">
          {/* {memorial.image && (
            <img src={memorial.image} alt={memorial.title} />
        )} */}

          <div>
            <h2>{memorial.title}</h2>

            <p>{memorial.description}</p>

            <p>{memorial.details}</p>

            <h3>Features & Options</h3>

            <ul>
                {memorial.features.map((feature, index) => (
                <li key={index}>{feature}</li>
                ))}
            </ul>

            <MotionLink to={`/contact?memorial=${encodeURIComponent(memorial.title)}`}>
            Request Information
            </MotionLink>

            <MotionLink to="/memorials">Back to All Memorials</MotionLink>
         </div>
        </section>

 {category === 'flower-vases' ? (

  <section className="flower-vases-page">

    {/* GRANITE FLOWER VASES */}

    <div className="vase-section">
      <h2>1) Granite Flower Vases</h2>
      <p className="vase-subtitle">
        (2 shape options including Tapered and Turned)
      </p>

      <div className="vase-shapes">
        <div>
          <img src={`${import.meta.env.BASE_URL}images/memorials/flower-vases/flower-vases-01.jpg`} alt="Tapered Granite Vase" />
        </div>

        <div>
          <img src={`${import.meta.env.BASE_URL}images/memorials/flower-vases/flower-vases-02.jpg`} alt="Turned Granite Vase" />
        </div>
      </div>

      <div className="granite-colors">
        {[
          'Georgia Gray',
          'Bahama Blue',
          'Sunset Red',
          'Jet Black',
          'Indian Red',
          'Salisbury Pink',
          'Flash Black',
          'Mahogany',
          'Morning Rose',
        ].map((name, index) => (
          <div className="vase-color-item" key={name}>
            <h4>{name}</h4>
            <img
              src={`${import.meta.env.BASE_URL}images/memorials/flower-vases/flower-vases-${String(index + 3).padStart(2, '0')}.jpg`}
              alt={name}
            />
          </div>
        ))}
      </div>
    </div>


    {/* BRONZE FLOWER VASES */}

    <div className="vase-section">
      <h2>2) Bronze Flower Vases</h2>

      <div className="bronze-vase-layout">
        <img
          src={`${import.meta.env.BASE_URL}images/memorials/flower-vases/flower-vases-13.jpg`}
          alt="Bronze Flower Vases"
        />

        <div className="bronze-vase-options">
          <h4>4 Bronze Options Include:</h4>
          <p>• Signature &nbsp;&nbsp; • Regency</p>
          <p>• Garden &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • Patrician</p>

          <img
            src={`${import.meta.env.BASE_URL}images/memorials/flower-vases/flower-vases-14.jpg`}
            alt="Bronze Flower Vase with Flowers"
          />
        </div>
      </div>
    </div>


    {/* METALCRAFT FLOWER VASES */}

    <div className="vase-section">
      <h2>3) MetalCraft Flower Vases</h2>

      <div className="metalcraft-vases">

        {[
          { name: 'Monarch', image: 15 },
          { name: 'Classic', image: 16 },
          { name: 'Crown', image: 17 },
          { name: 'Regal', image: 18 }
        ].map((item) => (
          <div className="metalcraft-item" key={item.name}>
            <h4>{item.name}</h4>

            <img
              src={`${import.meta.env.BASE_URL}images/memorials/flower-vases/flower-vases-${item.image}.jpg`}
              alt={item.name}
            />
          </div>
        ))}

      </div>
    </div>

  </section>

) : category === 'inscriptions' ? (

  <section className="inscriptions-page">

    <h2>Memorial Verses – Epitaphs</h2>

    <p className="inscriptions-intro">
      Burleson Monuments offers Inscriptions on our Markers, Monuments,
      Cremation Memorials and Memorial Benches. Below you will find our
      many options at which we hope will be helpful in personalizing
      a forever detail.
    </p>

    {(() => {
      const verses = [
        'At Rest',
        'In Gods Care',
        'In Heaven',
        'Gone Home',
        'In Loving Memory',
        'In Loving Memory of',
        'Together Forever',
        'We Miss You',
        'We Love You',
        'Forever Missed',
        'Forever Loved',
        'Faithful Forever',
        'A Loving Companion',
        'Forever In Our Hearts',
        'Our Little Angel',
        'Eternal Love',
        'Our Love is Eternal',
        'Rest In Peace',
        'One Of A Kind',
        'In Memoriam',
        'In Remembrance',
        'Precious Memories',
        'Sweet Memories',
        "We'll be Together Again",
        'We Will Meet Again',
        'Devoted In Love',
        'Until We Meet Again',
        'Always In Our Hearts',
        'An Unforgettable Person',
        'A Friend In Deed',
        'A Special Kind Of Love',
        'Gone But Not Forgotten',
        'A Sharing Caring Person',
        'Life if Not Forever, Love Is',
        'A Loving Companion',
        'The Best Is Yet To Come',
        'Because He (She) Cared',
        'Brave In Spirit, Strong in Love',
        "Everybody's Best Friend",
        'Faith Hope And Courage',
        'Your Light Will Shine Forever',
        'My LifeTime Companion',
        'He (She) Inspired Us All',
        'Strong in Love, Brave in Spirit',
        'An Inspiration to all of Us',
        'Darling, We Miss You',
        'A Love True and Constant',
        'A Loving Husband / Wife / Father / Mother',
        'A Woman (Man) of Grace and Dignity',
        'Always a Gentleman (Lady)',
        'He (She) Ask For So Little, But Gave So Much',
        'Consistent Of Faith, Generous By Heart',
        'He (She) Enriched Our Lives',
        'He(She) Lived To Help Others',
        'He(She)Touched The Lives Of Many',
        'He (She) Will Never Be Forgotten',
        'In One of the Stars I shall Be Living',
        'Love Is A Light That Never Dims',
        'May His (Her) Light Guide You',
        'Morn Not My Death, But Celebrate My Life',
        'We Remember How Much You Loved Us',
        'What We Keep in Memory Is Ours Forever',
        'Wonderful Was Your Love For Us',
        'In Heaven Too, Will Have Our Hand'
      ];

      return (
        <>
          <div className="inscriptions-columns">

            <ol>
              {verses.slice(0, 35).map((verse, index) => (
                <li key={index}>{verse}</li>
              ))}
            </ol>

            <ol start="36">
              {verses.slice(35).map((verse, index) => (
                <li key={index}>{verse}</li>
              ))}
            </ol>

          </div>

          <img
            className="inscriptions-decoration"
            src={categoryImages[0]}
            alt="Memorial flower arrangement"
          />
        </>
      );
    })()}

  </section>

) : category === 'memorial-photos' ? (
  <section className="memorial-photos-page">
    <div className="memorial-photos-grid">
      {[
        'Oval',
        'Round',
        'Heart',
        'Rectangle',
        'Dome',
        ''
      ].map((name, index) => (
        <div className="memorial-photo-item" key={index}>
          <img
            src={categoryImages[index]}
            alt={name || 'Decorative flower'}
            onError={(e) => {
  const img = e.currentTarget;

  const extensions = ['jpg', 'png', 'jpeg', 'webp'];
  const currentIndex = Number(img.dataset.extensionIndex || 0);
  const nextIndex = currentIndex + 1;

        if (nextIndex < extensions.length) {
          img.dataset.extensionIndex = nextIndex;

          const imageNumber = String(index + 1).padStart(2, '0');

          img.src =
            `${import.meta.env.BASE_URL}images/memorials/${category}/${imagePrefix}-${imageNumber}.${extensions[nextIndex]}`;
        } else {
          img.closest('.memorial-gallery-image').style.display = 'none';
        }
      }}
          />
          {name && <h3>{name}</h3>}
        </div>
      ))}
    </div>
  </section>
) : (
  <section className="related-memorials">

    <h2>Explore Our Memorial Designs</h2>

    <p>
      Browse our collection of memorial designs and find inspiration
      for a meaningful tribute.
    </p>

    <div className={`related-memorial-grid ${category === 'bronze-plaques' ? 'bronze-plaques-gallery' : ''} ${selectedImage !== null ? 'image-selected' : ''}`}>

      {categoryImages.map((image, index) => (
        <button
          type="button"
          className={`memorial-gallery-image ${selectedImage === index ? 'active-image' : ''}`}
          key={image}
          onClick={() => {
            if (category !== 'bronze-plaques') {
              setSelectedImage(selectedImage === index ? null : index);
            }
          }}
        >
          <img
            src={image}
            alt={`${memorial.title} design ${index + 1}`}
            loading="lazy"
            onError={(e) => {
              const img = e.currentTarget;

              if (!img.dataset.pngAttempted) {
                img.dataset.pngAttempted = 'true';
                img.src = img.src.replace('.jpg', '.png');
              } else {
                img.closest('.memorial-gallery-image').style.display = 'none';
              }
            }}
          />
        </button>
      ))}

    </div>

    <MotionLink to="/gallery">View Complete Gallery</MotionLink>

  </section>

)}
      </div>

    </div>

  </main>
);
}

export default MemorialsDetails;