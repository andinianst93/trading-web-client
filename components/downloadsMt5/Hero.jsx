/* This example requires Tailwind CSS v3.0+ */
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className='relative isolate overflow-hidden bg-black'>
      <div className='px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
              Download MetaTrader 5
            </h1>
            <p className='mt-6 text-lg leading-8 text-gray-300'>
              Ready to download Metatrader 5 and take your trading to the next
              level? Whether you're using a PC, smartphone, tablet, or the web
              platform, we've got you covered. Click below to learn how to
              install.
            </p>
            {/* <div className='mt-10 flex items-center justify-center gap-x-6'>
              <Link
                href='/tutorial'
                className='text-base font-semibold leading-7 text-black'
              >
                Learn more <span aria-hidden='true'>→</span>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
