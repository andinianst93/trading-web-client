import React from 'react'
import { MdWebAsset } from 'react-icons/md'
const features = [
  {
    name: 'Second Feature 1',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque.',
    icon: <MdWebAsset className='w-8 h-8' />,
  },
  {
    name: 'Second Feature 2',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque.',
    icon: <MdWebAsset className='w-8 h-8' />,
  },
  {
    name: 'Second Feature 3',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque.',
    icon: <MdWebAsset className='w-8 h-8' />,
  },
  {
    name: 'Second Feature 4 ',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque.',
    icon: <MdWebAsset className='w-8 h-8' />,
  },
  {
    name: 'Second Feature 5',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque.',
    icon: <MdWebAsset className='w-8 h-8' />,
  },
  {
    name: 'Second Feature 6',
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
          <h2 className='text-3xl font-medium tracking-tight text-black'>
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
              className='rounded-2xl border border-gray-200 p-8 '
            >
              {feature.icon}
              <h3 className='mt-6 font-semibold text-black text-xl'>
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
