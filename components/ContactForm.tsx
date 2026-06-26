'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      (e.target as HTMLFormElement).reset();
      
      // Reset status after a few seconds
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      {status === 'success' && (
        <div className="bg-green-500/10 border border-green-500/50 text-green-400 p-3 rounded text-sm text-center mb-4">
          Message sent successfully!
        </div>
      )}
      
      <div>
        <label htmlFor="name" className="sr-only">Business Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          placeholder="Business Name" 
          required
          className="w-full bg-navy-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-medium focus:outline-none focus:border-safety-orange focus:ring-1 focus:ring-safety-orange transition-colors"
        />
      </div>
      
      <div>
        <label htmlFor="type" className="sr-only">Business Type</label>
        <select 
          id="type" 
          name="type" 
          required
          defaultValue=""
          className="w-full bg-navy-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-medium focus:outline-none focus:border-safety-orange focus:ring-1 focus:ring-safety-orange transition-colors appearance-none"
        >
          <option value="" disabled className="text-gray-medium">Select Business Type</option>
          <option value="Electrician">Electrician</option>
          <option value="Plumber">Plumber</option>
          <option value="HVAC">HVAC</option>
          <option value="Landscaper">Landscaper</option>
          <option value="Other">Other</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="phone" className="sr-only">Phone Number</label>
        <input 
          type="tel" 
          id="phone" 
          name="phone" 
          placeholder="Phone Number" 
          required
          className="w-full bg-navy-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-medium focus:outline-none focus:border-safety-orange focus:ring-1 focus:ring-safety-orange transition-colors"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="sr-only">Message</label>
        <textarea 
          id="message" 
          name="message" 
          rows={3} 
          placeholder="How can I help?" 
          required
          className="w-full bg-navy-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-medium focus:outline-none focus:border-safety-orange focus:ring-1 focus:ring-safety-orange transition-colors resize-none"
        ></textarea>
      </div>
      
      <button 
        type="submit" 
        disabled={status === 'submitting'}
        className="w-full bg-safety-orange hover:bg-orange-light text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-70"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
