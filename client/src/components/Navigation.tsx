import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onNavigate: (section: string) => void;
}

export default function Navigation({ onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Menu', id: 'menu' },
    { label: 'About Us', id: 'about' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Find Us', id: 'contacts' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? 'rgba(62, 39, 35, 0.7)' : 'rgba(62, 39, 35, 1)',
        boxShadow: isScrolled ? '0 2px 8px rgba(0,0,0,0.3)' : '0 2px 8px rgba(0,0,0,0.2)',
        backdropFilter: isScrolled ? 'blur(8px)' : 'none',
      }}
    >
      <div className="container flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => handleNavClick('home')}
        >
          <img 
            src="/assets/images/logo.jpg" 
            alt="Sann's Café & Bakery - Premium Coffee & Artisanal Bakery in Kathmandu" 
            className="w-12 h-12 rounded-full object-cover border-2 transition-all duration-300 hover:scale-110"
            width={48}
            height={48}
            style={{
              borderColor: '#D4A574',
            }}
          />
          <span
            className="font-bold text-xl tracking-tight transition-colors duration-300"
            style={{
              color: '#FBF8F3',
            }}
          >
            Sann's Café
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="text-sm font-medium transition-all duration-300 relative pb-1"
              style={{
                color: '#FBF8F3',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#D4A574';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#FBF8F3';
              }}
            >
              {link.label}
              <div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full"
                style={{
                  background: 'linear-gradient(to right, transparent, #D4A574, transparent)',
                }}
              />
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X
              size={24}
              style={{ color: '#FBF8F3' }}
            />
          ) : (
            <Menu
              size={24}
              style={{ color: '#FBF8F3' }}
            />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div
          style={{
            backgroundColor: '#2C1810',
          }}
        >
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-left py-2 font-medium transition-all duration-300"
                style={{
                  color: '#FBF8F3',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#D4A574';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#FBF8F3';
                }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
