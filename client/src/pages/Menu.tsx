import { useEffect, useState } from 'react'
import { Sparkles } from 'lucide-react'
import { fetchMenuItems, type SanityMenuItem } from '@/lib/sanity'

interface MenuItem {
  name: string
  price: string
  description: string
  image: string
}

type MenuCategoryKey = 'coffee' | 'bakery' | 'signatures' | 'other'

const fallbackImages: Record<string, string> = {
  'Specialty Coffee': '/assets/images/food/coffee-cake.png',
  'Hot Chocolate': '/assets/images/food/hot-chocolate.png',

  'Signature Cheesecake': '/assets/images/food/cheese-cake.png',
  'Chocolate Brownies': '/assets/images/food/chowmein.png',
  'Lemon Tea': '/assets/images/food/lemon-tea.png',
  'Virgin Mojito': '/assets/images/food/virgin-mojito.png',
  'Jhol Momo': '/assets/images/food/jhol-momo.png',
  'Steam Momo': '/assets/images/food/steam-momo.png',
}

const fallbackMenuData: Record<MenuCategoryKey, MenuItem[]> = {
  coffee: [
    {
      name: 'Specialty Coffee',
      price: 'Rs 250',
      description: 'Expertly crafted specialty coffee with premium beans',
      image: '/assets/images/food/coffee-cake.png',
    },
    {
      name: 'Hot Chocolate',
      price: 'Rs 200',
      description: 'Rich and creamy hot chocolate, perfect for any time',
      image: '/assets/images/food/hot-chocolate.png',
    },
  ],
  bakery: [],
  signatures: [
    {
      name: 'Signature Cheesecake',
      price: 'Rs 300',
      description: 'Our signature creamy cheesecake with a perfect balance of flavors',
      image: '/assets/images/food/cheese-cake.png',
    },
    {
      name: 'Chocolate Brownies',
      price: 'Rs 200',
      description: 'Decadent chocolate brownies, fudgy and rich',
      image: '/assets/images/food/chowmein.png',
    },
  ],
  other: [
    {
      name: 'Lemon Tea',
      price: 'Rs 150',
      description: 'Refreshing lemon tea with a citrus twist',
      image: '/assets/images/food/lemon-tea.png',
    },
    {
      name: 'Virgin Mojito',
      price: 'Rs 200',
      description: 'Fresh and zesty virgin mojito with mint',
      image: '/assets/images/food/virgin-mojito.png',
    },
    {
      name: 'Jhol Momo',
      price: 'Rs 150',
      description: 'Delicious jhol momo with aromatic broth',
      image: '/assets/images/food/jhol-momo.png',
    },
    {
      name: 'Steam Momo',
      price: 'Rs 150',
      description: 'Perfectly steamed momo with your choice of filling',
      image: '/assets/images/food/steam-momo.png',
    },
  ],
}

const categoryMap: Record<string, MenuCategoryKey> = {
  drinks: 'coffee',
  food: 'signatures',
  bakery: 'bakery',
  specials: 'other',
}

function mapSanityToMenuItem(item: SanityMenuItem): MenuItem {
  const price = item.priceMin ?? 0
  const image = item.imageUrl ?? fallbackImages[item.name] ?? '/assets/images/food/coffee-cake.png'

  return {
    name: item.name,
    price: `Rs ${price}`,
    description: item.description ?? 'Delicious menu item from Sanns Cafe and Bakery',
    image,
  }
}

function buildMenuData(items: SanityMenuItem[]) {
  const data: Record<MenuCategoryKey, MenuItem[]> = {
    coffee: [],
    bakery: [],
    signatures: [],
    other: [],
  }

  items.forEach((item) => {
    const category = categoryMap[item.category] ?? 'other'
    data[category].push(mapSanityToMenuItem(item))
  })

  return {
    coffee: data.coffee.length > 0 ? data.coffee : fallbackMenuData.coffee,
    bakery: data.bakery.length > 0 ? data.bakery : fallbackMenuData.bakery,
    signatures: data.signatures.length > 0 ? data.signatures : fallbackMenuData.signatures,
    other: data.other.length > 0 ? data.other : fallbackMenuData.other,
  }
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<MenuCategoryKey>('coffee')
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [menuData, setMenuData] = useState<Record<MenuCategoryKey, MenuItem[]>>(fallbackMenuData)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchMenuItems()
      .then((items) => {
        if (items.length > 0) {
          setMenuData(buildMenuData(items))
        }
      })
      .catch(() => {
        // Keep fallback data if Sanity is unavailable
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  const categories = [
    { id: 'coffee', label: 'Coffee & Beverages', color: '#D4A574' },
    { id: 'bakery', label: 'Bakery', color: '#A0826D' },
    { id: 'signatures', label: 'Signatures', color: '#C89968' },
    { id: 'other', label: 'Other', color: '#B8956A' },
  ]

  const currentItems = menuData[activeCategory]

  if (isLoading) {
    return (
      <section id="menu" style={{ backgroundColor: '#FBF8F3' }} className="py-20">
        <div className="container text-center">
          <p style={{ color: '#8B7355' }}>Loading menu...</p>
        </div>
      </section>
    )
  }

  return (
    <section id="menu" style={{ backgroundColor: '#FBF8F3' }} className="py-20 relative overflow-hidden">
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

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const isActive = activeCategory === category.id
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className="px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 transform"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  backgroundColor: isActive ? category.color : '#FBF8F3',
                  color: isActive ? 'white' : '#3E2723',
                  border: `2px solid ${category.color}`,
                  boxShadow: isActive ? `0 4px 12px ${category.color}40` : 'none',
                }}
              >
                {category.label}
              </button>
            )
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.map((item, index) => (
            <div
              key={item.name}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up border-t-4"
              style={{
                backgroundColor: '#FBF8F3',
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
                    <span style={{ color: '#FBF8F3', fontWeight: 'bold', fontSize: '1.2rem' }}>
                      ✨ Delicious
                    </span>
                  </div>
                )}
              </div>

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
  )
}
