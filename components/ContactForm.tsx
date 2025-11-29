'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    region: '',
    message: 'I am interested in learning more about California Berry Cultivars. Please provide information about licensing, availability, and growing recommendations for my operation.'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'CBC Homepage'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Reset form and show success
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        region: '',
        message: 'I am interested in learning more about California Berry Cultivars. Please provide information about licensing, availability, and growing recommendations for my operation.'
      });
      
      setIsSuccess(true);
      
      // Reset success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white/20 p-8 rounded-2xl border-2 border-white/40 text-center">
        <div className="text-4xl mb-4">✓</div>
        <div className="text-xl font-bold text-white mb-2">
          Message Sent Successfully!
        </div>
        <div className="text-white/80">
          We'll get back to you within 24-48 hours.
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 md:space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
        <div>
          <label className="hidden md:block text-sm font-semibold text-white mb-2">
            Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-lg focus:outline-none focus:border-[#fdbd51] transition-colors text-white placeholder-white/50"
            placeholder="Your name *"
          />
        </div>
        <div>
          <label className="hidden md:block text-sm font-semibold text-white mb-2">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-lg focus:outline-none focus:border-[#fdbd51] transition-colors text-white placeholder-white/50"
            placeholder="your@email.com *"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
        <div>
          <label className="hidden md:block text-sm font-semibold text-white mb-2">
            Company
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-lg focus:outline-none focus:border-[#fdbd51] transition-colors text-white placeholder-white/50"
            placeholder="Company name"
          />
        </div>
        <div>
          <label className="hidden md:block text-sm font-semibold text-white mb-2">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-lg focus:outline-none focus:border-[#fdbd51] transition-colors text-white placeholder-white/50"
            placeholder="Phone number"
          />
        </div>
      </div>

      <div>
        <label className="hidden md:block text-sm font-semibold text-white mb-2">
          Growing Region
        </label>
        <input
          type="text"
          name="region"
          value={formData.region}
          onChange={handleInputChange}
          placeholder="Growing region (e.g., California)"
          className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-lg focus:outline-none focus:border-[#fdbd51] transition-colors text-white placeholder-white/50"
        />
      </div>

      <div>
        <label className="hidden md:block text-sm font-semibold text-white mb-2">
          Message *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={4}
          className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-lg focus:outline-none focus:border-[#fdbd51] transition-colors text-white placeholder-white/50 resize-none"
          placeholder="Your message *"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#fdbd51] text-[#355e82] px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-[#fdbd51]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <span className="w-4 h-4 border-2 border-[#355e82] border-t-transparent rounded-full animate-spin"></span>
            Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
}
