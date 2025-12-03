import Link from 'next/link';

/**
 * Custom 404 Page
 * 
 * Displays when a user visits a non-existent URL.
 * Common causes:
 * - Old WordPress URLs (e.g., /breeding-program/cultivars)
 * - Typos in URLs
 * - Deleted pages
 * 
 * If you see repeated 404s in analytics for a specific URL,
 * consider adding a redirect in next.config.ts
 */

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#355e82] flex items-center justify-center px-4">
      <div className="text-center max-w-xl">
        {/* 404 Badge */}
        <div className="inline-block bg-[#c93834] text-white text-sm font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
          Page Not Found
        </div>
        
        {/* Heading */}
        <h1 
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          style={{ fontFamily: 'Jost, sans-serif' }}
        >
          Oops! This page<br />
          doesn't exist.
        </h1>
        
        {/* Subtext */}
        <p className="text-white/80 text-lg mb-8 leading-relaxed">
          The page you're looking for may have moved or no longer exists. 
          Let's get you back on track.
        </p>
        
        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="bg-[#fdbd51] text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-[#fdbd51]/90 transition-all hover:scale-105"
          >
            Go Home
          </Link>
          <a 
            href="https://cultivars.cbcberry.com"
            className="bg-white/10 border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-white/20 transition-all"
          >
            Explore Cultivars
          </a>
        </div>
        
        {/* Quick links */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-white/60 text-sm mb-4">Quick Links</p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link href="/breeding" className="text-[#fdbd51] hover:text-white transition-colors">
              Breeding Program
            </Link>
            <Link href="/about" className="text-[#fdbd51] hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-[#fdbd51] hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="/careers" className="text-[#fdbd51] hover:text-white transition-colors">
              Careers
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

