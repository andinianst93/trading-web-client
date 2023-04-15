import React from 'react'
import Link from 'next/link'
import Container from '@/components/layout/container'
import Breadcrumb7 from '@/components/breadcrumb7'
import pemula from '@/data/pemulaData'
import Cta from '@/components/Cta'
import { BsFillPlayCircleFill } from 'react-icons/bs'
import Image from 'next/image'
const PemulaSingle = () => {
  const art = pemula.map((x) => x)
  const [{ name, description, category, image, catLink }] = art
  return (
    <Container>
      <div>
        <nav>
          <Breadcrumb7
            title1='Panduan Trding'
            title2='Pemula'
            title3='Mengenal Forex'
            slug2='pemula'
          />
        </nav>
        <section className='text-black py-8 px-4 lg:py-8 lg:px-6 mx-auto '>
          <div className='flex justify-between px-4 mx-auto'>
            <div className='mx-auto w-full max-w-4xl'>
              <div>
                <Link
                  href={`/panduan-trading/pemula`}
                  className='text-base font-light capitalize text-gray-500 mb-2 hover:text-blue'
                >
                  {category}
                </Link>
              </div>
              <div className='group h-[450px] mt-4 relative block bg-black'>
                <Image
                  src={image}
                  width={850}
                  height={150}
                  className='absolute inset-0 h-full w-full object-cover opacity-40 transition-opacity group-hover:opacity-50'
                  alt='image'
                />
                <div className='relative p-8 lg:left-[10px] left-[10px]'>
                  <span className='text-white text-5xl '>
                    <BsFillPlayCircleFill />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='my-4 lg:my-6 mx-auto w-full max-w-4xl'>
            <h1 className='mb-4 text-xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl '>
              {name}
            </h1>
            <p className='mt-4'>{description}</p>
          </div>
        </section>
        <section className='text-black mx-auto w-full max-w-4xl'>
          <h2 className='text-xl text-black font-bold lg:px-0 px-4'>
            Baca Juga
          </h2>
          <div className='mt-6 mb-8 lg:flex lg:gap-x-2 mx-auto'>
            <article className='p-4 bg-white rounded-lg border border-gray-200 shadow-md'>
              <h2 className='mb-2 text-xl font-bold tracking-tight text-black'>
                <Link href='/blog/dasar-forex/apa-itu-forex'>
                  Apa Itu Forex?
                </Link>
              </h2>
              <div className='flex justify-start items-center mb-5 text-gray-500'>
                <span className='text-sm'>9 April 2023</span>
              </div>
              <Link
                href='/blog/dasar-forex/apa-itu-forex'
                className='text-blue-dark hover:underline'
              >
                {' '}
                Selengkapnya
              </Link>
            </article>
          </div>
        </section>
        <Cta />
      </div>
    </Container>
  )
}

export default PemulaSingle
