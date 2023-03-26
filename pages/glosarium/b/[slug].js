import React from 'react'
import Link from 'next/link'
import Container from '@/components/layout/container'
import { fetchAPI } from '@/config'
import Image from 'next/image'
import Breadcrumb6 from '@/components/Breadcrumb6'
import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
const GlosariBSingle = ({ glosariBRes }) => {
  const glosariB = glosariBRes.map((x) => x.attributes)
  const [{ title, description, body }] = glosariB
  return (
    <Container>
      <div>
        <div>
          <Breadcrumb6
            title1='Glosarium'
            title2='B'
            slug='glosarium'
            slug2='b'
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
              <div className='mt-4 prose max-w-none leading-normal prose-h2:mt-[1em] prose-h2:mb-[0.5em] md:items-start w-full'>
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
      </div>
    </Container>
  )
}

export async function getServerSideProps({ params }) {
  const { slug } = params
  const glosariARes = await fetchAPI(
    `${process.env.NEXT_PUBLIC_API_URL}/api/glosariums?populate=*&filters[slug][$eq]=${slug}`
  )

  return {
    props: { glosariBRes: glosariARes.data },
  }
}

export default GlosariBSingle
