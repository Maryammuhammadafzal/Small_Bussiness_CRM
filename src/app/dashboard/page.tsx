'use client'
import React from 'react'
import { signOut } from "next-auth/react";
import { Button } from '@/components/ui/button';
const Dashboard = () => {
  return (
    <div>
        <Button onClick={() => signOut()} className='bg-primary min-w-sm text-primary-foreground'>Log Out</Button>
    </div>
  )
}

export default Dashboard
