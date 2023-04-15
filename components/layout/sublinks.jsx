import React from 'react'
import navlink from '@/data/navs'
import Link from 'next/link'
const Sublinks = () => {
  return (
    <>
      {navlink.map((item, index) => {
        const { name } = item
        return (
          <div className='lg:cursor-pointer group' key={index}>
            <ul className='lg:flex-row md:space-x-8 lg:mt-0' key={index}>
              <li className='p-4 relative flex items-center'>
                <span className='text-white text-base pr-2 font-bold'>
                  {name}
                </span>
                <svg
                  width='18'
                  height='18'
                  className='text-white'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M19 9L12 15L10.25 13.5M5 9L7.33333 11'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </li>
            </ul>
            {item.submenu && (
              <div>
                <div className='md:fixed md:top-18 md:hidden group-hover:md:block hover:md:block bg-white rounded-lg'>
                  <div className='px-8 grid grid-flow-col gap-x-16 mt-6 text-sm rounded-lg shadow-md'>
                    {item.sublinks.map((i, index) => {
                      return (
                        <div className='pb-2 md:pb-6 text-black' key={index}>
                          <p className='font-bold text-base mb-4'>{i.head}</p>
                          <ul className='space-y-4'>
                            {i.sublink.map((tautan, index) => {
                              return (
                                <li key={index}>
                                  <Link
                                    href={tautan.link}
                                    className='flex items-center text-black hover:text-[#0000FF] group gap-2 capitalize'
                                  >
                                    {tautan.name}
                                  </Link>
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        )
      })}
    </>
  )
}

export default Sublinks
