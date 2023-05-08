import React from 'react'
import Link from 'next/link'
const LearnMore = () => {
  return (
    <div className='relative isolate overflow-hidden bg-black'>
      <div className='py-24 px-6 sm:px-6 sm:py-32 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-4xl font-bold tracking-tight text-white'>
            Get Help with Installation
          </h2>
          <p className='mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-100'>
            If you encounter any issues during the installation process, please
            refer to the MetaTrader 5 installation guide or contact our customer
            support team for assistance.
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <Link
              href='/tutorial'
              className='rounded-md bg-white px-3.5 py-1.5 text-base font-semibold leading-7 text-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LearnMore
