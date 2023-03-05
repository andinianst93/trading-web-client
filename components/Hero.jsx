import React from 'react'
import Link from 'next/link'
const Hero = () => {
  return (
    <section className='bg-black bg-[url(/images/banner-bg.png)] py-[82px] sm:-mx-[250px] lg:rounded-b-[50%] lg:-mx-[150px] lg:py-[106px]'>
      <div className='container'>
        <div className='relative z-[1] text-white lg:w-3/5 xl:w-1/2 mx-auto flex flex-col justify-center items-center'>
          <h1 className='text-[50px] text-center leading-none font-extrabold lg:text-[60px] lg:leading-[90px]'>
            <span className='text-[#f1d0a9]'>Vestibulizzle gizzle, </span>
            <span className='text-[#47cffc]'>mammasay</span>
          </h1>
          <p className='my-8 text-lg lg:w-3/4 text-center'>
            Fizzle izzle gangsta izzle mi consectetizzle check it out. Gangsta
            ipsum izzle sit amet, fo shizzle mah nizzle fo rizzle, mah home
            g-dizzle adipiscing elizzle.
          </p>
          <Link
            href='/akun'
            className='text-black font-semibold bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-medium px-5 py-2.5 text-center lg:mr-3'
          >
            Mulai Trading
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
