import { Card, CardHeader, CardDescription, CardContent } from "@storefront/ui";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

import logo from "../assets/logo.png";

import { supabase } from "../supabase";
import { Link } from "@tanstack/react-router";

const AuthPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <Card className="border border-slate-200 rounded-md min-w-[300px] w-full max-w-[400px] p-3">
        <CardHeader className="flex flex-col items-center gap-2 pb-2">
          <img src={logo} className="w-32" />
          <CardDescription>Sign In</CardDescription>
        </CardHeader>
        <CardContent>
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
            }}
            socialLayout="horizontal"
            providers={["google"]}
            // TODO: handle local and production enviroment
            redirectTo="http://localhost:5174/home"
          />
        </CardContent>
      </Card>
      <Link to="/home">Home</Link>
    </div>
  );
};

export default AuthPage;
