import React from 'react';
import { getInvolvedCards } from '@/data/homepageData';
import { ScrollReveal } from './ScrollReveal';

export const GetInvolved: React.FC = () => {
  return (
    <section id="get-involved" className="py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }} />
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-bold text-xs tracking-[0.2em] uppercase">
              MAKE A DIFFERENCE
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-5 leading-tight">
              Get Involved
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              There are many ways to join our mission and contribute to creating meaningful change.
            </p>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {getInvolvedCards.map((card, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={card.icon} />
                  </svg>
                </div>

                <h3 className="font-heading text-xl font-bold text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-8 flex-grow">
                  {card.description}
                </p>
                <a
                  href={card.href}
                  className="inline-flex items-center justify-center px-6 py-3 bg-accent text-primary font-bold rounded-full hover:bg-white transition-all duration-300 text-sm mx-auto"
                >
                  {card.buttonText}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
