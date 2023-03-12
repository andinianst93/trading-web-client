import React from 'react'
import Link from 'next/link'
const Cta = () => {
  return (
    <section className='bg-blue-one'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
        <div className='mx-auto max-w-screen-sm text-center'>
          <h2 className='mb-4 lg:text-4xl md:text-3xl text-3xl tracking-tight font-extrabold leading-tight text-white'>
            It is a Bad Dream
          </h2>
          <p className='mb-6 font-light text-white md:text-lg'>
            No one on my side. I was fighting but I just feel too tired to be
            fighting. Guess I am not the fighting kind. Would not mind it if you
            were by my side.
          </p>
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
