import { Button } from "@storefront/ui";
import { useAuth } from "../zustand/useAuth";
import { supabase } from "../supabase";
import { router } from "../main";

const HomePage = () => {
  const auth = useAuth((state) => state.session);
  return (
    <div>
      <h1>LoggedIn</h1>
      <p>{JSON.stringify(auth)}</p>
      <Button
        onClick={() => {
          supabase.auth.signOut();
          router.invalidate();
        }}
        variant="destructive"
      >
        LogOut
      </Button>
    </div>
  );
};

export default HomePage;
