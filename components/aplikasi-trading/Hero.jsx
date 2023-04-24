import React from 'react'
import Image from 'next/image'
import { AiFillApple, AiFillWindows, AiFillAndroid } from 'react-icons/ai'
import { IoLogoAppleAppstore } from 'react-icons/io5'
const Hero = () => {
  return (
    <div className='overflow-hidden py-12 lg:pb-32 xl:pb-36'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:pt-12'>
        <div className='lg:grid lg:grid-cols-12 lg:gap-x-[135px] lg:gap-y-20'>
          <div className='relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6'>
            <h1 className='text-4xl font-medium tracking-tight text-black'>
              Trade Forex Anywhere, Anytime with Our Trading App
            </h1>
            <p className='mt-6 text-lg text-gray-two'>
              Trade on-the-go with our forex trading app. Access real-time data,
              charts and analysis on your mobile device with ease.
            </p>
            <div className='flex mt-4'>
              <AiFillAndroid className='w-8 h-8 text-gray-two' />
              <IoLogoAppleAppstore className='w-8 h-8 text-gray-two' />
            </div>
          </div>
          <div className='relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6'>
            <div className='-mx-4 px-9 sm:mx-0 lg:absolute lg:-inset-x-10 lg:-top-10 lg:-bottom-20 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32'>
              <Image
                src='https://res.cloudinary.com/andinianst93/image/upload/v1682356330/vecteezy_smartphone-and-mobile-phone_11047536_296_yqhsdb.png'
                width={740}
                height={350}
                className='w-[350px]'
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
