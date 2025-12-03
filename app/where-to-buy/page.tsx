'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

/**
 * Where to Buy Plants Page - Scroll-snap layout
 * 
 * This page helps growers find where to purchase CBC cultivars.
 * 
 * Sections:
 * 1. Hero with world map visualization
 * 2. USA - Licensed nurseries
 * 3. International - Master licensees
 * 4. Contact CTA
 * 
 * MAINTENANCE NOTES:
 * - Update usaNurseries array when adding/removing licensed nurseries
 * - Update internationalLicensees when licensing changes
 * - canadaNurseries can sell INTO USA only (not within Canada)
 */

// Section mapping for hash navigation
const sectionMap: Record<string, number> = {
  'usa': 1,
  'international': 2,
  'contact': 3,
};

// =============================================================================
// USA LICENSED NURSERIES
// Growers in the USA can purchase directly from these nurseries
// Add new nurseries here - they'll automatically appear in the list
// =============================================================================
const usaNurseries = [
  { name: 'Lassen Canyon Nursery', location: 'Redding, CA', website: 'https://lassencanyonnursery.com' },
  { name: 'Crown Nursery LLC', location: 'Watsonville, CA', website: 'https://www.crownnurseryllc.com' },
  { name: 'Planasa', location: 'Salinas, CA', website: 'https://planasa.com' },
  { name: 'Cedar Point Nursery', location: 'Cottonwood, CA', website: 'https://cedarpointnursery.com' },
  { name: 'Bruce Walls Klamath Nursery', location: 'Klamath Falls, OR', website: null },
  // Add more nurseries as they become licensed...
];

// =============================================================================
// CANADIAN NURSERIES (sell into USA only)
// Due to licensing, these nurseries can produce CBC plants but only sell to US growers
// =============================================================================
const canadaNurseries: Array<{ name: string; location: string; website: string | null; note?: string }> = [
  // Currently no Canadian nurseries listed - contact CBC for information
];

// =============================================================================
// INTERNATIONAL MASTER LICENSEES
// For growers outside USA, contact the regional master licensee
// =============================================================================
const internationalLicensees = [
  {
    name: 'Eurosemillas',
    region: 'Europe, Middle East, Africa, Asia, South America, Canada',
    flag: '🌍',
    description: 'Master licensee for most of the world',
    website: 'https://eurosemillas.com',
  },
  {
    name: 'Toolangi Certified Strawberry Runners',
    region: 'Australia & New Zealand',
    flag: '🇦🇺',
    description: 'Exclusive licensee for the Australian market',
    website: null, // No public website available
  },
  {
    name: 'Flavor First',
    region: 'Eastern United States',
    flag: '🍓',
    description: 'Sweet Carolina variety only',
    website: 'https://www.flavorfirst.com',
    note: 'Sweet Carolina variety only',
  },
];

