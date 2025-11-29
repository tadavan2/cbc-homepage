'use client';

import { allCultivars, getRandomCultivars, Cultivar } from '@/lib/cultivars';
import { brandMission, tagLines } from '@/lib/brand';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import IntroOverlay from '@/components/IntroOverlay';

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [featuredCultivars, setFeaturedCultivars] = useState<Cultivar[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Select random cultivars on mount
  useEffect(() => {
    setFeaturedCultivars(getRandomCultivars(4));
  }, []);

  // Listen for custom event from IntroOverlay when reveal starts
  useEffect(() => {
    const handleIntroReveal = (e: Event) => {
      const customEvent = e as CustomEvent<{ immediate?: boolean }>;
      const isImmediate = customEvent.detail?.immediate;
      
      if (isImmediate) {
        // Back/forward navigation - show content immediately, no animation
        setIntroComplete(true);
        setActiveSection(0);
      } else {
        // Normal reveal - fade in after panel slide
        setTimeout(() => {
          setIntroComplete(true);
          // Reset scroll to top
          if (containerRef.current) {
            containerRef.current.scrollTop = 0;
          }
          window.scrollTo(0, 0);
        }, 500);
      }
    };
    
    window.addEventListener('intro-reveal', handleIntroReveal);
    return () => window.removeEventListener('intro-reveal', handleIntroReveal);
  }, []);

  // Track which section is visible for scroll-triggered animations
  useEffect(() => {
    if (!introComplete) return;
    
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const sectionHeight = window.innerHeight;
      const newSection = Math.round(scrollTop / sectionHeight);
      setActiveSection(newSection);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [introComplete]);

  return (
    <>
      <IntroOverlay />
      <div 
        ref={containerRef}
        className="scroll-snap-container"
        style={{ 
          scrollSnapType: introComplete ? 'y mandatory' : 'none',
          overflowY: introComplete ? 'auto' : 'hidden'
        }}
      >
      {/* Hero Section - Full screen with colored background */}
      <section className="scroll-snap-section relative flex items-center justify-center overflow-hidden">
        {/* Colored background boxes - green left, dark red right */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-[#355e82]"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#920000]"></div>
        </div>
        
        <div 
          className={`container relative z-10 py-20 ${introComplete ? 'animate-hero-fade-in' : 'opacity-0'}`}
        >
          <div className="max-w-4xl mx-auto text-center px-4">
            {/* Explore Cultivars button at TOP - primary CTA */}
            <div className="flex justify-center mb-8">
              <a
                href="https://cultivars.cbcberry.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#fdbd51] text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-[#fdbd51]/90 transition-all animate-subtle-pulse"
              >
                Explore Cultivars
              </a>
            </div>
            
            <p className="text-[#fdbd51] uppercase tracking-[0.2em] text-xs md:text-sm mb-6 font-semibold">
              {tagLines[2]}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-white">Better berries</span>
              <br />
              <span className="text-[#fdbd51]">for growers,</span>
              <br />
              <span className="text-white">worldwide.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed text-justify">
              {brandMission}
            </p>
          </div>
        </div>
        
        {/* Scroll indicator - at bottom of hero, separate from content */}
        {introComplete && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
            <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        )}
      </section>

      {/* What We Do - Yellow section */}
      <section className="scroll-snap-section bg-[#fdbd51] flex items-center">
        <div className="container px-4 py-20">
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${activeSection >= 1 ? 'animate-visible' : ''}`}>
            <Link 
              href="/cultivar-development"
              className={`bg-white/20 backdrop-blur-sm p-8 rounded-2xl border-2 border-white/30 hover:bg-white/30 hover:scale-[1.02] transition-all cursor-pointer block mt-5 md:mt-0
                ${activeSection >= 1 ? 'animate-slide-in' : 'opacity-0'}
              `}
              style={{ animationDelay: '0.1s' }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#6E903C]">Cultivar Development</h3>
              <p className="text-[#6E903C]/90 leading-relaxed text-justify">
                Premium berry varieties for short-day and day-neutral production. Superior fruit quality 
                that drives grower profitability.
              </p>
            </Link>
            <Link 
              href="/disease-testing"
              className={`bg-white/20 backdrop-blur-sm p-8 rounded-2xl border-2 border-white/30 hover:bg-white/30 hover:scale-[1.02] transition-all cursor-pointer block
                ${activeSection >= 1 ? 'animate-slide-in' : 'opacity-0'}
              `}
              style={{ animationDelay: '0.2s' }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#6E903C]">Disease & Field Testing</h3>
              <p className="text-[#6E903C]/90 leading-relaxed text-justify">
                Rigorous screening for Fusarium, Macrophomina, and critical pathogens. Multi-site trials 
                validate performance across diverse growing conditions.
              </p>
            </Link>
            <Link 
              href="/grower-partnerships"
              className={`bg-white/20 backdrop-blur-sm p-8 rounded-2xl border-2 border-white/30 hover:bg-white/30 hover:scale-[1.02] transition-all cursor-pointer block
                ${activeSection >= 1 ? 'animate-slide-in' : 'opacity-0'}
              `}
              style={{ animationDelay: '0.3s' }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#6E903C]">Grower Partnerships</h3>
              <p className="text-[#6E903C]/90 leading-relaxed text-justify">
                Direct collaboration with commercial growers. On-farm trials and licensing programs ensure 
                cultivars deliver real-world results.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Cultivars - Medium red section */}
      <section id="cultivars" className="scroll-snap-section bg-[#c93834] flex items-center">
        <div className="container px-4 py-20" style={{ paddingTop: '45px' }}>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center text-white
            ${activeSection >= 2 ? 'animate-fade-in' : 'opacity-0'}
          `}>Featured Cultivars</h2>
          <p className={`text-center text-white/80 mb-8 text-lg max-w-2xl mx-auto
            ${activeSection >= 2 ? 'animate-fade-in' : 'opacity-0'}
          `} style={{ animationDelay: '0.1s' }}>
            Discover our premium varieties designed for superior performance and grower success.
          </p>
          {/* Banner Grid - 2 columns on desktop, 1 on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto mb-10">
            {featuredCultivars.map((cultivar, index) => (
              <a
                key={cultivar.id}
                href={cultivar.explorerLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`block overflow-hidden rounded-2xl border-2 border-white/20 hover:border-white/50 hover:scale-[1.02] transition-all cursor-pointer shadow-lg hover:shadow-2xl
                  ${activeSection >= 2 ? 'animate-slide-in' : 'opacity-0'}
                `}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="relative aspect-[3/1]">
                  <Image
                    src={cultivar.banner}
                    alt={cultivar.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </a>
            ))}
          </div>
          <div className={`text-center ${activeSection >= 2 ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <a
              href="https://cultivars.cbcberry.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#c93834] px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-white/90 transition-all hover:scale-105 inline-block"
            >
              Explore All Cultivars
            </a>
          </div>
        </div>
      </section>

      {/* Breeding Philosophy Teaser - Dark blue section */}
      <section className="scroll-snap-section bg-[#355e82] flex items-center">
        <div className="container px-4 py-20">
          <div className={`max-w-3xl mx-auto text-center ${activeSection >= 3 ? 'animate-fade-in' : 'opacity-0'}`}>
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold italic mb-6 text-[#fdbd51] leading-tight">
              "If you're not moving forward, you're falling behind."
            </blockquote>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed text-justify">
              Nothing could be more true in modern agriculture. At California Berry Cultivars, we are committed to 
              continuous improvement and innovation in strawberry breeding.
            </p>
            <Link 
              href="/breeding"
              className="text-[#fdbd51] uppercase tracking-wider text-sm font-bold hover:text-white transition-colors inline-flex items-center gap-2 border-b-2 border-transparent hover:border-[#fdbd51] pb-1"
            >
              Learn More About Our Approach →
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser - White section with colored accent */}
      <section className="scroll-snap-section bg-white flex items-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#355e82] to-transparent"></div>
        <div className="container px-4 py-20 relative z-10">
          <div className={`max-w-3xl mx-auto text-center ${activeSection >= 4 ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#6E903C]">About CBC</h2>
            <p className="text-lg md:text-xl text-[#6E903C] mb-6 leading-relaxed text-justify">
              Founded in 2014 as a collaborative effort between stakeholders in the strawberry industry, 
              California Berry Cultivars is an independent breeding company focused on developing high-quality, 
              high-yield cultivars for commercial growers worldwide.
            </p>
            <Link 
              href="/about"
              className="text-[#c93834] uppercase tracking-wider text-sm font-bold hover:text-[#355e82] transition-colors inline-flex items-center gap-2 border-b-2 border-transparent hover:border-[#c93834] pb-1"
            >
              Our Story & Team →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact - Light blue section */}
      <section className="scroll-snap-section bg-[#c4daf4] flex items-center">
        <div className="container px-4 py-20">
          <div className={`max-w-2xl mx-auto text-center ${activeSection >= 5 ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#355e82]">Get in Touch</h2>
            <p className="text-[#355e82]/80 mb-8">
              Questions about our cultivars? Ready to explore partnership opportunities?
            </p>
            <Link 
              href="/contact"
              className="text-[#920000] uppercase tracking-wider text-sm font-bold hover:text-[#355e82] transition-colors inline-flex items-center gap-2 border-b-2 border-transparent hover:border-[#920000] pb-1"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
