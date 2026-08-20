import React, { useEffect, useState, useMemo } from 'react';
import { APP_NAME } from '@/utils/constants';
import { useMembers } from '@/hooks/useMembers';
import { useCategories } from '@/hooks/useCategories';
import { useBirthdays } from '@/hooks/useBirthdays';
import { useSearch } from '@/hooks/useSearch';
import { BirthdayBanner } from '@/components/birthday/BirthdayBanner';
import { UpcomingBirthdays } from '@/components/birthday/UpcomingBirthdays';
import { CategoryFilter } from '@/components/directory/CategoryFilter';
import { CategorySection } from '@/components/directory/CategorySection';
import { MemberGrid } from '@/components/directory/MemberGrid';
import { DirectoryHero } from '@/components/directory/DirectoryHero';
import { DirectoryStats } from '@/components/directory/DirectoryStats';
import { ScrollToTop } from '@/components/directory/ScrollToTop';
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

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    document.title = `Directory | ${APP_NAME}`;
  }, []);

  // Count birthdays this month
  const birthdaysThisMonth = useMemo(() => {
    const now = new Date();
    const currentMonth = now.getMonth();
    return members.filter(m => {
      if (!m.date_of_birth) return false;
      const dob = new Date(m.date_of_birth);
      return dob.getMonth() === currentMonth;
    }).length;
  }, [members]);

  // Match count for search
  const matchCount = searchQuery ? filteredMembers.length : undefined;

  const isLoading = membersLoading || categoriesLoading;

  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Hero Section */}
      <div id="directory" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <DirectoryHero
          memberCount={members.length}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          matchCount={matchCount}
        />

        {/* Birthday Banner */}
        <div className="mb-8">
          <BirthdayBanner members={members} />
        </div>

        {/* Stats Ribbon */}
        {!isLoading && (
          <DirectoryStats
            totalMembers={members.length}
            totalCategories={categories.length}
            birthdaysThisMonth={birthdaysThisMonth}
          />
        )}

        {/* Error */}
        {membersError && (
          <ErrorMessage message={membersError instanceof Error ? membersError.message : String(membersError)} onRetry={refetchMembers} />
        )}

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-8">
            {/* Filter & View Toggle Toolbar */}
            <div className="bg-surface p-4 sm:p-6 rounded-2xl shadow-sm border border-border animate-fade-slide-up">
              {/* Top row: category filter + view toggle */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 overflow-hidden">
                  {!categoriesLoading && (
                    <CategoryFilter
                      categories={categories}
                      activeCategory={activeCategory ?? 'all'}
                      onChange={setActiveCategory}
                      members={members}
                    />
                  )}
                </div>

                {/* View Toggle */}
                <div className="flex-shrink-0 flex items-center bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-all duration-200 ${
                      viewMode === 'grid'
                        ? 'bg-white text-primary shadow-sm'
                        : 'text-text-muted hover:text-text'
                    }`}
                    title="Grid view"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-all duration-200 ${
                      viewMode === 'list'
                        ? 'bg-white text-primary shadow-sm'
                        : 'text-text-muted hover:text-text'
                    }`}
                    title="List view"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Member Content */}
            <div className="space-y-4">
              {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
                </div>
              ) : searchQuery || (activeCategory && activeCategory !== 'all') ? (
                <div className="animate-fade-in">
                  <div className="flex items-center justify-between mb-4 px-2">
                    <h3 className="text-lg font-medium text-text-muted">
                      Found <span className="font-bold text-primary">{filteredMembers.length}</span>{' '}
                      {filteredMembers.length === 1 ? 'member' : 'members'}
                    </h3>
                    {searchQuery && (
                      <button
                        onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                        className="text-sm text-primary hover:underline flex items-center gap-1"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Clear filters
                      </button>
                    )}
                  </div>
                  <MemberGrid members={filteredMembers} viewMode={viewMode} />
                </div>
              ) : (
                <div className="space-y-10">
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
                          viewMode={viewMode}
                        />
                      );
                    })}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {!isLoading && (
              <div className="sticky top-24 animate-fade-slide-up" style={{ animationDelay: '0.3s' }}>
                <UpcomingBirthdays members={upcomingBirthdays} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  );
};
