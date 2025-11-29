'use client';

import { useState, useEffect, useCallback } from 'react';

/**
 * Intro Overlay
 * 
 * NAVIGATION BEHAVIOR:
 * - Fresh load / Home click → SHOW intro
 * - Browser back/forward → SKIP intro (go straight to hero)
 * - Page refresh (F5) → SHOW intro
 * 
 * HOLD STATE:
 * - Red background (#BF1B2C) covers screen
 * - Sun graphic centered
 * - CBC + tagline text overlaid
 * - "Scroll to enter" hint at bottom
 * 
 * ON SCROLL:
 * - Blue panel slides in from left
 * - Dark red panel slides in from right
 * - Sun and text fade out
 * - Overlay fades out, revealing page content
 * 
 * BREAKPOINT: 768px (single breakpoint for mobile/desktop)
 */

export default function IntroOverlay() {
  const [phase, setPhase] = useState<'hold' | 'reveal' | 'fadeout' | 'done'>('hold');
  const [isMobile, setIsMobile] = useState(false);
  const [skipIntro, setSkipIntro] = useState(false);

  // Check if this is a back/forward navigation - if so, skip intro
  useEffect(() => {
    // Method 1: Performance Navigation API
    const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
    const navType = navEntries[0]?.type;
    
    if (navType === 'back_forward') {
      setSkipIntro(true);
      setPhase('done');
      window.dispatchEvent(new CustomEvent('intro-reveal', { detail: { immediate: true } }));
      return;
    }
    
    // Method 2: Check sessionStorage for recent visit (within last 30 seconds)
    const lastVisit = sessionStorage.getItem('cbc-intro-seen');
    const now = Date.now();
    if (lastVisit && (now - parseInt(lastVisit)) < 30000) {
      // User was here less than 30 seconds ago - likely back navigation
      setSkipIntro(true);
      setPhase('done');
      window.dispatchEvent(new CustomEvent('intro-reveal', { detail: { immediate: true } }));
      return;
    }
    
    // Method 3: Listen for pageshow event (bfcache)
    const handlePageShow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        // Page was restored from bfcache (back/forward)
        setSkipIntro(true);
        setPhase('done');
        window.dispatchEvent(new CustomEvent('intro-reveal', { detail: { immediate: true } }));
      }
    };
    
    window.addEventListener('pageshow', handlePageShow);
    return () => window.removeEventListener('pageshow', handlePageShow);
  }, []);

  // Detect mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const triggerReveal = useCallback(() => {
    if (phase !== 'hold') return;
    setPhase('reveal');
    
    // Mark that user has seen intro (for back navigation detection)
    sessionStorage.setItem('cbc-intro-seen', Date.now().toString());
    
    // Notify page.tsx to start showing content (with animation)
    window.dispatchEvent(new CustomEvent('intro-reveal', { detail: { immediate: false } }));
    
    // After panels slide in (1s), start fading out the entire overlay
    setTimeout(() => setPhase('fadeout'), 1000);
    
    // Remove overlay from DOM after fade completes
    setTimeout(() => setPhase('done'), 2500);
  }, [phase]);

  // Listen for scroll/swipe/key to trigger reveal
  useEffect(() => {
    if (phase !== 'hold') return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) triggerReveal();
    };
    const handleTouch = () => triggerReveal();
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === ' ' || e.key === 'Enter') triggerReveal();
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouch, { passive: true });
    window.addEventListener('keydown', handleKey);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouch);
      window.removeEventListener('keydown', handleKey);
    };
  }, [phase, triggerReveal]);

  // If skipping intro or done, render nothing
  if (phase === 'done' || skipIntro) return null;

  const isRevealing = phase === 'reveal' || phase === 'fadeout';
  const isFadingOut = phase === 'fadeout';

  // Responsive sizes - single breakpoint at 768px
  const sunSize = isMobile ? '342px' : '380px';
  const cbcFontSize = isMobile ? '120px' : '96px';
  const taglineFontSize = isMobile ? '14px' : '18px';

  return (
    <div 
      className="fixed inset-0 overflow-hidden"
      style={{ 
        zIndex: 100,
        opacity: isFadingOut ? 0 : 1,
        transition: 'opacity 1.5s ease-out',
        pointerEvents: isFadingOut ? 'none' : 'auto'
      }}
    >
      {/* Layer 1: Red background */}
      <div 
        className="absolute inset-0"
        style={{ zIndex: 1, backgroundColor: '#BF1B2C' }}
      />

      {/* Layer 2: Green panel - slides in from left */}
      <div 
        className="absolute top-0 left-0 w-1/2 h-full"
        style={{ 
          zIndex: 2,
          backgroundColor: '#355e82',
          transform: isRevealing ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 1s ease-out'
        }}
      />

      {/* Layer 3: Dark red panel - slides in from right */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-full"
        style={{ 
          zIndex: 3,
          backgroundColor: '#920000',
          transform: isRevealing ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 1s ease-out'
        }}
      />

      {/* Layer 4: Sun graphic - centered */}
      <div 
        className="absolute inset-0 flex items-center justify-center"
        style={{ 
          zIndex: 10,
          opacity: isRevealing ? 0 : 1,
          transition: 'opacity 0.5s ease-out'
        }}
      >
        <img
          src="/images/fullcoin.png"
          alt="California Berry Cultivars"
          style={{ 
            width: sunSize, 
            height: sunSize,
            objectFit: 'contain' 
          }}
        />
      </div>

      {/* Layer 5: CBC text and tagline */}
      <div 
        className="absolute inset-0 flex items-center justify-center"
        style={{ 
          zIndex: 11,
          opacity: isRevealing ? 0 : 1,
          transition: 'opacity 0.5s ease-out',
          fontFamily: 'Futura, "Futura PT", "Century Gothic", "AppleGothic", sans-serif'
        }}
      >
        <div className="text-center">
          <h1 
            style={{ 
              fontSize: cbcFontSize,
              fontWeight: 'bold',
              color: '#920000',
              letterSpacing: '-0.025em',
              textShadow: '0 4px 6px rgba(0, 0, 0, 0.3)'
            }}
          >
            CBC
          </h1>
          <p 
            style={{
              fontSize: taglineFontSize,
              fontWeight: '600',
              color: '#355e82',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              marginTop: '12px',
              lineHeight: '1.6',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
            }}
          >
            Built by People<br />
            Who Love the Process.
          </p>
        </div>
      </div>

      {/* Layer 6: Scroll hint */}
      {phase === 'hold' && (
        <div 
          className="absolute bottom-10 left-1/2 text-center animate-pulse"
          style={{ 
            zIndex: 12,
            transform: 'translateX(-50%)',
            color: 'rgba(255, 255, 255, 0.8)'
          }}
        >
          <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '8px' }}>
            Scroll to enter
          </p>
          <svg 
            className="w-6 h-6 mx-auto animate-bounce" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      )}
    </div>
  );
}
