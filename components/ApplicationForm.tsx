'use client';

import { useState, useRef } from 'react';

export default function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        e.target.value = '';
        setFileName(null);
        return;
      }
      // Check file type
      if (file.type !== 'application/pdf') {
        alert('Please upload a PDF file');
        e.target.value = '';
        setFileName(null);
        return;
      }
      setFileName(file.name);
    } else {
      setFileName(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('position', formData.position);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('timestamp', new Date().toISOString());
      
      // Add file if selected
      const file = fileInputRef.current?.files?.[0];
      if (file) {
        formDataToSend.append('resume', file);
      }

      const response = await fetch('/api/apply', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }

      // Reset form and show success
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        message: ''
      });
      setFileName(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      
      setIsSuccess(true);
      
      // Reset success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
      
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white/20 p-8 rounded-2xl border-2 border-white/40 text-center">
        <div className="text-4xl mb-4">✓</div>
        <div className="text-xl font-bold text-white mb-2">
          Application Submitted!
        </div>
        <div className="text-white/80">
          Thank you for your interest. We'll review your application and get back to you soon.
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-white mb-2">
            Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-lg focus:outline-none focus:border-[#fdbd51] transition-colors text-white placeholder-white/50"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-white mb-2">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-lg focus:outline-none focus:border-[#fdbd51] transition-colors text-white placeholder-white/50"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-white mb-2">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-lg focus:outline-none focus:border-[#fdbd51] transition-colors text-white placeholder-white/50"
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-white mb-2">
            Position of Interest *
          </label>
          <select
            name="position"
            value={formData.position}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-lg focus:outline-none focus:border-[#fdbd51] transition-colors text-white"
          >
            <option value="" className="bg-[#6E903C]">Select a position...</option>
            <option value="Research Associate" className="bg-[#6E903C]">Research Associate</option>
            <option value="Field Technician" className="bg-[#6E903C]">Field Technician</option>
            <option value="Plant Breeder" className="bg-[#6E903C]">Plant Breeder</option>
            <option value="Lab Technician" className="bg-[#6E903C]">Lab Technician</option>
            <option value="General Interest" className="bg-[#6E903C]">General Interest</option>
            <option value="Other" className="bg-[#6E903C]">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-white mb-2">
          Cover Letter / Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows={4}
          className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-lg focus:outline-none focus:border-[#fdbd51] transition-colors text-white placeholder-white/50 resize-none"
          placeholder="Tell us about yourself and why you're interested in working at CBC..."
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-white mb-2">
          Resume (PDF, max 5MB)
        </label>
        <div className="relative">
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,application/pdf"
            onChange={handleFileChange}
            className="hidden"
            id="resume-upload"
          />
          <label
            htmlFor="resume-upload"
            className="flex items-center justify-center gap-3 w-full px-4 py-4 bg-white/10 border-2 border-dashed border-white/30 rounded-lg cursor-pointer hover:bg-white/20 transition-colors"
          >
            <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <span className="text-white/70">
              {fileName ? fileName : 'Click to upload your resume'}
            </span>
          </label>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#fdbd51] text-[#6E903C] px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-[#fdbd51]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <span className="w-4 h-4 border-2 border-[#6E903C] border-t-transparent rounded-full animate-spin"></span>
            Submitting...
          </span>
        ) : (
          'Submit Application'
        )}
      </button>
    </form>
  );
}

