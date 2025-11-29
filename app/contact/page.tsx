'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

/**
 * Contact Page - Multi-section scroll-snap layout
 * 
 * Sections:
 * 1. Contact Us (form)
 * 2. Working at CBC / Careers (application form)
 */

// Section mapping for hash navigation
const sectionMap: Record<string, number> = {
  'contact': 0,
  'careers': 1,
};

export default function ContactPage() {
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
      {/* Section 1: Contact Us */}
      <section 
        id="contact" 
        className="scroll-snap-section bg-[#355e82] flex items-center justify-center"
      >
        <div className="container px-4 py-12 md:py-20" style={{ paddingTop: '60px' }}>
          <div className={`max-w-3xl mx-auto ${activeSection >= 0 ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="text-center mb-10">
              <p className="text-[#fdbd51] uppercase tracking-[0.2em] text-xs md:text-sm mb-6 font-semibold">
                Get In Touch
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                Contact Us
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-xl mx-auto leading-relaxed">
                Questions about our cultivars? Ready to explore partnership opportunities?
              </p>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl border-2 border-white/20" style={{ marginBottom: '80px' }}>
              <ContactForm />
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

      {/* Section 2: Working at CBC / Careers */}
      <section 
        id="careers" 
        className="scroll-snap-section bg-[#6E903C] flex items-center justify-center"
      >
        <div className="container px-4 py-12 md:py-20" style={{ paddingTop: '60px' }}>
          <div className={`max-w-3xl mx-auto text-center ${activeSection >= 1 ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-white">
              Working at CBC
            </h2>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed mb-8">
              Join our team of plant breeders, pathologists, and agricultural professionals 
              building better berries for growers worldwide.
            </p>
            <Link 
              href="/careers"
              className="bg-[#fdbd51] text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-[#fdbd51]/90 transition-all hover:scale-105 inline-block"
            >
              View Current Openings
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
