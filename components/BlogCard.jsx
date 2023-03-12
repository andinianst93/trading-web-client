import React from 'react'
import Link from 'next/link'
const BlogCard = () => {
  return (
    <section className={`mt-[100px] py-14 lg:py-[100px] bg-[#faf4ed]`}>
      <div className='container'>
        <div className={`px-6 lg:flex lg:flex-row lg:justify-between mb-10`}>
          <div>
            <p className='font-bold text-[#1bcaff] text-lg pb-4'>Blog</p>
            <h2 className='text-2xl font-extrabold text-black sm:text-3xl lg:text-[40px] lg:!leading-[50px] mb-4'>
              Artikel terbaru
            </h2>
          </div>
          <div className='flex items-center'>
            <Link
              href='/blog'
              className='text-sm font-extrabold text-black pr-4'
            >
              View All
            </Link>
            <button
              type='button'
              className='blog-slider-button-prev flex h-10 w-10 mr-4 items-center justify-center rounded-full bg-black/5 transition hover:bg-secondary'
            >
              <svg
                width='7'
                height='12'
                viewBox='0 0 7 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='text-black'
              >
                <path
                  d='M5.95007 1.2002L1.48924 5.3424C1.06317 5.73803 1.06317 6.41236 1.48924 6.80799L5.95007 10.9502'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                ></path>
              </svg>
            </button>
            <button
              type='button'
              className='blog-slider-button-next text-p flex h-10 w-10 items-center justify-center rounded-full bg-black/5 transition hover:bg-secondary'
            >
              <svg
                width='7'
                height='12'
                viewBox='0 0 7 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='text-black'
              >
                <path
                  d='M1.05005 10.7998L5.51089 6.6576C5.93695 6.26197 5.93695 5.58764 5.51089 5.19201L1.05005 1.0498'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogCard
