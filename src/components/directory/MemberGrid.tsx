import React from 'react';
import type { PublicMember } from '@/types/member';
import { MemberCard } from './MemberCard';
import { SkeletonCard } from '../ui/Skeleton';
import { EmptyState } from '../ui/EmptyState';

interface MemberGridProps {
  members: PublicMember[];
  loading?: boolean;
  viewMode?: 'grid' | 'list';
}

export const MemberGrid: React.FC<MemberGridProps> = ({ members, loading = false, viewMode = 'grid' }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (members.length === 0) {
    return (
      <EmptyState
        title="No members found"
        description="Try adjusting your search or filters to find what you're looking for."
        icon={
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        }
      />
    );
  }

  if (viewMode === 'list') {
    return (
      <div className="flex flex-col gap-3 view-transition">
        {members.map((member, index) => (
          <MemberCard key={member.id} member={member} index={index} viewMode="list" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 view-transition">
      {members.map((member, index) => (
        <MemberCard key={member.id} member={member} index={index} viewMode="grid" />
      ))}
    </div>
  );
};
