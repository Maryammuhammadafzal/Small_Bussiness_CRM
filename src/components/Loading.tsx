'use client'
import React from 'react'
import Logo from './Logo'

const Loading = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
    <div className='animate-bounce'>
          <Logo/>
    </div>
    </div>
  )
}

export default Loading
