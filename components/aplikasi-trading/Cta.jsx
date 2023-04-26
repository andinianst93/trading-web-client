import { AiFillApple, AiFillAndroid } from 'react-icons/ai'
import Image from 'next/image'
export default function Example() {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8'>
        <div className='relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16 bg-black'>
          <h2 className='mx-auto max-w-2xl text-4xl font-bold tracking-tight text-white'>
            Download Now
          </h2>
          <p className='mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-six'>
            Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
            anim id veniam aliqua proident excepteur commodo do ea.
          </p>
          <div className='mt-4 flex items-center justify-center'>
            <a href='#'>
              <Image
                src='https://res.cloudinary.com/andinianst93/image/upload/v1682435431/5a902dbf7f96951c82922875_lr81xf.png'
                alt=''
                width={372}
                height={50}
                className='w-[150px]'
              />
            </a>
            <a href='#'>
              <Image
                src='https://res.cloudinary.com/andinianst93/image/upload/v1682435391/5a902db97f96951c82922874_no078z.png'
                alt=''
                width={372}
                height={50}
                className='w-[120px]'
              />
            </a>
          </div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1024 1024'
            className='absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2'
            aria-hidden='true'
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill='url(#827591b1-ce8c-4110-b064-7cb85a0b1217)'
              fillOpacity='0.7'
            />
            <defs>
              <radialGradient
                id='827591b1-ce8c-4110-b064-7cb85a0b1217'
                cx={0}
                cy={0}
                r={1}
                gradientUnits='userSpaceOnUse'
                gradientTransform='translate(512 512) rotate(90) scale(512)'
              >
                <stop stopColor='#7775D6' />
                <stop offset={1} stopColor='#E935C1' stopOpacity={0} />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}
