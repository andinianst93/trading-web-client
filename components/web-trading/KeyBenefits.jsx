import {
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
  PencilSquareIcon,
  TrashIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Feature',
    description:
      'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.',
    href: '#',
    icon: ChatBubbleOvalLeftEllipsisIcon,
  },
  {
    name: 'Feature',
    description:
      'Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.',
    href: '#',
    icon: HeartIcon,
  },
  {
    name: 'Feature',
    description:
      'Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.',
    href: '#',
    icon: TrashIcon,
  },
  {
    name: 'Feature',
    description:
      'Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.',
    href: '#',
    icon: PencilSquareIcon,
  },
]

export default function Example() {
  return (
    <div className='bg-black py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            Why trade with us?
          </h2>
          <div className='col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2'>
            {features.map((feature) => (
              <div key={feature.name}>
                <h3 className='text-lg font-semibold leading-7 text-white'>
                  <div className='mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue'>
                    <feature.icon
                      className='h-6 w-6 text-white'
                      aria-hidden='true'
                    />
                  </div>
                  {feature.name}
                </h3>
                <dd className='mt-1 text-base leading-7 text-slate-five'>
                  {feature.description}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
