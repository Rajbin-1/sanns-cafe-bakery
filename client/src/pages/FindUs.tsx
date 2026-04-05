import { MapPin, Clock, Phone, Smartphone } from 'lucide-react';

export default function FindUs() {
  return (
    <section id="find-us" className="py-20 bg-white">
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
            Find Us
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#8B7355' }}>
            Visit us at our location in Tokha, Kathmandu
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="animate-fade-in-up">
            <div className="rounded-lg overflow-hidden shadow-lg h-96 lg:h-full min-h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.1367819807983!2d85.31520817546908!3d27.755037576155285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1f005b6f884f%3A0xb83907ef97b6f525!2sSann&#39;s%20Caf%C3%A9%20%26%20Bakery!5e1!3m2!1sen!2snp!4v1775236253085!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map showing Sann's Café & Bakery location in Tokha, Kathmandu, Nepal"
              ></iframe>
            </div>
          </div>

          {/* Information */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Location */}
            <div className="animate-fade-in-up delay-100">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <MapPin className="w-6 h-6" style={{ color: '#F4B860' }} />
                </div>
                <div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      color: '#3E2723',
                    }}
                  >
                    Location
                  </h3>
                  <p style={{ color: '#8B7355' }}>
                    Tokha 44600, Kathmandu
                    <br />
                    Google Plus Code: Q849+24
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="animate-fade-in-up delay-200">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Clock className="w-6 h-6" style={{ color: '#F4B860' }} />
                </div>
                <div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      color: '#3E2723',
                    }}
                  >
                    Operating Hours
                  </h3>
                  <p style={{ color: '#8B7355' }}>
                    Daily: 7:00 AM – 8:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="animate-fade-in-up delay-300">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Phone className="w-6 h-6" style={{ color: '#F4B860' }} />
                </div>
                <div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      color: '#3E2723',
                    }}
                  >
                    Contact
                  </h3>
                  <a
                    href="https://wa.me/9869637793"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:opacity-80"
                    style={{ color: '#F4B860' }}
                  >
                    WhatsApp: +977 9869637793
                  </a>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="animate-fade-in-up delay-400">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Smartphone className="w-6 h-6" style={{ color: '#F4B860' }} />
                </div>
                <div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      color: '#3E2723',
                    }}
                  >
                    Payment Methods
                  </h3>
                  <p style={{ color: '#8B7355' }}>
                    Cash, Card & NFC Mobile Payments
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="animate-fade-in-up delay-500 pt-4">
              <h3
                className="text-xl font-semibold mb-4"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: '#3E2723',
                }}
              >
                Follow Us
              </h3>
              <a
                href="https://www.instagram.com/sannscafe25?igsh=Y3NlNmM2am1ranEw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  backgroundColor: '#F4B860',
                  color: '#3E2723',
                }}
              >
                Instagram @sannscafe25
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
