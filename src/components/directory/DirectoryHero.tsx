import React, { useEffect, useRef, useState } from 'react';
import { SearchBar } from './SearchBar';

interface DirectoryHeroProps {
  memberCount: number;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  matchCount?: number;
}

export const DirectoryHero: React.FC<DirectoryHeroProps> = ({
  memberCount,
  searchQuery,
  onSearchChange,
  matchCount,
}) => {
  const [animatedCount, setAnimatedCount] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  // Count-up animation for member count
  useEffect(() => {
    if (memberCount === 0) return;
    const duration = 1200;
    const steps = 30;
    const increment = memberCount / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= memberCount) {
        setAnimatedCount(memberCount);
        clearInterval(timer);
      } else {
        setAnimatedCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [memberCount]);

  return (
    <div ref={heroRef} className="relative overflow-hidden rounded-3xl mb-10">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary-dark animate-gradient-shift" />

      {/* Floating Decorative Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gold circle */}
        <div
          className="absolute -top-8 -right-8 w-48 h-48 rounded-full opacity-15 animate-float-slow"
          style={{ background: 'radial-gradient(circle, #FDB913 0%, transparent 70%)' }}
        />
        {/* Navy orb */}
        <div
          className="absolute bottom-4 -left-12 w-64 h-64 rounded-full opacity-10 animate-float"
          style={{ background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)', animationDelay: '2s' }}
        />
        {/* Small accent dot */}
        <div
          className="absolute top-12 left-1/4 w-6 h-6 rounded-full bg-accent opacity-30 animate-float"
          style={{ animationDelay: '1s' }}
        />
        {/* Spinning ring */}
        <div
          className="absolute -bottom-16 right-1/4 w-40 h-40 border-2 border-white/10 rounded-full animate-spin-slow"
        />
        {/* Diamond shape */}
        <div
          className="absolute top-1/3 right-12 w-8 h-8 bg-accent/20 rotate-45 animate-float"
          style={{ animationDelay: '3s' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-10 py-12 sm:py-16 text-center">
        {/* Subtitle */}
        <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3 animate-fade-slide-up">
          Lions Club of Colombo 4
        </p>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 animate-fade-slide-up" style={{ animationDelay: '0.1s' }}>
          Member Directory
        </h1>

        {/* Animated accent bar */}
        <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6 animate-fade-slide-up" style={{ animationDelay: '0.2s' }} />

        {/* Member count */}
        {memberCount > 0 && (
          <div className="flex items-center justify-center gap-2 mb-8 animate-fade-slide-up" style={{ animationDelay: '0.3s' }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary-dark font-semibold text-sm shadow-lg">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="tabular-nums">{animatedCount}</span> Active Members
            </span>
          </div>
        )}

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto animate-fade-slide-up" style={{ animationDelay: '0.4s' }}>
          <SearchBar
            value={searchQuery}
            onChange={onSearchChange}
            matchCount={matchCount}
            isHero
          />
        </div>
      </div>
    </div>
  );
};
