'use client';

import Link from 'next/link';
import ApplicationForm from '@/components/ApplicationForm';
import { currentOpenings, categories, locations, getJobsByCategory } from '@/data/jobOpenings';

// =============================================================================
// CAREERS PAGE
// 
// Job openings are managed in: /data/jobOpenings.ts
// That file is the single source of truth for both this page AND the 
// application form dropdown.
//
// To update jobs:
// 1. Export job description as PDF to /public/docs/jobs/[filename].pdf
// 2. Edit /data/jobOpenings.ts - add/remove entries in currentOpenings array
// 3. That's it! Both this page and the form dropdown will update automatically.
// =============================================================================

const jobsByCategory = getJobsByCategory();

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#6E903C]">
      {/* Hero */}
      <section className="relative min-h-[30vh] flex items-center justify-center">
        <div className="container relative z-10 py-10" style={{ paddingTop: '70px' }}>
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight text-white" style={{ fontFamily: 'Jost, sans-serif' }}>
              Careers at<br />
              <span className="text-[#fdbd51] font-medium">California </span>
              <span className="text-[#BF1B2C] font-extrabold">Berry </span>
              <span className="text-white font-medium">Cultivars</span>
            </h1>
            <p className="text-base md:text-lg text-white/90 max-w-xl mx-auto">
              Join our team in strawberry breeding and agricultural innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-white py-8 md:py-12">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#355e82] text-center" style={{ fontFamily: 'Jost, sans-serif' }}>Our Locations</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
              {locations.map((loc, i) => (
                <div key={i} className="bg-gray-50 p-3 rounded-lg text-center">
                  <p className="text-[10px] text-[#6E903C] font-bold uppercase tracking-wider mb-1">{loc.type}</p>
                  <p className="font-bold text-[#355e82] text-sm">{loc.name}</p>
                  <p className="text-gray-500 text-[10px] mt-1">{loc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="bg-gray-100 py-8 md:py-12">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#355e82]" style={{ fontFamily: 'Jost, sans-serif' }}>Current Openings</h2>
              <span className="text-xs font-bold text-white bg-[#6E903C] px-2 py-1 rounded-full">
                {currentOpenings.length} Position{currentOpenings.length !== 1 ? 's' : ''}
              </span>
            </div>
            
            {currentOpenings.length === 0 ? (
              <div className="bg-white p-6 rounded-xl border-l-4 border-[#fdbd51]">
                <p className="text-gray-600 text-sm">
                  No positions posted right now. Submit an application below and we'll 
                  reach out when something opens up.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {Object.entries(jobsByCategory).map(([catKey, jobs]) => (
                  <div key={catKey} className="bg-white rounded-lg overflow-hidden">
                    <div className="p-3 border-l-4" style={{ borderColor: categories[catKey as keyof typeof categories]?.color }}>
                      <h3 className="text-sm font-bold" style={{ color: categories[catKey as keyof typeof categories]?.color }}>
                        {categories[catKey as keyof typeof categories]?.title}
                      </h3>
                    </div>
                    <div className="divide-y divide-gray-100">
                      {jobs.map((job, i) => (
                        <a
                          key={i}
                          href={job.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 hover:bg-gray-50 transition-colors group"
                        >
                          <div>
                            <span className="font-semibold text-[#355e82] group-hover:text-[#c93834] transition-colors text-sm block">
                              {job.title}
                            </span>
                            <span className="text-[10px] text-gray-400">{job.location}</span>
                          </div>
                          <span className="text-xs text-gray-400 group-hover:text-[#c93834]">
                            PDF →
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="bg-[#355e82] py-8 md:py-12">
        <div className="container px-4">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-4">
              <h2 className="text-xl md:text-2xl font-bold mb-2 text-white" style={{ fontFamily: 'Jost, sans-serif' }}>Apply Now</h2>
              <p className="text-white/80 text-sm">
                Send us your resume—we'll reach out about matching positions.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 md:p-5 rounded-xl border-2 border-white/20">
              <ApplicationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom link */}
      <section className="bg-[#6E903C] py-8">
        <div className="container px-4 text-center">
          <Link 
            href="/breeding"
            className="text-[#fdbd51] uppercase tracking-wider text-sm font-bold hover:text-white transition-colors"
          >
            Learn About Our Work →
          </Link>
        </div>
      </section>
    </div>
  );
}
