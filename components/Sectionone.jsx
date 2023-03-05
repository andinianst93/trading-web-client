import React from 'react'
import sectionone from '@/data/sectionone'
import Link from 'next/link'
const Sectionone = () => {
  return (
    <section className='py-14 lg:py-[100px]'>
      <div className='container'>
        <div className='heading text-center mb-12'>
          <p className='font-bold text-[#1bcaff] text-lg'>Keunggulan</p>
          <h2 className='text-2xl font-extrabold text-black sm:text-3xl lg:text-[40px] lg:!leading-[50px] mb-4'>
            Lorem ipsum dolor sit amet
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className='grid gap-6 lg:grid-cols-3'>
          {sectionone.map((item, index) => {
            return (
              <div
                className='group rounded-3xl border-2 border-white bg-white p-6 transition duration-500'
                style={{
                  boxShadow: '-20px 30px 70px rgba(210, 210, 210, 0.4)',
                }}
                key={index}
              >
                <div className='flex h-14 w-14 items-center justify-center rounded-full bg-[#a1e9ff]'>
                  {item.logo}
                </div>
                <p className='my-8 inline-block text-[22px] font-extrabold text-black dark:group-hover:text-black'>
                  {item.title}
                </p>
                <p className='mb-10 text-lg font-semibold transition line-clamp-3 dark:group-hover:text-black'>
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Sectionone
