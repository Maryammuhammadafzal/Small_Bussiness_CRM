
'use client'
import { useSession } from "next-auth/react";
import LoginPage from "./login/page";
import Dashboard from "./dashboard/page";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  if (session) {
    router.push('/');
    return (
      <>
        <Dashboard />
      </>
    )
  }
  router.push('/login');
  return (
    <>
      <LoginPage />
    </>
  )
}
