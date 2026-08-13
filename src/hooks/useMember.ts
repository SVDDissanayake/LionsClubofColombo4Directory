import { useState, useEffect, useCallback } from 'react';
import type { PublicMember } from '@/types/database';
import { memberService } from '@/services/memberService';

export function useMember(slug: string | undefined) {
  const [member, setMember] = useState<PublicMember | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchMember = useCallback(async () => {
    if (!slug) {
      setLoading(false);
      return;
    }
    
    setLoading(true);
    setError(null);
    try {
      const { data, error } = await memberService.fetchMemberBySlug(slug);
      if (error) throw error;
      setMember(data);
    } catch (err: any) {
      setError(err instanceof Error ? err : new Error(err?.message || 'Failed to fetch member'));
      setMember(null);
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    fetchMember();
  }, [fetchMember]);

  return { member, loading, error, refetch: fetchMember };
}
