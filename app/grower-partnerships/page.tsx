import Link from 'next/link';

export default function GrowerPartnershipsPage() {
  return (
    <div className="min-h-screen pt-10 md:pt-12">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#6E903C]">
        <div className="container relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Grower</span>
              <br />
              <span className="text-[#fdbd51]">Partnerships</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Direct collaboration with commercial growers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#6E903C]">Working Together</h2>
            <p className="text-lg text-[#6E903C] mb-6 leading-relaxed">
              California Berry Cultivars partners directly with commercial growers through on-farm trials 
              and licensing programs. This collaborative approach ensures our cultivars deliver real-world 
              results under the conditions that matter most.
            </p>
            <p className="text-lg text-[#6E903C] mb-6 leading-relaxed">
              Our partnerships span California, Spain, Mexico, Chile, and other major strawberry-growing 
              regions. We gather data from diverse environments to validate performance and help growers 
              make informed variety selections.
            </p>
            <p className="text-lg text-[#6E903C] mb-8 leading-relaxed">
              Whether you're a large-scale commercial operation or exploring new varieties for your region, 
              we're committed to supporting your success.
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Partner With Us</h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Interested in trialing our cultivars or exploring licensing opportunities?
            </p>
            <Link
              href="/contact"
              className="bg-[#fdbd51] text-[#6E903C] px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-[#fdbd51]/90 transition-all hover:scale-105 inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

