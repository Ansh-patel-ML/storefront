import { createFileRoute, Outlet } from "@tanstack/react-router";
import { supabase } from "../supabase";
import { router } from "../main";
import Navbar from "../components/Navbar";

export const Route = createFileRoute("/_auth")({
  beforeLoad: async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user === null) {
      router.navigate({
        to: "/",
      });
    }
  },
  component: () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  },
});
