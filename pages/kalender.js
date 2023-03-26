import React from 'react'
import Container from '@/components/layout/container'
import HeroPage from '@/components/HeroPage'
import Breadcrumb from '@/components/Breadcrumb'
import Kalendermq from '@/components/Kalender'

const kalenderEkonomi = () => {
  return (
    <Container>
      <div className='overflow-x-hidden '>
        {' '}
        <div className='bg-black bg-[url(/images/banner-bg.png)]'>
          <nav className='bg-black'>
            <Breadcrumb title1='Kalender Ekonomi' />
          </nav>
          <HeroPage title='Kalender Ekonomi' />
        </div>
        <section className='text-black mb-12'>
          <div className='container mt-12'>
            <Kalendermq />
          </div>
        </section>
      </div>
    </Container>
  )
}

export default kalenderEkonomi
