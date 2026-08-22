import React from 'react';
import { Link } from 'react-router-dom';
import { aboutContent, siteImages } from '@/data/homepageData';
import { ScrollReveal } from './ScrollReveal';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={siteImages.about}
                  alt="Lions Club volunteers in discussion"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                  loading="lazy"
                />
              </div>
              {/* Accent decorator */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary/10 rounded-2xl -z-10" />
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right" delay={200}>
            <div>
              <span className="text-accent font-bold text-xs tracking-[0.2em] uppercase">
                {aboutContent.eyebrow}
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text mt-3 mb-6 leading-tight">
                {aboutContent.title}
              </h2>
              <p className="text-text-muted text-base md:text-lg leading-relaxed mb-8">
                {aboutContent.description}
              </p>

              {/* Highlight Points */}
              <div className="space-y-5 mb-10">
                {aboutContent.highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center mt-0.5">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-text mb-0.5">{item.title}</h4>
                      <p className="text-text-muted text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to={aboutContent.ctaHref}
                className="inline-flex items-center px-7 py-3.5 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg text-sm"
              >
                {aboutContent.ctaText}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
