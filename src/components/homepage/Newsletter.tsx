import React, { useState } from 'react';
import { newsletterContent } from '@/data/homepageData';
import { ScrollReveal } from './ScrollReveal';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    // TODO: Integrate with backend email service when available
    // For now, show success UI
    setSubmitted(true);
    setEmail('');

    // Reset after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden shadow-xl">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">
                {newsletterContent.title}
              </h2>
              <p className="text-gray-300 text-sm md:text-base mb-8 max-w-lg mx-auto">
                {newsletterContent.description}
              </p>

              {submitted ? (
                <div className="flex items-center justify-center gap-2 text-accent font-medium animate-fade-in">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {newsletterContent.successMessage}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={newsletterContent.placeholder}
                    required
                    className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 text-sm backdrop-blur-sm"
                    aria-label="Email address"
                  />
                  <button
                    type="submit"
                    className="px-7 py-3.5 bg-accent text-primary font-bold rounded-full hover:bg-white transition-all duration-300 text-sm whitespace-nowrap hover:shadow-lg"
                  >
                    {newsletterContent.buttonText}
                  </button>
                </form>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
