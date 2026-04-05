import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#FBF8F3' }}>
      <div className="text-center px-4">
        <h1
          className="text-6xl font-bold mb-4"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: '#3E2723',
          }}
        >
          404
        </h1>
        <p
          className="text-2xl font-semibold mb-4"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: '#8B7355',
          }}
        >
          Page Not Found
        </p>
        <p className="mb-8" style={{ color: '#8B7355' }}>
          The page you're looking for doesn't exist. Let's get you back to the café.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            backgroundColor: '#F4B860',
            color: '#3E2723',
          }}
        >
          <Home className="w-4 h-4" />
          Back to Home
        </a>
      </div>
    </div>
  );
}