export default function WhereToBuyPage() {
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
      {/* Section 1: Hero with Map */}
      <section className="scroll-snap-section bg-[#355e82] flex items-start md:items-center justify-center pt-[10vh] md:pt-0 relative overflow-hidden">
        {/* Stylized world map background */}
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="-50 -25 1100 550" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            {/* Globe outline */}
            <ellipse cx="500" cy="250" rx="480" ry="220" fill="none" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
            
            {/* Continent group - scaled down 10% for more ocean */}
            <g transform="translate(50, 25) scale(0.9)">
              {/* North America */}
              <path d="M150,120 Q200,100 250,120 Q280,150 260,200 Q240,250 200,260 Q150,250 140,200 Q130,150 150,120" fill="white" />
              {/* South America */}
              <path d="M220,280 Q250,270 270,300 Q280,350 260,400 Q230,420 210,390 Q190,340 220,280" fill="white" />
              {/* Europe */}
              <path d="M450,100 Q500,90 540,110 Q560,140 540,170 Q500,180 460,160 Q440,130 450,100" fill="white" />
              {/* Africa */}
              <path d="M480,200 Q530,190 560,230 Q570,300 540,360 Q490,380 460,340 Q450,270 480,200" fill="white" />
              {/* Asia */}
              <path d="M580,80 Q700,70 800,120 Q850,180 820,240 Q750,280 650,260 Q580,220 560,160 Q560,100 580,80" fill="white" />
              {/* Australia */}
              <path d="M780,320 Q830,310 860,340 Q870,380 840,400 Q800,410 770,380 Q760,350 780,320" fill="white" />
            </g>
            
            {/* Connection lines from California */}
            <line x1="225" y1="187" x2="495" y2="151" stroke="#fdbd51" strokeWidth="2" strokeDasharray="8 4" className="animate-pulse" />
            <line x1="225" y1="187" x2="783" y2="349" stroke="#fdbd51" strokeWidth="2" strokeDasharray="8 4" className="animate-pulse" />
            <line x1="225" y1="187" x2="513" y2="277" stroke="#fdbd51" strokeWidth="2" strokeDasharray="8 4" className="animate-pulse" />
            
            {/* California marker */}
            <circle cx="225" cy="187" r="12" fill="#c93834" stroke="white" strokeWidth="3" />
            <circle cx="225" cy="187" r="20" fill="none" stroke="#c93834" strokeWidth="2" className="animate-ping" style={{ transformOrigin: '225px 187px' }} />
          </svg>
        </div>
        
        <div className="container px-4 py-12 md:py-20 relative z-10" style={{ paddingTop: '80px' }}>
          <div className={`max-w-3xl mx-auto text-center ${activeSection >= 0 ? 'animate-fade-in' : 'opacity-0'}`}>
            <p className="text-[#fdbd51] uppercase tracking-[0.2em] text-xs md:text-sm mb-4 font-semibold">
              Find a Supplier
            </p>
            <h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: 'Jost, sans-serif' }}
            >
              Where to Buy<br />
              <span className="text-[#fdbd51]">CBC Plants</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-8">
              We develop the varieties. Our licensed partners grow and sell the plants. 
              Find the right supplier for your region.
            </p>
            
            {/* Quick jump buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center" style={{ marginBottom: '80px' }}>
              <button 
                onClick={() => document.getElementById('usa')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-[#355e82] px-6 py-3 md:px-8 md:py-4 rounded-full font-bold uppercase tracking-wider text-xs md:text-sm hover:bg-white/90 transition-all hover:scale-105"
              >
                🇺🇸 USA Nurseries
              </button>
              <button 
                onClick={() => document.getElementById('international')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/20 border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold uppercase tracking-wider text-xs md:text-sm hover:bg-white/30 transition-all hover:scale-105"
              >
                🌍 International
              </button>
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

      {/* Section 2: USA */}
      <section 
        id="usa" 
        className="scroll-snap-section flex items-start md:items-center justify-center pt-[10vh] md:pt-0"
        style={{ background: 'linear-gradient(to bottom right, #355e82 0%, #fdbd51 100%)' }}
      >
        <div className="container px-4 py-12 md:py-20" style={{ paddingTop: '60px' }}>
          <div className={`max-w-4xl mx-auto ${activeSection >= 1 ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="text-center mb-6 md:mb-8">
              <span className="text-4xl md:text-5xl mb-2 md:mb-4 block">🇺🇸</span>
              <h2 className="text-2xl md:text-5xl font-bold text-white mb-2 md:mb-4" style={{ fontFamily: 'Jost, sans-serif' }}>
                United States
              </h2>
            </div>
            
            {/* Nursery list - compact for mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3" style={{ marginBottom: '80px' }}>
              {usaNurseries.map((nursery, i) => (
                <div 
                  key={i} 
                  className={`bg-white/20 backdrop-blur-sm p-3 md:p-5 rounded-lg md:rounded-xl border border-white/30 hover:bg-white/30 transition-all flex items-center justify-between gap-2
                    ${activeSection >= 1 ? 'animate-slide-in' : 'opacity-0'}
                  `}
                  style={{ animationDelay: `${0.05 + i * 0.05}s` }}
                >
                  <div className="min-w-0">
                    <h3 className="font-bold text-white text-sm md:text-lg truncate">{nursery.name}</h3>
                    <p className="text-white/60 text-[10px] md:text-sm">{nursery.location}</p>
                  </div>
                  {nursery.website ? (
                    <a 
                      href={nursery.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full font-bold text-[10px] md:text-xs hover:bg-white/30 transition-colors whitespace-nowrap flex-shrink-0"
                    >
                      Website
                    </a>
                  ) : (
                    <span className="text-white/40 text-[10px] md:text-xs flex-shrink-0">No website</span>
                  )}
                </div>
              ))}
            </div>

            {/* Canadian nurseries if any */}
            {canadaNurseries.length > 0 && (
              <div className="p-4 md:p-6 bg-white/10 rounded-xl md:rounded-2xl border border-white/20" style={{ marginBottom: '80px' }}>
                <h3 className="text-white font-bold text-sm md:text-lg mb-2 flex items-center gap-2">
                  🇨🇦 Canadian Nurseries
                  <span className="text-xs font-normal text-white/60">(ship to USA only)</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-3 md:mt-4">
                  {canadaNurseries.map((nursery, i) => (
                    <div key={i} className="bg-white/10 p-3 md:p-4 rounded-lg md:rounded-xl">
                      <h4 className="font-bold text-white text-sm md:text-base">{nursery.name}</h4>
                      <p className="text-white/60 text-xs md:text-sm">{nursery.location}</p>
                      {nursery.note && (
                        <p className="text-amber-300 text-xs mt-1">⚠️ {nursery.note}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 3: International */}
      <section 
        id="international" 
        className="scroll-snap-section bg-[#6E903C] flex items-start md:items-center justify-center pt-[8vh] md:pt-0"
      >
        <div className="container px-4 py-8 md:py-20" style={{ paddingTop: '60px' }}>
          <div className={`max-w-4xl mx-auto ${activeSection >= 2 ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="text-center mb-4 md:mb-8">
              <span className="text-3xl md:text-5xl mb-2 md:mb-4 block">🌍</span>
              <h2 className="text-2xl md:text-5xl font-bold text-white mb-2 md:mb-4" style={{ fontFamily: 'Jost, sans-serif' }}>
                International
              </h2>
              <p className="text-white/90 text-xs md:text-lg max-w-xl mx-auto">
                Outside the USA? Contact our regional master licensees.
              </p>
            </div>
            
            {/* Licensee cards - compact on mobile */}
            <div className="space-y-2 md:space-y-4" style={{ marginBottom: '80px' }}>
              {internationalLicensees.map((licensee, i) => (
                <div 
                  key={i} 
                  className={`bg-white/10 backdrop-blur-sm p-3 md:p-6 rounded-xl md:rounded-2xl border border-white/20 hover:bg-white/20 transition-all
                    ${activeSection >= 2 ? 'animate-slide-in' : 'opacity-0'}
                  `}
                  style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 md:gap-4 min-w-0 flex-1">
                      <span className="text-2xl md:text-4xl flex-shrink-0">{licensee.flag}</span>
                      <div className="min-w-0">
                        <h3 className="font-bold text-white text-sm md:text-2xl">{licensee.name}</h3>
                        <p className="text-[#fdbd51] font-semibold text-[10px] md:text-sm truncate">{licensee.region}</p>
                        {licensee.note && (
                          <p className="text-amber-300 text-[10px] md:text-xs font-semibold mt-0.5 md:mt-1">⚠️ {licensee.note}</p>
                        )}
                      </div>
                    </div>
                    {licensee.website && (
                      <a 
                        href={licensee.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-[#6E903C] px-3 py-2 md:px-6 md:py-3 rounded-full font-bold uppercase tracking-wider text-[10px] md:text-xs hover:bg-white/90 transition-all text-center whitespace-nowrap flex-shrink-0"
                      >
                        Website
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Not Sure / Contact */}
      <section 
        id="contact" 
        className="scroll-snap-section bg-[#c93834] flex items-start md:items-center justify-center pt-[15vh] md:pt-0"
      >
        <div className="container px-4 py-12 md:py-20">
          <div className={`max-w-2xl mx-auto text-center ${activeSection >= 3 ? 'animate-fade-in' : 'opacity-0'}`}>
            <span className="text-4xl md:text-5xl mb-4 md:mb-6 block">🤔</span>
            <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-6" style={{ fontFamily: 'Jost, sans-serif' }}>
              Not Sure<br />Who to Contact?
            </h2>
            <p className="text-white/80 text-sm md:text-lg mb-6 md:mb-8 leading-relaxed">
              Questions about licensing and availability? Reach out to us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center" style={{ marginBottom: '80px' }}>
              <Link 
                href="/contact"
                className="bg-[#fdbd51] text-black px-6 py-3 md:px-8 md:py-4 rounded-full font-bold uppercase tracking-wider text-xs md:text-sm hover:bg-[#fdbd51]/90 transition-all hover:scale-105"
              >
                Contact CBC
              </Link>
              <a 
                href="https://cultivars.cbcberry.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold uppercase tracking-wider text-xs md:text-sm hover:bg-white/30 transition-all hover:scale-105"
              >
                Explore Cultivars
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
