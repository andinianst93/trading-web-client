import React from 'react'
import { CircleBackground } from '../CircleBackground'
import { AiFillApple, AiFillWindows, AiFillAndroid } from 'react-icons/ai'
import { IoLogoAppleAppstore } from 'react-icons/io5'
import Link from 'next/link'
const Cta = () => {
  return (
    <section
      id='get-free-shares-today'
      className='relative overflow-hidden bg-black py-20 sm:py-28'
    >
      <div className='absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2'>
        <CircleBackground color='#fff' className='animate-spin-slower' />
      </div>
      <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-md sm:text-center'>
          <h2 className='text-3xl font-medium tracking-tight text-white sm:text-4xl'>
            Ready to elevate your trading experience?
          </h2>
          <p className='mt-4 text-lg text-gray-300'>
            Download MetaTrader 5 now and gain access to advanced trading
            features, multi-asset trading capabilities, and customizable
            analysis tools. Start trading with confidence today!
          </p>
          <div className='mt-8 flex justify-center '>
            <Link
              href='/metatrader-5/downloads'
              className='border border-gray-two focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-black dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
            >
              Download
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta
