import Link from 'next/link';

export default function DiseaseTestingPage() {
  return (
    <div className="min-h-screen pt-10 md:pt-12">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#6E903C]">
        <div className="container relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Disease &</span>
              <br />
              <span className="text-[#fdbd51]">Field Testing</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Rigorous screening to ensure cultivar resilience and performance.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#6E903C]">Our Testing Programs</h2>
            <p className="text-lg text-[#6E903C] mb-6 leading-relaxed">
              We conduct rigorous pathology screening for Fusarium, Macrophomina, and other critical 
              pathogens to ensure our cultivars perform reliably. Disease resistance testing is a core 
              component of our selection process.
            </p>
            <p className="text-lg text-[#6E903C] mb-6 leading-relaxed">
              Multi-site field trials across diverse growing conditions validate performance and ensure 
              cultivars meet real-world production needs. We work directly with commercial growers through 
              on-farm trials to gather comprehensive data.
            </p>
            <p className="text-lg text-[#6E903C] mb-8 leading-relaxed">
              Future cycles will bring in Phytophthora and Verticillium screening, building toward cultivars 
              with robust, multi-disease resistance validated across environments.
            </p>
            <Link 
              href="/"
              className="text-[#c93834] uppercase tracking-wider text-sm font-bold hover:text-[#6E903C] transition-colors inline-flex items-center gap-2"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#c93834] py-20 md:py-32">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">See Disease-Resistant Varieties</h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Explore cultivars with proven disease resistance in our Cultivar Explorer.
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

