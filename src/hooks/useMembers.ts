import { useState, useEffect, useCallback } from 'react';
import type { PublicMember } from '@/types/database';
import { memberService } from '@/services/memberService';

export function useMembers() {
  const [members, setMembers] = useState<PublicMember[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchMembers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, error } = await memberService.fetchPublicMembers();
      if (error) throw error;
      setMembers(data || []);
    } catch (err: any) {
      setError(err instanceof Error ? err : new Error(err?.message || 'Failed to fetch members'));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMembers();
  }, [fetchMembers]);

  // Group members by category
  const membersByCategory = new Map<string, PublicMember[]>();
  
  // Also collect members with no category
  const uncategorized: PublicMember[] = [];

  members.forEach(member => {
    if (member.category?.name) {
      const catName = member.category.name;
      if (!membersByCategory.has(catName)) {
        membersByCategory.set(catName, []);
      }
      membersByCategory.get(catName)!.push(member);
    } else {
      uncategorized.push(member);
    }
  });
  
  if (uncategorized.length > 0) {
    membersByCategory.set('Other', uncategorized);
  }

  return { members, membersByCategory, loading, error, refetch: fetchMembers };
}
