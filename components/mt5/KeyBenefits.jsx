import React from 'react'
import { MdWebAsset } from 'react-icons/md'
import Image from 'next/image'
import { CheckIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Advanced Charting Tools',
    description:
      '21 timeframes, 80+ technical indicators, and analytical objects, providing traders with in-depth market analysis.',
    icon: <MdWebAsset className='w-8 h-8' />,
  },
  {
    name: 'Mobile Trading',
    description:
      'Available on both desktop and mobile devices, allowing traders to access their accounts and trade from anywhere at any time.',
    icon: <MdWebAsset className='w-8 h-8' />,
  },
  {
    name: 'Automated Trading',
    description:
      'With built-in Expert Advisors (EAs), traders can automate their trading strategies based on pre-defined rules, removing the need for manual intervention.',
    icon: <MdWebAsset className='w-8 h-8' />,
  },
  {
    name: 'Multiple Asset Classes',
    description:
      'Supports trading in multiple asset classes, including Forex, stocks, commodities, and cryptocurrencies',
    icon: <MdWebAsset className='w-8 h-8' />,
  },
  {
    name: 'Customizable Interface',
    description:
      "The platform's interface is highly customizable, allowing traders to personalize it to their preferences, including custom indicators, scripts, and more.",
    icon: <MdWebAsset className='w-8 h-8' />,
  },
  {
    name: 'Copy Trading',
    description:
      'Allows traders to automatically copy the trades of other successful traders, making it easier for beginners to get started and learn from experienced traders.',
    icon: <MdWebAsset className='w-8 h-8' />,
  },
]
export default function KeyBenefits() {
  return (
    <div className='bg-black py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          <div>
            <h2 className='text-3xl font-bold leading-8 tracking-tight text-white'>
              Key Features
            </h2>

            <p className='mt-6 text-base leading-7 text-gray-600'>
              MetaTrader 5, or MT5, is one of the most popular and easily
              accessible trading platforms in the world, offering a multitude of
              benefits for traders around the globe. You can utilize all the
              tools and indicators and customize your trading experience. MT5
              provides everything you need to help you keep up with market.
            </p>
          </div>
          <dl className='col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16'>
            {features.map((feature) => (
              <div key={feature.name} className='relative pl-9'>
                <h3 className='font-semibold text-white'>
                  <CheckIcon
                    className='absolute top-1 left-0 h-5 w-5 text-white'
                    aria-hidden='true'
                  />
                  {feature.name}
                </h3>
                <p className='mt-2'>{feature.description}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
