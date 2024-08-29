import { RouterProvider } from "@tanstack/react-router";
import { router } from "./main";
import { useEffect } from "react";
import { supabase } from "./supabase";
import { useAuth } from "./zustand/useAuth";

const App = () => {
  const auth = useAuth();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      auth.setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      auth.setSession(session);
      if (session) {
        router.navigate({
          to: "/home",
        });
      } else {
        router.navigate({
          to: "/",
        });
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
