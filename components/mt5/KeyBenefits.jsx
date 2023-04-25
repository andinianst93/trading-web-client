import React from 'react'
import { MdWebAsset } from 'react-icons/md'
import Image from 'next/image'
import { CheckIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Advanced Charting Tools',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: <MdWebAsset className='w-8 h-8' />,
  },
  {
    name: 'Multiple Order Types',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: <MdWebAsset className='w-8 h-8' />,
  },
  {
    name: 'Automated Trading',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: <MdWebAsset className='w-8 h-8' />,
  },
  {
    name: 'Flexible Trading System for Every Possible Strategy',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: <MdWebAsset className='w-8 h-8' />,
  },
  {
    name: 'Professional technical analysis',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: <MdWebAsset className='w-8 h-8' />,
  },
  {
    name: 'All-in-one Trading Platforms',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
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
                <dt className='font-semibold text-white'>
                  <CheckIcon
                    className='absolute top-1 left-0 h-5 w-5 text-white'
                    aria-hidden='true'
                  />
                  {feature.name}
                </dt>
                <dd className='mt-2'>{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
