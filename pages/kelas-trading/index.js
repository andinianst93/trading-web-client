import React from 'react'
import Container from '@/components/layout/container'
import HeroPage from '@/components/HeroPage'
import Breadcrumb from '@/components/Breadcrumb'
import Cta from '@/components/Cta'
const KelasTrading = () => {
  return (
    <Container>
      <div className='overflow-x-hidden '>
        {' '}
        <div className='bg-black bg-[url(/images/banner-bg.png)]'>
          <nav className='bg-black'>
            <Breadcrumb title1='Kelas' />
          </nav>
          <HeroPage
            title='Kelas Trading Forex'
            description='Panduan komprehensif untuk mempelajari dunia trading forex secara bertahap'
          />
        </div>
        <section className='text-black mb-12'>
          <div className='container mt-12'></div>
        </section>
      </div>
      <Cta />
    </Container>
  )
}

export default KelasTrading
