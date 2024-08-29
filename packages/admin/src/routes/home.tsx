import { createFileRoute } from "@tanstack/react-router";
import HomePage from "../pages/Home";
import { supabase } from "../supabase";
import { router } from "../main";

export const Route = createFileRoute("/home")({
  beforeLoad: async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user === null) {
      router.navigate({
        to: "/",
        search: {
          redirect: window.location.href,
        },
      });
    }
  },
  component: HomePage,
});
