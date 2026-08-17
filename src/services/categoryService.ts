import type { Category, CategoryFormData } from '@/types/database';
import categoriesData from '@/data/categories.json';

// In-memory store initialized from JSON
let localCategories: Category[] = [...categoriesData] as Category[];

export const categoryService = {
  /**
   * Fetches active categories ordered by display_order
   */
  async fetchActiveCategories() {
    const data = localCategories
      .filter(c => c.is_active)
      .sort((a, b) => a.display_order - b.display_order);

    return { data, error: null as Error | null };
  },

  /**
   * Admin: fetches all categories
   */
  async fetchAllCategories() {
    const data = [...localCategories].sort((a, b) => a.display_order - b.display_order);
    return { data, error: null as Error | null };
  },

  /**
   * Creates a new category (in-memory only for local file structure)
   */
  async createCategory(data: CategoryFormData) {
    const newCategory: Category = {
      ...data,
      id: Date.now().toString(),
      description: data.description || null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    
    localCategories.push(newCategory);
    console.warn("Category created in memory. Update src/data/categories.json to persist.");
    return { data: newCategory, error: null as Error | null };
  },

  /**
   * Updates a category (in-memory only)
   */
  async updateCategory(id: string, data: Partial<CategoryFormData>) {
    const index = localCategories.findIndex(c => c.id === id);
    if (index === -1) return { data: null, error: new Error('Not found') };

    localCategories[index] = {
      ...localCategories[index],
      ...data,
      updated_at: new Date().toISOString()
    };
    
    console.warn("Category updated in memory. Update src/data/categories.json to persist.");
    return { data: localCategories[index], error: null as Error | null };
  },

  /**
   * Deletes a category (in-memory only)
   */
  async deleteCategory(id: string) {
    localCategories = localCategories.filter(c => c.id !== id);
    console.warn("Category deleted in memory. Update src/data/categories.json to persist.");
    return { error: null as Error | null };
  }
};
