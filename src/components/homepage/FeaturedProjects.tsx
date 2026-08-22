import React from 'react';
import { featuredProjects } from '@/data/homepageData';
import { ScrollReveal } from './ScrollReveal';

export const FeaturedProjects: React.FC = () => {
  const featured = featuredProjects.find((p) => p.featured);
  const others = featuredProjects.filter((p) => !p.featured).slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-bold text-xs tracking-[0.2em] uppercase">
              OUR WORK
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text mt-3 mb-5 leading-tight">
              Featured Projects
            </h2>
            <p className="text-text-muted text-base md:text-lg leading-relaxed">
              Explore the projects that are making a real difference in our community.
            </p>
          </div>
        </ScrollReveal>

        {/* Projects Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Project — Large Card */}
          {featured && (
            <ScrollReveal>
              <div className="group relative rounded-2xl overflow-hidden shadow-lg h-full min-h-[400px] lg:min-h-[500px]">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="inline-block px-3 py-1 bg-accent text-primary text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                    {featured.category}
                  </span>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">
                    {featured.title}
                  </h3>
                  <p className="text-gray-200 text-sm md:text-base mb-4 line-clamp-2">
                    {featured.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-accent font-bold text-sm">{featured.impact}</span>
                    <span className="text-gray-400 text-sm">{featured.date}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Smaller Project Cards */}
          <div className="grid grid-cols-1 gap-8">
            {others.map((project, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="group flex flex-col sm:flex-row bg-surface rounded-2xl overflow-hidden shadow-sm border border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="sm:w-2/5 h-48 sm:h-auto relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="sm:w-3/5 p-5 md:p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2.5 py-0.5 bg-primary/5 text-primary text-xs font-bold rounded-full uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-text-muted text-xs">{project.date}</span>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-text mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed line-clamp-2 mb-3">
                      {project.description}
                    </p>
                    <span className="text-accent font-bold text-xs">{project.impact}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* View All */}
        <ScrollReveal delay={400}>
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center px-7 py-3.5 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all duration-300 text-sm"
            >
              View All Projects
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
