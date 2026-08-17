import React from 'react';
import { Link } from 'react-router-dom';
import type { PublicMember } from '@/types/member';
import { ImageWithFallback } from '../ui/ImageWithFallback';

interface MemberCardProps {
  member: PublicMember;
}

export const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  return (
    <Link to={`/member/${member.slug}`} className="group block h-full">
      <div className="bg-surface rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 ease-out transform group-hover:-translate-y-1 overflow-hidden border border-border h-full flex flex-col">
        {/* Photo Container */}
        <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
          <ImageWithFallback
            src={member.profile_photo_url || ''}
            alt={member.full_name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Bottom Gradient for text contrast if needed, or just visual styling */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {member.category?.name && (
            <div className="absolute bottom-3 right-3 opacity-85 hover:opacity-100 transition-opacity">
              <span className="inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary bg-accent rounded-full shadow-sm">
                {member.category.name}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 flex-grow flex flex-col">
          <h3 className="font-heading font-bold text-lg text-text leading-tight mb-1 group-hover:text-primary transition-colors">
            {member.full_name}
          </h3>
          
          {member.designation && (
            <p className="text-sm text-text-muted font-medium mb-3">
              {member.designation}
            </p>
          )}

          <div className="mt-auto pt-4 flex items-center justify-between text-xs text-text-muted">
            {member.phone && (
              <span className="flex items-center">
                <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                Contact
              </span>
            )}
            <span className="text-primary font-medium group-hover:underline">View Profile &rarr;</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
