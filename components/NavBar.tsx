'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // On non-homepage routes, show navbar immediately
    if (pathname !== '/') {
      setIsVisible(true);
      return;
    }

    // On homepage, show navbar after scroll
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      }
    };

    // Check initial scroll position
    if (window.scrollY > 0) {
      setIsVisible(true);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}
        `}
        style={{ backdropFilter: 'blur(40px) saturate(180%)', WebkitBackdropFilter: 'blur(40px) saturate(180%)', background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.1) 100%)' }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-10 md:h-12">
            {/* Full Company Name Logo - Single Line */}
            <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity" style={{ fontFamily: 'Futura, "Futura PT", "Century Gothic", "AppleGothic", sans-serif' }}>
              <span className="text-[#fdbd51] text-base md:text-lg font-bold tracking-tight">CALIFORNIA</span>
              <span className="text-[#BF1B2C] text-base md:text-lg font-bold tracking-tight">BERRY</span>
              <span className="text-[#6E903C] text-base md:text-lg font-bold tracking-tight">CULTIVARS</span>
            </Link>

            {/* Desktop Navigation - Company name is the Home link */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <a
                href="https://cultivars.cbcberry.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs md:text-sm uppercase tracking-[0.15em] text-black hover:text-[#BF1B2C] transition-colors font-semibold"
              >
                Cultivar Explorer
              </a>
              <Link 
                href="/breeding" 
                className="text-xs md:text-sm uppercase tracking-[0.15em] text-black hover:text-[#BF1B2C] transition-colors font-semibold"
              >
                Breeding
              </Link>
              <Link 
                href="/about" 
                className="text-xs md:text-sm uppercase tracking-[0.15em] text-black hover:text-[#BF1B2C] transition-colors font-semibold"
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-xs md:text-sm uppercase tracking-[0.15em] text-black hover:text-[#BF1B2C] transition-colors font-semibold"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-black hover:text-[#BF1B2C] transition-colors"
              aria-label="Menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
                <span className={`block h-0.5 bg-current transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-0.5 bg-current transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - iOS glass style */}
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="fixed right-0 top-0 bottom-0 z-50 w-80 bg-white/10 backdrop-blur-3xl border-l border-white/20 md:hidden shadow-2xl">
            <div className="container px-6" style={{ paddingTop: '30px' }}>
              <nav className="flex flex-col gap-6">
                <a
                  href="https://cultivars.cbcberry.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="text-lg uppercase tracking-[0.15em] text-black hover:text-[#BF1B2C] transition-colors font-semibold"
                >
                  Cultivar Explorer
                </a>
                <Link 
                  href="/breeding" 
                  onClick={() => setIsOpen(false)}
                  className="text-lg uppercase tracking-[0.15em] text-black hover:text-[#BF1B2C] transition-colors font-semibold"
                >
                  Breeding
                </Link>
                <Link 
                  href="/about" 
                  onClick={() => setIsOpen(false)}
                  className="text-lg uppercase tracking-[0.15em] text-black hover:text-[#BF1B2C] transition-colors font-semibold"
                >
                  About
                </Link>
                <Link 
                  href="/contact" 
                  onClick={() => setIsOpen(false)}
                  className="text-lg uppercase tracking-[0.15em] text-black hover:text-[#BF1B2C] transition-colors font-semibold"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
}
