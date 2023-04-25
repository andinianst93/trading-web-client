import React from 'react'
import { MdWebAsset } from 'react-icons/md'
import Image from 'next/image'
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
const KeyBenefits = () => {
  return (
    <section className='bg-black py-20 sm:py-32'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='max-w-2xl lg:text-left'>
          <h2 className='text-3xl font-medium tracking-tight text-white'>
            Key Features of MetaTrader 5
          </h2>
          <p className='mt-2 text-lg text-slate-six'>
            MetaTrader 5, or MT5, is one of the most popular and easily
            accessible trading platforms in the world, offering a multitude of
            benefits for traders around the globe. You can utilize all the tools
            and indicators and customize your trading experience. MT5 provides
            everything you need to help you keep up with market.
          </p>
        </div>
      </div>
      <div className='mt-4'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <ul
            role='list'
            className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3'
          >
            {features.map((feature) => (
              <li key={feature.name} className='rounded-2xl bg-gray-dark p-8 '>
                {feature.icon}
                <h3 className='mt-6 font-semibold text-white text-xl'>
                  {feature.name}
                </h3>
                <p className='mt-2 text-slate-six'>{feature.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default KeyBenefits
