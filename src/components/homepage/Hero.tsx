import React from 'react';
import { heroContent, siteImages } from '@/data/homepageData';
import { ScrollReveal } from './ScrollReveal';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={siteImages.hero}
          alt="Lions Club community service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-primary/70 to-primary-dark/90" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal delay={100}>
          <span className="inline-block py-1.5 px-5 rounded-full bg-white/10 text-accent font-semibold text-xs tracking-[0.2em] uppercase mb-8 border border-accent/20 backdrop-blur-sm">
            {heroContent.eyebrow}
          </span>
        </ScrollReveal>

        <ScrollReveal delay={250}>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            {heroContent.title}
            <br />
            <span className="text-accent">{heroContent.titleHighlight}</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed mb-10">
            {heroContent.description}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={550}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={heroContent.primaryCta.href}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-primary bg-accent rounded-full hover:bg-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/25 min-w-[200px]"
            >
              {heroContent.primaryCta.text}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href={heroContent.secondaryCta.href}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white border-2 border-white/30 rounded-full hover:bg-white/10 hover:border-white/60 transition-all duration-300 transform hover:-translate-y-1 min-w-[200px]"
            >
              {heroContent.secondaryCta.text}
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom Curved Edge */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-auto text-background fill-current"
          preserveAspectRatio="none"
        >
          <path d="M0,40 C360,100 1080,0 1440,60 L1440,100 L0,100 Z" />
        </svg>
      </div>
    </section>
  );
};
