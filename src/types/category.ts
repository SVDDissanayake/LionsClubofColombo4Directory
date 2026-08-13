export interface Category {
  id: string;
  name: string;
  description: string | null;
  slug: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface CategoryFormData {
  name: string;
  description: string;
  slug: string;
  display_order: number;
  is_active: boolean;
}
