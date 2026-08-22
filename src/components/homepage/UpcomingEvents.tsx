import React from 'react';
import { upcomingEvents } from '@/data/homepageData';
import { ScrollReveal } from './ScrollReveal';

const formatEventDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return {
    day: date.getDate(),
    month: date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
    year: date.getFullYear(),
    full: date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }),
  };
};

export const UpcomingEvents: React.FC = () => {
  return (
    <section id="events" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-bold text-xs tracking-[0.2em] uppercase">
              UPCOMING
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text mt-3 mb-5 leading-tight">
              Events & Gatherings
            </h2>
            <p className="text-text-muted text-base md:text-lg leading-relaxed">
              Join us at our upcoming events and be part of the change.
            </p>
          </div>
        </ScrollReveal>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingEvents.map((event, i) => {
            const date = formatEventDate(event.date);
            return (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="group bg-surface rounded-2xl overflow-hidden shadow-sm border border-border/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  {/* Event Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Date Badge */}
                    <div className="absolute top-4 left-4 bg-white rounded-xl shadow-lg px-3 py-2 text-center min-w-[60px]">
                      <div className="text-2xl font-heading font-bold text-primary leading-none">
                        {date.day}
                      </div>
                      <div className="text-[10px] font-bold text-text-muted tracking-wider mt-0.5">
                        {date.month}
                      </div>
                    </div>
                  </div>

                  {/* Event Content */}
                  <div className="p-6">
                    <h3 className="font-heading text-lg font-bold text-text mb-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <div className="flex items-center text-text-muted text-sm mb-3">
                      <svg className="w-4 h-4 mr-1.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="truncate">{event.location}</span>
                    </div>
                    <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-2">
                      {event.description}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center text-primary font-bold text-sm hover:text-accent transition-colors"
                    >
                      View Details
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* View All */}
        <ScrollReveal delay={500}>
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center px-7 py-3.5 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all duration-300 text-sm"
            >
              View All Events
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
