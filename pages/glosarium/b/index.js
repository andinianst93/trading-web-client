import React, { useState, useEffect } from 'react'
import Container from '@/components/layout/container'
import Link from 'next/link'
import Breadcrumb3 from '@/components/Breadcrumb3'
import GlosariSearch from '@/components/glosarisearch'
import { fetchAPI } from '../../../config/index'
const GlosariumB = ({ glosariA }) => {
  return (
    <Container>
      <div className='overflow-x-hidden '>
        <nav className='bg-black'>
          <Breadcrumb3 title1='Glosarium' title2='B' slug='glosarium' />
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
              return (
                <section className='px-8 mt-8'>
                  <div className='container grid lg:grid-cols-4'>
                    {' '}
                    {a.attributes.glosariums.data.map((item) => {
                      console.log(item)
                      return (
                        <article className='my-2' key={item.id}>
                          <Link
                            href={`/glosarium/b/${item.attributes.slug}`}
                            className='bg-white  hover:text-[#0000FF] hover:underline w-[550px] flex'
                          >
                            <div className='flex flex-col justify-between leading-normal'>
                              <h3 className='text-xl text-black font-thin text-gray-900 capitalize'>
                                {item.attributes.title}
                              </h3>
                            </div>
                          </Link>
                        </article>
                      )
                    })}
                  </div>
                </section>
              )
            })}
          </section>
        </div>
      </div>
    </Container>
  )
}
export async function getStaticProps() {
  const glosariARes = await fetchAPI(
    `${process.env.NEXT_PUBLIC_API_URL}/api/letters?populate=*&filters[alphabet][$contains]=b`
  )
  return {
    props: {
      glosariA: glosariARes.data,
    },
    revalidate: 1,
  }
}

export default GlosariumB
