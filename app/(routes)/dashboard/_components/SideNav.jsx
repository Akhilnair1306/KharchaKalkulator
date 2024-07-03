"use client"
import { UserButton } from '@clerk/nextjs'
import { LayoutGrid, PiggyBankIcon, ReceiptIndianRupee } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function SideNav() {
    const menuList =[
        {
            id: 1,
            name: 'Dashboard',
            icon: LayoutGrid,
            path: '/dashboard'
        },
        {
            id: 2,
            name: 'Budgets',
            icon: PiggyBankIcon,
            path: '/dashboard/budgets'
        }
    ]
    const path = usePathname();

    useEffect(() => {
        console.log(path)
    }, [path])
    
  return (
    <div className=' h-screen p-5 border shadow-sm'>
        <div className='cursor-pointer'>
            <Link href={'/'}>
            <div className='flex gap-3'>
        <Image src={'/logo.svg'}
        alt='logo'
        width={60}
        height={40}
        />
        <h2 className='font-bold  text-primary'>KarchaKalkulator</h2>
        </div>
        </Link>
        </div>
        <div>
            {menuList.map((menu,index) => (
                <Link href={menu.path} key= {menu.id}>
                <h2  className={`mt-10 flex gap-2 items-center font-medium p-5 cursor-pointer rounded-md hover:text-white hover:bg-primary ${path==menu.path && 'text-white bg-primary'}`}>
                    <menu.icon />
                    {menu.name}
                </h2>
                </Link>
            ))}
        </div>
        <div className='fixed bottom-10 p-5 flex gap-2 items-center cursor-pointer'>
            <UserButton />
            Profile
        </div>
    </div>
  )
}

export default SideNav