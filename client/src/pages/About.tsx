import { Heart, MessageCircle, Coffee, Sparkles, Star } from 'lucide-react';

interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
}

const reviews: Review[] = [
  {
    name: 'Tush',
    rating: 5,
    text: 'Lovely cheesecake & chocolate brownie. Must try',
    date: '3 weeks ago',
  },
  {
    name: 'Prabin Gurung',
    rating: 5,
    text: 'Good food with quality bakery 👌 should try …',
    date: '6 months ago',
  },
  {
    name: 'Ashish Gauchan',
    rating: 5,
    text: 'Very good ambience with good hospitality.',
    date: '7 months ago',
  },
  {
    name: 'Prakash Joshi',
    rating: 5,
    text: 'Excellent service and delicious food. Highly recommended!',
    date: '2 months ago',
  },
  {
    name: 'Sanjay Bogati',
    rating: 5,
    text: 'Food: 5/5, Service: 5/5. A truly premium experience.',
    date: '4 months ago',
  },
  {
    name: 'Sisam Ghale',
    rating: 4,
    text: 'Great food and wonderful atmosphere. Worth a visit!',
    date: '5 months ago',
  },
];

export default function About() {
  return (
    <section id="about" style={{ backgroundColor: '#FBF8F3' }} className="py-20">
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
            About Us
          </h2>
          <p style={{ color: '#8B7355', fontSize: '1.1rem' }}>
            More than a café—it's a feeling, a community, a moment of joy
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* About Section */}
          <div className="animate-fade-in-up">
            <h3
              className="text-3xl font-semibold mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: '#3E2723',
              }}
            >
              Our Story
            </h3>
            <div className="space-y-4 leading-relaxed" style={{ color: '#8B7355' }}>
              <p>
                Sann's Café & Bakery is more than just a place to grab coffee—it's a destination where artisanal craft meets curated art gallery ambiance. Located in the heart of Tokha, Kathmandu, we've created a sanctuary for those who appreciate quality, creativity, and community.
              </p>
              <p>
                Every cup of coffee is expertly crafted with premium beans. Every pastry is baked fresh with care. Every moment spent here is designed to inspire and delight. We believe that the best experiences come from the intersection of exceptional quality and thoughtful hospitality.
              </p>
              <p>
                Our signature items—specialty coffee, artisanal sourdough, signature cheesecake, and chocolate brownies—are crafted with precision and passion. We're committed to supporting our local community while maintaining the highest standards of quality and sustainability.
              </p>
              <p>
                Whether you're seeking a quiet moment to work, a place to meet friends, or simply the perfect cup of coffee, Sann's Café & Bakery welcomes you with open arms and warm hospitality.
              </p>
            </div>

            {/* Values - Warm Cafe Cards */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              {[
                { icon: Coffee, title: 'Quality', desc: 'Premium ingredients, meticulous craftsmanship', color: '#D4A574' },
                { icon: Heart, title: 'Community', desc: 'A gathering place for creative minds', color: '#A0826D' },
                { icon: Sparkles, title: 'Hospitality', desc: 'Warm welcome and attentive service', color: '#C89968' },
                { icon: MessageCircle, title: 'Artistry', desc: 'Gallery-inspired ambiance and design', color: '#B8956A' },
              ].map((value, idx) => {
                const Icon = value.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105 border-l-4"
                    style={{ backgroundColor: '#FBF8F3' }}
                    style={{
                      borderColor: value.color,
                      background: `linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(212, 165, 116, 0.05))`,
                    }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Icon size={24} style={{ color: value.color }} className="animate-subtle-glow" />
                      <h4 className="font-semibold" style={{ color: '#3E2723' }}>
                        {value.title}
                      </h4>
                    </div>
                    <p className="text-sm" style={{ color: '#8B7355' }}>
                      {value.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Contact Info */}
          <div className="animate-fade-in-up delay-200">
            <div
              className="rounded-2xl shadow-lg p-8 md:p-10"
              style={{
                background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.08) 0%, rgba(160, 130, 109, 0.08) 100%)',
                border: '2px solid rgba(212, 165, 116, 0.25)',
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Heart size={28} style={{ color: '#A0826D' }} className="animate-subtle-glow" />
                <h3
                  className="text-3xl font-semibold"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: '#3E2723',
                  }}
                >
                  Get in Touch
                </h3>
              </div>
              <p className="mb-6" style={{ color: '#8B7355', fontSize: '1.05rem' }}>
                Have questions or feedback? We'd love to hear from you. Visit us at our café or connect via WhatsApp!
              </p>
              <a
                href="https://wa.me/9869637793"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  backgroundColor: '#25D366',
                  boxShadow: '0 4px 12px rgba(37, 211, 102, 0.25)',
                  color: 'white',
                }}
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Section - Integrated into About */}
        <div className="mt-20">
          <div className="text-center mb-16 animate-fade-in-up">
            <h3
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: '#3E2723',
              }}
            >
              What People Say
            </h3>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" style={{ color: '#F4B860' }} />
              ))}
            </div>
            <p className="text-lg" style={{ color: '#8B7355' }}>
              5.0 Stars - Trusted by our community
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={review.name}
                className="rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{
                  backgroundColor: '#FBF8F3',
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" style={{ color: '#F4B860' }} />
                  ))}
                </div>

                {/* Review Text */}
                <p className="mb-4 italic" style={{ color: '#8B7355' }}>
                  "{review.text}"
                </p>

                {/* Author Info */}
                <div style={{ borderTop: '2px solid #D4C5B9' }} className="pt-4">
                  <p className="font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#3E2723' }}>
                    {review.name}
                  </p>
                  <p className="text-sm" style={{ color: '#8B7355' }}>
                    {review.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center rounded-lg p-12 animate-fade-in-up" style={{ background: 'linear-gradient(to right, rgba(62, 39, 35, 0.1), rgba(244, 184, 96, 0.1))' }}>
            <h3
              className="text-2xl font-semibold mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: '#3E2723',
              }}
            >
              Share Your Experience
            </h3>
            <p className="mb-6" style={{ color: '#8B7355' }}>
              Have you visited us? We'd love to hear about your experience!
            </p>
            <a
              href="https://www.google.com/maps/place/Sann's+Caf%C3%A9+%26+Bakery/@27.755037576155285,85.31520817546908,15z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                backgroundColor: '#F4B860',
                color: '#3E2723',
              }}
            >
              Leave a Review on Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
