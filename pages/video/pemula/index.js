import React from 'react'
import Container from '@/components/layout/container'
import HeroPage from '@/components/HeroPage'
import Breadcrumb from '@/components/Breadcrumb'
import Cta from '@/components/Cta'
import Link from 'next/link'
import video from '@/data/videoData'
import Image from 'next/image'
import { MdOutlineOndemandVideo } from 'react-icons/md'
const Pemula = () => {
  return (
    <Container>
      <div className='overflow-x-hidden '>
        {' '}
        <div className='bg-black bg-[url(/images/banner-bg.png)]'>
          <nav className='bg-black'>
            <Breadcrumb />
          </nav>
          <HeroPage
            title='Pemula'
            desc='Panduan komprehensif untuk mempelajari trading forex untuk pemula.'
          />
        </div>
        <section className='text-black py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6'>
          <div className='grid gap-8 lg:grid-cols-3 mt-8'></div>
        </section>
      </div>
      <Cta />
    </Container>
  )
}

export default Pemula
