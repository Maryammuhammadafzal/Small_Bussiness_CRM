import { useSession , signIn , signOut } from "next-auth/react";
import RegisterPage from "./register/page";
import LoginPage from "./login/page";

export default function Home() {
  const { data : session } = useSession;
  return (
    <main className="w-full h-auto flex justify-center items-center">
      {/* <RegisterPage /> */}
      <LoginPage />
    </main>
  );
}
