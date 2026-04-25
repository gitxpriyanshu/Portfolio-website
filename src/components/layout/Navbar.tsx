import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';
import { NAV_LINKS } from '@/lib/constants';

/**
 * Premium Navigation Bar
 * Features: Frosted glass on scroll, mobile menu, pulse "Open to work" badge
 */
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
      
      // Basic active section detection
      const sections = NAV_LINKS.map(link => link.href.replace('/#', ''));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  return (
    <>
      {/* Accessibility: Skip to Main Content Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10001] focus:bg-accent focus:text-background focus:px-4 focus:py-2 focus:rounded-lg font-mono text-xs uppercase tracking-widest"
      >
        Skip to main content
      </a>

      <nav
        role="navigation"
        aria-label="Main Navigation"
        className={cn(
          'fixed top-0 left-0 right-0 z-[10000] transition-all duration-500 border-b',
          isScrolled 
            ? 'bg-background/80 backdrop-blur-xl border-white/5 py-3' 
            : 'bg-transparent border-transparent py-6'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="/#home" className="flex items-center" aria-label="Priyanshu Verma - Home">
            <img 
              src="/PK.png" 
              alt="PK Logo" 
              className="h-12 w-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={cn(
                    'text-sm font-body tracking-wide transition-all duration-300 relative group',
                    activeSection === link.href.replace('/#', '')
                      ? 'text-text-primary'
                      : 'text-text-secondary hover:text-text-primary'
                  )}
                >
                  {link.label}
                  {/* Glow effect for active link */}
                  {activeSection === link.href.replace('/#', '') && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-[1px] bg-accent shadow-[0_0_8px_rgba(232,213,183,0.8)]"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="h-4 w-[1px] bg-white/10" />

          {/* Open to Work Badge */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent/5 border border-accent/10">
            <span className="text-[10px] font-mono uppercase tracking-wider text-accent">Open to work</span>
          </div>

            <a href="/assets/Resume-Priyanshu verma (7).pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="sm" icon={Download} aria-label="Download Resume PDF">
                Resume
              </Button>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center gap-1.5 items-end group"
            aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
          <span className={cn(
            'h-[1px] bg-text-primary transition-all duration-300',
            mobileMenuOpen ? 'w-8 rotate-45 translate-y-[7px]' : 'w-8'
          )} />
          <span className={cn(
            'h-[1px] bg-text-primary transition-all duration-300',
            mobileMenuOpen ? 'opacity-0' : 'w-5 group-hover:w-8'
          )} />
          <span className={cn(
            'h-[1px] bg-text-primary transition-all duration-300',
            mobileMenuOpen ? 'w-8 -rotate-45 -translate-y-[7px]' : 'w-6 group-hover:w-8'
          )} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-background z-40 md:hidden flex flex-col items-center justify-center p-12"
          >
            <div className="flex flex-col items-center gap-10">
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  href={link.href}
                  onClick={toggleMobileMenu}
                  className="text-4xl font-display text-text-primary hover:text-accent transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 flex flex-col items-center gap-6"
              >
                <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-accent/5 border border-accent/10">
                  <span className="text-xs font-mono uppercase tracking-widest text-accent">Open to work</span>
                </div>
                <Button variant="outline" size="lg" icon={Download}>
                  Download Resume
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    </>
  );
};
