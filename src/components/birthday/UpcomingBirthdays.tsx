import React from 'react';
import { Link } from 'react-router-dom';
import type { PublicMember } from '@/types/member';
import { formatBirthday } from '@/utils/birthday';
import { ImageWithFallback } from '../ui/ImageWithFallback';

interface UpcomingBirthdaysProps {
  members: PublicMember[];
}

export const UpcomingBirthdays: React.FC<UpcomingBirthdaysProps> = ({ members }) => {
  // Take only the top 10 for display
  const displayMembers = members.slice(0, 10);

  return (
    <div className="bg-surface rounded-xl shadow-sm border border-border overflow-hidden">
      <div className="bg-primary/5 px-6 py-4 border-b border-border flex items-center space-x-2">
        <span className="text-xl">📅</span>
        <h3 className="font-heading font-bold text-lg text-primary">Upcoming Birthdays</h3>
      </div>
      
      {displayMembers.length === 0 ? (
        <div className="p-8 text-center text-text-muted">
          <p>No upcoming birthdays in the next 30 days.</p>
        </div>
      ) : (
        <ul className="divide-y divide-border">
          {displayMembers.map((member) => (
            <li key={member.id} className="hover:bg-gray-50 transition-colors">
              <Link to={`/member/${member.slug}`} className="flex items-center px-6 py-3 sm:py-4">
                <div className="flex-shrink-0 w-12 text-center mr-4">
                  <span className="block text-sm font-bold text-birthday">
                    {formatBirthday(member.date_of_birth)}
                  </span>
                </div>
                
                <ImageWithFallback
                  src={member.profile_photo_url || ''}
                  alt={member.full_name}
                  className="w-10 h-10 rounded-full object-cover mr-4 border border-gray-200"
                />
                
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-text truncate">
                    {member.full_name}
                  </p>
                  {member.designation && (
                    <p className="text-xs text-text-muted truncate">
                      {member.designation}
                    </p>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
      
      {members.length > 10 && (
        <div className="bg-gray-50 px-6 py-3 border-t border-border text-center">
          <Link to="/birthdays" className="text-sm font-medium text-primary hover:underline">
            View all birthdays
          </Link>
        </div>
      )}
    </div>
  );
};
