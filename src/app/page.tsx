import Image from "next/image";
import RegisterPage from "./register/page";
import LoginPage from "./login/page";

export default function Home() {
  return (
    <main className="w-full h-auto flex justify-center items-center">
      {/* <RegisterPage /> */}
      <LoginPage />
    </main>
  );
}
