import { useState, useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';

interface MenuItem {
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
}

const menuItems: MenuItem[] = [
  // Coffee & Beverages
  {
    name: 'Specialty Coffee',
    price: 'Rs 250-350',
    description: 'Expertly crafted specialty coffee with premium beans, perfectly roasted and brewed to perfection.',
    image: '/assets/images/food/coffee-cake.png',
    category: 'Coffee & Beverages',
  },
  {
    name: 'Hot Chocolate',
    price: 'Rs 200-300',
    description: 'Rich and creamy hot chocolate made with premium cocoa, perfect for any time of day.',
    image: '/assets/images/food/hot-chocolate.png',
    category: 'Coffee & Beverages',
  },
  {
    name: 'Lemon Tea',
    price: 'Rs 150-200',
    description: 'Refreshing lemon tea with a citrus twist, brewed fresh and served warm.',
    image: '/assets/images/food/lemon-tea.png',
    category: 'Coffee & Beverages',
  },
  {
    name: 'Virgin Mojito',
    price: 'Rs 200-250',
    description: 'Fresh and zesty virgin mojito with mint, lime, and a touch of sugar for the perfect refreshment.',
    image: '/assets/images/food/virgin-mojito.png',
    category: 'Coffee & Beverages',
  },
  // Bakery & Signatures
  {
    name: 'Signature Cheesecake',
    price: 'Rs 300-400',
    description: 'Our signature creamy cheesecake with a perfect balance of flavors and a buttery crust.',
    image: '/assets/images/food/cheese-cake.png',
    category: 'Bakery & Signatures',
  },
  {
    name: 'Chocolate Brownie',
    price: 'Rs 200-300',
    description: 'Decadent chocolate brownie, fudgy and rich, made with premium dark chocolate.',
    image: '/assets/images/food/chowmein.png',
    category: 'Bakery & Signatures',
  },
  // Momos
  {
    name: 'Jhol Momo',
    price: 'Rs 150-200',
    description: 'Delicious jhol momo with aromatic broth, served hot with traditional spices.',
    image: '/assets/images/food/jhol-momo.png',
    category: 'Momos',
  },
  {
    name: 'Steam Momo',
    price: 'Rs 150-200',
    description: 'Perfectly steamed momo with your choice of filling, tender and flavorful.',
    image: '/assets/images/food/steam-momo.png',
    category: 'Momos',
  },
];

interface MenuItemProps {
  item: MenuItem;
  index: number;
  isVisible: boolean;
}

function MenuItemCard({ item, index, isVisible }: MenuItemProps) {
  const isEvenIndex = index % 2 === 0;

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16 transition-all duration-700 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{
        flexDirection: isEvenIndex ? 'row' : 'row-reverse',
      }}
    >
      {/* Image - Pop-up from side */}
      <div
        className={`relative overflow-hidden rounded-xl shadow-lg transition-all duration-700 ${
          isVisible
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-90'
        }`}
        style={{
          transform: isVisible
            ? 'translateX(0)'
            : isEvenIndex
              ? 'translateX(-60px)'
              : 'translateX(60px)',
          transitionDelay: isVisible ? '200ms' : '0ms',
        }}
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
        />
        <div
          className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.3), rgba(160, 130, 109, 0.3))',
            backdropFilter: 'blur(2px)',
          }}
        >
          <span style={{ color: '#FBF8F3', fontWeight: 'bold', fontSize: '1.2rem' }}>
            ✨ Delicious
          </span>
        </div>
      </div>

      {/* Content - Fade in with delay */}
      <div
        className={`transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{
          transitionDelay: isVisible ? '300ms' : '0ms',
        }}
      >
        <div className="mb-4">
          <span
            className="text-sm font-semibold px-3 py-1 rounded-full"
            style={{
              backgroundColor: 'rgba(212, 165, 116, 0.15)',
              color: '#D4A574',
            }}
          >
            {item.category}
          </span>
        </div>

        <h3
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: '#3E2723',
          }}
        >
          {item.name}
        </h3>

        <p className="text-lg mb-6" style={{ color: '#8B7355', lineHeight: '1.8' }}>
          {item.description}
        </p>

        <p
          className="text-2xl font-bold"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            color: '#D4A574',
          }}
        >
          {item.price}
        </p>
      </div>
    </div>
  );
}

export default function MenuPage() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(menuItems.length).fill(false));
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
      { threshold: 0.3 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="menu-page" style={{ backgroundColor: '#FBF8F3' }} className="py-20 relative overflow-hidden">
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
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles size={32} style={{ color: '#D4A574' }} className="animate-subtle-glow" />
            <h1
              className="text-5xl md:text-6xl font-bold"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: '#3E2723',
              }}
            >
              Our Menu
            </h1>
            <Sparkles size={32} style={{ color: '#D4A574' }} className="animate-subtle-glow" />
          </div>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#8B7355' }}>
            Discover our carefully curated selection of premium coffee, artisanal baked goods, and signature dishes. Each item is crafted with passion and served with love.
          </p>
        </div>

        {/* Menu Items with Scroll Animations */}
        <div>
          {menuItems.map((item, index) => (
            <div
              key={item.name}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
            >
              <MenuItemCard
                item={item}
                index={index}
                isVisible={visibleItems[index]}
              />
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-20 text-center animate-fade-in-up">
          <div
            className="inline-block px-8 py-6 rounded-lg"
            style={{
              background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.1), rgba(160, 130, 109, 0.1))',
              border: '2px solid rgba(212, 165, 116, 0.2)',
            }}
          >
            <p className="text-lg" style={{ color: '#8B7355' }}>
              Prices are approximate and may vary. We support NFC mobile payments for your convenience.
            </p>
            <p className="text-sm mt-3" style={{ color: '#A0826D' }}>
              For orders or special requests, please contact us via WhatsApp or visit us in person.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
