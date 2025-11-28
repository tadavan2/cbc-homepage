import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-10 md:pt-12">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#6E903C]">
        <div className="container relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">About</span>
              <br />
              <span className="text-[#fdbd51]">California Berry Cultivars</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Independent strawberry breeding, driven by collaboration and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-[#6E903C]">Our Story</h2>
            <div className="bg-[#fdbd51]/10 p-8 rounded-2xl border-l-4 border-[#c93834]">
              <p className="text-lg text-[#6E903C] mb-6 leading-relaxed text-justify">
                California Berry Cultivars, LLC is an independent strawberry breeding company founded in 
                2014 as a collaborative effort between stakeholders in the strawberry industry.
              </p>
              <p className="text-lg text-[#6E903C] leading-relaxed text-justify">
                We focus on developing high-quality, high-yield cultivars for commercial berry growers 
                worldwide, delivering fruit varieties that truly work for the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="bg-[#fdbd51] py-20 md:py-32">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#6E903C]">Our Team</h2>
            <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl border-2 border-white/30">
              <p className="text-lg md:text-xl text-[#6E903C] mb-6 leading-relaxed text-justify">
                The California Berry Cultivars team consists of a mix of veterans and the next generation 
                of strawberry cultivar developers and researchers.
              </p>
              <p className="text-lg md:text-xl text-[#6E903C] leading-relaxed text-justify">
                They have a collective 100+ years of experience in the strawberry industry and are committed 
                to providing strawberry growers with the quality strawberries they want and need. The significant 
                amount of experience within the CBC team is well-suited to conduct strawberry research in order 
                to further the knowledge base required by the strawberry industry to protect and promote a quality, 
                high-yielding, consumer-desirable product under the ever changing conditions of the field and 
                market place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-[#6E903C] py-20 md:py-32">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Our Mission</h2>
            <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed text-justify">
              California Berry Cultivars is dedicated to the continual development and improvement of 
              strawberry cultivars—a vital part of supporting and advancing the global strawberry industry.
            </p>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed text-justify">
              Our team of experts leads collaborative research aimed at creating superior cultivars that 
              meet the needs of growers worldwide, delivering fruit varieties that truly work for the world.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#c93834] py-20 md:py-32">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Explore Our Work</h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              See the cultivars we've developed through our breeding programs.
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
