import React from 'react';
import type { Category } from '@/types/category';
import type { PublicMember } from '@/types/member';
import { MemberGrid } from './MemberGrid';

interface CategorySectionProps {
  category: Category;
  members: PublicMember[];
  loading?: boolean;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ category, members, loading = false }) => {
  return (
    <section className="py-8 border-b border-border last:border-0">
      <div className="mb-6">
        <h2 className="font-heading text-2xl font-bold text-text inline-block relative">
          {category.name}
          <div className="absolute -bottom-1 left-0 w-1/2 h-1 bg-accent rounded-full"></div>
        </h2>
        {category.description && (
          <p className="mt-3 text-text-muted max-w-3xl">{category.description}</p>
        )}
      </div>

      <MemberGrid members={members} loading={loading} />
      
      {!loading && members.length === 0 && (
        <div className="py-8 text-center text-text-muted italic bg-surface/50 rounded-lg">
          No members currently in this category.
        </div>
      )}
    </section>
  );
};
