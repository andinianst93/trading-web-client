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
      <div className='overflow-x-hidden '>
        <nav className='bg-black'>
          <Breadcrumb3 title1='Glosarium' title2='A' slug='glosarium' />
        </nav>
        <div>
          <section className='container text-black'>
            {glosariA.map((a) => {
              return <GlosariInfoAlphabet key={a.id} a={a} />
            })}
          </section>
        </div>
      </div>
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
