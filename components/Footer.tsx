import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer 
      className="glass-footer"
      style={{ 
        backdropFilter: 'blur(40px) saturate(180%)', 
        WebkitBackdropFilter: 'blur(40px) saturate(180%)',
        background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.08) 50%, rgba(255, 255, 255, 0.05) 100%)'
      }}
    >
      <div className="container" style={{ paddingTop: '32px', paddingBottom: '24px' }}>
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-6">
          {/* Company info and navigation */}
          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Link href="/" className="text-xl mb-4 inline-block" style={{ fontFamily: 'Jost, sans-serif' }}>
                <span className="text-[#fdbd51] font-medium">CALIFORNIA</span>{' '}
                <span className="text-[#c93834] font-extrabold">BERRY</span>{' '}
                <span className="text-[#6E903C] font-medium">CULTIVARS</span>
              </Link>
              <p className="text-black text-sm leading-relaxed mt-3">
                818 E French Camp Rd<br />
                French Camp, CA 95231
              </p>
            </div>
            <div>
              <h3 className="text-black font-bold mb-3 uppercase tracking-[0.15em] text-sm">Navigation</h3>
              <nav className="space-y-1">
                <Link href="/" className="block text-black/80 hover:text-[#c93834] transition-colors text-sm">Home</Link>
                <Link href="/breeding" className="block text-black/80 hover:text-[#c93834] transition-colors text-sm">Breeding</Link>
                <Link href="/about" className="block text-black/80 hover:text-[#c93834] transition-colors text-sm">About</Link>
                <Link href="/contact" className="block text-black/80 hover:text-[#c93834] transition-colors text-sm">Contact</Link>
                <a
                  href="https://cultivars.cbcberry.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-black/80 hover:text-[#c93834] transition-colors text-sm"
                >
                  Cultivar Explorer
                </a>
              </nav>
            </div>
          </div>
          
          {/* Banner Logo - Desktop only */}
          <div className="hidden md:flex md:col-span-4 items-center justify-end">
            <Image
              src="/images/horz_banner_tm.png"
              alt="California Berry Cultivars"
              width={280}
              height={134}
              className="opacity-95"
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>

        {/* Separator line */}
        <div className="border-t border-black/20" style={{ marginTop: '24px', marginBottom: '16px' }}></div>

        {/* Bottom section - Mobile: vertical stack with logo, Desktop: horizontal spread */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-black/70 text-xs">
          {/* Mobile: 2-column layout (left: stacked items, right: logo) */}
          <div className="flex md:hidden justify-between items-start w-full">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="text-black font-semibold">Follow Us On</span>
                <a
                  href="https://www.linkedin.com/company/california-berry-cultivars-llc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-black/10 hover:bg-black/20 rounded flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
              <div>© {new Date().getFullYear()} All Rights Reserved</div>
              <Link href="/contact" className="hover:text-[#c93834] transition-colors">Contact Us</Link>
            </div>
            <Image
              src="/images/icons/favicon.png"
              alt="California Berry Cultivars"
              width={60}
              height={60}
              className="opacity-90"
            />
          </div>

          {/* Desktop: horizontal spread */}
          <div className="hidden md:flex items-center gap-3">
            <span className="text-black font-semibold">Follow Us On</span>
            <a
              href="https://www.linkedin.com/company/california-berry-cultivars-llc"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-black/10 hover:bg-black/20 rounded flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
          
          <div className="hidden md:block">
            © {new Date().getFullYear()} All Rights Reserved
          </div>
          
          <Link href="/contact" className="hidden md:block hover:text-[#c93834] transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
}
