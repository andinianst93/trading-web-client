import React from 'react'
import Link from 'next/link'
import Container from '@/components/layout/container'
import { fetchAPI } from '@/config'
import Image from 'next/image'
import Breadcrumb4 from '@/components/Breadcrumb4'
const EventPage = ({ glosariARes }) => {
  const glosariA = glosariARes.map((x) => x.attributes)
  const [{ title, description }] = glosariA
  return (
    <Container>
      <main>
        <div className='bg-black'>
          <Breadcrumb4
            title1='Glosarium'
            title2='A'
            slug='glosarium'
            slug2='a'
            title3={title}
          />
        </div>
        <section>
          <h1 className='text-black'>{title}</h1>
          <p className='text-black'>{description}</p>
        </section>
      </main>
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
