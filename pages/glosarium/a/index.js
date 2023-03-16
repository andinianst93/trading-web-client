import React, { useState, useEffect } from 'react'
import Container from '@/components/layout/container'
import GlosariCat from '@/components/GlosariCat'
import GlosariInfoAlphabet from '@/components/GlosariInfoAlphabet'

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
        <div className='container mx-auto'>
          <div className='flex justify-center items-center'>
            <GlosariSearch />
          </div>
          {glosariA.map((a) => {
            return (
              <div className='mt-8 px-[65px]' key={a.id}>
                <h2 className='text-4xl text-black font-bold text-gray-900 capitalize'>
                  {a.attributes.alphabet}
                </h2>
              </div>
            )
          })}
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
