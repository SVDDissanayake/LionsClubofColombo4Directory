import React from 'react';
import type { Category } from '@/types/category';
import type { PublicMember } from '@/types/member';

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: string;
  onChange: (categoryId: string) => void;
  members?: PublicMember[];
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, activeCategory, onChange, members = [] }) => {
  // Count members per category
  const getCategoryCount = (categoryId: string): number => {
    if (categoryId === 'all') return members.length;
    return members.filter(m => m.category_id === categoryId).length;
  };

  return (
    <div className="w-full overflow-x-auto pb-2 pt-1 hide-scrollbar">
      <div className="flex space-x-2.5 min-w-max px-1">
        {/* All Members pill */}
        <button
          onClick={() => onChange('all')}
          className={`group relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-sm
            ${activeCategory === 'all'
              ? 'bg-primary text-white shadow-md shadow-primary/20'
              : 'bg-surface text-text hover:bg-primary/5 border border-border hover:border-primary/30'
            }`}
        >
          <span>All Members</span>
          <span
            className={`inline-flex items-center justify-center min-w-[1.5rem] h-5 px-1.5 rounded-full text-[10px] font-bold transition-colors duration-300
              ${activeCategory === 'all'
                ? 'bg-white/20 text-white'
                : 'bg-primary/10 text-primary'
              }`}
          >
            {getCategoryCount('all')}
          </span>
          {/* Active glow */}
          {activeCategory === 'all' && (
            <div className="absolute inset-0 rounded-full animate-pulse-glow pointer-events-none" />
          )}
        </button>

        {categories.map((category, i) => (
          <button
            key={category.id}
            onClick={() => onChange(category.id)}
            className={`group relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-sm animate-stagger
              ${activeCategory === category.id
                ? 'bg-primary text-white shadow-md shadow-primary/20'
                : 'bg-surface text-text hover:bg-primary/5 border border-border hover:border-primary/30'
              }`}
            style={{ '--stagger-delay': `${(i + 1) * 60}ms` } as React.CSSProperties}
          >
            <span>{category.name}</span>
            <span
              className={`inline-flex items-center justify-center min-w-[1.5rem] h-5 px-1.5 rounded-full text-[10px] font-bold transition-colors duration-300
                ${activeCategory === category.id
                  ? 'bg-white/20 text-white'
                  : 'bg-primary/10 text-primary'
                }`}
            >
              {getCategoryCount(category.id)}
            </span>
            {/* Active glow */}
            {activeCategory === category.id && (
              <div className="absolute inset-0 rounded-full animate-pulse-glow pointer-events-none" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
