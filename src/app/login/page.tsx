'use client'
import Logo from '@/components/Logo'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { signIn } from "next-auth/react";
const LoginPage = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-between items-center'>
      <div className='w-full h-auto flex flex-col justify-start gap-4 items-center'>
        {/* Logo */}
        <div className="logo w-full h-auto flex justify-start items-center">
          <Logo />
        </div>

        <div className='w-full h-4/5 flex flex-col justify-start gap-4 items-center'>
          {/* heading */}
          <h1 className='text-4xl font-medium'>Welcome Back</h1>
          <p className='text-sm font-mono text-foreground/60'>It's time to check your sales</p>

          {/* login with Google */}
          <div className='w-auto h-auto py-2'>
            <Button className='min-w-sm bg-primary-foreground border-secondary/20 border' onClick={()=> signIn('google', { callbackUrl: '/dashboard' })}> <Image src='/icon/google-icon.png' alt='Google Icon' width={20} height={20} />  Continue with Google</Button>
          </div>

          <div className=' flex flex-col gap-4 justify-center items-center'>
            <div className='flex gap-2 justify-center items-center h-auto w-auto'>
              <hr className='w-auto min-w-[100px] border' />
              <p className='text-xs font-mono text-foreground/60'>or Log in With Email</p>
              <hr className='w-auto min-w-[100px] border' />
            </div>

            <div className='w-full h-auto flex flex-col'>
              <div className="grid w-full max-w-sm items-center gap-3">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="example@gmail.com" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-3">
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" placeholder="********" />
              </div>

            </div>
            <div className="flex items-center min-w-sm gap-3">
              <Checkbox id="save" />
              <Label htmlFor="save">Remember me</Label>
            </div>

            <div className='w-auto h-auto py-3'>
              <Button className='bg-primary min-w-sm text-primary-foreground'>Log in</Button>
            </div>

            <p className='text-xs text-secondary/50 flex gap-1'>If you don't have an account! <Link href='/register' className='text-primary underline'>Create an Account</Link></p>
          </div>
        </div>
      </div>

      {/* CopyRight */}
      <div className='w-full h-auto flex justify-center pb-6 items-center'>
        <p className='lg:text-sm font-mono md:text-xs text-[10px]'>
          &copy; Copyright 2025. All Right Reserved by <Link href='/login' className='underline'>Grow Easy</Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
