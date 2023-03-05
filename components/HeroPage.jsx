import React from 'react'
import Link from 'next/link'
const HeroPage = ({ title, desc }) => {
  return (
    <section className='pt-8 lg:pb-[50px] pb-8'>
      <div className='container'>
        <div className='lg:w-4/6 mx-auto'>
          <h1 className='text-[50px] text-center leading-none font-extrabold lg:text-[60px] lg:leading-[90px] text-white'>
            {title}
          </h1>
          <p className='my-8 text-lg text-center text-white'>{desc}</p>
        </div>
      </div>
    </section>
  )
}

export default HeroPage
