import React from 'react'
import Image from 'next/image'
import { AiFillApple, AiFillWindows, AiFillAndroid } from 'react-icons/ai'
import Link from 'next/link'
import { IoLogoAppleAppstore } from 'react-icons/io5'
const Hero = () => {
  return (
    <section className='bg-black bg-[url(/images/banner-bg.png)] py-[82px] sm:-mx-[250px]  lg:-mx-[150px] lg:py-[106px]'>
      <div className='container'>
        <div className='relative z-[1] text-white lg:w-3/5 xl:w-1/2 mx-auto flex flex-col justify-center items-center'>
          <h1 className='text-lg text-center leading-none font-extrabold lg:text-5xl '>
            Compare Leading Platforms
          </h1>
          <p className='my-8 text-lg text-center'>
            Compare the best web-based, app, and MetaTrader 5 trading platforms
            to find the perfect one for you. Our comprehensive comparison table
            makes it easy to compare key features and benefits.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
