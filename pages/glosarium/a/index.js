import React, { useState, useEffect } from 'react'
import Container from '@/components/layout/container'
import GlosariCat from '@/components/GlosariCat'
import GlosariInfoAlphabet from '@/components/GlosariInfoAlphabet'
import HeroPage from '@/components/HeroPage'
import Link from 'next/link'
import Breadcrumb3 from '@/components/Breadcrumb3'
import GlosariSearch from '@/components/glosarisearch'
import { fetchAPI } from '../../../config/index'
const Glosarium = ({ glosariA }) => {
  return (
    <Container>
      <nav className='bg-black'>
        <Breadcrumb3 title1='Glosarium' title2='A' slug='glosarium' />
      </nav>
      <main>
        <HeroPage title='A' />
        <section className='container text-black'>
          <div className='pt-8'>
            <Link
              href='/glosarium'
              className='bg-secondary text-white px-2 py-2 rounded-md hover:bg-white hover:text-secondary hover:border-2'
            >
              Kembali ke Glosarium
            </Link>
          </div>
          {glosariA.map((a) => {
            return <GlosariInfoAlphabet key={a.id} a={a} />
          })}
        </section>
      </main>
    </Container>
  )
}
export async function getStaticProps() {
  const glosariARes = await fetchAPI(
    `${process.env.NEXT_PUBLIC_API_URL}/api/letters?populate=*&filters[alphabet][$contains]=a`
  )
  return {
    props: {
      glosariA: glosariARes.data,
    },
    revalidate: 1,
  }
}

export default Glosarium
