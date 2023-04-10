import React from 'react'
import Container from '@/components/layout/container'
import HeroPage from '@/components/HeroPage'
import Breadcrumb from '@/components/Breadcrumb'
import Cta from '@/components/Cta'
import Link from 'next/link'
import videos from '@/data/videosData'
import video from '@/data/videoData'
import Image from 'next/image'
import { MdOutlineOndemandVideo } from 'react-icons/md'
const VdIndex = () => {
  return (
    <Container>
      <div className='overflow-x-hidden '>
        {' '}
        <div className='bg-black bg-[url(/images/banner-bg.png)]'>
          <nav className='bg-black'>
            <Breadcrumb title1='Video Edukasi Trading' />
          </nav>
          <HeroPage
            title='Video Edukasi Trading'
            desc='Panduan komprehensif untuk mempelajari trading forex.'
          />
        </div>
        <section className='text-black py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6'>
          <div className='container'>
            <div>
              <div className='md:flex md:items-center md:justify-between'>
                <h2 className='text-xl font-bold mb-4'>Kategori</h2>
              </div>
              <div className='grid grid-cols-2 lg:grid-cols-5 gap-x-2 gap-y-2 mt-4'>
                {video.map((i) => {
                  return (
                    <Link
                      href={`/video/${i.link}`}
                      key={i.id}
                      className='text-black bg-white border-[0.5px] focus:ring-4 capitalize focus:outline-none focus:ring-blue-one rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-semibold'
                    >
                      <h3>{i.category}</h3>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
          <div className='grid gap-8 lg:grid-cols-3 mt-8'>
            {videos.map((i) => {
              return (
                <div className='p-4 bg-white rounded-lg shadow-md' key={i.id}>
                  <Image
                    src={i.image}
                    width={850}
                    height={150}
                    className='rounded-lg object-cover w-full h-[150px]'
                    alt='image'
                  ></Image>
                  <div className='flex justify-between items-center mt-4 mb-2 text-gray-500'>
                    <span className='capitalize'>{i.category}</span>
                  </div>
                  <h2 className='mb-2 text-xl font-bold tracking-tight text-gray-900'>
                    <Link href={`/video/${i.catLink}/${i.link}`}>{i.name}</Link>
                  </h2>
                </div>
              )
            })}
          </div>
        </section>
      </div>
      <Cta />
    </Container>
  )
}

export default VdIndex
