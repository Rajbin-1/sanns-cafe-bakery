import { useState, useEffect, useRef } from 'react'
import { Sparkles } from 'lucide-react'
import { fetchMenuItems, type SanityMenuItem } from '@/lib/sanity'

interface MenuItem {
  name: string
  price: string
  description: string
  image: string
}

type MenuCategoryKey = 'drinks' | 'food' | 'bakery' | 'specials'

const categoryMap: Record<string, MenuCategoryKey> = {
  drinks: 'drinks',
  food: 'food',
  bakery: 'bakery',
  specials: 'specials',
}

const defaultImages: Record<string, string> = {
  'Specialty Coffee': '/assets/images/food/coffee-cake.png',
  'Hot Chocolate': '/assets/images/food/hot-chocolate.png',
  'Signature Cheesecake': '/assets/images/food/cheese-cake.png',
  'Chocolate Brownies': '/assets/images/food/chowmein.png',
  'Lemon Tea': '/assets/images/food/lemon-tea.png',
  'Virgin Mojito': '/assets/images/food/virgin-mojito.png',
  'Jhol Momo': '/assets/images/food/jhol-momo.png',
  'Steam Momo': '/assets/images/food/steam-momo.png',
}

function mapSanityToMenuItem(item: SanityMenuItem): MenuItem {
  const price = item.priceMin ?? 0
  const image = item.imageUrl ?? defaultImages[item.name] ?? '/assets/images/food/coffee-cake.png'
  return {
    name: item.name,
    price: `Rs ${price}`,
    description: item.description ?? 'Delicious menu item',
    image,
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

interface MenuItemProps {
  item: MenuItem
  index: number
  isVisible: boolean
  fromLeft: boolean
}

function MenuItemCard({ item, index, isVisible, fromLeft }: MenuItemProps) {
  return (
    <div className="mb-12">
      <div
        className={`relative overflow-hidden rounded-xl shadow-2xl transition-all cursor-pointer group h-80 max-w-sm mx-auto md:mx-0 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
        role="article"
        aria-label={`${item.name} menu item: ${item.price}`}
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
          alt={`${item.name} - ${item.description}`}
          className="w-full h-full object-cover transition-transform duration-500"
          loading={index > 2 ? 'lazy' : 'eager'}
          width={400}
          height={320}
        />
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
      <div
        className={`mt-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ transitionDelay: isVisible ? `${index + 200}ms` : '0ms' }}
      >
        <h3
          className="text-2xl md:text-3xl font-bold mb-3"
          style={{ fontFamily: "'Playfair Display', serif", color: '#3E2723' }}
        >
          {item.name}
        </h3>
        <p className="text-base mb-4" style={{ color: '#8B7355', lineHeight: '1.6' }}>
          {item.description}
        </p>
        <p className="text-xl font-bold" style={{ color: '#D4A574' }}>
          {item.price}
        </p>
      </div>
    </div>
  )
}

export default function MenuPage() {
  const [menuData, setMenuData] = useState<Record<MenuCategoryKey, MenuItem[]> | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [visibleItems, setVisibleItems] = useState<boolean[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    fetchMenuItems()
      .then((items) => {
        if (items.length > 0) {
          const data = buildMenuByCategory(items)
          setMenuData(data)
          const totalItems = Object.values(data).reduce((sum, arr) => sum + arr.length, 0)
          setVisibleItems(new Array(totalItems).fill(false))
          itemRefs.current = new Array(totalItems).fill(null)
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

  useEffect(() => {
    if (itemRefs.current.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemRefs.current.indexOf(entry.target as HTMLDivElement)
          if (index !== -1 && entry.isIntersecting) {
            setVisibleItems((prev) => {
              if (prev[index]) return prev
              const next = [...prev]
              next[index] = true
              return next
            })
          }
        })
      },
      { threshold: 0.15 }
    )
    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })
    return () => observer.disconnect()
  }, [menuData])

  if (isLoading) {
    return (
      <section id="menu-page" style={{ backgroundColor: '#FBF8F3' }} className="py-20">
        <div className="container text-center">
          <p style={{ color: '#8B7355' }}>Loading menu...</p>
        </div>
      </section>
    )
  }

  if (error || !menuData) {
    return (
      <section id="menu-page" style={{ backgroundColor: '#FBF8F3' }} className="py-20">
        <div className="container text-center">
          <p style={{ color: '#8B7355' }}>{error || 'No menu items available'}</p>
        </div>
      </section>
    )
  }

  const allItems = Object.values(menuData).flat()
  const categories = [
    { key: 'drinks', label: 'Drinks & Beverages' },
    { key: 'food', label: 'Food' },
    { key: 'bakery', label: 'Bakery' },
    { key: 'specials', label: 'Specials' },
  ]

  return (
    <section id="menu-page" style={{ backgroundColor: '#FBF8F3' }} className="py-20 relative overflow-hidden">
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full opacity-10 animate-gentle-float" style={{ background: 'radial-gradient(circle, #D4A574, transparent)' }} />
      <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full opacity-10 animate-gentle-float" style={{ background: 'radial-gradient(circle, #A0826D, transparent)', animationDelay: '1s' }} />
      <div className="container relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles size={32} style={{ color: '#D4A574' }} className="animate-subtle-glow" />
            <h1 className="text-5xl md:text-6xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: '#3E2723' }}>
              Our Full Menu
            </h1>
            <Sparkles size={32} style={{ color: '#D4A574' }} className="animate-subtle-glow" />
          </div>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#8B7355' }}>
            Explore our complete menu of premium coffee, delicious food, and artisanal baked goods
          </p>
        </div>
        {categories.map((category) => {
          const categoryKey = category.key as MenuCategoryKey
          const items = menuData[categoryKey]
          if (items.length === 0) return null
          return (
            <div key={categoryKey} className="mb-24">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{ fontFamily: "'Playfair Display', serif", color: '#3E2723' }}>
                {category.label}
              </h2>
              <div className="space-y-16">
                {items.map((item, idx) => {
                  const overallIndex = allItems.findIndex((i) => i.name === item.name && i.price === item.price)
                  return (
                    <div key={`${categoryKey}-${idx}`} ref={(el) => { if (el) itemRefs.current[overallIndex] = el }}>
                      <MenuItemCard item={item} index={overallIndex} isVisible={visibleItems[overallIndex] ?? false} fromLeft={overallIndex % 2 === 0} />
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
