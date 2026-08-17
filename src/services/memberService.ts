import type { PublicMember, Member, MemberFormData } from '@/types/database';
import membersData from '@/data/members.json';
import { categoryService } from './categoryService';

// In-memory store initialized from JSON
let localMembers: Member[] = [...membersData] as Member[];

export const memberService = {
  /**
   * Fetches public members, joins category, orders by category display_order then member display_order
   */
  async fetchPublicMembers() {
    const { data: categories } = await categoryService.fetchAllCategories();
    
    let sortedData = localMembers
      .filter(m => m.is_active)
      .map(m => {
        const category = categories?.find(c => c.id === m.category_id);
        const publicMember: PublicMember = {
          ...m,
          category,
          phone: m.show_phone ? m.phone : null,
          email: m.show_email ? m.email : null,
          address: m.show_address ? m.address : null,
          whatsapp: m.show_whatsapp ? m.whatsapp : null,
        };
        return publicMember;
      });

    sortedData.sort((a, b) => {
      const catA = a.category?.display_order ?? 9999;
      const catB = b.category?.display_order ?? 9999;
      if (catA !== catB) return catA - catB;
      return a.display_order - b.display_order;
    });

    return { data: sortedData, error: null as Error | null };
  },

  /**
   * Fetches single member from public_members view with category join
   */
  async fetchMemberBySlug(slug: string) {
    const { data: categories } = await categoryService.fetchAllCategories();
    const member = localMembers.find(m => m.slug === slug);
    
    if (!member) return { data: null, error: new Error('Not found') };
    
    const category = categories?.find(c => c.id === member.category_id);
    const publicMember: PublicMember = {
      ...member,
      category,
      phone: member.show_phone ? member.phone : null,
      email: member.show_email ? member.email : null,
      address: member.show_address ? member.address : null,
      whatsapp: member.show_whatsapp ? member.whatsapp : null,
    };

    return { data: publicMember, error: null as Error | null };
  },

  /**
   * Admin: fetches ALL members (including inactive) with category join
   */
  async fetchAllMembers() {
    const { data: categories } = await categoryService.fetchAllCategories();
    
    let sortedData = localMembers.map(m => {
      const category = categories?.find(c => c.id === m.category_id);
      return { ...m, category };
    });

    sortedData.sort((a, b) => a.display_order - b.display_order);

    return { data: sortedData, error: null as Error | null };
  },

  /**
   * Admin: single member by ID
   */
  async fetchMemberById(id: string) {
    const { data: categories } = await categoryService.fetchAllCategories();
    const member = localMembers.find(m => m.id === id);
    
    if (!member) return { data: null, error: new Error('Not found') };
    
    const category = categories?.find(c => c.id === member.category_id);
    
    return { data: { ...member, category }, error: null as Error | null };
  },

  /**
   * Creates a new member
   */
  async createMember(data: MemberFormData) {
    const newMember: Member = {
      ...data,
      id: Date.now().toString(),
      profile_photo_url: data.profile_photo_url || null,
      full_name: `${data.first_name} ${data.last_name}`,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    
    localMembers.push(newMember);
    console.warn("Member created in memory. Update src/data/members.json to persist.");
    return { data: newMember, error: null as Error | null };
  },

  /**
   * Updates an existing member
   */
  async updateMember(id: string, data: Partial<MemberFormData>) {
    const index = localMembers.findIndex(m => m.id === id);
    if (index === -1) return { data: null, error: new Error('Not found') };
    
    const updatedData = { ...data };
    if (updatedData.first_name || updatedData.last_name) {
       const first = updatedData.first_name || localMembers[index].first_name;
       const last = updatedData.last_name || localMembers[index].last_name;
       (updatedData as any).full_name = `${first} ${last}`;
    }

    localMembers[index] = {
      ...localMembers[index],
      ...updatedData,
      updated_at: new Date().toISOString()
    } as Member;
    
    console.warn("Member updated in memory. Update src/data/members.json to persist.");
    return { data: localMembers[index], error: null as Error | null };
  },

  /**
   * Deletes a member
   */
  async deleteMember(id: string) {
    localMembers = localMembers.filter(m => m.id !== id);
    console.warn("Member deleted in memory. Update src/data/members.json to persist.");
    return { error: null as Error | null };
  },

  /**
   * Toggles member active status
   */
  async toggleMemberActive(id: string, isActive: boolean) {
    const index = localMembers.findIndex(m => m.id === id);
    if (index === -1) return { data: null, error: new Error('Not found') };

    localMembers[index].is_active = isActive;
    localMembers[index].updated_at = new Date().toISOString();
    
    console.warn("Member status updated in memory. Update src/data/members.json to persist.");
    return { data: localMembers[index], error: null as Error | null };
  }
};
