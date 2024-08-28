import { createFileRoute } from "@tanstack/react-router";
import AuthPage from "../pages/Auth";


export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2 w-full h-full">
      <AuthPage />
    </div>
  );
}
