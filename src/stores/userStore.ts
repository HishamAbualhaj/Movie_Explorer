import { create } from "zustand";
import { supabase } from "@/supabase/client";

interface UserStore {
  user: any | null;
  setUser: (user: any | null) => void;
  fetchUser: () => Promise<void>;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  fetchUser: async () => {
    const { data } = await supabase.auth.getSession();
    set({ user: data.session?.user ?? null });

    supabase.auth.onAuthStateChange((_event, session) => {
      set({ user: session?.user ?? null });
    });
  },
}));
