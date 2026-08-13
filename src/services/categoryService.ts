import { supabase } from '@/lib/supabase';
import type { Category, CategoryFormData } from '@/types/database';

export const categoryService = {
  /**
   * Fetches active categories ordered by display_order
   */
  async fetchActiveCategories() {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .eq('is_active', true)
      .order('display_order', { ascending: true });

    return { data: data as Category[], error };
  },

  /**
   * Admin: fetches all categories
   */
  async fetchAllCategories() {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('display_order', { ascending: true });

    return { data: data as Category[], error };
  },

  /**
   * Creates a new category
   */
  async createCategory(data: CategoryFormData) {
    const { data: result, error } = await supabase
      .from('categories')
      .insert([data])
      .select()
      .single();

    return { data: result, error };
  },

  /**
   * Updates a category
   */
  async updateCategory(id: string, data: Partial<CategoryFormData>) {
    const { data: result, error } = await supabase
      .from('categories')
      .update(data)
      .eq('id', id)
      .select()
      .single();

    return { data: result, error };
  },

  /**
   * Deletes a category
   */
  async deleteCategory(id: string) {
    const { error } = await supabase
      .from('categories')
      .delete()
      .eq('id', id);

    return { error };
  }
};
