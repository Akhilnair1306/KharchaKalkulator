"use client"
import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {

    const {user,isSignedIn} = useUser();
  return (
    <div className=' p-4 flex justify-between items-center border shadow-sm'>
      <div className='flex gap-4 items-center font-xl'>
        <Image src={'./logo.svg'}
        alt='logo'
        width={80}
        height={50}
        />
        <h2 className='font-bold text-xl text-primary'>KarchaKalkulator</h2>
        </div>
        {isSignedIn?
        <div className='gap-5 flex items-center'>
        <Link href={'/dashboard'}>
        <Button variant='outline'>Dashboard</Button>
        </Link>
        <UserButton/>
        </div>:
        <Link href={'/sign-in'}>
        <Button className="border border-orange-600" variant='outline'>Get Started</Button>
        </Link>
    }
    </div>
  )
}

export default Header