import React from 'react';
import type { Category } from '@/types/category';

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: string;
  onChange: (categoryId: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, activeCategory, onChange }) => {
  return (
    <div className="w-full overflow-x-auto pb-4 pt-2 hide-scrollbar">
      <div className="flex space-x-2 min-w-max px-1">
        <button
          onClick={() => onChange('all')}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-sm
            ${activeCategory === 'all' 
              ? 'bg-primary text-white border-transparent' 
              : 'bg-surface text-text hover:bg-gray-50 border border-border'
            }`}
        >
          All Members
        </button>
        
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onChange(category.id)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-sm
              ${activeCategory === category.id 
                ? 'bg-primary text-white border-transparent' 
                : 'bg-surface text-text hover:bg-gray-50 border border-border'
              }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};
