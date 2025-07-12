import Logo from '@/components/Logo'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RegisterPage = () => {
    return (
        <div className='w-full h-auto flex flex-col justify-between items-center'>
            <div className='w-full h-auto flex flex-col justify-center gap-10 items-center'>
                {/* Logo */}
                <div className="logo w-auto h-auto flex justify-center items-center">
                    <Logo />
                </div>

                <div className='w-full h-auto flex flex-col justify-center gap-6 items-center'>
                    {/* heading */}
                    <h1 className='text-6xl'>Welcome Back</h1>
                    <p className='text-xl'>It's time to check your sales</p>

                    {/* login with Google */}
                    <div className='w-auto h-auto py-3'>
                        <Button> <Image src='/icon/google-icon.png' alt='Google Icon' width={40} height={40} /> Continue with Google</Button>
                    </div>
                    <div></div>
                </div>
            </div>

            {/* CopyRight */}
            <div className='w-full h-auto flex justify-center items-center'>
                <p className='lg:text-xl md:text-lg sm:text-sm text-xs'>
                    &copy; Copyright 2025. All Right Reserved by <Link href='/'>Grow Easy</Link>
                </p>
            </div>
        </div>
    )
}

export default RegisterPage
