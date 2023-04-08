import React, { useState } from 'react'
import Container from '@/components/layout/container'
import HeroPage from '@/components/HeroPage'
import Breadcrumb from '@/components/Breadcrumb'
import { fetchAPI } from '@/config'
import Select from 'react-select'

const Test = ({ glosari }) => {
  const [selected, setSelected] = useState(null)
  const handleChange = (selectedOption) => {
    setSelected(selectedOption)
  }
  return (
    <Container>
      <div className='overflow-x-hidden '>
        <div className='bg-black bg-[url(/images/banner-bg.png)]'>
          <nav className='bg-black'>
            <Breadcrumb title1='Test' />
          </nav>
          <HeroPage title='Test' desc='Test Page' />
        </div>
        <section className='mx-auto flex flex-col items-center mt-8'>
          <div className='w-72'>
            <Select
              placeholder='Search'
              options={glosari.map((opt) => ({
                label: opt.attributes.title,
                value: opt.attributes.title,
              }))}
              id='long-value-select'
              instanceId='long-value-select'
              onChange={handleChange}
              autoFocus={true}
              isSearchable
            ></Select>
          </div>
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
      glosari: glosaricatRes.data,
    },
    revalidate: 1,
  }
}

export default Test
