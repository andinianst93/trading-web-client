import React from 'react'
import Image from 'next/image'
import { AiFillApple, AiFillWindows, AiFillAndroid } from 'react-icons/ai'
import { IoLogoAppleAppstore } from 'react-icons/io5'
import Link from 'next/link'
const Hero = () => {
  return (
    <div className='overflow-hidden py-12 lg:pb-32 xl:pb-36'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:pt-12'>
        <div className='lg:grid lg:grid-cols-12 lg:gap-x-[125px] lg:gap-y-20'>
          <div className='relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6'>
            <h1 className='text-4xl font-medium tracking-tight text-black'>
              MetaTrader 5
            </h1>
            <p className='mt-6 text-lg text-gray-two'>
              Discover advanced trading features, multi-asset trading
              capabilities, and high-security measures with MetaTrader 5 - the
              versatile trading platform for traders of all levels. Customize
              your trading experience with ease.
            </p>
            <div className='flex mt-4'>
              <Link
                href='/metatrader-5/downloads'
                className='border border-gray-two focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-white dark:text-black dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
              >
                Download
              </Link>
            </div>
          </div>
          <div className='relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6'>
            <div className='-mx-4 px-9 sm:mx-0 lg:absolute lg:-inset-x-10 lg:-top-10 lg:-bottom-20 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32'>
              <Image
                src='https://res.cloudinary.com/andinianst93/image/upload/v1682347361/laptop-png-6759_jnb22q.png'
                width={740}
                height={350}
                className='w-[450px]'
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
