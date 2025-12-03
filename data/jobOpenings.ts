// =============================================================================
// CURRENT JOB OPENINGS - Single Source of Truth
// 
// This file is used by:
// - app/careers/page.tsx (displays job listings)
// - components/ApplicationForm.tsx (position dropdown)
//
// To update jobs:
// 1. Export job description as PDF to /public/docs/jobs/[filename].pdf
// 2. Add/edit entry below with title, location, category, and pdf path
// 3. Remove jobs by deleting or commenting out the line
//
// Categories: 'research' | 'operations' | 'business' | 'international'
// =============================================================================

export type JobCategory = 'research' | 'operations' | 'business' | 'international';

export interface JobOpening {
  title: string;
  location: string;
  category: JobCategory;
  pdf: string;
}

export const currentOpenings: JobOpening[] = [
  { title: 'Farm Manager', location: 'French Camp, CA', category: 'operations', pdf: '/docs/jobs/FarmManager.pdf' },
  { title: 'Field Technician', location: 'Oxnard, CA', category: 'operations', pdf: '/docs/jobs/FieldTech.pdf' },
  { title: 'Meristem Lab Technician', location: 'French Camp, CA', category: 'research', pdf: '/docs/jobs/MeristemTech.pdf' },
  { title: 'Pathology Lab Assistant', location: 'French Camp, CA', category: 'research', pdf: '/docs/jobs/PathTech.pdf' },
  { title: 'Trial Specialist', location: 'Multiple Locations', category: 'research', pdf: '/docs/jobs/TrialSpecialist.pdf' },
  // Add more jobs here...
];

// Category definitions (styling only)
export const categories: Record<JobCategory, { title: string; color: string }> = {
  research: { title: 'Research & Development', color: '#6E903C' },
  operations: { title: 'Farm & Field Operations', color: '#355e82' },
  business: { title: 'Business & Administration', color: '#c93834' },
  international: { title: 'CBC International', color: '#fdbd51' },
};

// Locations
export const locations = [
  { name: 'French Camp, CA', description: 'Headquarters, Cleanstock, Breeding Nursery, Pathology', type: 'Headquarters' },
  { name: 'Oxnard, CA', description: 'Short-Day Test Plots', type: 'Field Trials' },
  { name: 'Watsonville, CA', description: 'Day-Neutral & Field Pathology Testing', type: 'Field Trials' },
  { name: 'Huelva, Spain', description: 'CBC International', type: 'International' },
];

// Helper: Group jobs by category
export function getJobsByCategory() {
  return currentOpenings.reduce((acc, job) => {
    if (!acc[job.category]) acc[job.category] = [];
    acc[job.category].push(job);
    return acc;
  }, {} as Record<JobCategory, JobOpening[]>);
}


