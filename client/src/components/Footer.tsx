import { Instagram, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#3E2723', color: '#FBF8F3' }} className="py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Sann's Café
            </h3>
            <p className="text-sm" style={{ color: 'rgba(251, 248, 243, 0.8)' }}>
              Where artisanal craft meets gallery ambiance
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="transition-colors hover:opacity-75" style={{ color: '#FBF8F3' }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="transition-colors hover:opacity-75" style={{ color: '#FBF8F3' }}>
                  Menu
                </a>
              </li>
              <li>
                <a href="#find-us" className="transition-colors hover:opacity-75" style={{ color: '#FBF8F3' }}>
                  Find Us
                </a>
              </li>
              <li>
                <a href="#reviews" className="transition-colors hover:opacity-75" style={{ color: '#FBF8F3' }}>
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Tokha 44600, Kathmandu</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <a href="https://wa.me/9869637793" className="transition-colors hover:opacity-75">
                  +977 9869637793
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <a
              href="https://www.instagram.com/sannscafe25?igsh=Y3NlNmM2am1ranEw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:opacity-75"
              style={{ color: '#FBF8F3' }}
            >
              <Instagram size={20} />
              <span className="text-sm">@sannscafe25</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(251, 248, 243, 0.2)' }} className="pt-8">
          {/* Hours */}
          <div className="mb-6">
            <h4 className="font-semibold mb-2">Operating Hours</h4>
            <p className="text-sm" style={{ color: 'rgba(251, 248, 243, 0.8)' }}>
              Daily: 7:00 AM – 8:00 PM
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm" style={{ color: 'rgba(251, 248, 243, 0.6)' }}>
            <p>&copy; 2026 Sann's Café & Bakery. All rights reserved.</p>
            <p className="mt-2">Crafted with care in Tokha, Kathmandu</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
