import { useState, useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: '/assets/images/interior/interior-1.png',
    alt: 'Sann\'s Café Interior - Main Seating',
    title: 'Main Seating Area',
  },
  {
    src: '/assets/images/interior/interior-2.png',
    alt: 'Sann\'s Café Interior - Gallery Wall',
    title: 'Gallery Wall',
  },
  {
    src: '/assets/images/interior/interior-3.png',
    alt: 'Sann\'s Café Interior - Counter',
    title: 'Coffee Counter',
  },
  {
    src: '/assets/images/interior/interior-4.png',
    alt: 'Sann\'s Café Interior - Ambiance',
    title: 'Cozy Corner',
  },
  {
    src: '/assets/images/interior/interior-5.png',
    alt: 'Sann\'s Café Interior - Details',
    title: 'Artistic Details',
  },
  {
    src: '/assets/images/interior/interior-6.png',
    alt: 'Sann\'s Café Interior - Atmosphere',
    title: 'Café Atmosphere',
  },
  {
    src: '/assets/images/interior/interior-7.png',
    alt: 'Sann\'s Café Interior - Vibe',
    title: 'Warm Ambiance',
  },
];

interface GalleryItemProps {
  image: GalleryImage;
  index: number;
  isVisible: boolean;
}

function GalleryItem({ image, index, isVisible }: GalleryItemProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-700 group cursor-pointer ${
        isVisible
          ? 'opacity-100 scale-100'
          : 'opacity-0 scale-90'
      }`}
      style={{
        transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
      }}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
        loading={index > 2 ? 'lazy' : 'eager'}
        width={400}
        height={256}
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.4), rgba(160, 130, 109, 0.4))',
          backdropFilter: 'blur(4px)',
        }}
      >
        <div className="text-center">
          <p style={{ color: '#FBF8F3', fontWeight: 'bold', fontSize: '1.1rem' }}>
            {image.title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(galleryImages.length).fill(false));
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
          if (index !== -1) {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" style={{ backgroundColor: '#FBF8F3' }} className="py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div
        className="absolute top-10 right-10 w-40 h-40 rounded-full opacity-10 animate-gentle-float"
        style={{
          background: 'radial-gradient(circle, #D4A574, transparent)',
        }}
      />
      <div
        className="absolute bottom-20 left-10 w-32 h-32 rounded-full opacity-10 animate-gentle-float"
        style={{
          background: 'radial-gradient(circle, #A0826D, transparent)',
          animationDelay: '1s',
        }}
      />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles size={32} style={{ color: '#D4A574' }} className="animate-subtle-glow" />
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: '#3E2723',
              }}
            >
              Gallery
            </h2>
            <Sparkles size={32} style={{ color: '#D4A574' }} className="animate-subtle-glow" />
          </div>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#8B7355' }}>
            Experience the ambiance and artistry of Sann's Café & Bakery through our curated gallery
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
            >
              <GalleryItem
                image={image}
                index={index}
                isVisible={visibleItems[index]}
              />
            </div>
          ))}
        </div>

        {/* Gallery Footer */}
        <div className="mt-16 text-center animate-fade-in-up">
          <div
            className="inline-block px-8 py-6 rounded-lg"
            style={{
              background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.1), rgba(160, 130, 109, 0.1))',
              border: '2px solid rgba(212, 165, 116, 0.2)',
            }}
          >
            <p className="text-lg" style={{ color: '#8B7355' }}>
              Visit us in person to experience the full ambiance and warmth of our café
            </p>
            <p className="text-sm mt-3" style={{ color: '#A0826D' }}>
              📍 Tokha 44600, Kathmandu | 📞 +977 9869637793
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
