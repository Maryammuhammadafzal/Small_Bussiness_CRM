'use client'
import React, { useEffect } from 'react'
import { signOut, useSession } from "next-auth/react";
import { Button } from '@/components/ui/button';
import Loading from '@/components/Loading';
import { useRouter } from 'next/navigation';
import Logo from '@/components/Logo';
import Link from 'next/link';
import { Bell, Box, ChartNoAxesColumn, ChartNoAxesColumnIncreasing, Clipboard, Headphones, LayoutGrid, Settings, Store, Users } from 'lucide-react';
import Image from 'next/image';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';

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

    const nav_data = [
        {
            link: '/dashboard',
            name: 'Dashboard',
            icon: <LayoutGrid size={15} />
        },
        {
            link: '/products',
            name: 'Products',
            icon: <Box size={15} />
        },
        {
            link: '/store',
            name: 'Store',
            icon: <Store size={15} />
        },
        {
            link: '/customers',
            name: 'Customers',
            icon: <Users size={15} />
        },
        {
            link: '/analytics',
            name: 'Analytics',
            icon: <ChartNoAxesColumnIncreasing size={15} />
        },
        {
            link: '/notification',
            name: 'Notifications',
            icon: <Bell size={15} />
        },
        {
            link: '/reports',
            name: 'Reports',
            icon: <Clipboard size={15} />
        },
        {
            link: '/conversion',
            name: 'Conversion',
            icon: <ChartNoAxesColumn size={15} />
        },

    ];
    const other_data = [
        {
            link: '/help',
            name: 'Help center',
            icon: <Headphones size={15} />
        },
        {
            link: '/setting',
            name: 'Settings',
            icon: <Settings size={15} />
        },
    ];
    const analytics_data = [
        {
            link: '/analytics/store',
            name: 'Store'
        },
        {
            link: '/analytics/product',
            name: 'Product'
        },
        {
            link: '/analytics/visitors',
            name: 'Visitors'
        },
    ]
    return (
        <div className='w-full h-auto flex'>
            <div className="side-menu relative max-w-xs h-screen">
                <div className='fixed top-0 left-0 h-screen w-2xs bg-primary/5 flex flex-col justify-between text-primary/60 p-[1px]'>
                    <div className='w-full h-full flex-col gap-2'>
                        <div className='w-auto h-auto'>
                            <Logo />
                        </div>
                        <NavigationMenu className='flex flex-col w-full h-auto gap-1'>
                            <NavigationMenuList className='border-b-2 border-primary-50 py-3 flex flex-col h-auto gap-2 w-full'>
                                {nav_data.map((nav, index) => (
                                    <NavigationMenuItem key={index} className="w-full h-auto">
                                        {index === 4 ? (
                                            <div className="relative w-full group h-auto">
                                                <NavigationMenuTrigger className="w-full py-1 hover:border-l-4 focus:border-l-4 rounded-xs border-primary h-auto hover:text-primary text-sm gap-3 flex pl-6 items-center focus:text-primary">
                                                    <p className="flex gap-2">{nav.icon} {nav.name}</p>
                                                </NavigationMenuTrigger>

                                                <div className=" group-hover:flex  hidden h-[120px] py-2 pl-8  min-w-[288px] rounded-none">
                                                    <ul className="flex w-full flex-col border-l border-l-primary/20 gap-2 ">
                                                        {analytics_data.map((analytics, subIndex) => (
                                                            <li key={subIndex} className="w-auto h-auto">
                                                                <Link href={analytics.link} className="w-auto py-1 rounded-xs border-primary h-auto hover:text-primary text-sm gap-3 flex pl-6 items-center focus:text-primary">
                                                                    {analytics.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        ) : (
                                            <Link href={nav.link} className="w-full py-1 hover:border-l-4 focus:border-l-4 rounded-xs border-primary h-auto hover:text-primary text-sm gap-3 flex pl-6 items-center focus:text-primary">
                                                {nav.icon} {nav.name}
                                            </Link>
                                        )}
                                    </NavigationMenuItem>

                                ))}
                            </NavigationMenuList>
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
                        </NavigationMenu>
                    </div>
                    <div className='w-full h-auto flex gap-2  py-6 px-3 items-center'>
                        <Link href='/profile' className='w-12 h-12 rounded-full flex justify-center items-center'>
                            <Image src={session?.user?.image || '/images/profile-avatar.jpg'} alt='profile-image' width={14} height={14} className='h-full w-full rounded-full object-cover' />
                        </Link>
                        <Link href='/profile' className='flex flex-col gap-1 h-auto w-auto'>
                            <h2 className='text-primary text-lg font-medium font-sans'>{session?.user?.name}</h2>
                            <p className='text-secondary text-[10px] font-sans'>{session?.user?.email}</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='w-full h-auto p-3'></div>
            {/* <Button onClick={() => signOut()} className='bg-primary min-w-sm text-primary-foreground'>Log Out</Button> */}
        </div>
    )
}

export default Dashboard
