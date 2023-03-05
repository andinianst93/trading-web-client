import React from 'react'
import Link from 'next/link'
import footer from '@/data/footer'

const Footer = () => {
  return (
    <div>
      <footer className='bg-white py-14 lg:pt-[100px]'>
        <div className='lg:px-12'>
          <div className='grid gap-y-10 gap-x-4 sm:grid-cols-2 lg:grid-cols-4 px-6 lg:px-0'>
            <div>
              <div className='text-3xl font-extrabold text-black w-auto mb-6'>
                XXX
              </div>
              <div>
                <img
                  src='/images/appstore_footer.png'
                  alt='download'
                  className='mb-4 w-[125px]'
                />
                <img
                  src='/images/playstore_footer.png'
                  alt='download'
                  className='w-[125px] h-[40px] rounded-lg'
                />
              </div>
            </div>
            {footer.map((f) => {
              return (
                <div key={f.id}>
                  <h2 className='mb-6 text-lg font-bold text-black'>
                    {f.name}
                  </h2>
                  {f.sublinks.map((item, index) => {
                    return (
                      <ul className='text-gray' key={index}>
                        {item.sublink.map((i) => {
                          return (
                            <li className='mb-4' key={i.id}>
                              <Link href={i.link}> {i.name}</Link>
                            </li>
                          )
                        })}
                      </ul>
                    )
                  })}
                </div>
              )
            })}
            <div>
              <ul className='flex flex-col gap-3'>
                <li className='mb-3 text-lg font-bold text-black '>
                  Informasi
                </li>
                <li className='text-gray'>
                  Jl Letjen South Parman Mal Ciputra 31, Dki Jakarta
                </li>
                <li>
                  <a
                    href='#'
                    className='inline-block transition hover:scale-110 hover:text-secondary'
                  >
                    0-21-566-9735
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className='py-5 border-t-[1px] border-black/5 bg-[#F5F5F5]'>
        <div className='lg:px-12 px-6'>
          <div className='items-center justify-between text-center font-bold lg:flex'>
            <p>
              {' '}
              Copyright© {new Date().getFullYear() + ' '}{' '}
              <span className='text-[#0000FF] transition'>
                ADN. All rights reserved.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
