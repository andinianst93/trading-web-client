import React from 'react'
import Link from 'next/link'
import Container from '@/components/layout/container'
import { fetchAPI } from '@/config'
import Image from 'next/image'
import Breadcrumb5 from '@/components/Breadcrumb5'
const EventPage = ({ glosariARes }) => {
  const glosariA = glosariARes.map((x) => x.attributes)
  const [{ title, description }] = glosariA
  return (
    <Container>
      <div>
        <div>
          <Breadcrumb5
            title1='Glosarium'
            title2='A'
            slug='glosarium'
            slug2='a'
            title3={title}
          />
        </div>
        <section className='text-black py-8 px-4 lg:py-8 lg:px-6 mx-auto'>
          <div className='mx-auto w-full max-w-4xl'>
            <h1 className='text-black'>{title}</h1>
            <p className='text-black'>{description}</p>
          </div>
        </section>
      </div>
    </Container>
  )
}

export async function getServerSideProps({ params }) {
  const { slug } = params
  const glosariARes = await fetchAPI(
    `${process.env.NEXT_PUBLIC_API_URL}/api/glosariums?populate=*&filters[slug][$eq]=${slug}`
  )

  return {
    props: { glosariARes: glosariARes.data },
  }
}

export default EventPage
