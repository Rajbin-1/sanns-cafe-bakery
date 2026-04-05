import { useState, useEffect, useRef } from 'react';

const HERO_VIDEO_URL = '/assets/videos/hero-video.mp4';
const HERO_POSTER_URL = '/assets/images/interior/interior-1.png';

interface HeroProps {
  onExplore: () => void;
}

export default function Hero({ onExplore }: HeroProps) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [textOpacity, setTextOpacity] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Fade in text after 500ms (during first loop)
    const textTimer = setTimeout(() => {
      setTextOpacity(1);
    }, 500);

    // Handle video loop completion
    const handleEnded = () => {
      // After first loop ends, show overlay
      setShowOverlay(true);
      video.play(); // Continue playing
    };

    video.addEventListener('ended', handleEnded);

    return () => {
      clearTimeout(textTimer);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        loop={false}
        poster={HERO_POSTER_URL}
      >
        <source src={HERO_VIDEO_URL} type="video/mp4" />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(62, 39, 35, 0.5)' }} />
      </video>

      {/* Overlay - Fades in after first loop */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          showOverlay ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'linear-gradient(to bottom, rgba(62, 39, 35, 0.4), rgba(62, 39, 35, 0.2))',
        }}
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        {/* Text Container - Fades in during first loop */}
        <div
          className="text-center px-4 transition-opacity duration-1000"
          style={{ opacity: textOpacity }}
        >
          {/* Main Heading */}
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 transition-all duration-1000 ${
              showOverlay ? 'scale-100' : 'scale-95'
            }`}
            style={{
              fontFamily: "'Playfair Display', serif",
              textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
            }}
          >
            Sann's Café & Bakery
          </h1>

          {/* Subheading */}
          <p
            className={`text-lg md:text-2xl mb-8 transition-all duration-1000 delay-200 ${
              showOverlay ? 'opacity-100' : 'opacity-75'
            }`}
            style={{
              fontFamily: "'Lato', sans-serif",
              color: '#FBF8F3',
              textShadow: '1px 1px 4px rgba(0,0,0,0.3)',
            }}
          >
            Where Artisanal Craft Meets Gallery Ambiance
          </p>

          {/* Description */}
          <p
            className={`text-base md:text-lg max-w-2xl mx-auto mb-8 transition-all duration-1000 delay-300 ${
              showOverlay ? 'opacity-100' : 'opacity-60'
            }`}
            style={{
              fontFamily: "'Lato', sans-serif",
              color: 'rgba(251, 248, 243, 0.9)',
              textShadow: '1px 1px 4px rgba(0,0,0,0.3)',
            }}
          >
            Premium coffee, artisanal sourdough, and signature desserts in a curated art gallery atmosphere
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-400 ${
              showOverlay ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button
              onClick={onExplore}
              className="px-8 py-3 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
              style={{
                backgroundColor: '#F4B860',
                color: '#3E2723',
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Explore Menu
            </button>
            <button
              onClick={() => {
                const findUsSection = document.getElementById('find-us');
                findUsSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 border-2 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
              style={{
                borderColor: 'white',
                color: 'white',
                fontFamily: "'Montserrat', sans-serif",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = '#3E2723';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'white';
              }}
            >
              Find Us
            </button>
          </div>
        </div>

        {/* Scroll Indicator - Only show on first loop */}
        {!showOverlay && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
      </div>
    </section>
  );
}
