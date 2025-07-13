'use client'
import React, { useEffect } from 'react'
import { signOut, useSession } from "next-auth/react";
import { Button } from '@/components/ui/button';
import Loading from '@/components/Loading';
import { useRouter } from 'next/navigation';
import Logo from '@/components/Logo';
import Link from 'next/link';
import { Bell, Box, ChartNoAxesColumn, ChartNoAxesColumnIncreasing, Clipboard, Headphones, LayoutGrid, Settings, Store, Users } from 'lucide-react';

const Dashboard = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/login')
        }
    }, [status]);

    if (status === 'loading') return <Loading />

    const nav_data = [
        {
            link: '/dashboard',
            name: 'Dashboard',
            icon: <LayoutGrid size={15} />
        },
        {
            link: '/dashboard',
            name: 'Products',
            icon: <Box size={15} />
        },
        {
            link: '/dashboard',
            name: 'Store',
            icon: <Store size={15} />
        },
        {
            link: '/dashboard',
            name: 'Customers',
            icon: <Users size={15} />
        },
        {
            link: '/dashboard',
            name: 'Analytics',
            icon: <ChartNoAxesColumnIncreasing size={15} />
        },
        {
            link: '/dashboard',
            name: 'Notifications',
            icon: <Bell size={15} />
        },
        {
            link: '/dashboard',
            name: 'Reports',
            icon: <Clipboard size={15} />
        },
        {
            link: '/dashboard',
            name: 'Conversion',
            icon: <ChartNoAxesColumn size={15} />
        },

    ];
    const other_data = [
        {
            link: '/dashboard',
            name: 'Help center',
            icon: <Headphones size={15} />
        },
        {
            link: '/dashboard',
            name: 'Settings',
            icon: <Settings size={15} />
        },
    ]
    return (
        <div className='w-full h-auto flex'>
            <div className="side-menu relative max-w-xs h-screen">
                <div className='fixed top-0 left-0 h-screen w-2xs bg-primary/5 flex justify-between text-primary/60 p-[1px]'>
                    <div className='w-full h-full flex-col gap-2'>
                        <div className='w-auto h-auto'>
                            <Logo />
                        </div>
                        <nav className='flex flex-col w-full h-auto gap-1'>
                            <ul className='border-b-2 border-primary-50 py-3 flex flex-col h-auto gap-2 w-full'>
                                {nav_data.map((nav, index) => (
                                    <li key={index} className='w-full h-auto'>
                                        <Link href={nav.link} className='w-full py-1 hover:border-l-4 focus:border-l-4 rounded-xs border-primary  h-auto hover:text-primary text-sm gap-3 flex pl-6 items-center focus:text-primary'> {nav.icon} {nav.name}</Link>
                                    </li>
                                ))}
                            </ul>
                            <div className='h-auto w-full flex-col flex gap-2'>
                                <h3 className='text-primary/50 text-sm pl-5 py-1'>Others</h3>
                                <ul className='flex flex-col h-auto w-full gap-2'>
                                    {other_data.map((other, index) => (
                                        <li key={index} className='w-full h-auto'>
                                            <Link href={other.link} className='w-full py-1 hover:border-l-4 focus:border-l-4 rounded-xs border-primary  h-auto hover:text-primary text-sm gap-3 flex pl-6 items-center focus:text-primary'> {other.icon} {other.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className='w-full h-auto flex gap-2 px-3'>
<div className=''></div>
                    </div>
                </div>
            </div>
            <div className='w-full h-auto p-3'></div>
            {/* <Button onClick={() => signOut()} className='bg-primary min-w-sm text-primary-foreground'>Log Out</Button> */}
        </div>
    )
}

export default Dashboard
