import React from 'react'
import Link from 'next/link'
const Cta = () => {
  return (
    <section className='bg-blue-one'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
        <div className='mx-auto max-w-screen-sm text-center'>
          <div className='mb-4 lg:text-4xl md:text-3xl text-3xl tracking-tight font-extrabold leading-tight text-white'>
            Lorem ipsum dolor sit.
          </div>
          <div className='mb-6 font-light text-white md:text-lg'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
            dolor aut maiores ex repellat placeat optio culpa quisquam nisi
            asperiores.
          </div>
          <Link
            href='/akun'
            className='text-blue-dark bg-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'
          >
            Mulai Trading
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Cta
