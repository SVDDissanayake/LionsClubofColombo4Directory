import React from 'react';
import { lionsGlobalContent, siteImages } from '@/data/homepageData';
import { ScrollReveal } from './ScrollReveal';

export const LionsConnection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <ScrollReveal direction="left">
            <div>
              <span className="text-accent font-bold text-xs tracking-[0.2em] uppercase">
                {lionsGlobalContent.eyebrow}
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text mt-3 mb-6 leading-tight">
                {lionsGlobalContent.title}
              </h2>
              <p className="text-text-muted text-base md:text-lg leading-relaxed mb-10">
                {lionsGlobalContent.description}
              </p>

              {/* Global Stats */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                {lionsGlobalContent.stats.map((stat, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 border border-border/50 shadow-sm">
                    <div className="text-2xl font-heading font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-text-muted text-sm font-medium mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={lionsGlobalContent.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-7 py-3.5 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg text-sm"
              >
                {lionsGlobalContent.ctaText}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </ScrollReveal>

          {/* Logos & Visual */}
          <ScrollReveal direction="right" delay={200}>
            <div className="relative flex items-center justify-center">
              <div className="relative bg-white rounded-3xl p-12 shadow-lg border border-border/50">
                <div className="flex items-center justify-center gap-8">
                  <img
                    src={siteImages.clubLogo}
                    alt="Lions Club of Colombo 4 Logo"
                    className="w-28 h-28 md:w-36 md:h-36 object-contain"
                    loading="lazy"
                  />
                  <div className="w-px h-24 bg-border" />
                  <img
                    src={siteImages.districtLogo}
                    alt="Lions District 306 C2 Logo"
                    className="w-28 h-28 md:w-36 md:h-36 object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="text-center mt-8">
                  <p className="font-heading text-2xl font-bold text-primary">
                    "We Serve"
                  </p>
                  <p className="text-text-muted text-sm mt-1">
                    Lions Clubs International • Since 1917
                  </p>
                </div>
              </div>
              {/* Decorators */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/5 rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-primary/5 rounded-2xl -z-10" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
