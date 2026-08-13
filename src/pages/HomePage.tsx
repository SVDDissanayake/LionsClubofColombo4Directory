import React, { useEffect } from 'react';
import { APP_NAME, APP_TITLE, APP_DESCRIPTION } from '@/utils/constants';
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

export const HomePage: React.FC = () => {
  const { members, loading: membersLoading, error: membersError, refetch: refetchMembers } = useMembers();
  const { categories, loading: categoriesLoading } = useCategories();
  const { upcomingBirthdays } = useBirthdays(members);
  
  const { 
    searchQuery, setSearchQuery, 
    activeCategory, setActiveCategory, 
    filteredMembers 
  } = useSearch(members, categories);

  useEffect(() => {
    document.title = `${APP_TITLE} | ${APP_NAME}`;
  }, []);

  const isLoading = membersLoading || categoriesLoading;

  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Hero Section */}
      <section className="bg-primary text-white pt-16 pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-accent font-medium tracking-widest uppercase mb-3 text-sm md:text-base">{APP_NAME}</h2>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-sm">{APP_TITLE}</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
            {APP_DESCRIPTION}
          </p>
        </div>
        
        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto text-background fill-current preserve-3d" preserveAspectRatio="none">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="mb-8">
          <BirthdayBanner members={members} />
        </div>

        {membersError && (
          <ErrorMessage message={membersError instanceof Error ? membersError.message : String(membersError)} onRetry={refetchMembers} />
        )}

        <div id="directory" className="grid grid-cols-1 lg:grid-cols-4 gap-8">
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
