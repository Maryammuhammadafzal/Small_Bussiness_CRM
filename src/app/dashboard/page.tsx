'use client'
import React, { useEffect } from 'react'
import { signOut, useSession } from "next-auth/react";
import { Button } from '@/components/ui/button';
import Loading from '@/components/Loading';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(()=> {
        if (status === 'unauthenticated') {
            router.push('/login')
        }
    }, [status]);

    if (status === 'loading') return <Loading/>

    return (
        <div className='w-full h-auto flex'>
            <Button onClick={() => signOut()} className='bg-primary min-w-sm text-primary-foreground'>Log Out</Button>
        </div>
    )
}

export default Dashboard
