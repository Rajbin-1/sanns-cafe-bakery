import { useState, useEffect, useRef } from 'react';

const HERO_VIDEO_URL = '/assets/videos/hero-video.mp4';
const HERO_POSTER_URL = '/assets/images/interior/interior-1.png';

interface HeroProps {
  onExplore: () => void;
}

export default function Hero({ onExplore }: HeroProps) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [textOpacity, setTextOpacity] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Fade in text after 500ms
    const textTimer = setTimeout(() => {
      setTextOpacity(1);
    }, 500);

    // Handle video load
    const handleCanPlay = () => {
      setVideoLoaded(true);
      video.play().catch(() => {
        // Autoplay failed, show overlay immediately
        setShowOverlay(true);
      });
    };

    // Handle video end
    const handleEnded = () => {
      setShowOverlay(true);
      video.play().catch(() => {
        // Ignore play errors
      });
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('ended', handleEnded);

    // Start loading the video
    video.load();

    return () => {
      clearTimeout(textTimer);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background - Video for both desktop and mobile */}
      <div className="absolute inset-0 w-full h-full">
        {/* Video */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          playsInline
          autoPlay
          loop={false}
          poster={HERO_POSTER_URL}
          preload="auto"
          fetchPriority="high"
          width={1920}
          height={1080}
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>

        {/* Fallback Poster if video fails */}
        <img
          src={HERO_POSTER_URL}
          alt="Sann's Café & Bakery Gallery Interior - Premium Coffee Shop Atmosphere in Kathmandu"
          className="absolute inset-0 w-full h-full object-cover hidden"
          style={{ display: videoLoaded ? 'none' : 'block' }}
        />

        {/* Subtle White Overlay - 10% opacity */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          }}
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 py-20">
        {/* Text Container */}
        <div
          className="text-center max-w-4xl transition-opacity duration-1000"
          style={{ opacity: textOpacity }}
        >
          {/* Main Heading */}
          <h1
            className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-4 transition-all duration-1000 drop-shadow-lg ${
              showOverlay ? 'scale-100' : 'scale-95'
            }`}
            style={{
              fontFamily: "'Playfair Display', serif",
              textShadow: '3px 3px 12px rgba(0,0,0,0.5)',
              letterSpacing: '1px',
              color: '#FBF8F3',
            }}
          >
            Sann's Café & Bakery
          </h1>

          {/* Subheading */}
          <p
            className={`text-sm sm:text-lg md:text-2xl mb-4 md:mb-8 transition-all duration-1000 delay-200 ${
              showOverlay ? 'opacity-100' : 'opacity-75'
            }`}
            style={{
              fontFamily: "'Lato', sans-serif",
              color: '#F5E6D3',
              textShadow: '2px 2px 6px rgba(0,0,0,0.4)',
              fontWeight: 500,
            }}
          >
            Where Artisanal Craft Meets Gallery Ambiance
          </p>

          {/* Description */}
          <p
            className={`text-xs sm:text-base md:text-lg max-w-2xl mx-auto mb-8 md:mb-12 transition-all duration-1000 delay-300 ${
              showOverlay ? 'opacity-100' : 'opacity-60'
            }`}
            style={{
              fontFamily: "'Lato', sans-serif",
              color: 'rgba(251, 248, 243, 0.95)',
              textShadow: '1px 1px 4px rgba(0,0,0,0.3)',
              lineHeight: '1.8',
            }}
          >
            Premium coffee, artisanal sourdough, and signature desserts in a curated art gallery atmosphere
          </p>

          {/* CTA Buttons - Professional Glowing Hover */}
          <div
            className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center transition-all duration-1000 delay-400 opacity-100 translate-y-0`}
          >
            {/* Button 1 - Explore Menu */}
            <button
              onClick={onExplore}
              className="px-8 sm:px-10 py-3 sm:py-4 font-bold rounded-lg transition-all duration-300 active:scale-95 text-sm sm:text-base relative overflow-hidden"
              style={{
                backgroundColor: '#D4A574',
                boxShadow: '0 6px 20px rgba(212, 165, 116, 0.4)',
                fontFamily: "'Montserrat', sans-serif",
                color: '#3E2723',
                fontWeight: '700',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 30px rgba(212, 165, 116, 0.8), 0 0 60px rgba(160, 130, 109, 0.6), inset 0 0 20px rgba(255,255,255,0.2)';
                e.currentTarget.style.transform = 'scale(1.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(212, 165, 116, 0.4)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Explore Menu
            </button>

            {/* Button 2 - Find Us */}
            <button
              onClick={() => {
                const findUsSection = document.getElementById('contacts');
                findUsSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 sm:px-10 py-3 sm:py-4 font-bold rounded-lg transition-all duration-300 active:scale-95 text-sm sm:text-base relative overflow-hidden"
              style={{
                backgroundColor: '#D4A574',
                boxShadow: '0 6px 20px rgba(212, 165, 116, 0.4)',
                fontFamily: "'Montserrat', sans-serif",
                color: '#3E2723',
                fontWeight: '700',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 30px rgba(212, 165, 116, 0.8), 0 0 60px rgba(160, 130, 109, 0.6), inset 0 0 20px rgba(255,255,255,0.2)';
                e.currentTarget.style.transform = 'scale(1.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(212, 165, 116, 0.4)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Find Us
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        {!showOverlay && (
          <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 md:w-8 md:h-8 drop-shadow-lg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ color: '#FBF8F3' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        )}

        {/* Decorative floating elements */}
        <div className="absolute top-1/4 left-10 md:left-20 w-20 h-20 md:w-32 md:h-32 rounded-full opacity-10 animate-gentle-float" style={{
          background: 'radial-gradient(circle, #D4A574, transparent)',
        }} />
        <div className="absolute bottom-1/4 right-10 md:right-20 w-16 h-16 md:w-24 md:h-24 rounded-full opacity-10 animate-gentle-float" style={{
          background: 'radial-gradient(circle, #A0826D, transparent)',
          animationDelay: '1s',
        }} />
      </div>
    </section>
  );
}
