import { supabase } from '@/lib/supabase';
import { STORAGE_BUCKET, MAX_FILE_SIZE, ALLOWED_IMAGE_TYPES } from '@/utils/constants';

export const storageService = {
  /**
   * Validates an image file size and type
   */
  validateImageFile(file: File): { valid: boolean; error?: string } {
    if (file.size > MAX_FILE_SIZE) {
      return { valid: false, error: 'File size exceeds the 5MB limit.' };
    }
    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      return { valid: false, error: 'Invalid file type. Only JPEG, PNG, and WebP are allowed.' };
    }
    return { valid: true };
  },

  /**
   * Uploads a member photo to storage
   */
  async uploadMemberPhoto(file: File, memberId: string) {
    const fileExt = file.name.split('.').pop();
    const fileName = `${memberId}/${Date.now()}.${fileExt}`;
    
    const { data, error } = await supabase.storage
      .from(STORAGE_BUCKET)
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (error) return { data: null, error };
    
    return { data: this.getMemberPhotoUrl(data.path), error: null };
  },

  /**
   * Deletes a member photo from storage
   */
  async deleteMemberPhoto(path: string) {
    // path could be full URL or just the bucket path. 
    // If it's full URL, we need to extract the path.
    let filePath = path;
    const urlMatches = path.match(new RegExp(`${STORAGE_BUCKET}/(.*)`));
    if (urlMatches && urlMatches[1]) {
      filePath = urlMatches[1];
    }
    
    const { error } = await supabase.storage
      .from(STORAGE_BUCKET)
      .remove([filePath]);
      
    return { error };
  },

  /**
   * Gets the public URL for a photo path
   */
  getMemberPhotoUrl(path: string) {
    const { data } = supabase.storage
      .from(STORAGE_BUCKET)
      .getPublicUrl(path);
      
    return data.publicUrl;
  }
};
