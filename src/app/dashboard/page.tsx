'use client'
import React, { useEffect } from 'react'
import { signOut, useSession } from "next-auth/react";
import { Button } from '@/components/ui/button';
import Loading from '@/components/Loading';
import { useRouter } from 'next/navigation';
import Logo from '@/components/Logo';
import Link from 'next/link';
import { Bell, Box, ChartNoAxesColumn, ChartNoAxesColumnIncreasing, Clipboard, CloudDownload, Headphones, LayoutGrid, Search, Settings, Store, Users } from 'lucide-react';
import Image from 'next/image';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import SideBar from '@/components/SideBar';
import { Input } from '@/components/ui/input';

const Dashboard = () => {
    const { data: session, status } = useSession();
    const router = useRouter();
    console.log(session);

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/login')
        }
    }, [status]);

    if (status === 'loading') return <Loading />

    return (
        <div className='w-full h-auto flex'>
            <SideBar />
            <div className='flex w-full h-auto'>
                <div className='min-w-xs h-auto'></div>
                <div className='w-full h-auto p-3 flex flex-col gap-3'>
                    <header className='w-full h-auto flex justify-between items-center'>
                        <div className='flex flex-col gap-1 p-2'>
                            <h1 className='text-primary font-semibold text-3xl'>Hello, {session?.user?.name}👋</h1>
                            <p className='text-primary/50 px-1 text-xs'>You current dashboard for today</p>
                        </div>
                        <div className='flex h-auto w-auto p-2 gap-2  relative'>
                            <Input type='search' id="search" name='search' placeholder="Search" className='min-w-[230px] pl-8' />
                            <Search className='absolute w-4 h-4 top-4.5 left-4 text-lg text-primary/50'/>
                            <Button className='bg-primary text-primary-foreground'><CloudDownload /> Export</Button>
                        </div>
                    </header>
                </div>
            </div>
            {/* <Button onClick={() => signOut()} className='bg-primary min-w-sm text-primary-foreground'>Log Out</Button> */}
        </div>
    )
}

export default Dashboard
