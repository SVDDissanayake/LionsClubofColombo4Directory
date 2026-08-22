import React from 'react';
import { Link } from 'react-router-dom';
import { memberSpotlight } from '@/data/homepageData';
import { ScrollReveal } from './ScrollReveal';

export const MemberSpotlight: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-accent font-bold text-xs tracking-[0.2em] uppercase">
              MEMBER SPOTLIGHT
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text mt-3 leading-tight">
              Voices of Service
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="relative bg-background rounded-3xl p-8 md:p-12 lg:p-16">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Quote Mark */}
              <div className="absolute top-6 left-8 md:left-12 text-accent/10 font-heading text-[120px] md:text-[160px] leading-none select-none">
                "
              </div>

              {/* Member Photo */}
              <div className="flex-shrink-0 relative z-10">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                  <img
                    src={memberSpotlight.image}
                    alt={memberSpotlight.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Quote Content */}
              <div className="relative z-10 text-center md:text-left">
                <blockquote className="font-heading text-xl md:text-2xl lg:text-3xl text-text font-medium italic leading-relaxed mb-6">
                  "{memberSpotlight.quote}"
                </blockquote>
                <div>
                  <div className="font-bold text-text text-lg">
                    {memberSpotlight.name}
                  </div>
                  <div className="text-accent font-medium text-sm">
                    {memberSpotlight.position}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="text-center mt-10">
            <Link
              to={memberSpotlight.ctaHref}
              className="inline-flex items-center px-7 py-3.5 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all duration-300 text-sm"
            >
              {memberSpotlight.ctaText}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
