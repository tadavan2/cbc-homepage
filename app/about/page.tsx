'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

/**
 * About Page - Multi-section scroll-snap layout
 * 
 * Sections:
 * 1. Hero (video placeholder)
 * 2. Our Story
 * 3. Our Team
 * 4. Our Mission
 * 5. Our Partners
 * 6. Explore Our Work
 */

// Section mapping for hash navigation
const sectionMap: Record<string, number> = {
  'hero': 0,
  'story': 1,
  'team': 2,
  'mission': 3,
  'partners': 4,
  'explore': 5,
};

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  // Handle hash navigation on mount
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      const sectionIndex = sectionMap[hash];
      if (sectionIndex !== undefined) {
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
      {/* Section 1: Hero with Video Placeholder - 20% */}
      <section 
        id="hero" 
        className="scroll-snap-section bg-[#355e82] flex items-start md:items-center justify-center pt-[5vh] md:pt-0"
      >
        <div className="container px-4 py-12 md:py-20" style={{ paddingTop: '60px' }}>
          <div className={`max-w-4xl mx-auto text-center ${activeSection >= 0 ? 'animate-fade-in' : 'opacity-0'}`}>
            <p className="text-[#fdbd51] uppercase tracking-[0.2em] text-xs md:text-sm mb-6 font-semibold">
              Who We Are
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white">
              About<br />
              <span className="text-[#fdbd51]">California Berry Cultivars</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed text-justify mb-8">
              Independent strawberry breeding, driven by collaboration and innovation. 
              Building better berries for growers worldwide since 2014.
            </p>
            
            {/* Video Placeholder */}
            <div className="max-w-3xl mx-auto bg-black/30 rounded-2xl aspect-video flex items-center justify-center border-2 border-white/20">
              <div className="text-center">
                <svg className="w-16 h-16 text-white/50 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-white/50 text-sm uppercase tracking-wider">Video Coming Soon</p>
              </div>
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

      {/* Section 2: Our Story */}
      <section 
        id="story" 
        className="scroll-snap-section bg-[#6E903C] flex items-start md:items-center justify-center pt-[15vh] md:pt-0"
      >
        <div className="container px-4 py-20">
          <div className={`max-w-4xl mx-auto text-center ${activeSection >= 1 ? 'animate-fade-in' : 'opacity-0'}`}>
            <p className="text-[#fdbd51] uppercase tracking-[0.2em] text-xs md:text-sm mb-6 font-semibold">
              How It Started
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white">
              Our Story
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed text-justify mb-6">
              California Berry Cultivars, LLC was founded in 2014 as a collaborative effort 
              between stakeholders in the strawberry industry who shared a vision: to develop 
              superior strawberry cultivars through independent, focused research.
            </p>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed text-justify">
              What began as a partnership between experienced growers and breeders has grown 
              into a leading independent breeding program, delivering high-quality, high-yield 
              cultivars to commercial berry growers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Our Team */}
      <section 
        id="team" 
        className="scroll-snap-section bg-[#c93834] flex items-start md:items-center justify-center pt-[12vh] md:pt-0"
      >
        <div className="container px-4 py-20">
          <div className={`max-w-4xl mx-auto text-center ${activeSection >= 2 ? 'animate-fade-in' : 'opacity-0'}`}>
            <p className="text-[#fdbd51] uppercase tracking-[0.2em] text-xs md:text-sm mb-6 font-semibold">
              The People Behind CBC
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white">
              Our Team
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed text-justify mb-6">
              The California Berry Cultivars team consists of a mix of veterans and the next 
              generation of strawberry cultivar developers and researchers. Together, they bring 
              over 100 years of collective experience in the strawberry industry.
            </p>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed text-justify">
              Our team is committed to providing strawberry growers with the quality strawberries 
              they want and need—conducting research that protects and promotes high-yielding, 
              consumer-desirable products under the ever-changing conditions of the field and marketplace.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Our Mission */}
      <section 
        id="mission" 
        className="scroll-snap-section flex items-start md:items-center justify-center pt-[15vh] md:pt-0"
        style={{ background: 'linear-gradient(to bottom right, #355e82 0%, #fdbd51 100%)' }}
      >
        <div className="container px-4 py-20">
          <div className={`max-w-4xl mx-auto text-center ${activeSection >= 3 ? 'animate-fade-in' : 'opacity-0'}`}>
            <p className="text-white/80 uppercase tracking-[0.2em] text-xs md:text-sm mb-6 font-semibold">
              What Drives Us
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white">
              Our Mission
            </h2>
            <blockquote className="text-2xl md:text-3xl font-bold italic mb-8 text-white leading-tight">
              "If you're not moving forward, you're falling behind."
            </blockquote>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed text-justify">
              California Berry Cultivars is dedicated to the continual development and improvement 
              of strawberry cultivars—a vital part of supporting and advancing the global strawberry 
              industry. Our team leads collaborative research aimed at creating superior cultivars 
              that meet the needs of growers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Our Partners */}
      <section 
        id="partners" 
        className="scroll-snap-section bg-[#fdbd51] flex items-start md:items-center justify-center pt-[5vh] md:pt-0"
      >
        <div className="container px-4 py-10 md:py-16" style={{ paddingTop: '50px' }}>
          <div className={`max-w-5xl mx-auto ${activeSection >= 4 ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight text-[#355e82] text-center">
              Our Partners
            </h2>
            <p className="text-sm md:text-base text-[#355e82]/90 max-w-xl mx-auto leading-relaxed text-center mb-4">
              Key stakeholders in the strawberry industry working together.
            </p>
            
            {/* Partner Cards - 3 columns on desktop, 2 on mobile */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3" style={{ marginBottom: '80px' }}>
              <a 
                href="https://www.calgiant.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/30 backdrop-blur-sm p-3 md:p-4 rounded-lg border-2 border-white/40 hover:bg-white/50 hover:scale-[1.02] transition-all"
              >
                <h3 className="text-sm md:text-base font-bold text-[#355e82] mb-1">California Giant →</h3>
                <p className="text-[#355e82]/80 text-xs leading-relaxed">
                  Family-owned berry company with global operations.
                </p>
              </a>
              <a 
                href="https://www.eurosemillas.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/30 backdrop-blur-sm p-3 md:p-4 rounded-lg border-2 border-white/40 hover:bg-white/50 hover:scale-[1.02] transition-all"
              >
                <h3 className="text-sm md:text-base font-bold text-[#355e82] mb-1">International Semillas →</h3>
                <p className="text-[#355e82]/80 text-xs leading-relaxed">
                  International marketing and cultivar licensing partner.
                </p>
              </a>
              <a 
                href="https://www.gem-packberries.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/30 backdrop-blur-sm p-3 md:p-4 rounded-lg border-2 border-white/40 hover:bg-white/50 hover:scale-[1.02] transition-all"
              >
                <h3 className="text-sm md:text-base font-bold text-[#355e82] mb-1">Gem-Pack Berries →</h3>
                <p className="text-[#355e82]/80 text-xs leading-relaxed">
                  Premium produce company in Southern California.
                </p>
              </a>
              <a 
                href="https://bwgberries.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/30 backdrop-blur-sm p-3 md:p-4 rounded-lg border-2 border-white/40 hover:bg-white/50 hover:scale-[1.02] transition-all"
              >
                <h3 className="text-sm md:text-base font-bold text-[#355e82] mb-1">Daren's Berries →</h3>
                <p className="text-[#355e82]/80 text-xs leading-relaxed">
                  Santa Maria grower and development partner.
                </p>
              </a>
              <a 
                href="https://www.skberries.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/30 backdrop-blur-sm p-3 md:p-4 rounded-lg border-2 border-white/40 hover:bg-white/50 hover:scale-[1.02] transition-all"
              >
                <h3 className="text-sm md:text-base font-bold text-[#355e82] mb-1">Shinta Kawahara →</h3>
                <p className="text-[#355e82]/80 text-xs leading-relaxed">
                  Third-generation Watsonville family farm.
                </p>
              </a>
              <div className="bg-white/30 backdrop-blur-sm p-3 md:p-4 rounded-lg border-2 border-white/40">
                <h3 className="text-sm md:text-base font-bold text-[#355e82] mb-1">Fujishige Farms</h3>
                <p className="text-[#355e82]/80 text-xs leading-relaxed">
                  Longtime CBC cultivar tester and advocate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Explore Our Work */}
      <section 
        id="explore" 
        className="scroll-snap-section bg-[#c4daf4] flex items-start md:items-center justify-center pt-[20vh] md:pt-0"
      >
        <div className="container px-4 py-20">
          <div className={`max-w-3xl mx-auto text-center ${activeSection >= 5 ? 'animate-fade-in' : 'opacity-0'}`}>
            <p className="text-[#355e82] uppercase tracking-[0.2em] text-xs md:text-sm mb-6 font-semibold">
              See What We've Built
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-[#355e82]">
              Explore<br />Our Work
            </h2>
            <p className="text-lg md:text-xl text-[#355e82]/80 mb-10 leading-relaxed">
              Discover the cultivars we've developed through our breeding programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://cultivars.cbcberry.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#355e82] text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-[#355e82]/90 transition-all hover:scale-105"
              >
                View Cultivar Explorer
              </a>
              <Link 
                href="/breeding"
                className="bg-[#c93834] text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-[#c93834]/90 transition-all hover:scale-105"
              >
                Our Breeding Program
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
