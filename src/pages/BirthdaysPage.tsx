import React, { useEffect } from 'react';
import { useMembers } from '@/hooks/useMembers';
import { useBirthdays } from '@/hooks/useBirthdays';
import { BirthdayBanner } from '@/components/birthday/BirthdayBanner';
import { ErrorMessage } from '@/components/ui/ErrorMessage';
import { SkeletonCard } from '@/components/ui/Skeleton';
import { APP_NAME } from '@/utils/constants';
import { Link } from 'react-router-dom';
import { formatBirthday } from '@/utils/birthday';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';

export const BirthdaysPage: React.FC = () => {
  const { members, loading, error, refetch } = useMembers();
  const { upcomingBirthdays } = useBirthdays(members);

  useEffect(() => {
    document.title = `Member Birthdays | ${APP_NAME}`;
  }, []);

  // Group all members by birth month (1-12)
  const membersByMonth = React.useMemo(() => {
    const grouped = new Map<number, typeof members>();
    for (let i = 1; i <= 12; i++) grouped.set(i, []);
    
    members.forEach(member => {
      if (member.date_of_birth) {
        const month = new Date(member.date_of_birth).getMonth() + 1;
        grouped.get(month)?.push(member);
      }
    });
    
    // Sort members within each month by day
    grouped.forEach(monthMembers => {
      monthMembers.sort((a, b) => {
        const dayA = new Date(a.date_of_birth!).getDate();
        const dayB = new Date(b.date_of_birth!).getDate();
        return dayA - dayB;
      });
    });
    
    return grouped;
  }, [members]);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div className="bg-background min-h-screen pb-20">
      <div className="bg-primary text-white py-12 px-4 shadow-inner">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">Member Birthdays</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">Celebrate with our members throughout the year.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {error && <ErrorMessage message={error instanceof Error ? error.message : String(error)} onRetry={refetch} />}
        
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : (
          <div className="space-y-12">
            <BirthdayBanner members={members} />
            
            {upcomingBirthdays.length > 0 && (
              <section>
                <h2 className="font-heading text-2xl font-bold text-text mb-6 flex items-center">
                  <span className="mr-2">🎉</span> Upcoming in next 30 days
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {upcomingBirthdays.map(member => (
                    <Link key={member.id} to={`/member/${member.slug}`} className="bg-surface rounded-xl p-5 shadow-sm hover:shadow-md transition-all border border-border flex items-center space-x-4">
                      <ImageWithFallback src={member.profile_photo_url || ''} alt={member.full_name} className="w-14 h-14 rounded-full object-cover border-2 border-gray-100" />
                      <div>
                        <p className="font-bold text-text">{member.full_name}</p>
                        <p className="text-sm font-medium text-birthday">{formatBirthday(member.date_of_birth)}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            <section className="pt-8 border-t border-border">
              <h2 className="font-heading text-2xl font-bold text-text mb-8">All Birthdays by Month</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {monthNames.map((monthName, index) => {
                  const monthIndex = index + 1;
                  const monthMembers = membersByMonth.get(monthIndex) || [];
                  
                  if (monthMembers.length === 0) return null;
                  
                  return (
                    <div key={monthName} className="bg-surface rounded-xl shadow-sm border border-border overflow-hidden">
                      <div className="bg-gray-50 px-5 py-3 border-b border-border">
                        <h3 className="font-bold text-primary">{monthName}</h3>
                      </div>
                      <ul className="divide-y divide-border">
                        {monthMembers.map(member => (
                          <li key={member.id}>
                            <Link to={`/member/${member.slug}`} className="flex items-center px-5 py-3 hover:bg-gray-50 transition-colors group">
                              <span className="w-12 text-sm font-bold text-text-muted group-hover:text-primary">
                                {new Date(member.date_of_birth!).getDate()}
                              </span>
                              <span className="font-medium text-sm text-text truncate">
                                {member.full_name}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};
