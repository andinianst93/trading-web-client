import React from 'react'
import { MdWebAsset } from 'react-icons/md'

import Image from 'next/image'
const features = [
  {
    name: 'Features 1.',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: <MdWebAsset />,
  },
  {
    name: 'Features 2.',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: <MdWebAsset />,
  },
  {
    name: 'Features 3.',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: <MdWebAsset />,
  },
]
const KeyBenefits = () => {
  return (
    <section className='bg-black py-20 sm:py-32'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl'>
          <h2 className='text-3xl font-medium tracking-tight text-white'>
            Primary Features
          </h2>
          <p className='mt-2 text-lg text-gray-400'>
            MetaTrader 5, or MT5, is one of the most popular and easily
            accessible trading platforms in the world, offering a multitude of
            benefits for traders around the globe. You can utilize all the tools
            and indicators and customize your trading experience. MT5 provides
            everything you need to help you keep up with market.
          </p>
        </div>
      </div>
      <div className='mt-16'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto grid max-w-2xl grid-cols-1 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
            <div className='lg:pt-14'>
              <Image
                src='https://res.cloudinary.com/andinianst93/image/upload/v1682347361/laptop-png-6759_jnb22q.png'
                width={740}
                height={350}
                className='w-[450px]'
              ></Image>
            </div>
            <div className='lg:pr-8 lg:pt-4'>
              <div className='lg:max-w-lg'>
                <div className='mt-10 max-w-xl space-y-4 text-base leading-7 text-gray-600 lg:max-w-none'>
                  {features.map((feature) => (
                    <div key={feature.name} className='relative pl-9'>
                      <h3 className='font-semibold text-gray-900 flex items-center'>
                        <span className='pr-2'>{feature.icon}</span>
                        <span> {feature.name}</span>
                      </h3>{' '}
                      <p className='inline'>{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default KeyBenefits
