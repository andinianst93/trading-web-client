import { ArrowRightIcon, CheckIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Real-time quotes and charts',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
    icon: CheckIcon,
  },
  {
    name: 'Order placement',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: CheckIcon,
  },
  {
    name: 'Trading tools',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
    icon: CheckIcon,
  },
  {
    name: 'Account security',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
    icon: CheckIcon,
  },
  {
    name: 'Account management',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: CheckIcon,
  },
  {
    name: 'Educational resources',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ',
    icon: CheckIcon,
  },
]

export default function Key() {
  return (
    <div className='bg-slate-dark py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl sm:text-center'>
          <h2 className='mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            Key Features
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-300'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate
            blanditiis.
          </p>
        </div>
      </div>
      <div className='mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8'>
        <dl className='mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16'>
          {features.map((feature) => (
            <div key={feature.name} className='relative pl-9'>
              <h3 className=' font-semibold text-white text-lg'>
                <feature.icon
                  className='absolute top-1 left-1 h-5 w-5 text-indigo-500'
                  aria-hidden='true'
                />
                {feature.name}
              </h3>{' '}
              <p className=''>{feature.description}</p>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
