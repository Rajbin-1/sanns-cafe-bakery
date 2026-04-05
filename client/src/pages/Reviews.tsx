import { Star } from 'lucide-react';

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

export default function Reviews() {
  return (
    <section id="reviews" className="py-20" style={{ backgroundColor: '#FBF8F3' }}>
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
            What People Say
          </h2>
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
    </section>
  );
}
