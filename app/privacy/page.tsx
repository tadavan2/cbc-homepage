import Link from 'next/link';

/**
 * Privacy Policy Page
 * 
 * Basic legal coverage for:
 * - Data collection (contact form, job applications)
 * - Analytics (Vercel - cookieless)
 * - External links disclaimer
 * - Cultivar information disclaimer
 * - California (CCPA) rights
 * 
 * Last updated: December 2024
 * Review annually or when data practices change.
 */

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-[#355e82] py-16 md:py-24">
        <div className="container px-4" style={{ paddingTop: '60px' }}>
          <div className="max-w-3xl mx-auto text-center">
            <h1 
              className="text-3xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: 'Jost, sans-serif' }}
            >
              Privacy Policy
            </h1>
            <p className="text-white/70 text-sm">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            
            {/* Intro */}
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              California Berry Cultivars, LLC ("CBC," "we," "us," or "our") respects your privacy. 
              This policy explains what information we collect, how we use it, and your rights 
              regarding that information.
            </p>

            {/* Information We Collect */}
            <h2 className="text-2xl font-bold text-[#355e82] mt-10 mb-4" style={{ fontFamily: 'Jost, sans-serif' }}>
              Information We Collect
            </h2>
            
            <h3 className="text-lg font-bold text-[#355e82] mt-6 mb-3">Information You Provide</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>
                <strong>Contact Forms:</strong> Name, email address, company, phone number, 
                growing region, and message content when you reach out to us.
              </li>
              <li>
                <strong>Job Applications:</strong> Name, email, phone number, position of interest, 
                cover letter/message, and resume (PDF) when you apply for a position.
              </li>
            </ul>

            <h3 className="text-lg font-bold text-[#355e82] mt-6 mb-3">Information Collected Automatically</h3>
            <p className="text-gray-600 mb-4">
              When you submit a contact form, we automatically collect certain technical information 
              to help us understand our visitors and prevent spam:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li><strong>IP Address</strong> and approximate geographic location (city, region, country)</li>
              <li><strong>Device Information:</strong> Browser type, operating system, device type (desktop/mobile)</li>
              <li><strong>Referrer:</strong> The website or search engine that directed you to us</li>
              <li><strong>Page Activity:</strong> Pages visited on our site and time spent (Cultivar Explorer only)</li>
            </ul>
            <p className="text-gray-600 mb-6">
              This information is collected only when you submit a form and is used solely to provide 
              context for your inquiry. We do not use this information to track you across other websites.
            </p>

            {/* How We Use Your Information */}
            <h2 className="text-2xl font-bold text-[#355e82] mt-10 mb-4" style={{ fontFamily: 'Jost, sans-serif' }}>
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>To respond to your inquiries and messages</li>
              <li>To review job applications and contact qualified candidates</li>
              <li>To improve our website and services</li>
            </ul>
            <p className="text-gray-600 mb-6">
              We do <strong>not</strong> sell, rent, or share your personal information with 
              third parties for marketing purposes.
            </p>

            {/* Third-Party Services */}
            <h2 className="text-2xl font-bold text-[#355e82] mt-10 mb-4" style={{ fontFamily: 'Jost, sans-serif' }}>
              Third-Party Services
            </h2>
            <p className="text-gray-600 mb-4">
              We use the following services to operate our website:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>
                <strong>Vercel Analytics:</strong> Privacy-focused, cookieless website analytics. 
                Collects anonymous, aggregate data only (page views, country, device type). 
                Does not track individual users or use cookies.
              </li>
              <li>
                <strong>Resend:</strong> Email delivery service used to send form submissions 
                to our team. Your submitted information is transmitted securely.
              </li>
              <li>
                <strong>Vercel:</strong> Website hosting platform.
              </li>
            </ul>

            {/* Cookies */}
            <h2 className="text-2xl font-bold text-[#355e82] mt-10 mb-4" style={{ fontFamily: 'Jost, sans-serif' }}>
              Cookies & Tracking
            </h2>
            <p className="text-gray-600 mb-6">
              Our website does <strong>not</strong> use tracking cookies or third-party advertising 
              trackers. We do not build user profiles or track you across other websites.
            </p>

            {/* External Links */}
            <h2 className="text-2xl font-bold text-[#355e82] mt-10 mb-4" style={{ fontFamily: 'Jost, sans-serif' }}>
              External Links
            </h2>
            <p className="text-gray-600 mb-6">
              Our website may contain links to external websites, including our partners and 
              industry resources. We are not responsible for the privacy practices or content 
              of these external sites. We encourage you to review the privacy policies of any 
              website you visit.
            </p>

            {/* Cultivar Information Disclaimer */}
            <h2 className="text-2xl font-bold text-[#355e82] mt-10 mb-4" style={{ fontFamily: 'Jost, sans-serif' }}>
              Cultivar Information Disclaimer
            </h2>
            <p className="text-gray-600 mb-6">
              Information about our strawberry cultivars, including characteristics, performance 
              data, and growing recommendations, is provided for general informational purposes 
              only. While we strive for accuracy, actual plant performance may vary based on 
              growing conditions, climate, soil, and agricultural practices. This information 
              does not constitute professional agricultural advice. Please consult with CBC 
              directly or a qualified agricultural professional before making planting decisions.
            </p>

            {/* California Privacy Rights */}
            <h2 className="text-2xl font-bold text-[#355e82] mt-10 mb-4" style={{ fontFamily: 'Jost, sans-serif' }}>
              Your California Privacy Rights
            </h2>
            <p className="text-gray-600 mb-4">
              Under the California Consumer Privacy Act (CCPA), California residents have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Know what personal information we collect about you</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of the sale of personal information (we do not sell your data)</li>
              <li>Non-discrimination for exercising your privacy rights</li>
            </ul>
            <p className="text-gray-600 mb-6">
              To exercise any of these rights, please contact us using the information below.
            </p>

            {/* Data Retention */}
            <h2 className="text-2xl font-bold text-[#355e82] mt-10 mb-4" style={{ fontFamily: 'Jost, sans-serif' }}>
              Data Retention
            </h2>
            <p className="text-gray-600 mb-6">
              We retain contact form submissions and job applications for as long as necessary 
              to fulfill the purpose for which they were collected, typically up to two years 
              for general inquiries and the duration of the hiring process plus one year for 
              job applications.
            </p>

            {/* Updates */}
            <h2 className="text-2xl font-bold text-[#355e82] mt-10 mb-4" style={{ fontFamily: 'Jost, sans-serif' }}>
              Changes to This Policy
            </h2>
            <p className="text-gray-600 mb-6">
              We may update this Privacy Policy from time to time. Changes will be posted on 
              this page with an updated revision date.
            </p>

            {/* Contact */}
            <h2 className="text-2xl font-bold text-[#355e82] mt-10 mb-4" style={{ fontFamily: 'Jost, sans-serif' }}>
              Contact Us
            </h2>
            <p className="text-gray-600 mb-6">
              To exercise your privacy rights or ask questions about this policy, email us 
              at <a href="mailto:admin@cbcberry.com" className="text-[#355e82] hover:underline font-semibold">admin@cbcberry.com</a>.
            </p>

            {/* Back link */}
            <div className="pt-8 border-t border-gray-200">
              <Link 
                href="/"
                className="text-[#355e82] hover:text-[#c93834] transition-colors font-semibold"
              >
                ← Back to Home
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

