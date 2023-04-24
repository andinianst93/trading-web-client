import React from 'react'
import { CircleBackground } from '../CircleBackground'
import { AiFillApple, AiFillWindows, AiFillAndroid } from 'react-icons/ai'
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
            Join now
          </h2>
          <p className='mt-4 text-lg text-gray-300 pb-6'>
            Experience the power of our forex web trading platform today. Sign
            up now and start trading with ease and confidence!
          </p>
          <button
            type='button'
            className='border border-gray-two focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}

export default Cta
