
'use client'
import { useSession  } from "next-auth/react";
import LoginPage from "./login/page";
import Dashboard from "./dashboard/page";

export default function Home() {
  const { data: session } = useSession();
  
  if (session) {
    return (
      <>
        <Dashboard/>
      </>
    )
  }
  return (
    <>
      <LoginPage />
    </>
  )
}
