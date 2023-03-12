import React from 'react'
import Container from '@/components/layout/container'
import { useRouter } from 'next/router'
import { fetchAPI } from '@/config'
import BlogCardIndex from '@/components/BlogCardIndex'
import Link from 'next/link'
import { MdKeyboardArrowLeft } from 'react-icons/md'
const BlogIndexSearch = ({ articles }) => {
  const router = useRouter()
  return (
    <Container>
      <main className='pt-[2rem] md:px-48'>
        <Link
          href='/blog'
          className='text-black hover:text-blue-dark font-bold flex items-center mb-4'
        >
          <MdKeyboardArrowLeft className='mr-2' /> Back To Blog
        </Link>
        <h1>Search Results for {router.query.term}</h1>
        {articles.length === 0 && (
          <h3 className='text-black'>No articles to show</h3>
        )}
        <section className='min-h-screen text-black'>
          <div className='md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0 pt-8'>
            {articles.map((a) => {
              return <BlogCardIndex key={a.id} a={a} />
            })}
          </div>
        </section>
      </main>
    </Container>
  )
}
export async function getServerSideProps({ query: { term } }) {
  const articlesRes = await fetchAPI(
    `${process.env.NEXT_PUBLIC_API_URL}/api/articles?populate=*&filters[title][$containsi]=${term}`
  )
  return {
    props: {
      articles: articlesRes.data,
    },
  }
}
export default BlogIndexSearch
