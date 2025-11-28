import Link from 'next/link';

export default function BreedingPage() {
  return (
    <div className="min-h-screen pt-10 md:pt-12">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#6E903C]">
        <div className="container relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Breeding &</span>
              <br />
              <span className="text-[#fdbd51]">Innovation</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Our commitment to continuous improvement drives everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold italic mb-8 text-[#6E903C] leading-tight text-center">
              "If you're not moving forward, you're falling behind."
            </blockquote>
            <p className="text-lg md:text-xl text-[#6E903C]/90 mb-6 leading-relaxed text-center max-w-3xl mx-auto text-justify">
              Nothing could be more true in modern agriculture. A key component to moving forward is 
              consistent development of cultivars that are superior to their predecessors.
            </p>
            <p className="text-lg md:text-xl text-[#6E903C]/90 leading-relaxed text-center max-w-3xl mx-auto text-justify">
              At California Berry Cultivars, we are committed to continuous improvement and innovation 
              in strawberry breeding, ensuring growers have access to the best varieties for their operations.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[#fdbd51] py-20 md:py-32">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#6E903C]">Our Breeding Process</h2>
            
            <div className="space-y-12">
              <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl border-2 border-white/30">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#6E903C]">Short-Day & Day-Neutral Programs</h3>
                <p className="text-[#6E903C]/90 leading-relaxed text-justify">
                  We develop high-yield, high-quality berry varieties for both short-day and day-neutral 
                  production systems. Our breeding programs focus on superior fruit quality, disease resistance, 
                  and grower profitability across diverse growing conditions.
                </p>
              </div>

              <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl border-2 border-white/30">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#6E903C]">Disease Screening & Pathology</h3>
                <p className="text-[#6E903C]/90 leading-relaxed text-justify">
                  Rigorous pathology screening for Fusarium, Macrophomina, and other critical pathogens ensures 
                  our cultivars perform reliably. We conduct comprehensive disease resistance testing as a core 
                  component of our selection process.
                </p>
              </div>

              <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl border-2 border-white/30">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#6E903C]">Multi-Site Field Testing</h3>
                <p className="text-[#6E903C]/90 leading-relaxed text-justify">
                  Multi-site field trials across diverse growing conditions validate performance and ensure 
                  cultivars meet real-world production needs. We work directly with commercial growers through 
                  on-farm trials to gather comprehensive data.
                </p>
              </div>

              <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl border-2 border-white/30">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#6E903C]">Looking Ahead</h3>
                <p className="text-[#6E903C]/90 leading-relaxed text-justify">
                  Innovation drives our future. We're always exploring new techniques, technologies, and 
                  approaches to improve our breeding programs and deliver even better cultivars for growers 
                  worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#c93834] py-20 md:py-32">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Explore Our Cultivars</h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              See the results of our breeding program in action.
            </p>
            <a
              href="https://cultivars.cbcberry.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#fdbd51] text-[#6E903C] px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-[#fdbd51]/90 transition-all hover:scale-105 inline-block"
            >
              View Cultivar Explorer
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
