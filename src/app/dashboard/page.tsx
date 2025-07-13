'use client'
import React, { useEffect } from 'react'
import { signOut, useSession } from "next-auth/react";
import { Button } from '@/components/ui/button';
import Loading from '@/components/Loading';
import { useRouter } from 'next/navigation';
import Logo from '@/components/Logo';
import Link from 'next/link';
import { Bell, Box, ChartNoAxesColumn, ChartNoAxesColumnIncreasing, Clipboard, CloudDownload, EllipsisVertical, Headphones, LayoutGrid, Search, Settings, Store, TrendingUp, Users } from 'lucide-react';
import Image from 'next/image';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import SideBar from '@/components/SideBar';
import { Input } from '@/components/ui/input';
import { Card, CardAction, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
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

    const data = [
        { value: 10 },
        { value: 15 },
        { value: 12 },
        { value: 18 },
        { value: 20 },
    ];

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
                        <div className='flex h-auto w-auto p-2 gap-2 relative'>
                            <Input type='search' id="search" name='search' placeholder="Search" className='min-w-[230px] pl-8' />
                            <Search className='absolute w-4 h-4 top-4.5 left-4 text-lg text-primary/50' />
                            <Button className='bg-primary text-primary-foreground'><CloudDownload /> Export</Button>
                        </div>
                    </header>

                    <div className='flex w-full flex-col gap-3 p-2'>
                        <div className='w-full h-auto grid grid-cols-3 gap-4 justify-center items-center'>
                            <Card className='relative'>
                                <CardHeader>
                                    <p className='text-secondary text-xs font-sans'>Total Income</p>
                                    <CardAction><EllipsisVertical size={20} className='text-primary/50' /></CardAction>
                                </CardHeader>
                                <CardContent className='flex flex-col gap-4'>
                                    <div className='flex'>
                                        <CardTitle className='text-4xl font-medium gap-0 flex items-end'>$12,321 <span className='text-sm text-primary/50'>.32</span></CardTitle>
                                        <ResponsiveContainer width="45%" height={50} className='absolute bottom-7 right-5'>
                                            <LineChart data={data}>
                                                <Line
                                                    type="monotone" 
                                                    dataKey="value"
                                                    stroke="#10b981" 
                                                    strokeWidth={2}
                                                    dot={false}
                                                />
                                            </LineChart>
                                        </ResponsiveContainer>
                                    </div>
                                    <p className='flex gap-1 font-mono text-sm'><span className=' flex gap-1'><TrendingUp size={20} /> 12%</span>from last week</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Button onClick={() => signOut()} className='bg-primary min-w-sm text-primary-foreground'>Log Out</Button> */}
        </div>
    )
}

export default Dashboard
