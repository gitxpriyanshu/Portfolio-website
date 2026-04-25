import { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout & UI
import { PageWrapper } from '@/components/layout/PageWrapper';
import { ErrorBoundary } from '@/components/ui/ErrorBoundary';

// Sections (Synchronous for critical path / SEO)
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Contact } from '@/components/sections/Contact';

// Utils
import { setupGSAP } from '@/lib/gsap';

// Lazy Loaded Pages
const ProjectDetail = lazy(() => import('@/pages/ProjectDetail').then(m => ({ default: m.ProjectDetail })));

/**
 * Loading Fallback
 */
const LoadingScreen = () => (
  <div className="fixed inset-0 bg-background flex items-center justify-center z-[99999]">
    <div className="text-2xl font-display text-accent animate-pulse tracking-tighter">
      PK<span className="text-white">.</span>
    </div>
  </div>
);

/**
 * Portfolio Main Page
 * Assembles all sections in the requested order.
 * Note: Navbar and Footer are handled globally in PageWrapper.
 */
const PortfolioMain = () => (
  <main id="main-content">
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Contact />
  </main>
);

function App() {
  const location = useLocation();

  useEffect(() => {
    // 1. Initialize GSAP Plugins
    setupGSAP();

    // 2. Handle Scroll Restoration for Router
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <ErrorBoundary componentName="AppRoot">
      <PageWrapper>
        <Suspense fallback={<LoadingScreen />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PortfolioMain />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </PageWrapper>
    </ErrorBoundary>
  );
}

export default App;
