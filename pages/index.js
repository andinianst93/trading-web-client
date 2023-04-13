import Head from 'next/head'
import { Inter } from 'next/font/google'
import Container from '@/components/layout/container'
import Hero from '@/components/Hero'
import Sectionone from '@/components/Sectionone'
import Sectiontwo from '@/components/sectiontwo'
import Sectionthree from '@/components/Sectionthree'
import Testimonial from '@/components/Testimonial'
import Faq from '@/components/Faq'
import BlogCard from '@/components/BlogCard'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container>
        <div className='overflow-x-hidden'>
          <Hero />
          {/* <Sectionone />
          <Sectiontwo />
          <Sectionthree />
          <section className='lg:py-[60px] my-[110px] px-5'>
            <Testimonial className='mx-auto max-w-[1440px] py-14 md:py-20 rounded-[32px]' />
          </section>
          <Faq showTitle={true} />
          <BlogCard /> */}
        </div>
      </Container>
    </>
  )
}
