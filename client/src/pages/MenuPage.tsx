import { useState, useEffect } from 'react'
import { Sparkles, Coffee, Croissant, Utensils, Star } from 'lucide-react'
import { fetchMenuItems, type SanityMenuItem } from '@/lib/sanity'

interface MenuItem {
  name: string
  price: string
  description: string
  image: string
  tags?: string[]
}

type MenuCategoryKey = 'drinks' | 'food' | 'bakery' | 'specials'

const categoryMap: Record<string, MenuCategoryKey> = {
  drinks: 'drinks',
  food: 'food',
  bakery: 'bakery',
  specials: 'specials',
  coffee: 'drinks',
  signatures: 'food',
  other: 'specials',
}

function mapSanityToMenuItem(item: SanityMenuItem): MenuItem {
  const price = item.priceMin ?? 0
  const image = item.imageUrl ?? 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop'
  return {
    name: item.name,
    price: `Rs ${price}`,
    description: item.description ?? 'Artisanally crafted for your enjoyment',
    image,
    tags: item.tags
  }
}

function buildMenuByCategory(items: SanityMenuItem[]): Record<MenuCategoryKey, MenuItem[]> {
  const data: Record<MenuCategoryKey, MenuItem[]> = {
    drinks: [],
    food: [],
    bakery: [],
    specials: [],
  }
  items.forEach((item) => {
    const category = categoryMap[item.category] ?? 'specials'
    data[category].push(mapSanityToMenuItem(item))
  })
  return data
}

export default function MenuPage() {
  const [menuData, setMenuData] = useState<Record<MenuCategoryKey, MenuItem[]> | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchMenuItems()
      .then((items) => {
        if (items.length > 0) {
          setMenuData(buildMenuByCategory(items))
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

  if (isLoading) {
    return (
      <section id="menu-page" className="py-24 bg-[#FBF8F3]">
        <div className="container flex flex-col items-center justify-center min-h-[400px]">
          <div className="w-12 h-12 border-4 border-[#D4A574] border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-[#8B7355] font-medium animate-pulse">Preparing the full menu...</p>
        </div>
      </section>
    )
  }

  if (error || !menuData) {
    return (
      <section id="menu-page" className="py-24 bg-[#FBF8F3]">
        <div className="container text-center">
          <div className="bg-white/50 p-8 rounded-2xl inline-block shadow-sm border border-[#D4A574]/20">
            <p className="text-[#8B7355] text-lg">{error || 'Our menu is being updated. Please check back soon!'}</p>
          </div>
        </div>
      </section>
    )
  }

  const categories = [
    { key: 'drinks', label: 'Drinks & Beverages', icon: Coffee },
    { key: 'food', label: 'Main Dishes & Desserts', icon: Star },
    { key: 'bakery', label: 'Freshly Baked', icon: Croissant },
    { key: 'specials', label: 'Chef\'s Specials', icon: Utensils },
  ]

  return (
    <section id="menu-page" className="py-24 bg-[#FBF8F3] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#D4A574 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="container relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#D4A574]/10 text-[#D4A574] mb-6">
            <Sparkles size={16} className="animate-pulse" />
            <span className="text-sm font-bold uppercase tracking-widest">The Complete Collection</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-[#3E2723] mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Full Menu
          </h1>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-16 bg-[#D4A574]/30" />
            <div className="w-4 h-4 rounded-full border-2 border-[#D4A574] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4A574]" />
            </div>
            <div className="h-[1px] w-16 bg-[#D4A574]/30" />
          </div>
          <p className="text-xl text-[#8B7355] max-w-2xl mx-auto font-light leading-relaxed italic">
            "A culinary journey through the heart of Kathmandu, crafted with love and precision."
          </p>
        </div>

        {categories.map((category) => {
          const categoryKey = category.key as MenuCategoryKey
          const items = menuData[categoryKey]
          const Icon = category.icon
          
          if (items.length === 0) return null
          
          return (
            <div key={categoryKey} className="mb-32 last:mb-0">
              <div className="flex items-center gap-6 mb-16">
                <div className="p-4 bg-[#3E2723] rounded-2xl shadow-lg text-[#D4A574]">
                  <Icon size={32} />
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-[#3E2723]" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {category.label}
                  </h2>
                  <div className="h-1 w-20 bg-[#D4A574] mt-2 rounded-full" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {items.map((item, idx) => (
                  <div
                    key={`${categoryKey}-${idx}`}
                    className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col h-full border border-transparent hover:border-[#D4A574]/20"
                    style={{ 
                      animation: `popIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards ${idx * 0.1}s`,
                      opacity: 0,
                      transform: 'scale(0.8)'
                    }}
                  >
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden m-3 rounded-[2rem]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                        <span className="text-[#3E2723] font-black text-sm">
                          {item.price}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="px-8 pb-10 pt-4 text-center flex flex-col flex-grow">
                      <div className="flex justify-center gap-1 mb-3">
                        {item.tags?.map(tag => (
                          <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-[#D4A574] px-2 py-0.5 rounded bg-[#D4A574]/5">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-[#3E2723] mb-4 leading-tight group-hover:text-[#D4A574] transition-colors duration-300" 
                          style={{ fontFamily: "'Playfair Display', serif" }}>
                        {item.name}
                      </h3>
                      
                      <div className="w-8 h-[2px] bg-[#D4A574]/20 mx-auto mb-4 group-hover:w-16 transition-all duration-500" />
                      
                      <p className="text-[#8B7355] text-sm leading-relaxed mb-6 flex-grow italic">
                        "{item.description}"
                      </p>
                      
                      <div className="flex justify-center items-center gap-2 text-[#3E2723] font-bold text-[10px] uppercase tracking-[0.2em]">
                        <span className="w-8 h-[1px] bg-[#D4A574]/30" />
                        <span>Sann's Choice</span>
                        <span className="w-8 h-[1px] bg-[#D4A574]/30" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}

        {/* Footer Info */}
        <div className="mt-32 text-center py-16 border-t border-[#D4A574]/10">
          <p className="text-[#8B7355] text-sm font-medium tracking-wide mb-8">
            Experience the full Sann's Café & Bakery menu at our Kathmandu location.
          </p>
          <div className="flex justify-center gap-6">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#D4A574]">
              <Coffee size={20} />
            </div>
            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#D4A574]">
              <Croissant size={20} />
            </div>
            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#D4A574]">
              <Star size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* PopIn Animation Keyframes */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(30px);
          }
          70% {
            transform: scale(1.05) translateY(-5px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}} />
    </section>
  )
              }
