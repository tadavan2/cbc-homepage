'use client';

/**
 * TEST PAGE: Rolling Hills Background Experiment
 * 
 * This is an R&D page experimenting with layered SVG wave backgrounds
 * inspired by macOS Keynote-style animations.
 * 
 * Features:
 * - Multiple SVG layers with organic wave shapes
 * - Gradient opacity for soft color blending
 * - Muted color palette based on brand colors
 * - Interactive paths (hover effects possible)
 * 
 * URL: /test-waves-xyz789 (intentionally obscure)
 * Status: Experimental - not linked from main navigation
 * 
 * Future ideas:
 * - Animate layers with Framer Motion or GSAP
 * - Swiping card reveal effect (file folder tabs)
 * - Parallax scrolling between layers
 */

import { useRouter } from 'next/navigation';

export default function TestWavesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Layered SVG Background - muted, desaturated colors */}
      <div className="absolute inset-0">
        {/* Base - muted dark red/maroon */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#5a1a1a] via-[#6a2020] to-[#7a2828]" />
        
        {/* Blue wave - upper right - muted navy */}
        <svg 
          viewBox="0 0 1440 900" 
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="blueFade1" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2a3a4a" stopOpacity="0" />
              <stop offset="40%" stopColor="#2a3a4a" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#1a2a3a" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path 
            d="M400,0 
               Q650,-20 900,80 
               Q1150,200 1300,120 
               Q1400,60 1540,140 
               L1540,900 L-100,900 
               L-100,500
               Q100,620 300,480
               Q480,340 400,0 Z" 
            fill="url(#blueFade1)"
            className="transition-all duration-500 hover:opacity-80 cursor-pointer"
          />
        </svg>
        
        {/* Red/maroon wave - from left - darker */}
        <svg 
          viewBox="0 0 1440 900" 
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="redFade1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8a2a2a" stopOpacity="0" />
              <stop offset="35%" stopColor="#7a2525" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#4a1515" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path 
            d="M-100,180 
               Q100,100 260,220 
               Q480,400 720,300 
               Q980,180 1120,340
               Q1260,500 1350,420
               L1350,900 L-100,900 Z" 
            fill="url(#redFade1)"
            className="transition-all duration-500 hover:opacity-80 cursor-pointer"
          />
        </svg>
        
        {/* Lower blue/slate wave - muted */}
        <svg 
          viewBox="0 0 1440 900" 
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="blueFade2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2a4050" stopOpacity="0" />
              <stop offset="30%" stopColor="#2a4050" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#1a2a3a" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path 
            d="M-100,580 
               Q100,450 280,530 
               Q500,650 700,500
               Q920,340 1120,450
               Q1320,560 1480,420
               Q1520,390 1540,450
               L1540,900 L-100,900 Z" 
            fill="url(#blueFade2)"
            className="transition-all duration-500 hover:opacity-80 cursor-pointer"
          />
        </svg>
        
        {/* Green hills - muted olive/sage */}
        <svg 
          viewBox="0 0 1440 900" 
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="greenFade1" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#4a5a2a" stopOpacity="0" />
              <stop offset="35%" stopColor="#4a5a2a" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#3a4a1a" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="greenFade2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5a6a3a" stopOpacity="0" />
              <stop offset="30%" stopColor="#5a6a3a" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#4a5a2a" stopOpacity="1" />
            </linearGradient>
          </defs>
          
          {/* Back green hill */}
          <path 
            d="M200,900 
               Q280,680 480,720
               Q720,780 920,650
               Q1100,530 1280,620
               Q1420,700 1540,580
               L1540,900 Z" 
            fill="url(#greenFade1)"
            className="transition-all duration-500 hover:opacity-90 cursor-pointer"
          />
          
          {/* Front lighter green hill */}
          <path 
            d="M-100,720 
               Q150,600 360,700
               Q550,800 750,700
               Q900,620 1020,750
               L1020,900 L-100,900 Z" 
            fill="url(#greenFade2)"
            className="transition-all duration-500 hover:opacity-90 cursor-pointer"
          />
        </svg>
        
        {/* Subtle dark overlay to further mute */}
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <p className="text-[#fdbd51] uppercase tracking-[0.2em] text-sm mb-6 font-semibold drop-shadow-lg">
            Layered Wave Test
          </p>
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight drop-shadow-2xl"
            style={{ fontFamily: 'Jost, sans-serif' }}
          >
            <span className="text-white">Rolling Hills</span>
            <br />
            <span className="text-[#fdbd51]">of Flavor</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 drop-shadow-lg">
            An experimental SVG layered background with organic wave patterns and strawberry silhouettes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push('/')}
              className="bg-[#fdbd51] text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-[#fdbd51]/90 transition-all hover:scale-105"
            >
              Back to Home
            </button>
            <button
              onClick={() => router.push('/where-to-buy')}
              className="bg-white/20 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-white/30 transition-all hover:scale-105"
            >
              Compare to Blob Map
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
}

