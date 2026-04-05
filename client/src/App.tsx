import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Menu from "@/pages/Menu";
import MenuPage from "@/pages/MenuPage";
import Gallery from "@/pages/Gallery";
import Contacts from "@/pages/Contacts";
import About from "@/pages/About";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Footer from "@/components/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'menu' | 'about' | 'gallery' | 'find-us' | 'privacy' | 'terms'>('home');

  const handleNavigation = (sectionId: string) => {
    if (sectionId === 'menu') {
      setCurrentPage('menu');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId === 'home') {
      setCurrentPage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId === 'about') {
      setCurrentPage('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId === 'gallery') {
      setCurrentPage('gallery');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId === 'contacts') {
      setCurrentPage('find-us');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId === 'privacy') {
      setCurrentPage('privacy');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId === 'terms') {
      setCurrentPage('terms');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <div className="min-h-screen bg-cream">
            {/* Navigation */}
            <Navigation onNavigate={handleNavigation} />

            {/* Main Content */}
            <main>
              {currentPage === 'home' ? (
                <>
                  {/* Hero Section */}
                  <Hero onExplore={() => handleNavigation("menu")} />

                  {/* Menu Preview Section */}
                  <Menu />

                  {/* Reviews Section */}
                  <div style={{ paddingTop: '20px' }}>
                    <About />
                  </div>
                </>
              ) : currentPage === 'menu' ? (
                <>
                  {/* Full Menu Page */}
                  <div style={{ paddingTop: '80px', minHeight: 'calc(100vh - 80px)' }}>
                    <MenuPage />
                  </div>
                </>
              ) : currentPage === 'about' ? (
                <>
                  {/* About Us Page */}
                  <div style={{ paddingTop: '80px' }}>
                    <About />
                  </div>
                </>
              ) : currentPage === 'gallery' ? (
                <>
                  {/* Gallery Page */}
                  <div style={{ paddingTop: '80px' }}>
                    <Gallery />
                  </div>
                </>
              ) : currentPage === 'find-us' ? (
                <>
                  {/* Find Us Page */}
                  <div style={{ paddingTop: '80px' }}>
                    <Contacts />
                  </div>
                </>
              ) : currentPage === 'privacy' ? (
                <>
                  <div style={{ paddingTop: '80px' }}>
                    <Privacy />
                  </div>
                </>
              ) : currentPage === 'terms' ? (
                <>
                  <div style={{ paddingTop: '80px' }}>
                    <Terms />
                  </div>
                </>
              ) : null}
            </main>

            {/* Footer */}
            <Footer onNavigate={handleNavigation} />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

// Simple Error Boundary
function ErrorBoundary({ children }: { children: React.ReactNode }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-chocolate-brown mb-4">
            Something went wrong
          </h1>
          <button
            onClick={() => setHasError(false)}
            className="px-6 py-3 bg-saffron-yellow text-chocolate-brown font-semibold rounded-lg"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  try {
    return <>{children}</>;
  } catch (error) {
    setHasError(true);
    return null;
  }
}

export default App;
