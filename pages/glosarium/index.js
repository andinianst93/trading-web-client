import React, { useState, useEffect } from 'react'
import Container from '@/components/layout/container'
import GlosariCat from '@/components/GlosariCat'
import GlosariInfo from '@/components/GlosariInfo'
import HeroPage from '@/components/HeroPage'
import Link from 'next/link'
import Cta from '@/components/Cta'
import Breadcrumb from '@/components/Breadcrumb'
import GlosariSearch from '@/components/glosarisearch'
import { fetchAPI } from '../../config/index'
const Glosarium = ({ glosariInfo }) => {
  const allCategories = [
    'all',
    ...new Set(
      glosariInfo.map(
        (item) => item.attributes.letter.data?.attributes.alphabet
      )
    ),
  ]

  const [glosariItem, setglosariItem] = useState(glosariInfo)
  const [categories, setCategories] = useState(allCategories)
  const [currentCat, setCurrentCat] = useState('')

  const filterItems = (category) => {
    if (category === 'all') {
      setglosariItem(glosariInfo)
      return
    }
    const newItems = glosariInfo.filter(
      (item) => item.attributes.letter.data?.attributes.alphabet === category
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
        <section className='text-black mb-12'>
          <div className='container justify-center flex items-center'>
            <GlosariSearch />
          </div>
          <GlosariCat
            categories={categories}
            filterItems={filterItems}
            currentCat={currentCat}
          />
          <GlosariInfo glosaricat={glosariItem} />
        </section>
      </div>
    </Container>
  )
}
export async function getStaticProps() {
  const glosariInfoRes = await fetchAPI(
    `${process.env.NEXT_PUBLIC_API_URL}/api/glosariums?populate=*`
  )
  return {
    props: {
      glosariInfo: glosariInfoRes.data,
    },
    revalidate: 1,
  }
}

export default Glosarium
