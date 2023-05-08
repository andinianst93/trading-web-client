import Link from 'next/link'
import { FaDownload } from 'react-icons/fa'
export default function Example() {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-7xl py-18 sm:px-6 sm:py-14 lg:px-8'>
        <div className='relative isolate overflow-hidden bg-white px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1024 1024'
            className='absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2'
            aria-hidden='true'
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill='url(#759c1415-0410-454c-8f7c-9a820de03641)'
              fillOpacity='0.7'
            />
            <defs>
              <radialGradient
                id='759c1415-0410-454c-8f7c-9a820de03641'
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
          <div className='relative  overflow-hidden bg-gray-900 px-6 pt-24 pb-[50px] text-center sm:px-16'>
            <h2 className='text-3xl font-bold tracking-tight text-black sm:text-4xl'>
              Ready to Elevate Your Trading Experience?
            </h2>
            <p className='mt-6 text-lg leading-8 text-slate-two'>
              Download MetaTrader5 now and gain access to advanced trading
              features, multi-asset trading capabilities, and customizable
              analysis tools. Start trading with confidence today!
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6 lg:justify-center'>
              <Link
                href='/metatrader-5/downloads'
                className='rounded-md bg-black px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
              >
                Download Now
              </Link>
              <Link
                href='/tutorial'
                className='text-base font-semibold leading-7 text-black'
              >
                Learn more <span aria-hidden='true'>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
