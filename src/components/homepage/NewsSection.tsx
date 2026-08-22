import React from 'react';
import { newsArticles } from '@/data/homepageData';
import { ScrollReveal } from './ScrollReveal';

const formatNewsDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
};

export const NewsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-bold text-xs tracking-[0.2em] uppercase">
              LATEST
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text mt-3 mb-5 leading-tight">
              News & Stories
            </h2>
            <p className="text-text-muted text-base md:text-lg leading-relaxed">
              Stay updated with our latest milestones, partnerships and community stories.
            </p>
          </div>
        </ScrollReveal>

        {/* News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsArticles.map((article, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <article className="group bg-surface rounded-2xl overflow-hidden shadow-sm border border-border/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-wider">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-text-muted text-xs font-medium mb-2">
                    {formatNewsDate(article.date)}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-text mb-3 group-hover:text-primary transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                    {article.excerpt}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-primary font-bold text-sm hover:text-accent transition-colors mt-auto"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* View All */}
        <ScrollReveal delay={500}>
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center px-7 py-3.5 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all duration-300 text-sm"
            >
              View All News
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
