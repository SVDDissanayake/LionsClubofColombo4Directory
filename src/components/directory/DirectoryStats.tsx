import React, { useState, useEffect, useRef } from 'react';

interface StatItem {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
}

interface DirectoryStatsProps {
  totalMembers: number;
  totalCategories: number;
  birthdaysThisMonth: number;
}

const AnimatedNumber: React.FC<{ value: number; suffix?: string; inView: boolean }> = ({ value, suffix = '', inView }) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || value === 0) { setDisplay(0); return; }
    const duration = 1000;
    const steps = 20;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [value, inView]);

  return <span className="tabular-nums">{display}{suffix}</span>;
};

export const DirectoryStats: React.FC<DirectoryStatsProps> = ({
  totalMembers,
  totalCategories,
  birthdaysThisMonth,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats: StatItem[] = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      value: totalMembers,
      label: 'Total Members',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      ),
      value: totalCategories,
      label: 'Categories',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A1.5 1.5 0 003 15.546V12a9 9 0 0118 0v3.546zM12 3v2m0 0a3 3 0 013 3H9a3 3 0 013-3z" />
        </svg>
      ),
      value: birthdaysThisMonth,
      label: 'Birthdays This Month',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      value: new Date().getFullYear() - 1952,
      label: 'Years of Service',
      suffix: '+',
    },
  ];

  return (
    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className="animate-stagger bg-surface rounded-2xl p-5 border border-border shadow-sm hover:shadow-md transition-shadow duration-300 text-center group"
          style={{ '--stagger-delay': `${i * 100}ms` } as React.CSSProperties}
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-3 group-hover:bg-accent/20 group-hover:text-accent-dark transition-colors duration-300">
            {stat.icon}
          </div>
          <div className="text-2xl sm:text-3xl font-heading font-bold text-text mb-1">
            <AnimatedNumber value={stat.value} suffix={stat.suffix} inView={inView} />
          </div>
          <div className="text-xs sm:text-sm text-text-muted font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};
