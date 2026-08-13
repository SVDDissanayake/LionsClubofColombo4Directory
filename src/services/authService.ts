import { supabase } from '@/lib/supabase';
import type { Session } from '@supabase/supabase-js';

export const authService = {
  /**
   * Signs in a user
   */
  async signIn(email: string, password: string) {
    return await supabase.auth.signInWithPassword({ email, password });
  },

  /**
   * Signs out the current user
   */
  async signOut() {
    return await supabase.auth.signOut();
  },

  /**
   * Gets the current active session
   */
  async getCurrentSession() {
    return await supabase.auth.getSession();
  },

  /**
   * Listens for auth state changes
   */
  onAuthStateChange(callback: (event: string, session: Session | null) => void) {
    return supabase.auth.onAuthStateChange(callback);
  },

  /**
   * Checks if a user has admin privileges
   */
  isAdmin(session: Session | null): boolean {
    if (!session?.user?.app_metadata) return false;
    return session.user.app_metadata.is_admin === true;
  }
};
