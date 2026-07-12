import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { supabase } from "../lib/supabase";
import type { User, Session } from "@supabase/supabase-js";

interface AuthContextValue {
  user: User | null;
  session: Session | null;
  profile: { credits?: { userCredits?: number | string } } | null;
  loading: boolean;
  signOut: () => Promise<void>;
  isLoggedIn: boolean;
  logout: (redirectTo?: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setUser(data.session?.user ?? null);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, sess) => {
      setSession(sess);
      setUser(sess?.user ?? null);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const dummyProfile = {
    credits: {
      userCredits: 0
    }
  };

  const logout = async (redirectTo?: string) => {
    await supabase.auth.signOut();
    if (redirectTo) {
      window.location.assign(redirectTo);
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      session,
      profile: dummyProfile,
      loading,
      signOut: async () => { await supabase.auth.signOut(); },
      isLoggedIn: !!session,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}
