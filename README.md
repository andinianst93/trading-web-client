import React, { useState } from 'react'
import Container from '@/components/layout/container'
import Breadcrumb from '@/components/Breadcrumb'
import BlogCardDetails from '@/components/BlogCardDetails'
import { fetchAPI } from '@/config'
import HeroPage from '@/components/HeroPage'

const BlogIndex = ({ articles }) => {
return (
<Container>
{' '}
<div className='overflow-x-hidden '>
<div className='bg-black bg-[url(/images/banner-bg.png)]'>
<nav className='bg-black'>
<Breadcrumb title1='Blog' />
</nav>
<HeroPage
            title='Blog'
            desc='Pelajari strategi trading terbaik dan tips untuk mengelola risiko dan meningkatkan keuntungan Anda dalam perdagangan pasar finansial global.'
          />
</div>
<section className='text-black py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
<div className='grid gap-8 lg:grid-cols-2'>
{articles.data.map((a) => {
return <BlogCardDetails key={a.id} a={a} />
})}
</div>
</section>
</div>
</Container>
)
}

export async function getStaticProps() {
const articlesRes = await fetchAPI(
`${process.env.NEXT_PUBLIC_API_URL}/api/articles?populate=*&sort[0]=updatedAt%3Adesc`
)

return {
props: {
articles: articlesRes,
},
revalidate: 1,
}
}

export default BlogIndex
