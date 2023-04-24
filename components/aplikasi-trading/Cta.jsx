import React from 'react'
import { CircleBackground } from '../CircleBackground'
import { AiFillAndroid } from 'react-icons/ai'
import { IoLogoAppleAppstore } from 'react-icons/io5'
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
            Download now
          </h2>
          <p className='mt-4 text-lg text-gray-300 pb-6'>
            Download our forex trading app today and experience seamless trading
            on-the-go. Join now and start trading with confidence!"
          </p>
          <div className='flex justify-center '>
            <AiFillAndroid className='w-8 h-8' />
            <IoLogoAppleAppstore className='w-8 h-8' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta
