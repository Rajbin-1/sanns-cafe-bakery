import { useState, useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';

interface MenuItem {
  name: string;
  price: string;
  description: string;
  image: string;
}

interface MenuSection {
  title: string;
  subtitle: string;
  items: MenuItem[];
}

const drinksMenu: MenuItem[] = [
  {
    name: 'Specialty Coffee',
    price: 'Rs 250-350',
    description: 'Expertly crafted specialty coffee with premium beans, perfectly roasted and brewed to perfection.',
    image: '/assets/images/food/coffee-cake.png',
  },
  {
    name: 'Hot Chocolate',
    price: 'Rs 200-300',
    description: 'Rich and creamy hot chocolate made with premium cocoa, perfect for any time of day.',
    image: '/assets/images/food/hot-chocolate.png',
  },
  {
    name: 'Lemon Tea',
    price: 'Rs 150-200',
    description: 'Refreshing lemon tea with a citrus twist, brewed fresh and served warm.',
    image: '/assets/images/food/lemon-tea.png',
  },
  {
    name: 'Virgin Mojito',
    price: 'Rs 200-250',
    description: 'Fresh and zesty virgin mojito with mint, lime, and a touch of sugar for the perfect refreshment.',
    image: '/assets/images/food/virgin-mojito.png',
  },
];

const foodMenu: MenuItem[] = [
  {
    name: 'Signature Cheesecake',
    price: 'Rs 300-400',
    description: 'Our signature creamy cheesecake with a perfect balance of flavors and a buttery crust.',
    image: '/assets/images/food/cheese-cake.png',
  },
  {
    name: 'Chocolate Brownie',
    price: 'Rs 200-300',
    description: 'Decadent chocolate brownie, fudgy and rich, made with premium dark chocolate.',
    image: '/assets/images/food/chowmein.png',
  },
  {
    name: 'Jhol Momo',
    price: 'Rs 150-200',
    description: 'Delicious jhol momo with aromatic broth, served hot with traditional spices.',
    image: '/assets/images/food/jhol-momo.png',
  },
  {
    name: 'Steam Momo',
    price: 'Rs 150-200',
    description: 'Perfectly steamed momo with your choice of filling, tender and flavorful.',
    image: '/assets/images/food/steam-momo.png',
  },
];

const menuSections: MenuSection[] = [
  {
    title: 'Drinks Menu',
    subtitle: 'Refreshing Beverages & Hot Drinks',
    items: drinksMenu,
  },
  {
    title: 'Food Menu',
    subtitle: 'Delicious Food & Desserts',
    items: foodMenu,
  },
];

interface MenuItemProps {
  item: MenuItem;
  index: number;
  isVisible: boolean;
  fromLeft: boolean;
}

function MenuItemCard({ item, index, isVisible, fromLeft }: MenuItemProps) {
  return (
    <div className="mb-12">
      {/* Flashcard with rotation angle */}
      <div
        className={`relative overflow-hidden rounded-xl shadow-2xl transition-all cursor-pointer group h-80 max-w-sm mx-auto md:mx-0 ${
          isVisible
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-75'
        }`}
        style={{
          transform: isVisible
            ? `translateX(0) rotate(0deg) perspective(1000px)`
            : fromLeft
              ? `translateX(-120px) rotate(-8deg) perspective(1000px)`
              : `translateX(120px) rotate(8deg) perspective(1000px)`,
          transitionDelay: isVisible ? `${index}ms` : '0ms',
          transitionDuration: '700ms',
          transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500"
          loading={index > 2 ? 'lazy' : 'eager'}
          width={400}
          height={320}
        />
        {/* Overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.4), rgba(62, 39, 35, 0.6))',
            backdropFilter: 'blur(4px)',
          }}
        >
          <span style={{ color: '#FBF8F3', fontWeight: 'bold', fontSize: '1.5rem' }}>
            ✨ {item.name}
          </span>
        </div>
      </div>

      {/* Info below flashcard */}
      <div
        className={`mt-6 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{
          transitionDelay: isVisible ? `${index + 200}ms` : '0ms',
        }}
      >
        <h3
          className="text-2xl md:text-3xl font-bold mb-3"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: '#3E2723',
          }}
        >
          {item.name}
        </h3>

        <p className="text-base mb-4" style={{ color: '#8B7355', lineHeight: '1.6' }}>
          {item.description}
        </p>

        <p
          className="text-xl font-bold"
          style={{
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
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(drinksMenu.length + foodMenu.length).fill(false));
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

  let itemIndex = 0;

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

        {/* Menu Sections */}
        {menuSections.map((section, sectionIndex) => (
          <div key={section.title} className="mb-24">
            {/* Section Title */}
            <div className="text-center mb-16 animate-fade-in-up">
              <h2
                className="text-4xl md:text-5xl font-bold mb-3"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#3E2723',
                }}
              >
                {section.title}
              </h2>
              <p style={{ color: '#8B7355', fontSize: '1.1rem' }}>
                {section.subtitle}
              </p>
              <div
                className="w-20 h-1 mx-auto mt-4 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, transparent, #D4A574, transparent)',
                }}
              />
            </div>

            {/* Menu Photos using menu-*.png images */}
            {sectionIndex === 0 && (
              <div className="mb-16">
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
                  ref={(el) => {
                    itemRefs.current[itemIndex] = el;
                  }}
                  style={{
                    transition: 'all 700ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                  }}
                >
                  {/* Menu 1 - Drinks */}
                  <div
                    className="relative overflow-hidden rounded-xl shadow-xl group cursor-pointer transition-all duration-700"
                    style={{
                      transform: visibleItems[itemIndex] ? 'translateX(0) rotate(0deg) scale(1)' : 'translateX(-80px) rotate(-10deg) scale(0.85)',
                      opacity: visibleItems[itemIndex] ? 1 : 0,
                      transitionDelay: visibleItems[itemIndex] ? '0ms' : '0ms',
                      transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                    }}
                  >
                    <img
                      src="/assets/images/menu/menu-1.png"
                      alt="Sann's Café Drinks Menu"
                      className="w-full h-auto object-contain transition-transform duration-500"
                      width={400}
                      height={600}
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.4), rgba(62, 39, 35, 0.5))',
                        backdropFilter: 'blur(3px)',
                      }}
                    >
                      <span style={{ color: '#FBF8F3', fontWeight: 'bold', fontSize: '1.2rem' }}>
                        Menu
                      </span>
                    </div>
                  </div>

                  {/* Menu 2 - Drinks */}
                  <div
                    className="relative overflow-hidden rounded-xl shadow-xl group cursor-pointer transition-all duration-700"
                    style={{
                      transform: visibleItems[itemIndex] ? 'translateX(0) rotate(0deg) scale(1)' : 'translateX(80px) rotate(10deg) scale(0.85)',
                      opacity: visibleItems[itemIndex] ? 1 : 0,
                      transitionDelay: visibleItems[itemIndex] ? '100ms' : '0ms',
                      transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                    }}
                  >
                    <img
                      src="/assets/images/menu/menu-2.png"
                      alt="Sann's Café Drinks Menu"
                      className="w-full h-auto object-contain transition-transform duration-500"
                      width={400}
                      height={600}
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.4), rgba(62, 39, 35, 0.5))',
                        backdropFilter: 'blur(3px)',
                      }}
                    >
                      <span style={{ color: '#FBF8F3', fontWeight: 'bold', fontSize: '1.2rem' }}>
                        Menu
                      </span>
                    </div>
                  </div>
                </div>

                {/* Drinks Items - Flashcards with individual animations */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {section.items.map((item, index) => {
                    itemIndex++; // Move to next item index
                    const currentIndex = itemIndex;
                    const fromLeft = index % 2 === 0;
                    // Stagger: first column items (0,2) appear, then second column items (1,3)
                    const staggerDelay = fromLeft ? index * 150 : (index - 1) * 150 + 150;
                    return (
                      <div
                        key={item.name}
                        ref={(el) => {
                          itemRefs.current[currentIndex] = el;
                        }}
                      >
                        <MenuItemCard
                          item={item}
                          index={staggerDelay}
                          isVisible={visibleItems[currentIndex]}
                          fromLeft={fromLeft}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {sectionIndex === 1 && (
              <div>
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
                  ref={(el) => {
                    itemRefs.current[itemIndex] = el;
                  }}
                  style={{
                    transition: 'all 700ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                  }}
                >
                  {/* Menu 3 - Food */}
                  <div
                    className="relative overflow-hidden rounded-xl shadow-xl group cursor-pointer transition-all duration-700"
                    style={{
                      transform: visibleItems[itemIndex] ? 'translateX(0) rotate(0deg) scale(1)' : 'translateX(-80px) rotate(-10deg) scale(0.85)',
                      opacity: visibleItems[itemIndex] ? 1 : 0,
                      transitionDelay: visibleItems[itemIndex] ? '0ms' : '0ms',
                      transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                    }}
                  >
                    <img
                      src="/assets/images/menu/menu-3.png"
                      alt="Sann's Café Food Menu"
                      className="w-full h-auto object-contain transition-transform duration-500"
                      width={400}
                      height={600}
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.4), rgba(62, 39, 35, 0.5))',
                        backdropFilter: 'blur(3px)',
                      }}
                    >
                      <span style={{ color: '#FBF8F3', fontWeight: 'bold', fontSize: '1.2rem' }}>
                        Menu
                      </span>
                    </div>
                  </div>

                  {/* Menu 4 - Food */}
                  <div
                    className="relative overflow-hidden rounded-xl shadow-xl group cursor-pointer transition-all duration-700"
                    style={{
                      transform: visibleItems[itemIndex] ? 'translateX(0) rotate(0deg) scale(1)' : 'translateX(80px) rotate(10deg) scale(0.85)',
                      opacity: visibleItems[itemIndex] ? 1 : 0,
                      transitionDelay: visibleItems[itemIndex] ? '100ms' : '0ms',
                      transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                    }}
                  >
                    <img
                      src="/assets/images/menu/menu-4.png"
                      alt="Sann's Café Food Menu"
                      className="w-full h-auto object-contain transition-transform duration-500"
                      width={400}
                      height={600}
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.4), rgba(62, 39, 35, 0.5))',
                        backdropFilter: 'blur(3px)',
                      }}
                    >
                      <span style={{ color: '#FBF8F3', fontWeight: 'bold', fontSize: '1.2rem' }}>
                        Menu
                      </span>
                    </div>
                  </div>
                </div>

                {/* Food Items - Flashcards with individual animations */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {section.items.map((item, index) => {
                    itemIndex++; // Move to next item index
                    const currentIndex = itemIndex;
                    const fromLeft = index % 2 === 0;
                    // Stagger: first column items (0,2) appear, then second column items (1,3)
                    const staggerDelay = fromLeft ? index * 150 : (index - 1) * 150 + 150;
                    return (
                      <div
                        key={item.name}
                        ref={(el) => {
                          itemRefs.current[currentIndex] = el;
                        }}
                      >
                        <MenuItemCard
                          item={item}
                          index={staggerDelay}
                          isVisible={visibleItems[currentIndex]}
                          fromLeft={fromLeft}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ))}

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
