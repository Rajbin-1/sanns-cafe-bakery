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
      {/* Decorative background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#D4A574 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="container relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#D4A574]/10 text-[#D4A574] mb-6">
            <Sparkles size={16} className="animate-pulse" />
            <span className="text-sm font-bold uppercase tracking-widest">Handcrafted Experience</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#3E2723] mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Menu
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-[#D4A574]/30" />
            <div className="w-3 h-3 rounded-full bg-[#D4A574]" />
            <div className="h-[1px] w-12 bg-[#D4A574]/30" />
          </div>
          <p className="text-xl text-[#8B7355] max-w-2xl mx-auto font-light leading-relaxed">
            Taste the passion in every bite and sip. Our selection is balanced for every mood.
          </p>
        </div>

        {/* Centered Category Navigation */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 mb-20">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id
            const Icon = cat.icon
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as MenuCategoryKey)}
                className={`group flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 rounded-full font-bold transition-all duration-500 transform hover:-translate-y-1 ${
                  isActive 
                    ? 'bg-[#3E2723] text-white shadow-[0_10px_20px_rgba(62,39,35,0.2)]' 
                    : 'bg-white text-[#8B7355] hover:bg-[#F5F1E8] shadow-sm'
                }`}
              >
                <Icon size={18} className={isActive ? 'text-[#D4A574]' : 'group-hover:text-[#D4A574] transition-colors'} />
                <span className="text-sm md:text-base">{cat.label}</span>
              </button>
            )
          })}
        </div>

        {/* Balanced and Centered Menu Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full">
            {currentItems.length > 0 ? (
              currentItems.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col h-full border border-transparent hover:border-[#D4A574]/20"
                  style={{ 
                    animation: `popIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards ${index * 0.1}s`,
                    opacity: 0,
                    transform: 'scale(0.8)'
                  }}
                >
                  {/* Image Container with "Popping" Zoom Effect */}
                  <div className="relative h-72 overflow-hidden m-3 rounded-[2rem]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Price Tag Overlay */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                      <span className="text-[#3E2723] font-black text-sm md:text-base">
                        {item.price}
                      </span>
                    </div>
                  </div>

                  {/* Content - Centered Text */}
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
                    
                    <button className="inline-flex items-center justify-center gap-2 text-[#3E2723] font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all duration-300">
                      <span>Explore Taste</span>
                      <Sparkles size={14} className="text-[#D4A574]" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <div className="bg-white/50 p-12 rounded-[3rem] inline-block border border-dashed border-[#D4A574]/30">
                  <p className="text-[#8B7355] text-lg italic">We are currently perfecting these recipes. Stay tuned!</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Refined Footer Info */}
        <div className="mt-24 text-center">
          <div className="inline-flex flex-col items-center gap-4">
            <div className="flex gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4A574]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4A574]/60" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4A574]/30" />
            </div>
            <p className="text-[#8B7355] text-sm font-medium tracking-wide max-w-lg">
              Freshness guaranteed. All items are prepared daily in our Sann's kitchen. 
              We accept all major digital payments.
            </p>
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
  
