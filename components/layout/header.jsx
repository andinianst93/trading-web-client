import React, { useState } from 'react'
import Link from 'next/link'
import Sublinks from './sublinks'
import { useGlobalContext } from '@/context/context'

const Header = () => {
  const { toggleLinks } = useGlobalContext()

  return (
    <header className={`sticky top-0 z-[50] w-full h-[90px] py-2 bg-black`}>
      <div className='lg:px-12'>
        <nav className='lg:px-0 px-6 lg:py-3 py-4'>
          <div className='flex flex-wrap items-center justify-between mx-auto'>
            <Link href='/' className='flex items-center'>
              <span className='self-center text-3xl font-extrabold text-white'>
                XXX
              </span>
            </Link>
            <div className='flex items-center lg:order-2'>
              <div className='lg:flex lg:items-center hidden'>
                <Link
                  href='/buka-akun-demo'
                  className='bg-transparent text-white font-semibold py-2 px-4 border rounded lg:mr-3'
                >
                  Buka Akun Demo
                </Link>
                <Link
                  href='/buka-akun-live'
                  className='bg-transparent text-white font-semibold py-2 px-4 border lg:mr-0'
                >
                  Buka Akun Live
                </Link>
              </div>
              {/* humberger menu */}
              <button
                type='button'
                className='block items-center p-2 text-lg text-gray-400 bg-transparent rounded-lg lg:hidden'
                onClick={toggleLinks}
              >
                <svg
                  className='w-6 h-6'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'></path>
                </svg>
              </button>
            </div>
            <div className='items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"'>
              <Sublinks />
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
