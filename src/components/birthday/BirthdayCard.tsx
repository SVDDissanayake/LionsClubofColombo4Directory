import React from 'react';
import { Link } from 'react-router-dom';
import type { PublicMember } from '@/types/member';
import { ImageWithFallback } from '../ui/ImageWithFallback';

interface BirthdayCardProps {
  member: PublicMember;
}

export const BirthdayCard: React.FC<BirthdayCardProps> = ({ member }) => {
  return (
    <Link to={`/member/${member.slug}`} className="block group">
      <div className="flex flex-col items-center p-4 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-md border border-transparent hover:border-border min-w-[200px]">
        <div className="relative mb-3">
          <div className="absolute inset-0 bg-gradient-to-tr from-birthday to-accent rounded-full scale-105 animate-pulse opacity-70"></div>
          <ImageWithFallback
            src={member.profile_photo_url || ''}
            alt={member.full_name}
            className="w-20 h-20 rounded-full object-cover relative z-10 border-2 border-white shadow-sm"
          />
        </div>
        <h3 className="font-bold text-text text-center group-hover:text-birthday transition-colors">
          {member.full_name}
        </h3>
        {member.designation && (
          <p className="text-xs text-text-muted text-center mt-1 max-w-[180px] truncate">
            {member.designation}
          </p>
        )}
        <p className="text-xs font-medium text-birthday mt-2 bg-birthday/10 px-3 py-1 rounded-full">
          Wishing you a wonderful birthday!
        </p>
      </div>
    </Link>
  );
};
