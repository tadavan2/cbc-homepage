'use client';

import Link from 'next/link';

export default function CultivarSublicensePage() {
  return (
    <div className="min-h-screen bg-[#6E903C]">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="container relative z-10 py-16" style={{ paddingTop: '80px' }}>
          <div className="max-w-4xl mx-auto text-center px-4">
            <p className="text-[#fdbd51] uppercase tracking-[0.2em] text-xs md:text-sm mb-6 font-semibold">
              Grower Licensing
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              Cultivar<br />
              <span className="text-[#fdbd51]">Sublicense</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Terms and conditions for commercial growers purchasing CBC strawberry cultivars.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#355e82]/10 p-6 md:p-8 rounded-2xl border-l-4 border-[#355e82] mb-8">
              <p className="text-[#355e82] leading-relaxed text-justify">
                California commercial nurseries ("Nursery") are licensed by California Berry Cultivars, LLC ("CBC") 
                to propagate, sell, and distribute Clones of Cultivars and related Intellectual Property ("IP") to 
                commercial strawberry growers, only for commercial fruit production. Sales by the Nursery are subject 
                to that License, which includes the right to sublicense commercial growers to use the IP for commercial 
                fruit production only.
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#355e82]">Sublicense Terms</h2>
            
            <div className="space-y-6">
              <div className="bg-[#fdbd51]/10 p-5 md:p-6 rounded-xl border-l-4 border-[#6E903C]">
                <h3 className="text-lg font-bold text-[#355e82] mb-3">License Grant</h3>
                <p className="text-[#355e82]/80 leading-relaxed text-justify text-sm">
                  Nursery may grant nonexclusive sublicenses in the Licensed Field in the Licensed Territory, 
                  without the right to further sublicense, solely to Commercial Growers for a single season 
                  of Production pursuant to the License.
                </p>
              </div>

              <div className="bg-[#fdbd51]/10 p-5 md:p-6 rounded-xl border-l-4 border-[#c93834]">
                <h3 className="text-lg font-bold text-[#355e82] mb-3">Patent Protection</h3>
                <p className="text-[#355e82]/80 leading-relaxed text-justify text-sm">
                  Grower is aware that the Cultivars are subject to Patent and that said Patent reserves to the 
                  patent holder, CBC, a broad range of activities that CBC may restrict others from carrying out.
                </p>
              </div>

              <div className="bg-[#fdbd51]/10 p-5 md:p-6 rounded-xl border-l-4 border-[#355e82]">
                <h3 className="text-lg font-bold text-[#355e82] mb-3">Grower Restrictions</h3>
                <p className="text-[#355e82]/80 leading-relaxed text-justify text-sm mb-3">
                  By the purchase of Clones, Grower recognizes and understands that it cannot, and will not:
                </p>
                <ul className="text-[#355e82]/80 leading-relaxed space-y-2 text-sm">
                  <li>• Further propagate the Clones, or use the Clones in any way to produce more identical Clones</li>
                  <li>• Sell, offer for sale, exchange, lease, donate or make available to any third party, any seeds, cuttings, buds, shoots, mutations or sports of any CBC Clones</li>
                  <li>• Sell, resell, trade or give away any of the Clones</li>
                  <li>• Crossbreed or modify any of the Clones, or otherwise perform any experimentation, research, or product development using the Clones</li>
                  <li>• Use the Clones in violation of any applicable law, regulation, rule, or industry standard</li>
                  <li>• Use the Clones or any IP to develop, research, commercialize, market or sell products similar to or based on the Cultivar</li>
                </ul>
              </div>

              <div className="bg-[#fdbd51]/10 p-5 md:p-6 rounded-xl border-l-4 border-[#fdbd51]">
                <h3 className="text-lg font-bold text-[#355e82] mb-3">Intellectual Property</h3>
                <p className="text-[#355e82]/80 leading-relaxed text-justify text-sm">
                  No rights, licenses, or sublicenses are granted by CBC to Grower under any tangible or intellectual 
                  property, materials, patents, patent applications, plant variety protection certificates, trademarks, 
                  copyrights, trade secrets, know-how, technical information, or other proprietary right owned or 
                  controlled by CBC.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="bg-[#355e82] py-12 md:py-16">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Full Agreement
            </h2>
            <p className="text-base text-white/90 mb-6 leading-relaxed">
              Download the complete Cultivar Sublicense Agreement for all terms and conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/docs/CultivarSublicense.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#fdbd51] text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-[#fdbd51]/90 transition-all hover:scale-105 inline-block"
              >
                Download PDF
              </a>
              <Link
                href="/contact"
                className="bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-white/20 transition-all hover:scale-105 inline-block"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="bg-[#6E903C] py-10">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Link 
              href="/breeding#grower-partnerships"
              className="text-[#fdbd51] uppercase tracking-wider text-sm font-bold hover:text-white transition-colors inline-flex items-center gap-2"
            >
              ← Back to Grower Partnerships
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
