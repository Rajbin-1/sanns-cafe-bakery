import { useEffect, useState } from 'react'
import { Sparkles, Coffee, Croissant, Utensils, Star } from 'lucide-react'
import { fetchMenuItems, type SanityMenuItem } from '@/lib/sanity'

interface MenuItem {
  name: string
  price: string
  description: string
  image: string
  tags?: string[]
}

type MenuCategoryKey = 'coffee' | 'bakery' | 'signatures' | 'other'

const categoryMap: Record<string, MenuCategoryKey> = {
  'drinks': 'coffee',
  'food': 'signatures',
  'bakery': 'bakery',
  'specials': 'other',
  'coffee': 'coffee',
  'signatures': 'signatures',
  'other': 'other',
}

function mapSanityToMenuItem(item: SanityMenuItem): MenuItem {
  const price = item.priceMin ?? 0
  // Prioritize Sanity image, then fallback to a generic high-quality placeholder if missing
  const image = item.imageUrl ?? 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop'

  return {
    name: item.name,
    price: `Rs ${price}`,
    description: item.description ?? 'Artisanally crafted for your enjoyment',
    image,
    tags: item.tags
  }
}

function buildMenuData(items: SanityMenuItem[]): Record<MenuCategoryKey, MenuItem[]> {
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

  return data
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<MenuCategoryKey>('coffee')
  const [menuData, setMenuData] = useState<Record<MenuCategoryKey, MenuItem[]> | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchMenuItems()
      .then((items) => {
        if (items.length > 0) {
          setMenuData(buildMenuData(items))
        } else {
          setError('No menu items available')
        }
      })
      .catch((err) => {
        console.error('Failed to fetch menu items:', err)
        setError('Unable to load menu items')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  const categories = [
    { id: 'coffee', label: 'Coffee & Drinks', icon: Coffee, color: '#D4A574' },
    { id: 'bakery', label: 'Fresh Bakery', icon: Croissant, color: '#A0826D' },
    { id: 'signatures', label: 'Signatures', icon: Star, color: '#C89968' },
    { id: 'other', label: 'More Delights', icon: Utensils, color: '#B8956A' },
  ]

  if (isLoading) {
    return (
      <section id="menu" className="py-24 bg-[#FBF8F3]">
        <div className="container flex flex-col items-center justify-center min-h-[400px]">
          <div className="w-12 h-12 border-4 border-[#D4A574] border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-[#8B7355] font-medium animate-pulse">Preparing the menu...</p>
        </div>
      </section>
    )
  }

  if (error || !menuData) {
    return (
      <section id="menu" className="py-24 bg-[#FBF8F3]">
        <div className="container text-center">
          <div className="bg-white/50 p-8 rounded-2xl inline-block shadow-sm border border-[#D4A574]/20">
            <p className="text-[#8B7355] text-lg">{error || 'Our menu is being updated. Please check back soon!'}</p>
          </div>
        </div>
      </section>
    )
  }

  const currentItems = menuData[activeCategory]

  return (
    <section id="menu" className="py-24 bg-[#FBF8F3] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/50 to-transparent pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#D4A574]/10 text-[#D4A574] mb-6 animate-fade-in">
            <Sparkles size={16} />
            <span className="text-sm font-bold uppercase tracking-widest">Exquisite Selection</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#3E2723] mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Menu
          </h2>
          <div className="w-24 h-1 bg-[#D4A574] mx-auto rounded-full mb-8" />
          <p className="text-xl text-[#8B7355] max-w-2xl mx-auto font-light leading-relaxed">
            Experience the art of fine dining with our handcrafted beverages and artisanal delights.
          </p>
        </div>

        {/* Category Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id
            const Icon = cat.icon
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as MenuCategoryKey)}
                className={`group flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all duration-500 shadow-sm hover:shadow-xl transform hover:-translate-y-1 border-2 ${
                  isActive ? 'bg-[#3E2723] border-[#3E2723] text-white' : 'bg-white border-transparent text-[#8B7355] hover:border-[#D4A574]/30'
                }`}
              >
                <Icon size={20} className={isActive ? 'text-[#D4A574]' : 'group-hover:text-[#D4A574] transition-colors'} />
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {currentItems.length > 0 ? (
            currentItems.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="group bg-white rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-[#D4A574]/5 flex flex-col h-full"
                style={{ animation: `fadeInUp 0.6s ease-out forwards ${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-6 right-6 flex justify-between items-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex gap-2">
                      {item.tags?.slice(0, 2).map(tag => (
                        <span key={tag} className="px-3 py-1 bg-[#D4A574] text-white text-[10px] font-bold uppercase rounded-full shadow-lg">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-[#3E2723] group-hover:text-[#D4A574] transition-colors duration-300 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {item.name}
                    </h3>
                    <span className="text-xl font-black text-[#D4A574] whitespace-nowrap" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {item.price}
                    </span>
                  </div>
                  <p className="text-[#8B7355] text-sm leading-relaxed mb-6 flex-grow">
                    {item.description}
                  </p>
                  <div className="pt-6 border-t border-[#FBF8F3] flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#D4A574]/60">Sann's Signature</span>
                    <button className="text-[#3E2723] hover:text-[#D4A574] transition-colors">
                      <Sparkles size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-[#8B7355] italic">No items found in this category yet.</p>
            </div>
          )}
        </div>

        {/* Bottom Note */}
        <div className="mt-24 text-center">
          <div className="inline-block px-10 py-6 rounded-3xl bg-white shadow-sm border border-[#D4A574]/10 max-w-3xl">
            <p className="text-[#8B7355] text-sm italic leading-relaxed">
              * Prices are inclusive of local taxes. We prioritize fresh, locally sourced ingredients for every dish.
              <br />
              Digital payments via Fonepay and cards are highly encouraged.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
            }
                                                  
