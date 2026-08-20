import React, { useState } from 'react';
import type { Category } from '@/types/category';
import type { PublicMember } from '@/types/member';
import { MemberGrid } from './MemberGrid';

interface CategorySectionProps {
  category: Category;
  members: PublicMember[];
  loading?: boolean;
  viewMode?: 'grid' | 'list';
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  category,
  members,
  loading = false,
  viewMode = 'grid',
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <section className="animate-fade-slide-up">
      {/* Section Header */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="w-full flex items-center justify-between group mb-6 cursor-pointer"
      >
        <div className="flex items-center gap-3">
          {/* Animated accent bar */}
          <div className="w-1.5 h-8 bg-accent rounded-full group-hover:h-10 transition-all duration-300" />

          <h2 className="font-heading text-2xl font-bold text-text group-hover:text-primary transition-colors duration-200">
            {category.name}
          </h2>

          {/* Member count badge */}
          <span className="inline-flex items-center justify-center min-w-[2rem] h-7 px-2 rounded-full text-xs font-bold bg-primary/10 text-primary">
            {members.length}
          </span>
        </div>

        {/* Collapse/expand chevron */}
        <div className="flex items-center gap-2">
          {category.description && !isCollapsed && (
            <p className="hidden md:block text-sm text-text-muted max-w-md text-right">{category.description}</p>
          )}
          <svg
            className={`w-5 h-5 text-text-muted group-hover:text-primary transition-all duration-300 ${
              isCollapsed ? 'rotate-0' : 'rotate-180'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Collapsible content */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isCollapsed ? 'max-h-0 opacity-0' : 'max-h-[5000px] opacity-100'
        }`}
      >
        <div className="pb-8 border-b border-border last:border-0">
          <MemberGrid members={members} loading={loading} viewMode={viewMode} />

          {!loading && members.length === 0 && (
            <div className="py-8 text-center text-text-muted italic bg-surface/50 rounded-lg">
              No members currently in this category.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
