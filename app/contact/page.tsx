import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-10 md:pt-12">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#6E903C]">
        <div className="container relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Contact</span>
              <br />
              <span className="text-[#fdbd51]">Us</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Questions about our cultivars? Ready to explore partnership opportunities? Get in touch.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#fdbd51]/10 p-8 md:p-12 rounded-2xl border-2 border-[#6E903C]/10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Office Location Section */}
      <section className="bg-[#6E903C] py-16 md:py-20">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Office Location</h3>
            <p className="text-white/90 text-lg">
              818 E French Camp Rd<br />
              French Camp, CA 95231
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#c93834] py-20 md:py-32">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Explore Our Cultivars</h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Learn more about our breeding programs and available varieties.
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
