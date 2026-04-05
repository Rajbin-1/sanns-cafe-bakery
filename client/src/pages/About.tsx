import { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function About() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

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
            About & Contact
          </h2>
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

            {/* Values */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="p-4 bg-white rounded-lg shadow-md">
                <h4 className="font-semibold mb-2" style={{ color: '#3E2723' }}>
                  Quality
                </h4>
                <p className="text-sm" style={{ color: '#8B7355' }}>
                  Premium ingredients, meticulous craftsmanship
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md">
                <h4 className="font-semibold mb-2" style={{ color: '#3E2723' }}>
                  Community
                </h4>
                <p className="text-sm" style={{ color: '#8B7355' }}>
                  A gathering place for creative minds
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md">
                <h4 className="font-semibold mb-2" style={{ color: '#3E2723' }}>
                  Hospitality
                </h4>
                <p className="text-sm" style={{ color: '#8B7355' }}>
                  Warm welcome and attentive service
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md">
                <h4 className="font-semibold mb-2" style={{ color: '#3E2723' }}>
                  Artistry
                </h4>
                <p className="text-sm" style={{ color: '#8B7355' }}>
                  Gallery-inspired ambiance and design
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up delay-200">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-2 mb-6">
                <Mail className="w-6 h-6" style={{ color: '#F4B860' }} />
                <h3
                  className="text-2xl font-semibold"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: '#3E2723',
                  }}
                >
                  Get in Touch
                </h3>
              </div>

              {submitted ? (
                <div className="rounded-lg p-6 text-center" style={{ backgroundColor: 'rgba(244, 184, 96, 0.2)', border: '2px solid #F4B860' }}>
                  <p className="font-semibold mb-2" style={{ color: '#3E2723' }}>
                    Thank you for reaching out!
                  </p>
                  <p style={{ color: '#8B7355' }}>We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#3E2723' }}>
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none transition-colors"
                      style={{
                        borderColor: '#D4C5B9',
                        color: '#2C2C2C',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#F4B860';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#D4C5B9';
                      }}
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#3E2723' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none transition-colors"
                      style={{
                        borderColor: '#D4C5B9',
                        color: '#2C2C2C',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#F4B860';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#D4C5B9';
                      }}
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#3E2723' }}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none transition-colors resize-none"
                      style={{
                        borderColor: '#D4C5B9',
                        color: '#2C2C2C',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#F4B860';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#D4C5B9';
                      }}
                      placeholder="Your message..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-6 py-3 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      backgroundColor: '#F4B860',
                      color: '#3E2723',
                    }}
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              )}

              {/* Alternative Contact */}
              <div className="mt-8 pt-8" style={{ borderTop: '2px solid #D4C5B9' }}>
                <p className="text-sm mb-4" style={{ color: '#8B7355' }}>
                  Prefer to reach out directly?
                </p>
                <a
                  href="https://wa.me/9869637793"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    backgroundColor: '#25D366',
                  }}
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
