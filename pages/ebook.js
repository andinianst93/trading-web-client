import React from 'react'
import Container from '@/components/layout/container'
const ebook = () => {
  return (
    <Container>
      <div className='overflow-x-hidden'>
        <section className='bg-black bg-[url(/images/banner-bg.png)] py-[82px] sm:-mx-[250px]  lg:-mx-[150px] lg:py-[106px]'>
          <div className='container'>
            <div className='relative z-[1] text-white lg:w-3/5 xl:w-1/2 mx-auto flex flex-col justify-center items-center'>
              <h1 className='text-[50px] text-center leading-none font-extrabold lg:text-[60px] lg:leading-[90px]'>
                <span className='text-[#ffffff]'>Ebook</span>
                <span className='text-[#ffffff]'></span>
              </h1>
              <p className='my-8 text-lg lg:w-3/4 text-center'></p>
            </div>
          </div>
        </section>
      </div>
    </Container>
  )
}

export default ebook
