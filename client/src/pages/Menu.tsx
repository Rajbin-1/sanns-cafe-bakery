import { useState } from 'react';

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

  const categories = [
    { id: 'coffee', label: 'Coffee & Beverages' },
    { id: 'bakery', label: 'Bakery' },
    { id: 'signatures', label: 'Signatures' },
    { id: 'other', label: 'Other' },
  ];

  const currentItems = menuData[activeCategory as keyof typeof menuData];

  return (
    <section id="menu" style={{ backgroundColor: '#FBF8F3' }} className="py-20">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: '#3E2723',
            }}
          >
            Our Menu
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#8B7355' }}>
            Discover our carefully curated selection of premium coffee, artisanal baked goods, and signature dishes
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className="px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-md"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                backgroundColor: activeCategory === category.id ? '#F4B860' : 'white',
                color: activeCategory === category.id ? '#3E2723' : '#3E2723',
                borderColor: activeCategory === category.id ? '#F4B860' : '#D4C5B9',
                border: '2px solid',
              }}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.map((item: MenuItem, index: number) => (
            <div
              key={item.name}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="h-48 overflow-hidden" style={{ backgroundColor: '#E5E7EB' }}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
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
                    color: '#F4B860',
                  }}
                >
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-16 text-center">
          <p className="italic" style={{ color: '#8B7355' }}>
            Prices are approximate and may vary. We support NFC mobile payments for your convenience.
          </p>
        </div>
      </div>
    </section>
  );
}
