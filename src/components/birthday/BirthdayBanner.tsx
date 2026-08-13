import React, { useEffect, useState } from 'react';
import type { PublicMember } from '@/types/member';
import { BirthdayCard } from './BirthdayCard';
import { isBirthdayToday } from '@/utils/birthday';

interface BirthdayBannerProps {
  members: PublicMember[];
}

export const BirthdayBanner: React.FC<BirthdayBannerProps> = ({ members }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  const todaysBirthdays = members.filter(m => isBirthdayToday(m.date_of_birth));

  useEffect(() => {
    if (todaysBirthdays.length > 0) {
      // Small delay for entrance animation
      const timer = setTimeout(() => setIsVisible(true), 300);
      return () => clearTimeout(timer);
    }
  }, [todaysBirthdays.length]);

  if (todaysBirthdays.length === 0) return null;

  return (
    <div className={`transition-all duration-700 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
      <div className="bg-gradient-to-r from-birthday via-pink-500 to-accent rounded-2xl shadow-lg p-1 mb-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white opacity-20 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-20 h-20 bg-white opacity-20 rounded-full blur-lg"></div>
        
        <div className="bg-surface/95 backdrop-blur-sm rounded-xl p-6 sm:p-8 relative z-10 border border-white/20">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-birthday to-accent flex items-center justify-center gap-3">
              <span className="text-4xl animate-bounce">🎂</span> 
              Happy Birthday! 
              <span className="text-4xl animate-bounce" style={{ animationDelay: '0.2s' }}>🎉</span>
            </h2>
            <p className="text-text-muted mt-2">Join us in wishing our members a fantastic day!</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {todaysBirthdays.map(member => (
              <BirthdayCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
