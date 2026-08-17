import { MAX_FILE_SIZE, ALLOWED_IMAGE_TYPES } from '@/utils/constants';

// We can just keep images in the public folder (e.g. /images/)
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
   * MOCKED: since we don't have a backend to save files, we just pretend it succeeded
   * and instruct the user to place the file in the public directory.
   */
  async uploadMemberPhoto(file: File, memberId: string) {
    const fileExt = file.name.split('.').pop();
    const fileName = `${memberId}_${Date.now()}.${fileExt}`;
    const fakePath = `/images/members/${fileName}`;
    
    console.warn(`File upload mocked. Please place ${file.name} at public${fakePath} manually to see it.`);
    
    // We return the local path as the full URL
    return { data: fakePath, error: null as Error | null };
  },

  /**
   * Deletes a member photo from storage
   * MOCKED: Does nothing
   */
  async deleteMemberPhoto(path: string) {
    console.warn(`File delete mocked. You can delete ${path} manually from the public directory.`);
    return { error: null as Error | null };
  },

  /**
   * Gets the public URL for a photo path
   * MOCKED: Just returns the path if it starts with /, or prepends it.
   */
  getMemberPhotoUrl(path: string) {
    if (path.startsWith('http')) return path;
    if (path.startsWith('/')) return path;
    return `/images/members/${path}`;
  }
};
