import React from 'react'
import Container from '@/components/layout/container'
import HeroPage from '@/components/HeroPage'
import Breadcrumb from '@/components/Breadcrumb'
import Cta from '@/components/Cta'
import Link from 'next/link'
import videos from '@/data/videosData'
import video from '@/data/videoData'
import Image from 'next/image'
import { BsFillPlayCircleFill } from 'react-icons/bs'
const PanduanTrading = () => {
  return (
    <Container>
      <div className='overflow-x-hidden '>
        {' '}
        <div className='bg-black bg-[url(/images/banner-bg.png)]'>
          <nav className='bg-black'>
            <Breadcrumb title1='Panduan Trading' />
          </nav>
          <HeroPage
            title='Panduan Trading'
            desc='Panduan komprehensif untuk mempelajari trading forex dengan format video, gambar, dan teks.'
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
                      href={`/panduan-trading/${i.link}`}
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
                <div>
                  <Link
                    href={`/panduan-trading/${i.catLink}/${i.link}`}
                    className='group relative block bg-black'
                    key={i.id}
                  >
                    <Image
                      src={i.image}
                      width={850}
                      height={150}
                      className='absolute inset-0 h-full w-full object-cover opacity-70 transition-opacity group-hover:opacity-50'
                      alt='image'
                    />
                    <div className='relative p-8 left-[100px] '>
                      <span className='text-white text-5xl '>
                        <BsFillPlayCircleFill />
                      </span>
                    </div>
                  </Link>
                  <div className='mt-4 text-sm'>{i.category}</div>
                  <Link href={`/panduan-trading/${i.catLink}/${i.link}`}>
                    <div className='text-lg font-semibold mt-1'>{i.name}</div>
                  </Link>
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

export default PanduanTrading
