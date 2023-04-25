import {
  ArrowPathIcon,
  WrenchScrewdriverIcon,
  LockClosedIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Secure and Easy to Use Platform',
    description:
      'Our platform is designed to be user-friendly and secure, ensuring that your trading experience is smooth and stress-free with 24/7 expert support.',
    href: '#',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Advanced Trading Tools & Features',
    description:
      'Gain a competitive edge with our advanced trading tools and features, including real-time market data, customizable charts, and a wide range of trading instruments.',
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: 'Real Money, Real Market',
    description:
      'You can experience the excitement and challenges of trading with real money on the line. This is the best way to develop your skills as a trader and achieve financial freedom.',
    href: '#',
    icon: ComputerDesktopIcon,
  },
]

export default function Why() {
  return (
    <div className='bg-black py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <h2 className='mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            Why Trade with Us?
          </h2>
          <p className='mt-6 text-lg leading-8 text-slate-six'>
            Join the elite group of successful traders who have already achieved
            their financial goals with us. Sign up now and unleash the full
            potential of the world's largest financial market!
          </p>
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3'>
            {features.map((feature) => (
              <div key={feature.name} className='flex flex-col'>
                <h3 className='flex items-center gap-x-3 text-xl font-semibold leading-7 text-white'>
                  <feature.icon
                    className='h-5 w-5 flex-none text-slate-six'
                    aria-hidden='true'
                  />
                  {feature.name}
                </h3>
                <div className='mt-4 flex flex-auto flex-col text-base leading-7 text-slate-six'>
                  <p className='flex-auto'>{feature.description}</p>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
