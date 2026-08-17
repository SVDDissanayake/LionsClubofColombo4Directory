import type { Session } from '@supabase/supabase-js';

// Mock session to simulate a logged-in admin user
let mockSession: Session | null = null;
type AuthStateCallback = (event: string, session: Session | null) => void;
const listeners: AuthStateCallback[] = [];

function notifyListeners(event: string, session: Session | null) {
  listeners.forEach(cb => cb(event, session));
}

export const authService = {
  /**
   * Signs in a user (mocked to always succeed as admin)
   */
  async signIn(email: string, _password: string) {
    mockSession = {
      access_token: 'mock-token',
      refresh_token: 'mock-refresh',
      expires_in: 3600,
      token_type: 'bearer',
      user: {
        id: '1',
        app_metadata: { is_admin: true },
        user_metadata: {},
        aud: 'authenticated',
        created_at: new Date().toISOString(),
        email: email,
      }
    } as unknown as Session;
    
    notifyListeners('SIGNED_IN', mockSession);
    return { data: { user: mockSession.user, session: mockSession }, error: null as Error | null };
  },

  /**
   * Signs out the current user
   */
  async signOut() {
    mockSession = null;
    notifyListeners('SIGNED_OUT', null);
    return { error: null as Error | null };
  },

  /**
   * Gets the current active session
   */
  async getCurrentSession() {
    return { data: { session: mockSession }, error: null as Error | null };
  },

  /**
   * Listens for auth state changes
   */
  onAuthStateChange(callback: AuthStateCallback) {
    listeners.push(callback);
    return {
      data: {
        subscription: {
          id: Date.now().toString(),
          unsubscribe: () => {
            const index = listeners.indexOf(callback);
            if (index > -1) listeners.splice(index, 1);
          }
        }
      }
    };
  },

  /**
   * Checks if a user has admin privileges
   */
  isAdmin(session: Session | null): boolean {
    if (!session?.user?.app_metadata) return false;
    return session.user.app_metadata.is_admin === true;
  }
};
