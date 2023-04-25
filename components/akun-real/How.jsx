import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Go to the registration page',
    description:
      'Look for the "Open Account" or "Register" button on the homepage and click on it.',
    icon: ServerIcon,
  },
  {
    name: 'Fill in your personal information',
    description:
      'Make sure you enter your information correctly, as it will be used to verify your identity later on.',
    icon: ServerIcon,
  },
  {
    name: 'Choose your account type',
    description:
      'Choose the account type that best suits your needs, whether it is a standard account, a mini account, or a VIP account.',
    icon: ServerIcon,
  },
  {
    name: 'Verify your identity',
    description:
      'Once your identity has been verified, you will be ready to fund your account and start trading.',
    icon: ServerIcon,
  },
  {
    name: 'Fund your account',
    description:
      'Choose the method that works best for you and make your deposit. ',
    icon: ServerIcon,
  },
]

export default function How() {
  return (
    <div className='overflow-hidden bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
          <div className='lg:ml-auto lg:pt-4 lg:pl-4'>
            <div className='lg:max-w-lg'>
              <h2 className='mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl'>
                How to open a real account?
              </h2>

              <dl className='mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none'>
                {features.map((feature) => (
                  <div key={feature.name} className='relative pl-9'>
                    <h3 className='inline font-semibold text-gray-900'>
                      <feature.icon
                        className='absolute top-1 left-1 h-5 w-5 text-indigo-600'
                        aria-hidden='true'
                      />
                      {feature.name}
                    </h3>{' '}
                    <dd className='inline'>{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className='flex items-start justify-end lg:order-first'>
            <img
              src='https://tailwindui.com/img/component-images/dark-project-app-screenshot.png'
              alt='Product screenshot'
              className='w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]'
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
