import { supabase } from '@/lib/supabase';
import type { PublicMember, Member, MemberFormData } from '@/types/database';

export const memberService = {
  /**
   * Fetches public members, joins category, orders by category display_order then member display_order
   */
  async fetchPublicMembers() {
    const { data, error } = await supabase
      .from('public_members')
      .select('*, category:category_id(*)')
      .order('display_order', { ascending: true });
      
    // Sort logic to handle category ordering if needed, though supabase can sort by joined table if configured correctly.
    // In Supabase, sorting by a joined table isn't directly supported in a single query reliably without RPC,
    // but assuming category is returned, we can sort it client-side just in case.
    let sortedData = data as PublicMember[] | null;
    if (sortedData) {
      sortedData.sort((a, b) => {
        const catA = a.category?.display_order ?? 9999;
        const catB = b.category?.display_order ?? 9999;
        if (catA !== catB) return catA - catB;
        return a.display_order - b.display_order;
      });
    }

    return { data: sortedData, error };
  },

  /**
   * Fetches single member from public_members view with category join
   */
  async fetchMemberBySlug(slug: string) {
    const { data, error } = await supabase
      .from('public_members')
      .select('*, category:category_id(*)')
      .eq('slug', slug)
      .single();

    return { data: data as PublicMember, error };
  },

  /**
   * Admin: fetches ALL members (including inactive) with category join
   */
  async fetchAllMembers() {
    const { data, error } = await supabase
      .from('members')
      .select('*, category:category_id(*)')
      .order('display_order', { ascending: true });

    return { data: data as Member[], error };
  },

  /**
   * Admin: single member by ID
   */
  async fetchMemberById(id: string) {
    const { data, error } = await supabase
      .from('members')
      .select('*, category:category_id(*)')
      .eq('id', id)
      .single();

    return { data: data as Member, error };
  },

  /**
   * Creates a new member
   */
  async createMember(data: MemberFormData) {
    const { data: result, error } = await supabase
      .from('members')
      .insert([data])
      .select()
      .single();

    return { data: result, error };
  },

  /**
   * Updates an existing member
   */
  async updateMember(id: string, data: Partial<MemberFormData>) {
    const { data: result, error } = await supabase
      .from('members')
      .update(data)
      .eq('id', id)
      .select()
      .single();

    return { data: result, error };
  },

  /**
   * Deletes a member
   */
  async deleteMember(id: string) {
    const { error } = await supabase
      .from('members')
      .delete()
      .eq('id', id);

    return { error };
  },

  /**
   * Toggles member active status
   */
  async toggleMemberActive(id: string, isActive: boolean) {
    const { data, error } = await supabase
      .from('members')
      .update({ is_active: isActive })
      .eq('id', id)
      .select()
      .single();

    return { data, error };
  }
};
