import React from 'react';
import { serviceAreas } from '@/data/homepageData';
import { ScrollReveal } from './ScrollReveal';

export const ServiceAreas: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-bold text-xs tracking-[0.2em] uppercase">
              WHAT WE DO
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text mt-3 mb-5 leading-tight">
              Areas of Service
            </h2>
            <p className="text-text-muted text-base md:text-lg leading-relaxed">
              Our commitment to service spans multiple areas, each addressing critical needs in our community.
            </p>
          </div>
        </ScrollReveal>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {serviceAreas.map((area, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="group relative bg-surface rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Gradient accent on hover */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${area.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={area.icon} />
                  </svg>
                </div>

                <h3 className="font-heading text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors duration-300">
                  {area.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
