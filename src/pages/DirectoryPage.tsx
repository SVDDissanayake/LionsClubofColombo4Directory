import React, { useEffect } from 'react';
import { APP_NAME } from '@/utils/constants';
import { useMembers } from '@/hooks/useMembers';
import { useCategories } from '@/hooks/useCategories';
import { useBirthdays } from '@/hooks/useBirthdays';
import { useSearch } from '@/hooks/useSearch';
import { BirthdayBanner } from '@/components/birthday/BirthdayBanner';
import { UpcomingBirthdays } from '@/components/birthday/UpcomingBirthdays';
import { SearchBar } from '@/components/directory/SearchBar';
import { CategoryFilter } from '@/components/directory/CategoryFilter';
import { CategorySection } from '@/components/directory/CategorySection';
import { MemberGrid } from '@/components/directory/MemberGrid';
import { ErrorMessage } from '@/components/ui/ErrorMessage';
import { SkeletonCard } from '@/components/ui/Skeleton';

export const DirectoryPage: React.FC = () => {
  const { members, loading: membersLoading, error: membersError, refetch: refetchMembers } = useMembers();
  const { categories, loading: categoriesLoading } = useCategories();
  const { upcomingBirthdays } = useBirthdays(members);
  
  const { 
    searchQuery, setSearchQuery, 
    activeCategory, setActiveCategory, 
    filteredMembers 
  } = useSearch(members, categories);

  useEffect(() => {
    document.title = `Directory | ${APP_NAME}`;
  }, []);

  const isLoading = membersLoading || categoriesLoading;

  return (
    <div className="bg-background min-h-screen pb-20 pt-8">
      <div id="directory" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text mb-4">Member Directory</h2>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="mb-8">
          <BirthdayBanner members={members} />
        </div>

        {membersError && (
          <ErrorMessage message={membersError instanceof Error ? membersError.message : String(membersError)} onRetry={refetchMembers} />
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-8">
            <div className="bg-surface p-4 sm:p-6 rounded-2xl shadow-sm border border-border">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
              
              <div className="mt-6">
                {!categoriesLoading && (
                  <CategoryFilter 
                    categories={categories} 
                    activeCategory={activeCategory ?? 'all'} 
                    onChange={setActiveCategory} 
                  />
                )}
              </div>
            </div>

            <div className="space-y-4">
              {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
                </div>
              ) : searchQuery || activeCategory !== 'all' ? (
                <div>
                  <h3 className="text-lg font-medium text-text-muted mb-4 px-2">
                    Found {filteredMembers.length} {filteredMembers.length === 1 ? 'member' : 'members'}
                  </h3>
                  <MemberGrid members={filteredMembers} />
                </div>
              ) : (
                <div className="space-y-12">
                  {categories
                    .sort((a, b) => a.display_order - b.display_order)
                    .map(category => {
                      const categoryMembers = members.filter(m => m.category_id === category.id);
                      if (categoryMembers.length === 0) return null;
                      
                      return (
                        <CategorySection 
                          key={category.id}
                          category={category}
                          members={categoryMembers}
                        />
                      );
                    })}
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            {!isLoading && (
              <div className="sticky top-24">
                <UpcomingBirthdays members={upcomingBirthdays} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
