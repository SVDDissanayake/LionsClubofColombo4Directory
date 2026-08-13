import { useState, useMemo } from 'react';
import type { PublicMember, Category } from '@/types/database';

export function useSearch(members: PublicMember[], _categories: Category[]) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredMembers = useMemo(() => {
    return members.filter((member) => {
      const query = searchQuery.toLowerCase();
      
      // Check search query against name, designation
      const matchesSearch = !query || 
        member.full_name?.toLowerCase().includes(query) ||
        member.first_name?.toLowerCase().includes(query) ||
        member.last_name?.toLowerCase().includes(query) ||
        member.designation?.toLowerCase().includes(query) ||
        member.profession?.toLowerCase().includes(query);

      // Check category filter
      const matchesCategory = !activeCategory || member.category_id === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [members, searchQuery, activeCategory]);

  return {
    searchQuery,
    setSearchQuery,
    activeCategory,
    setActiveCategory,
    filteredMembers
  };
}
