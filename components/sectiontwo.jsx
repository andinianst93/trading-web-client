import React from 'react'
import sectiontwo from '@/data/sectiontwo'
const Sectiontwo = () => {
  return (
    <section className='bg-gradient-to-t from-white/[55%] to-transparent py-8 lg:py-20 px-5'>
      <div className='relative mx-auto max-w-[1440px] bg-black pb-8 lg:py-16 rounded-[32px]'>
        <img
          src='/images/perfomance-design.svg'
          alt=''
          className='absolute bottom-0'
        />
        <div className='px-12 lg:px-[120px]'>
          <div className='relative'>
            <div className='grid gap-4 lg:grid-cols-2 items-center'>
              <div className='pt-10 lg:pb-10 lg:pt-0'>
                <div className='heading mb-12'>
                  <p className='font-bold text-[#1bcaff] text-lg pb-4'>
                    Platform
                  </p>
                  <h2 className='pb-4 font-bold text-4xl leading-normal !text-white lg:!leading-[50px]'>
                    Lorem ipsum dolor sit amet
                  </h2>
                  <p className='text-lg font-semibold xl:w-11/12'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
                <ul className='space-y-8 text-lg font-semibold text-white'>
                  {sectiontwo.map((i, index) => {
                    return (
                      <li className='flex items-center gap-3.5' key={index}>
                        <div className='flex h-5 w-5 items-center justify-center rounded-full bg-[#47cffc]'>
                          <svg
                            width='12'
                            height='9'
                            viewBox='0 0 12 9'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M4.60002 5.79922L2.42502 3.62422C2.24169 3.44089 2.01669 3.34922 1.75002 3.34922C1.48336 3.34922 1.25002 3.44922 1.05002 3.64922C0.866691 3.83255 0.775024 4.06589 0.775024 4.34922C0.775024 4.63255 0.866691 4.86589 1.05002 5.04922L3.90002 7.89922C4.08336 8.08255 4.31669 8.17422 4.60002 8.17422C4.88336 8.17422 5.11669 8.08255 5.30002 7.89922L10.975 2.22422C11.1584 2.04089 11.25 1.81589 11.25 1.54922C11.25 1.28255 11.15 1.04922 10.95 0.849219C10.7667 0.665886 10.5334 0.574219 10.25 0.574219C9.96669 0.574219 9.73336 0.665886 9.55002 0.849219L4.60002 5.79922Z'
                              fill='white'
                            />
                          </svg>
                        </div>
                        <p>{i.title}</p>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className='pb-20 lg:block lg:py-4 hidden'>{/* image */}</div>
              <div className='flex items-center'>
                <img
                  src='/images/appstore_footer.png'
                  alt='download'
                  className='lg:w-[125px] w-[85px] mr-6'
                />
                <img
                  src='/images/playstore_footer.png'
                  alt='download'
                  className='lg:w-[125px] w-[85px] lg:h-[40px] h-[29px] rounded-lg'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sectiontwo
