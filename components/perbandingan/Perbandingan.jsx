import { Fragment } from 'react'
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import {
  CheckIcon,
  ChevronDownIcon,
  MinusIcon,
} from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'App',
    href: '#',

    description: 'Quis suspendisse ut fermentum neque vivamus non tellus.',
  },
  {
    name: 'Web',
    href: '#',

    description: 'Quis eleifend a tincidunt pellentesque. A tempor in sed.',
  },
  {
    name: 'MT5',
    href: '#',

    description:
      'Orci volutpat ut sed sed neque, dui eget. Quis tristique non.',
  },
]
const sections = [
  {
    name: 'Features',
    features: [
      {
        name: 'Molestie lobortis massa.',
        tiers: { Basic: true, Essential: true, Premium: true },
      },
      {
        name: 'Urna purus felis.',
        tiers: { Basic: true, Essential: true, Premium: true },
      },
      {
        name: 'Tellus pulvinar sit dictum.',
        tiers: { Essential: true, Premium: true },
      },
      {
        name: 'Convallis.',
        tiers: { Essential: 'Up to 20 users', Premium: 'Up to 50 users' },
      },
    ],
  },
  {
    name: 'Reporting',
    features: [
      {
        name: 'Adipiscing.',
        tiers: { Basic: true, Essential: true, Premium: true },
      },
      {
        name: 'Eget risus integer.',
        tiers: { Essential: true, Premium: true },
      },
      { name: 'Gravida leo urna velit.', tiers: { Premium: true } },
      {
        name: 'Elementum ut dapibus mi feugiat cras nisl.',
        tiers: { Premium: true },
      },
    ],
  },
  {
    name: 'Support',
    features: [
      {
        name: 'Sit dignissim.',
        tiers: { Basic: true, Essential: true, Premium: true },
      },
      { name: 'Congue at nibh et.', tiers: { Essential: true, Premium: true } },
      {
        name: 'Volutpat feugiat mattis.',
        tiers: { Essential: true, Premium: true },
      },
      {
        name: 'Tristique pellentesque ornare diam sapien.',
        tiers: { Premium: true },
      },
    ],
  },
]
const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 2,
    question: 'How do you make holy water?',
    answer:
      'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 3,
    question: 'Why do you never see elephants hiding in trees?',
    answer:
      "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 4,
    question: 'What do you call someone with no body and no nose?',
    answer:
      'Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 5,
    question: "Why can't you hear a pterodactyl go to the bathroom?",
    answer:
      'Because the pee is silent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 6,
    question: 'Why did the invisible man turn down the job offer?',
    answer:
      "He couldn't see himself doing it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className='bg-black'>
      <div className='bg-white'>
        {/* Comparison table */}
        <div className='mx-auto max-w-2xl bg-white py-16 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
          {/* xs to lg */}
          <div className='space-y-24 lg:hidden'>
            {tiers.map((tier) => (
              <section key={tier.name}>
                {sections.map((section) => (
                  <table key={section.name} className='w-full'>
                    <caption className='border-t border-gray-200 bg-gray-50 py-3 px-6 text-left text-sm font-medium text-black sm:px-4'>
                      {section.name}
                    </caption>
                    <thead>
                      <tr>
                        <th className='sr-only' scope='col'>
                          Feature
                        </th>
                        <th className='sr-only' scope='col'>
                          Included
                        </th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200'>
                      {section.features.map((feature) => (
                        <tr
                          key={feature.name}
                          className='border-t border-gray-200'
                        >
                          <th
                            className='py-5 px-6 text-left text-sm font-normal text-gray-500 sm:px-4'
                            scope='row'
                          >
                            {feature.name}
                          </th>
                          <td className='py-5 pr-6 sm:pr-4'>
                            {typeof feature.tiers[tier.name] === 'string' ? (
                              <span className='block text-right text-sm text-gray-700'>
                                {feature.tiers[tier.name]}
                              </span>
                            ) : (
                              <>
                                {feature.tiers[tier.name] === true ? (
                                  <CheckIcon
                                    className='ml-auto h-5 w-5 text-green-500'
                                    aria-hidden='true'
                                  />
                                ) : (
                                  <MinusIcon
                                    className='ml-auto h-5 w-5 text-gray-400'
                                    aria-hidden='true'
                                  />
                                )}

                                <span className='sr-only'>
                                  {feature.tiers[tier.name] === true
                                    ? 'Yes'
                                    : 'No'}
                                </span>
                              </>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ))}

                <div className='border-t border-gray-200 px-6 pt-5 sm:px-4'>
                  <a
                    href='#'
                    className='block w-full bg-black rounded-md border border-transparent bg-gradient-to-r from-orange-500 to-pink-500 py-2 text-center text-sm font-semibold text-white shadow hover:to-pink-600'
                  >
                    Open Account {tier.name}
                  </a>
                </div>
              </section>
            ))}
          </div>

          {/* lg+ */}
          <div className='hidden lg:block'>
            <table className='h-px w-full table-fixed'>
              <thead>
                <tr>
                  <th
                    className='pb-4 pl-6 pr-6 text-left text-base font-medium text-black'
                    scope='col'
                  >
                    <span>Plans</span>
                  </th>
                  {tiers.map((tier) => (
                    <th
                      key={tier.name}
                      className='w-1/4 px-6 pb-4 text-left text-lg font-medium leading-6 text-black'
                      scope='col'
                    >
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200 border-t border-gray-200'>
                {sections.map((section) => (
                  <Fragment key={section.name}>
                    <tr>
                      <th
                        className='bg-gray-50 py-3 pl-6 text-left text-base font-medium text-black'
                        colSpan={4}
                        scope='colgroup'
                      >
                        {section.name}
                      </th>
                    </tr>
                    {section.features.map((feature) => (
                      <tr key={feature.name}>
                        <th
                          className='py-5 pl-6 pr-6 text-left text-sm font-normal text-gray-500'
                          scope='row'
                        >
                          {feature.name}
                        </th>
                        {tiers.map((tier) => (
                          <td key={tier.name} className='py-5 px-6'>
                            {typeof feature.tiers[tier.name] === 'string' ? (
                              <span className='block text-sm text-gray-700'>
                                {feature.tiers[tier.name]}
                              </span>
                            ) : (
                              <>
                                {feature.tiers[tier.name] === true ? (
                                  <CheckIcon
                                    className='h-5 w-5 text-green-500'
                                    aria-hidden='true'
                                  />
                                ) : (
                                  <MinusIcon
                                    className='h-5 w-5 text-gray-400'
                                    aria-hidden='true'
                                  />
                                )}

                                <span className='sr-only'>
                                  {feature.tiers[tier.name] === true
                                    ? 'Included'
                                    : 'Not included'}{' '}
                                  in {tier.name}
                                </span>
                              </>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
              <tfoot>
                <tr className='border-t border-gray-200'>
                  <th className='sr-only' scope='row'>
                    Choose your plan
                  </th>
                  {tiers.map((tier) => (
                    <td key={tier.name} className='px-6 pt-5'>
                      <a
                        href='#'
                        className='block w-full bg-black rounded-md border border-transparent bg-gradient-to-r from-orange-500 to-pink-500 py-2 text-center text-sm font-semibold text-white shadow hover:to-pink-600'
                      >
                        Open Account {tier.name}
                      </a>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        <div className='bg-black'>
          {/* FAQ */}
          <div className='mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8'>
            <h2 className='text-center text-3xl font-bold tracking-tight text-white'>
              Frequently asked questions
            </h2>
            <div className='mt-12'>
              <dl className='space-y-10 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 md:space-y-0 lg:grid-cols-3'>
                {faqs.map((faq) => (
                  <div key={faq.id} className='space-y-2'>
                    <dt className='text-lg font-medium leading-6 text-white'>
                      {faq.question}
                    </dt>
                    <dd className='text-base text-white'>{faq.answer}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
