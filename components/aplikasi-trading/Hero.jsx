import Image from 'next/image'

export default function Hero() {
  return (
    <div className='relative isolate bg-black'>
      <svg
        className='absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]'
        aria-hidden='true'
      >
        <defs>
          <pattern
            id='983e3e4c-de6d-4c3f-8d64-b9761d1534cc'
            width={200}
            height={200}
            x='50%'
            y={-1}
            patternUnits='userSpaceOnUse'
          >
            <path d='M.5 200V.5H200' fill='none' />
          </pattern>
        </defs>
        <rect
          width='100%'
          height='100%'
          strokeWidth={0}
          fill='url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)'
        />
      </svg>
      <svg
        viewBox='0 0 1108 632'
        aria-hidden='true'
        className='hidden lg:block absolute top-10 left-[calc(50%-4rem)] -z-10 w-[69.25rem] max-w-none transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-38rem)]'
      >
        <path
          fill='url(#175c433f-44f6-4d59-93f0-c5c51ad5566d)'
          fillOpacity='.2'
          d='M235.233 402.609 57.541 321.573.83 631.05l234.404-228.441 320.018 145.945c-65.036-115.261-134.286-322.756 109.01-230.655C968.382 433.026 1031 651.247 1092.23 459.36c48.98-153.51-34.51-321.107-82.37-385.717L810.952 324.222 648.261.088 235.233 402.609Z'
        />
        <defs>
          <linearGradient
            id='175c433f-44f6-4d59-93f0-c5c51ad5566d'
            x1='1220.59'
            x2='-85.053'
            y1='432.766'
            y2='638.714'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#4F46E5' />
            <stop offset={1} stopColor='#80CAFF' />
          </linearGradient>
        </defs>
      </svg>
      <div className='mx-auto max-w-7xl px-6 py-24 sm:py-20 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-24'>
        <div className='mx-auto max-w-2xl lg:mx-0 lg:flex-auto'>
          <h1 className='mt-10 max-w-lg text-4xl font-bold tracking-tight text-white sm:text-6xl'>
            Trading App
          </h1>
          <p className='mt-6 text-lg leading-8 text-slate-six'>
            Trade on-the-go with our forex trading app. Access real-time data,
            charts and analysis on your mobile device with ease.
          </p>
          <div className='mt-4 flex items-center'>
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
        </div>
        <div className='mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow'>
          <svg
            viewBox='0 0 366 729'
            role='img'
            className='mx-auto w-[22.875rem] max-w-full drop-shadow-xl'
          >
            <title>App screenshot</title>
            <defs>
              <clipPath id='2ade4387-9c63-4fc4-b754-10e687a0d332'>
                <rect width={316} height={684} rx={36} />
              </clipPath>
            </defs>
            <path
              fill='#4B5563'
              d='M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z'
            />
            <path
              fill='#343E4E'
              d='M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z'
            />
            <foreignObject
              width={316}
              height={684}
              transform='translate(24 24)'
              clipPath='url(#2ade4387-9c63-4fc4-b754-10e687a0d332)'
            >
              <img
                src='https://tailwindui.com/img/component-images/mobile-app-screenshot.png'
                alt=''
              />
            </foreignObject>
          </svg>
        </div>
      </div>
    </div>
  )
}
