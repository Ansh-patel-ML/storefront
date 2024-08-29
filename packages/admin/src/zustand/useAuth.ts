import { Session } from "@supabase/supabase-js";
import { create } from "zustand";

interface useAuthI {
  session: Session | null;
  setSession: (session: Session | null) => void;
}

export const useAuth = create<useAuthI>()((set) => ({
  session: null,
  setSession: (session) =>
    set({
      session: session,
    }),
}));
