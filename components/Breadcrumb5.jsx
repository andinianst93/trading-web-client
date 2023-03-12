import React from 'react'
import Link from 'next/link'
const Breadcrumb5 = ({ title1, slug, title2, title3, slug2 }) => {
  return (
    <nav className='text-black pt-4 lg:block hidden'>
      <div className='mx-auto w-full max-w-4xl'>
        <ol className='inline-flex items-center space-x-1 md:space-x-3'>
          <li className='inline-flex items-center'>
            <Link
              href='/'
              className='inline-flex items-center text-sm font-medium text-black hover:text-blue-600'
            >
              <svg
                aria-hidden='true'
                className='w-4 h-4 mr-2'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z'></path>
              </svg>
              Home
            </Link>
          </li>
          <li>
            <div className='flex items-center'>
              <svg
                aria-hidden='true'
                className='w-6 h-6 text-black'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                ></path>
              </svg>
              <p className='ml-1 text-sm font-medium text-black hover:text-blue-600 md:ml-2'>
                <Link
                  href={`/blog`}
                  className='inline-flex items-center text-sm font-medium text-black hover:text-blue-600'
                >
                  {title1}
                </Link>
              </p>
            </div>
          </li>
          <li>
            <div className='flex items-center'>
              <svg
                aria-hidden='true'
                className='w-6 h-6 text-black'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                ></path>
              </svg>

              <p className='ml-1 text-sm font-medium text-black hover:text-blue-600 md:ml-2'>
                <Link
                  href={`/blog/${slug2}`}
                  className='inline-flex items-center text-sm font-medium text-black hover:text-blue-600'
                >
                  {title2}
                </Link>
              </p>
            </div>
          </li>
          <li>
            <div className='flex items-center'>
              <svg
                aria-hidden='true'
                className='w-6 h-6 text-black'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                ></path>
              </svg>
              <p className='ml-1 text-sm font-medium text-black hover:text-blue-600 md:ml-2 capitalize'>
                {title3}
              </p>
            </div>
          </li>
        </ol>
      </div>
    </nav>
  )
}

export default Breadcrumb5
