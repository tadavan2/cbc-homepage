'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

/**
 * Breeding Page - Multi-section scroll-snap layout
 * 
 * Sections:
 * 1. Cultivar Development (hero)
 * 2. Field Testing
 * 3. Pathology
 * 4. Cleanstock
 * 5. Grower Partnerships
 */

// Section mapping for hash navigation
const sectionMap: Record<string, number> = {
  'cultivar-development': 0,
  'field-testing': 1,
  'pathology': 2,
  'cleanstock': 3,
  'grower-partnerships': 4,
};

export default function BreedingPage() {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  // Handle hash navigation on mount - set section immediately so content is visible
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      const sectionIndex = sectionMap[hash];
      if (sectionIndex !== undefined) {
        // Set activeSection immediately so content is visible
        setActiveSection(sectionIndex);
      }
    }
    setIsReady(true);
  }, []);

  // Scroll to hash section after layout is ready
  useEffect(() => {
    if (!isReady) return;
    
    const hash = window.location.hash.slice(1);
    if (hash) {
      const targetSection = document.getElementById(hash);
      if (targetSection) {
        // Use instant scroll to avoid jarring animation
        targetSection.scrollIntoView({ behavior: 'instant', block: 'start' });
      }
    }
  }, [isReady]);

  // Track which section is visible on scroll
  useEffect(() => {
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
  }, []);

  return (
    <div 
      ref={containerRef}
      className="scroll-snap-container"
      style={{ scrollSnapType: 'y mandatory', overflowY: 'auto' }}
    >
      {/* Section 1: Cultivar Development (Hero) */}
      <section 
        id="cultivar-development" 
        className="scroll-snap-section bg-[#6E903C] flex items-start md:items-center justify-center pt-[15vh] md:pt-0"
      >
        <div className="container px-4 py-12 md:py-20" style={{ paddingTop: '60px' }}>
          <div className={`max-w-4xl mx-auto text-center ${activeSection >= 0 ? 'animate-fade-in' : 'opacity-0'}`}>
            <p className="text-white/80 uppercase tracking-[0.2em] text-xs md:text-sm mb-6 font-semibold">
              Our Breeding Program
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white">
              Cultivar<br />Development
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed text-justify mb-8">
              Premium berry varieties engineered for short-day and day-neutral production systems. 
              Our cultivar development program focuses on creating superior fruit quality that 
              drives grower profitability while meeting market demands.
            </p>
            <div className="flex justify-center">
              <a
                href="https://cultivars.cbcberry.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#fdbd51] text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-[#fdbd51]/90 transition-all hover:scale-105"
              >
                View Our Cultivars
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Section 2: Field Testing */}
      <section 
        id="field-testing" 
        className="scroll-snap-section bg-[#355e82] flex items-start md:items-center justify-center pt-[15vh] md:pt-0"
      >
        <div className="container px-4 py-20">
          <div className={`max-w-4xl mx-auto text-center ${activeSection >= 1 ? 'animate-fade-in' : 'opacity-0'}`}>
            <p className="text-[#fdbd51] uppercase tracking-[0.2em] text-xs md:text-sm mb-6 font-semibold">
              Multi-Site Validation
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white">
              Field<br />Testing
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed text-justify">
              Rigorous multi-site field trials validate performance across diverse growing conditions. 
              Our testing program spans multiple locations and environments to ensure cultivars 
              deliver consistent, real-world results for commercial growers.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Pathology */}
      <section 
        id="pathology" 
        className="scroll-snap-section bg-[#c93834] flex items-start md:items-center justify-center pt-[15vh] md:pt-0"
      >
        <div className="container px-4 py-20">
          <div className={`max-w-4xl mx-auto text-center ${activeSection >= 2 ? 'animate-fade-in' : 'opacity-0'}`}>
            <p className="text-[#fdbd51] uppercase tracking-[0.2em] text-xs md:text-sm mb-6 font-semibold">
              Disease Resistance
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white">
              Pathology &<br />Screening
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed text-justify">
              Comprehensive screening for Fusarium, Macrophomina, and other critical pathogens. 
              Our pathology program identifies and develops resistance traits that protect grower 
              investments and ensure sustainable production.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Cleanstock */}
      <section 
        id="cleanstock" 
        className="scroll-snap-section flex items-start md:items-center justify-center pt-[15vh] md:pt-0"
        style={{ background: 'linear-gradient(to bottom right, #355e82 0%, #fdbd51 100%)' }}
      >
        <div className="container px-4 py-20">
          <div className={`max-w-4xl mx-auto text-center ${activeSection >= 3 ? 'animate-fade-in' : 'opacity-0'}`}>
            <p className="text-white/80 uppercase tracking-[0.2em] text-xs md:text-sm mb-6 font-semibold">
              Foundation Stock
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white">
              Cleanstock<br />Program
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed text-justify">
              Our cleanstock program participates in the CDFA Strawberry Registration & Certification 
              Program, established in 1949 to ensure the health and quality of strawberry planting stock. 
              Foundation plants are produced through meristem tissue culture—a process that eliminates 
              pathogens through heat treatment and sterile cultivation of meristem tips, ensuring 
              disease-free, vigorous planting material for nurseries and commercial growers.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Grower Partnerships */}
      <section 
        id="grower-partnerships" 
        className="scroll-snap-section bg-[#920000] flex items-start md:items-center justify-center pt-[15vh] md:pt-0"
      >
        <div className="container px-4 py-20">
          <div className={`max-w-4xl mx-auto text-center ${activeSection >= 4 ? 'animate-fade-in' : 'opacity-0'}`}>
            <p className="text-[#fdbd51] uppercase tracking-[0.2em] text-xs md:text-sm mb-6 font-semibold">
              Collaborative Success
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white">
              Grower<br />Partnerships
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed text-justify mb-8">
              Direct collaboration with commercial growers drives our innovation. On-farm trials 
              and licensing programs ensure our cultivars deliver real-world results. We work 
              alongside growers to optimize production and maximize profitability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-[#fdbd51] text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-[#fdbd51]/90 transition-all hover:scale-105"
              >
                Partner With Us
              </Link>
              <Link 
                href="/cultivar-sublicense"
                className="bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-white/20 transition-all hover:scale-105"
              >
                Cultivar Sublicense
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
