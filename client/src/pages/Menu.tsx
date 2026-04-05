import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface MenuItem {
  name: string;
  price: string;
  description: string;
  image: string;
}

const menuData = {
  coffee: [
    {
      name: 'Specialty Coffee',
      price: 'Rs 250-350',
      description: 'Expertly crafted specialty coffee with premium beans',
      image: '/assets/images/food/coffee-cake.png',
    },
    {
      name: 'Hot Chocolate',
      price: 'Rs 200-300',
      description: 'Rich and creamy hot chocolate, perfect for any time',
      image: '/assets/images/food/hot-chocolate.png',
    },
  ],
  bakery: [
    {
      name: 'Artisanal Sourdough',
      price: 'Rs 150-250',
      description: 'Freshly baked sourdough with a perfect crust',
      image: '/assets/images/interior/interior-3.png',
    },
  ],
  signatures: [
    {
      name: 'Signature Cheesecake',
      price: 'Rs 300-400',
      description: 'Our signature creamy cheesecake with a perfect balance of flavors',
      image: '/assets/images/food/cheese-cake.png',
    },
    {
      name: 'Chocolate Brownies',
      price: 'Rs 200-300',
      description: 'Decadent chocolate brownies, fudgy and rich',
      image: '/assets/images/food/chowmein.png',
    },
  ],
  other: [
    {
      name: 'Lemon Tea',
      price: 'Rs 150-200',
      description: 'Refreshing lemon tea with a citrus twist',
      image: '/assets/images/food/lemon-tea.png',
    },
    {
      name: 'Virgin Mojito',
      price: 'Rs 200-250',
      description: 'Fresh and zesty virgin mojito with mint',
      image: '/assets/images/food/virgin-mojito.png',
    },
    {
      name: 'Jhol Momo',
      price: 'Rs 150-200',
      description: 'Delicious jhol momo with aromatic broth',
      image: '/assets/images/food/jhol-momo.png',
    },
    {
      name: 'Steam Momo',
      price: 'Rs 150-200',
      description: 'Perfectly steamed momo with your choice of filling',
      image: '/assets/images/food/steam-momo.png',
    },
  ],
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('coffee');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const categories = [
    { id: 'coffee', label: 'Coffee & Beverages', color: '#D4A574' },
    { id: 'bakery', label: 'Bakery', color: '#A0826D' },
    { id: 'signatures', label: 'Signatures', color: '#C89968' },
    { id: 'other', label: 'Other', color: '#B8956A' },
  ];

  const currentItems = menuData[activeCategory as keyof typeof menuData];

  return (
    <section id="menu" style={{ backgroundColor: '#FBF8F3' }} className="py-20 relative overflow-hidden">
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
              Our Menu
            </h2>
            <Sparkles size={32} style={{ color: '#D4A574' }} className="animate-subtle-glow" />
          </div>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#8B7355' }}>
            Discover our carefully curated selection of premium coffee, artisanal baked goods, and signature dishes
          </p>
        </div>

        {/* Category Tabs - Warm Cafe Colors */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className="px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 transform"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  backgroundColor: isActive ? category.color : 'white',
                  color: isActive ? 'white' : '#3E2723',
                  border: `2px solid ${category.color}`,
                  boxShadow: isActive ? `0 4px 12px ${category.color}40` : 'none',
                }}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.map((item: MenuItem, index: number) => (
            <div
              key={item.name}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up border-t-4"
              style={{
                animationDelay: `${index * 100}ms`,
                borderColor:
                  activeCategory === 'coffee'
                    ? '#D4A574'
                    : activeCategory === 'bakery'
                      ? '#A0826D'
                      : activeCategory === 'signatures'
                        ? '#C89968'
                        : '#B8956A',
              }}
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Image */}
              <div className="h-48 overflow-hidden relative" style={{ backgroundColor: '#E5E7EB' }}>
                <img
                  src={item.image}
                  alt={`${item.name} - ${item.description} at Sann's Café & Bakery Kathmandu`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  loading={index > 2 ? 'lazy' : 'eager'}
                  width={400}
                  height={300}
                />
                {hoveredItem === item.name && (
                  <div
                    className="absolute inset-0 flex items-center justify-center animate-fade-in"
                    style={{
                      background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.3), rgba(160, 130, 109, 0.3))',
                      backdropFilter: 'blur(2px)',
                    }}
                  >
                    <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>
                      ✨ Delicious
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: '#3E2723',
                  }}
                >
                  {item.name}
                </h3>
                <p className="text-sm mb-3" style={{ color: '#8B7355' }}>
                  {item.description}
                </p>
                <p
                  className="text-lg font-bold"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    color: '#D4A574',
                  }}
                >
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-16 text-center animate-fade-in-up">
          <div
            className="inline-block px-6 py-4 rounded-lg"
            style={{
              background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.1), rgba(160, 130, 109, 0.1))',
              border: '2px solid rgba(212, 165, 116, 0.2)',
            }}
          >
            <p className="italic" style={{ color: '#8B7355' }}>
              Prices are approximate and may vary. We support NFC mobile payments for your convenience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
