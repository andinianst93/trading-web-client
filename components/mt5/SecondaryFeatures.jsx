import React from 'react'
import { MdWebAsset } from 'react-icons/md'
const features = [
  {
    name: 'Trade',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: <MdWebAsset className='w-8 h-8' />,
  },
  {
    name: 'Balanced',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: <MdWebAsset className='w-8 h-8' />,
  },
  {
    name: 'Trade in real-time',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque.',
    icon: <MdWebAsset className='w-8 h-8' />,
  },
  {
    name: 'Profit ',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque.',
    icon: <MdWebAsset className='w-8 h-8' />,
  },
  {
    name: 'Encrypted and anonymized',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque.',
    icon: <MdWebAsset className='w-8 h-8' />,
  },
  {
    name: 'Tracking',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque.',
    icon: <MdWebAsset className='w-8 h-8' />,
  },
]

const SecondaryFeatures = () => {
  return (
    <section className='py-20 sm:py-32'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl sm:text-center'>
          <h2 className='text-3xl font-medium tracking-tight text-gray-900'>
            Secondary Features
          </h2>
          <p className='mt-2 text-lg text-gray-600'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque.
          </p>
        </div>
        <ul
          role='list'
          className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3'
        >
          {features.map((feature) => (
            <li
              key={feature.name}
              className='rounded-2xl border border-gray-200 p-8'
            >
              {feature.icon}
              <h3 className='mt-6 font-semibold text-gray-900'>
                {feature.name}
              </h3>
              <p className='mt-2 text-gray-700'>{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default SecondaryFeatures
