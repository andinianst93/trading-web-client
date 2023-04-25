import React from 'react'
import { CircleBackground } from '../CircleBackground'
import { AiFillApple, AiFillWindows, AiFillAndroid } from 'react-icons/ai'
import { IoLogoAppleAppstore } from 'react-icons/io5'
import { MdWebAsset } from 'react-icons/md'
import Link from 'next/link'
/* This example requires Tailwind CSS v3.0+ */
export default function Cta() {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8'>
        <div className='relative isolate overflow-hidden bg-black px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16'>
          <h2 className='mx-auto max-w-2xl text-4xl font-bold tracking-tight text-white'>
            Download MetaTrader 5 Now
          </h2>
          <p className='mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300'>
            Gain access to advanced trading features, multi-asset trading
            capabilities, and customizable analysis tools. Start trading with
            confidence today!
          </p>
          <div className='mt-4 flex justify-center items-center'>
            <div className='flex mt-4'>
              <AiFillApple className='w-12 h-12' />
              <AiFillWindows className='w-12 h-12' />
              <AiFillAndroid className='w-12 h-12' />
              <IoLogoAppleAppstore className='w-12 h-12' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
