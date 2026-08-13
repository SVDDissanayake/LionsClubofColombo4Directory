import React from 'react';
import type { PublicMember } from '@/types/member';
import { ImageWithFallback } from '../ui/ImageWithFallback';

interface ProfileHeaderProps {
  member: PublicMember;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ member }) => {
  return (
    <div className="relative bg-gradient-to-b from-primary/10 to-surface pt-12 pb-8 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-end md:space-x-8">
          <div className="relative flex-shrink-0 z-10 mb-6 md:mb-0">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-white">
              <ImageWithFallback
                src={member.profile_photo_url || ''}
                alt={member.full_name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {member.category?.name && (
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap shadow-md">
                <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary bg-accent rounded-full border border-white">
                  {member.category.name}
                </span>
              </div>
            )}
          </div>
          
          <div className="text-center md:text-left flex-1 md:pb-4">
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-text leading-tight mb-2">
              {member.full_name}
            </h1>
            
            {member.designation && (
              <p className="text-lg md:text-xl text-text-muted font-medium mb-2">
                {member.designation}
              </p>
            )}
            
            {member.profession && (
              <p className="text-sm md:text-base text-gray-500">
                {member.profession}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
