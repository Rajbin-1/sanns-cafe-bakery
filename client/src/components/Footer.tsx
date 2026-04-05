import { Instagram, MapPin, Phone, Coffee } from 'lucide-react';

interface FooterProps {
  onNavigate?: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNavClick = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
    }
  };

  return (
    <footer
      style={{
        background: 'linear-gradient(135deg, #3E2723 0%, #2C1810 50%, #3E2723 100%)',
        color: '#FBF8F3',
      }}
      className="py-16 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 animate-gentle-float"
        style={{
          background: 'radial-gradient(circle, #D4A574, transparent)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10 animate-gentle-float"
        style={{
          background: 'radial-gradient(circle, #A0826D, transparent)',
          animationDelay: '1s',
        }}
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-2 mb-4">
              <Coffee size={24} style={{ color: '#D4A574' }} className="animate-cup-rotate" />
              <h3
                className="text-2xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif", color: '#D4A574' }}
              >
                Sann's Café
              </h3>
            </div>
            <p className="text-sm" style={{ color: 'rgba(251, 248, 243, 0.85)' }}>
              Where artisanal craft meets gallery ambiance. Crafted with passion, served with love.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up delay-100">
            <h4 className="font-semibold mb-4" style={{ color: '#D4A574', fontSize: '1.1rem' }}>
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Menu', href: '#menu' },
                { label: 'Find Us', href: '#find-us' },
                { label: 'Reviews', href: '#reviews' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href.replace('#', ''));
                    }}
                    className="transition-all duration-300 hover:text-yellow-100 hover:translate-x-1 inline-block"
                    style={{ color: 'rgba(251, 248, 243, 0.9)' }}
                  >
                    → {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up delay-200">
            <h4 className="font-semibold mb-4" style={{ color: '#D4A574', fontSize: '1.1rem' }}>
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2 group cursor-pointer">
                <MapPin size={16} className="mt-1 flex-shrink-0" style={{ color: '#D4A574' }} />
                <span style={{ color: 'rgba(251, 248, 243, 0.9)' }}>
                  Tokha 44600, Kathmandu
                </span>
              </div>
              <div className="flex items-start gap-2 group cursor-pointer">
                <Phone size={16} className="mt-1 flex-shrink-0" style={{ color: '#D4A574' }} />
                <a
                  href="https://wa.me/9869637793"
                  className="transition-all duration-300"
                  style={{ color: 'rgba(251, 248, 243, 0.9)' }}
                >
                  +977 9869637793
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="animate-fade-in-up delay-300">
            <h4 className="font-semibold mb-4" style={{ color: '#D4A574', fontSize: '1.1rem' }}>
              Follow Us
            </h4>
            <a
              href="https://www.instagram.com/sannscafe25?igsh=Y3NlNmM2am1ranEw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-all duration-300 hover:scale-110 group"
              style={{ color: 'rgba(251, 248, 243, 0.9)' }}
            >
              <Instagram size={20} className="group-hover:animate-subtle-glow" />
              <span className="text-sm">@sannscafe25</span>
            </a>
          </div>
        </div>

        {/* Divider with gradient */}
        <div
          style={{
            borderTop: '2px solid',
            borderImage: 'linear-gradient(to right, transparent, #D4A574, #A0826D, transparent) 1',
          }}
          className="pt-8 mb-8"
        >
          {/* Hours */}
          <div className="mb-6 animate-fade-in-up">
            <h4 className="font-semibold mb-2" style={{ color: '#D4A574' }}>
              Operating Hours
            </h4>
            <p className="text-sm" style={{ color: 'rgba(251, 248, 243, 0.85)' }}>
              Daily: 7:00 AM – 8:00 PM
            </p>
            <p className="text-xs mt-2" style={{ color: 'rgba(251, 248, 243, 0.7)' }}>
              Open every day to serve you with fresh coffee and warm smiles
            </p>
          </div>

          {/* Legal Links */}
          <div className="mb-6 animate-fade-in-up delay-50">
            <h4 className="font-semibold mb-2" style={{ color: '#D4A574' }}>
              Legal
            </h4>
            <div className="flex gap-4 text-sm flex-wrap">
              <button
                onClick={() => handleNavClick('privacy')}
                className="transition-all duration-300 hover:text-yellow-100"
                style={{ color: 'rgba(251, 248, 243, 0.9)' }}
              >
                Privacy Policy
              </button>
              <span style={{ color: 'rgba(251, 248, 243, 0.5)' }}>|</span>
              <button
                onClick={() => handleNavClick('terms')}
                className="transition-all duration-300 hover:text-yellow-100"
                style={{ color: 'rgba(251, 248, 243, 0.9)' }}
              >
                Terms of Service
              </button>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm animate-fade-in-up delay-100">
            <p style={{ color: 'rgba(251, 248, 243, 0.7)' }}>
              &copy; 2026 Sann's Café & Bakery. All rights reserved.
            </p>
            <p className="mt-2" style={{ color: 'rgba(251, 248, 243, 0.6)' }}>
              Crafted with care in Tokha, Kathmandu
            </p>
            <p className="mt-3 text-xs" style={{ color: 'rgba(212, 165, 116, 0.8)' }}>
              Built with passion for coffee lovers everywhere
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
