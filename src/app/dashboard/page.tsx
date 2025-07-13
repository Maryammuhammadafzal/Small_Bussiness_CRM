'use client'
import React, { useEffect } from 'react'
import { signOut, useSession } from "next-auth/react";
import { Button } from '@/components/ui/button';
import Loading from '@/components/Loading';
import { useRouter } from 'next/navigation';
import Logo from '@/components/Logo';
import Link from 'next/link';

const Dashboard = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/login')
        }
    }, [status]);

    if (status === 'loading') return <Loading />

    return (
        <div className='w-full h-auto flex'>
            <div className="side-menu relative max-w-xs h-screen">
                <div className='fixed top-0 left-0 h-screen w-2xs bg-primary/5 text-primary/50'>
                    <div className='w-full h-full flex justify-betweenan flex-col gap-2'>
                        <div className='w-auto h-auto'>
                            <Logo />
                        </div>
                        <nav className='flex flex-col w-full h-auto py-4 gap-1'>
                            <ul className='border-b border-primary-5 flex flex-col h-auto gap-2 w-full'>
                                <li className='py-1 w-full h-auto hover:border-l active:border-l border-primary '>
                                    <Link href='/' className='w-full h-auto hover:text-primary focus:text-primary'> Dashboard</Link>
                                </li>
                            </ul>
                            <div className='h-auto w-full flex-col flex gap-2'>

                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <div className='w-full h-auto p-3'></div>
            {/* <Button onClick={() => signOut()} className='bg-primary min-w-sm text-primary-foreground'>Log Out</Button> */}
        </div>
    )
}

export default Dashboard
