"use client"
import React from 'react'
import Image from 'next/image'
import { useUser } from '@clerk/nextjs';

function Hero() {
  const {user,isSignedIn} = useUser();
  return (
    <div>
        <section className="bg-white text-black">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="text-orange-400  text-3xl font-extrabold sm:text-5xl"
      >
        Track Smart, 

        <span className="sm:block text-yellow-500">  Spend Wise </span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
  Manage your expenses effortlessly with KarchaKalkulator. Track your spending, stay within budget, and achieve your financial goals with ease. Simplify your financial life today!
</p>

    {isSignedIn? <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded border border-orange-600 bg-primary px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="/dashboard"
        >
          Get Started
        </a>

      </div>:
              <a
              className="block w-full rounded border border-orange-600 bg-primary px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="/sign-in"
            >
              Get Started
            </a>
    
      }
     
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero