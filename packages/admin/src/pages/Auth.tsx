import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Button,
} from "@storefront/ui";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

import { supabase } from "../supabase";
import { Session } from "@supabase/supabase-js";

const AuthPage = () => {
  const [session, setSession] = useState<null | Session>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);
  console.log("user_metadata", session)
  if (!session) {
    return (
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <Card className="border border-slate-200 rounded-md min-w-[300px] w-full max-w-[400px] p-3">
          <CardHeader>
            <CardTitle>Log in</CardTitle>
            <CardDescription>Continue to Storefront</CardDescription>
          </CardHeader>
          <CardContent>
            <Auth
              supabaseClient={supabase}
              appearance={{
                theme: ThemeSupa,
              }}
              socialLayout="horizontal"
              providers={["github", "facebook", "google"]}
            />
          </CardContent>
        </Card>
      </div>
    );
  } else {
    return (
    <div>
      <div>
        <Button onClick={() => supabase.auth.signOut()} variant="destructive">LogOut</Button>
      </div>
    </div>
    )
  }
};

export default AuthPage;
