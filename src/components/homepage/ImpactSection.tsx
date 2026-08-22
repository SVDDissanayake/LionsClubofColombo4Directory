import React from 'react';
import { impactSectionContent, siteImages } from '@/data/homepageData';
import { ScrollReveal } from './ScrollReveal';

export const ImpactSection: React.FC = () => {
  return (
    <section id="impact" className="py-20 md:py-28 bg-primary-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '48px 48px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={siteImages.impact}
                alt="Lions Club impact — community eye care"
                className="w-full h-[350px] md:h-[450px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 to-transparent" />
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right" delay={200}>
            <div>
              <span className="text-accent font-bold text-xs tracking-[0.2em] uppercase">
                {impactSectionContent.eyebrow}
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-2 leading-tight">
                {impactSectionContent.title}
              </h2>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-6 leading-tight">
                {impactSectionContent.titleHighlight}
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10">
                {impactSectionContent.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-6">
                {impactSectionContent.metrics.map((metric, i) => (
                  <div key={i} className="relative pl-5 border-l-2 border-accent/30">
                    <div className="text-2xl md:text-3xl font-heading font-bold text-accent">
                      {metric.value}
                    </div>
                    <div className="text-gray-400 text-sm font-medium mt-1">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
