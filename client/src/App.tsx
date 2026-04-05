import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Menu from "@/pages/Menu";
import MenuPage from "@/pages/MenuPage";
import FindUs from "@/pages/FindUs";
import About from "@/pages/About";
import Reviews from "@/pages/Reviews";
import Footer from "@/components/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'menu'>('home');

  const handleNavigation = (sectionId: string) => {
    if (sectionId === 'menu') {
      setCurrentPage('menu');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId === 'home') {
      setCurrentPage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
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

                  {/* Menu Section - Quick Preview */}
                  <Menu />

                  {/* Find Us Section */}
                  <FindUs />

                  {/* About & Contact Section */}
                  <About />

                  {/* Reviews Section */}
                  <Reviews />
                </>
              ) : (
                <>
                  {/* Full Menu Page */}
                  <div style={{ paddingTop: '80px' }}>
                    <MenuPage />
                  </div>

                  {/* Find Us Section */}
                  <FindUs />

                  {/* About & Contact Section */}
                  <About />

                  {/* Reviews Section */}
                  <Reviews />
                </>
              )}
            </main>

            {/* Footer */}
            <Footer />
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
