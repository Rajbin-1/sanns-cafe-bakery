import { useState } from 'react';
import { Heart, MessageCircle, Coffee, Sparkles } from 'lucide-react';

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
            About & Connect
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
                    className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105 border-l-4"
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

          {/* Emotional "Get in Touch" Section */}
          <div className="animate-fade-in-up delay-200">
            <div
              className="rounded-2xl shadow-lg p-8 md:p-10 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.08) 0%, rgba(160, 130, 109, 0.08) 100%)',
                border: '2px solid rgba(212, 165, 116, 0.25)',
              }}
            >
              {/* Decorative background elements */}
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-15 animate-gentle-float"
                style={{
                  background: 'radial-gradient(circle, #D4A574, transparent)',
                }}
              />
              <div
                className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-10 animate-gentle-float"
                style={{
                  background: 'radial-gradient(circle, #A0826D, transparent)',
                  animationDelay: '1s',
                }}
              />

              <div className="relative z-10">
                {/* Header with emotion */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-3">
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
                  <p style={{ color: '#8B7355', fontSize: '0.95rem' }}>
                    Share your thoughts, feedback, or just say hello. We'd love to hear from you!
                  </p>
                </div>

                {submitted ? (
                  <div
                    className="rounded-xl p-8 text-center animate-fade-in-up"
                    style={{
                      background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.15), rgba(160, 130, 109, 0.15))',
                      border: '2px solid #D4A574',
                    }}
                  >
                    <Heart size={48} style={{ color: '#A0826D', margin: '0 auto 1rem' }} className="animate-gentle-float" />
                    <p className="font-semibold mb-2 text-lg" style={{ color: '#3E2723' }}>
                      Thank you for reaching out!
                    </p>
                    <p style={{ color: '#8B7355' }}>
                      We felt the warmth of your message. We'll get back to you soon with a warm cup of appreciation!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#3E2723' }}>
                        What's your name?
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-300"
                        style={{
                          borderColor: '#D4C5B9',
                          color: '#3E2723',
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#D4A574';
                          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(212, 165, 116, 0.1)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = '#D4C5B9';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                        placeholder="Tell us your name..."
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#3E2723' }}>
                        How can we reach you?
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-300"
                        style={{
                          borderColor: '#D4C5B9',
                          color: '#3E2723',
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#D4A574';
                          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(212, 165, 116, 0.1)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = '#D4C5B9';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                        placeholder="your@email.com"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#3E2723' }}>
                        Share your thoughts...
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-300 resize-none"
                        style={{
                          borderColor: '#D4C5B9',
                          color: '#3E2723',
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#D4A574';
                          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(212, 165, 116, 0.1)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = '#D4C5B9';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                        placeholder="Tell us what's on your mind..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full px-6 py-3 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 flex items-center justify-center gap-2 text-white"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        backgroundColor: '#D4A574',
                        boxShadow: '0 4px 12px rgba(212, 165, 116, 0.25)',
                      }}
                    >
                      <MessageCircle size={18} />
                      Send Message
                    </button>
                  </form>
                )}

                {/* Alternative Contact */}
                <div className="mt-8 pt-8" style={{ borderTop: '2px solid rgba(212, 165, 116, 0.2)' }}>
                  <p className="text-sm mb-4" style={{ color: '#8B7355' }}>
                    Or connect with us directly:
                  </p>
                  <a
                    href="https://wa.me/9869637793"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      backgroundColor: '#25D366',
                      boxShadow: '0 4px 12px rgba(37, 211, 102, 0.25)',
                    }}
                  >
                    💬 WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
