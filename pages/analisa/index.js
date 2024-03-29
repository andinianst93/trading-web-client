import React, { useState } from 'react'
import Container from '@/components/layout/container'
import Breadcrumb from '@/components/Breadcrumb'
import SearchBlog from '@/components/SearchBlog'
import Pagination from '@/components/Pagination'
import { fetchAPI } from '@/config'
import HeroPage from '@/components/HeroPage'
import { paginate } from '@/components/Paginate'
import TopBlog from '@/components/TopBlog'
import Link from 'next/link'
import Cta from '@/components/Cta'
import BeritaCards from '@/components/BeritaCards'
const AnalisaIndex = ({ beritas }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 10
  const onPageChange = (page) => {
    setCurrentPage(page)
  }
  const paginatedPosts = paginate(beritas, currentPage, pageSize)

  return (
    <Container>
      <div className='overflow-x-hidden '>
        <div className='bg-black bg-[url(/images/banner-bg.png)]'>
          <nav className='bg-black'>
            <Breadcrumb title1='Analisa' />
          </nav>
          <HeroPage
            title='Analisa'
            desc='Analisa forex terbaru yang mencakup analisa harian dan mingguan, serta peluang trading forex (volatilitas pasar, kondisi pasar, dan pemantauan berita). Tak hanya forex, ada juga analisa harian tentang emas, saham, index, dan minyak.'
          />
        </div>
        <section className='text-black py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6'>
          <div className='container'>
            <div className='md:flex md:items-center md:justify-between'>
              {/* search box */}
            </div>
          </div>

          {/* Articles */}

          <div className='lg:grid lg:grid-flow-col'>
            <div className='border-r-[0.2px] border-gray-three'>
              <h2 className='text-xl font-bold mb-4 mt-8 mx-4'>
                Analisa Forex Terbaru
              </h2>
              <div className='grid gap-8 lg:grid-cols-2 '>
                {paginatedPosts.map((a) => {
                  return <BeritaCards key={a.id} a={a} />
                })}
              </div>
            </div>
            <div className='lg:max-w-[280px] lg:mt-8'>
              <h2 className='lg:text-lg lg:ml-4 lg:font-bold lg:block hidden '>
                Top Posts
              </h2>
              {beritas.map((a) => {
                return <TopBlog key={a.id} a={a} />
              })}
            </div>
          </div>

          <section className='flex mt-8 justify-center items-center'>
            <Pagination
              items={beritas.length}
              currentPage={currentPage}
              pageSize={pageSize}
              onPageChange={onPageChange}
            />
          </section>
        </section>
        <Cta />
      </div>
    </Container>
  )
}

export async function getStaticProps() {
  const beritaRes = await fetchAPI(
    `${process.env.NEXT_PUBLIC_API_URL}/api/beritas?populate=*&sort[0]=updatedAt%3Adesc&filters[navigation][title][$eqi]=analisa`
  )

  return {
    props: {
      beritas: beritaRes.data,
    },
    revalidate: 1,
  }
}

export default AnalisaIndex
