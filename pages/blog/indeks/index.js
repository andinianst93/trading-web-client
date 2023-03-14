import React, { useState } from 'react'
import Container from '@/components/layout/container'
import Breadcrumb from '@/components/Breadcrumb'
import BlogCardCategory from '@/components/BlogCardCategory'
import SearchBlog from '@/components/SearchBlog'
import Pagination from '@/components/Pagination'
import { fetchAPI } from '@/config'
import HeroPage from '@/components/HeroPage'
import { paginate } from '@/components/Paginate'
import Link from 'next/link'
import Cta from '@/components/Cta'

const BlogIndex = ({ articles, categories }) => {
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
            <Breadcrumb title1='Blog' />
          </nav>
          <HeroPage
            title='Blog'
            desc='Pelajari strategi trading terbaik dan tips untuk meningkatkan keuntungan Anda dalam perdagangan pasar finansial global.'
          />
        </div>
        <section className='text-black py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6'>
          <div className='container'>
            <div>
              <div className='md:flex md:items-center md:justify-between'>
                <h2 className='text-xl font-bold mb-4'>Browse by Topic</h2>
                <SearchBlog />
              </div>
              <div className='grid grid-cols-2 lg:grid-cols-5 gap-x-2 gap-y-2 mt-4'>
                <Link
                  href='/blog'
                  className='text-black bg-white border-[0.5px] focus:ring-4 focus:outline-none focus:ring-blue-one rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-semibold'
                >
                  All
                </Link>
                <Link
                  href={`/blog/saham`}
                  className='text-black bg-white border-[0.5px] focus:ring-4 focus:outline-none focus:ring-blue-one rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-semibold'
                >
                  Saham
                </Link>
                <Link
                  href={`/blog/komoditas`}
                  className='text-black bg-white border-[0.5px] focus:ring-4 focus:outline-none focus:ring-blue-one rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-semibold'
                >
                  Komoditas
                </Link>
                <Link
                  href={`/blog/forex`}
                  className='text-black bg-white border-[0.5px] focus:ring-4 focus:outline-none focus:ring-blue-one rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-semibold'
                >
                  Forex
                </Link>
                <Link
                  href={`/blog/indeks`}
                  className='text-white bg-black border-[0.5px] focus:ring-4 focus:outline-none focus:ring-blue-one rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-semibold'
                >
                  Indeks
                </Link>
                <Link
                  href={`/blog/informasi-keuangan`}
                  className='text-black bg-white border-[0.5px] focus:ring-4 focus:outline-none focus:ring-blue-one rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-semibold'
                >
                  Informasi Keuangan
                </Link>
              </div>
            </div>
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
    `${process.env.NEXT_PUBLIC_API_URL}/api/articles?populate=*&sort[0]=updatedAt%3Adesc&filters[category][title][$eqi]=indeks`
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

export default BlogIndex
