import React, { useState } from 'react'
import Container from '@/components/layout/container'
import Breadcrumb3 from '@/components/Breadcrumb3'
import BlogCardCategory from '@/components/BlogCardCategory'
import SearchBlog from '@/components/SearchBlog'
import Pagination from '@/components/Pagination'
import { fetchAPI } from '@/config'
import HeroPage from '@/components/HeroPage'
import { paginate } from '@/components/Paginate'
import Link from 'next/link'
import Cta from '@/components/Cta'
const PerakIndex = ({ articles, categories }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 10
  const onPageChange = (page) => {
    setCurrentPage(page)
  }
  const paginatedPosts = paginate(articles, currentPage, pageSize)

  return (
    <Container>
      <div className='overflow-x-hidden '>
        <div className='bg-black bg-[url(/images/banner-bg.png)]'>
          <nav className='bg-black'>
            <Breadcrumb3 title1='Artikel' slug='artikel' title2='Perak' />
          </nav>
          <HeroPage title='Perak' />
        </div>
        <section className='text-black py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6'>
          <div className='container'>
            <SearchBlog />
          </div>
          {/* Articles */}
          <div>
            <div className='grid gap-8 lg:grid-cols-2'>
              {paginatedPosts.map((a) => {
                return <BlogCardCategory key={a.id} a={a} />
              })}
            </div>
          </div>
          <div className='flex mt-8 justify-center items-center'>
            <Pagination
              items={articles.length}
              currentPage={currentPage}
              pageSize={pageSize}
              onPageChange={onPageChange}
            />
          </div>
        </section>
        <Cta />
      </div>
    </Container>
  )
}

export async function getStaticProps() {
  const articlesRes = await fetchAPI(
    `${process.env.NEXT_PUBLIC_API_URL}/api/articles?populate=*&sort[0]=updatedAt%3Adesc&filters[category][title][$eqi]=perak`
  )
  const categoriesRes = await fetchAPI(
    `${process.env.NEXT_PUBLIC_API_URL}/api/categories`
  )
  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
    },
    revalidate: 1,
  }
}

export default PerakIndex
