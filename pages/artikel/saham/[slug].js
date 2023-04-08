import React from 'react'
import { fetchAPI } from '@/config'
import Container from '@/components/layout/container'
import Breadcrumb5 from '@/components/Breadcrumb5'
import Article from '@/components/Article'

import Cta from '@/components/Cta'
const Saham = ({ articles }) => {
  const art = articles.map((x) => x.attributes)
  const [{ title, category }] = art
  return (
    <Container>
      <div className='overflow-x-hidden '>
        <nav>
          <Breadcrumb5
            title1='Artikel'
            title2={category.data.attributes.title}
            title3={title}
            slug2={category.data.attributes.slug}
          />
        </nav>
        <Article articles={articles} />

        <Cta />
      </div>
    </Container>
  )
}

export async function getServerSideProps({ params }) {
  const { slug } = params
  const articlesRes = await fetchAPI(
    `${process.env.NEXT_PUBLIC_API_URL}/api/articles?populate=*&filters[slug][$eq]=${slug}`
  )

  return {
    props: { articles: articlesRes.data },
  }
}
export default Saham
