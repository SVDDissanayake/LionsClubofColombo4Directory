import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useMember } from '@/hooks/useMember';
import { ProfileHeader } from '@/components/profile/ProfileHeader';
import { ProfileActions } from '@/components/profile/ProfileActions';
import { ProfileDetails } from '@/components/profile/ProfileDetails';
import { SocialLinks } from '@/components/profile/SocialLinks';
import { Skeleton } from '@/components/ui/Skeleton';
import { ErrorMessage } from '@/components/ui/ErrorMessage';
import { EmptyState } from '@/components/ui/EmptyState';

export const MemberProfilePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { member, loading, error } = useMember(slug || '');

  useEffect(() => {
    if (member) {
      document.title = `${member.full_name} | Lions Club Member Directory`;
    }
  }, [member]);

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="h-64 rounded-xl bg-gray-200 animate-pulse mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <Skeleton className="h-96 w-full rounded-xl" />
          </div>
          <div className="space-y-6">
            <Skeleton className="h-48 w-full rounded-xl" />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20">
        <ErrorMessage message={error instanceof Error ? error.message : String(error)} />
        <div className="mt-8 text-center">
          <Link to="/" className="text-primary hover:underline font-medium">
            &larr; Back to Directory
          </Link>
        </div>
      </div>
    );
  }

  if (!member) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20">
        <EmptyState 
          title="Member Not Found" 
          description="The member you are looking for does not exist or has been removed."
        />
        <div className="mt-8 text-center">
          <Link to="/" className="text-primary hover:underline font-medium">
            &larr; Back to Directory
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen pb-20">
      <ProfileHeader member={member} />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/#directory" className="inline-flex items-center text-sm font-medium text-text-muted hover:text-primary transition-colors mb-6 group">
          <svg className="w-4 h-4 mr-1.5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Back to Directory
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <ProfileActions member={member} />
            <ProfileDetails member={member} />
          </div>
          
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <SocialLinks member={member} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
