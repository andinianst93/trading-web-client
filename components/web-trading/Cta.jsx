/* This example requires Tailwind CSS v3.0+ */
export default function Example() {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8'>
        <div className='relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16'>
          <h2 className='mx-auto max-w-2xl text-4xl font-bold tracking-tight text-black'>
            Join Now and Start Trading!
          </h2>
          <p className='mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-two'>
            Experience the power of our web trading platform today. Sign up now
            and start trading with ease and confidence!
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <a
              href='#'
              className='rounded-md bg-black px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
            >
              Mulai Trading
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
