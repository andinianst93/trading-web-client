import React from 'react'
import Link from 'next/link'
import Container from '@/components/layout/container'
import { fetchAPI } from '@/config'
import Image from 'next/image'
import Breadcrumb6 from '@/components/Breadcrumb6'
import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import Cta from '@/components/Cta'
import RelatedGlo from '@/components/RelatedGlo'
const GlosariA = ({ glosariARes, glosariRel }) => {
  const glosariA = glosariARes.map((x) => x.attributes)
  const [{ title, description, body }] = glosariA
  return (
    <Container>
      <div>
        <div>
          <Breadcrumb6
            title1='Kamus'
            title2='A'
            slug='kamus'
            slug2='a'
            title3={title}
          />
        </div>
        <section className='text-black py-8 px-4 lg:py-8 lg:px-6 mx-auto'>
          <div className='flex justify-between px-4 mx-auto'>
            <article className='mx-auto w-full max-w-4xl'>
              <header className='mb-4 lg:mb-6'>
                <h1 className='mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl '>
                  {title}
                </h1>
              </header>
              <div className='mt-4 prose max-w-3xl leading-normal prose-h2:mt-[1em] prose-h2:mb-[0.5em] md:items-start w-full'>
                <ReactMarkdown
                  remarkPlugins={[remarkBreaks]}
                  className='hyperlink'
                >
                  {body}
                </ReactMarkdown>
              </div>
            </article>
          </div>
        </section>
        <section className='text-black py-8 px-4 lg:py-8 lg:px-6 mx-auto'>
          <div className='flex justify-between px-4 mx-auto'>
            <div className='mx-auto w-full max-w-4xl'>
              <RelatedGlo glosariRel={glosariRel} />
            </div>
          </div>
        </section>
        <Cta />
      </div>
    </Container>
  )
}

export async function getServerSideProps({ params }) {
  const { slug } = params
  const glosariARes = await fetchAPI(
    `${process.env.NEXT_PUBLIC_API_URL}/api/glosariums?populate=*&filters[slug][$eq]=${slug}`
  )
  const glosariRel = await fetchAPI(
    `${process.env.NEXT_PUBLIC_API_URL}/api/glosariums?populate=*&filters[letter][alphabet][$eqi]=a`
  )
  return {
    props: { glosariARes: glosariARes.data, glosariRel: glosariRel.data },
  }
}

export default GlosariA
