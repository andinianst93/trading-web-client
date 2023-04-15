import React from 'react'
import Container from '@/components/layout/container'
import HeroPage from '@/components/HeroPage'
import Cta from '@/components/Cta'
import Breadcrumb3 from '@/components/Breadcrumb3'
import Link from 'next/link'
import pemula from '@/data/pemulaData'
import Image from 'next/image'
import { BsFillPlayCircleFill } from 'react-icons/bs'
const Pemula = () => {
  return (
    <Container>
      <div className='overflow-x-hidden '>
        {' '}
        <div className='bg-black bg-[url(/images/banner-bg.png)]'>
          <nav className='bg-black'>
            <Breadcrumb3
              title1='Panduan Trading'
              title2='Pemula'
              slug='panduan-trading'
            />
          </nav>
          <HeroPage
            title='Pemula'
            desc='Panduan komprehensif untuk mempelajari trading forex untuk pemula.'
          />
        </div>
        <section className='text-black py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6'>
          <div className='grid gap-8 lg:grid-cols-3 mt-8'>
            {pemula.map((i, index) => {
              return (
                <div key={index}>
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
                    <div className='relative p-8 lg:left-[100px] left-[120px]'>
                      <span className='text-white text-5xl '>
                        <BsFillPlayCircleFill />
                      </span>
                    </div>
                  </Link>
                  <div className='mt-4 text-sm'>{i.category}</div>
                  <Link href={`/panduan-trading/${i.catLink}/${i.link}`}>
                    <div className='text-lg text-black font-semibold mt-1'>
                      {i.name}
                    </div>
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

export default Pemula
