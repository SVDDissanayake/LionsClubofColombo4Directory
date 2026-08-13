import type { Category } from './category';

export interface Member {
  id: string;
  first_name: string;
  last_name: string;
  full_name: string;
  slug: string;
  profile_photo_url: string | null;
  designation: string | null;
  category_id: string | null;
  date_of_birth: string | null; // ISO date string
  phone: string | null;
  whatsapp: string | null;
  email: string | null;
  address: string | null;
  profession: string | null;
  joined_date: string | null;
  membership_id: string | null;
  biography: string | null;
  linkedin_url: string | null;
  facebook_url: string | null;
  instagram_url: string | null;
  display_order: number;
  is_active: boolean;
  show_phone: boolean;
  show_email: boolean;
  show_address: boolean;
  show_whatsapp: boolean;
  created_at: string;
  updated_at: string;
  // Joined data
  category?: Category;
}

// Public-facing member with private fields conditionally nullified
export interface PublicMember {
  id: string;
  first_name: string;
  last_name: string;
  full_name: string;
  slug: string;
  profile_photo_url: string | null;
  designation: string | null;
  category_id: string | null;
  date_of_birth: string | null;
  phone: string | null; // null if show_phone is false
  whatsapp: string | null;
  email: string | null;
  address: string | null;
  profession: string | null;
  joined_date: string | null;
  membership_id: string | null;
  biography: string | null;
  linkedin_url: string | null;
  facebook_url: string | null;
  instagram_url: string | null;
  display_order: number;
  is_active: boolean;
  category?: Category;
}

export interface MemberFormData {
  first_name: string;
  last_name: string;
  slug: string;
  profile_photo_url: string | null;
  designation: string;
  category_id: string;
  date_of_birth: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  profession: string;
  joined_date: string;
  membership_id: string;
  biography: string;
  linkedin_url: string;
  facebook_url: string;
  instagram_url: string;
  display_order: number;
  is_active: boolean;
  show_phone: boolean;
  show_email: boolean;
  show_address: boolean;
  show_whatsapp: boolean;
}
