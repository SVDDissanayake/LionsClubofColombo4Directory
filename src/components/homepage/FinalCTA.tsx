import React from 'react';
import { finalCtaContent, siteImages } from '@/data/homepageData';
import { ScrollReveal } from './ScrollReveal';

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={siteImages.finalCta}
          alt="Community united at sunset"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/85 via-primary/80 to-primary-dark/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {finalCtaContent.title}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            {finalCtaContent.description}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={finalCtaContent.primaryCta.href}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-primary bg-accent rounded-full hover:bg-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/25 min-w-[200px]"
            >
              {finalCtaContent.primaryCta.text}
            </a>
            <a
              href={finalCtaContent.secondaryCta.href}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white border-2 border-white/30 rounded-full hover:bg-white/10 hover:border-white/60 transition-all duration-300 transform hover:-translate-y-1 min-w-[200px]"
            >
              {finalCtaContent.secondaryCta.text}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
