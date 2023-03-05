import React, { useState, useEffect } from 'react'
import Container from '@/components/layout/container'
import GlosariCat from '@/components/GlosariCat'
import GlosariInfo from '@/components/GlosariInfo'
import HeroPage from '@/components/HeroPage'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import GlosariSearch from '@/components/glosarisearch'
import { fetchAPI } from '../../config/index'
const Glosarium = ({ glosaricat }) => {
  const allCategories = [
    'all',
    ...new Set(
      glosaricat.map((item) => item.attributes.letter.data.attributes.alphabet)
    ),
  ]

  const [glosariItem, setglosariItem] = useState(glosaricat)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      setglosariItem(glosaricat)
      return
    }
    const newItems = glosaricat.filter(
      (item) => item.attributes.letter.data.attributes.alphabet === category
    )
    setglosariItem(newItems)
  }

  return (
    <Container>
      <div className='overflow-x-hidden '>
        <div className='bg-black bg-[url(/images/banner-bg.png)]'>
          <nav className='bg-black'>
            <Breadcrumb title1='Glosarium' />
          </nav>
          <HeroPage
            title='Kamus Forex'
            desc=' Kami telah menyusun Glosarium Forex ini untuk mencoba membantu Anda dengan lebih baik memahami pasar FX dan informasi lain tentang pasar.'
          />
        </div>
        <section className='text-black'>
          <GlosariCat categories={categories} filterItems={filterItems} />
          <GlosariInfo glosaricat={glosariItem} />
        </section>
      </div>
    </Container>
  )
}
export async function getStaticProps() {
  const glosaricatRes = await fetchAPI(
    `${process.env.NEXT_PUBLIC_API_URL}/api/glosariums?populate=*`
  )
  return {
    props: {
      glosaricat: glosaricatRes.data,
    },
    revalidate: 1,
  }
}

export default Glosarium
