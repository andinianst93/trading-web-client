import React from 'react'
import { fetchAPI } from '@/config'
import { Navigation } from '@/components/tutorial/Navigation'
import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import Container from '@/components/layout/container'
import Breadcrumb8 from '@/components/Breadcrumb8'
import Link from 'next/link'
const navigation = [
  {
    title: 'Panduan Instalasi',
    links: [
      {
        title: 'Cara Instal MetaTrader 5 di PC',
        href: '/panduan-instalasi/cara-instal-metatrader-5-pc',
      },
      {
        title: 'Cara Instal MetaTrader 5 di Android',
        href: '/panduan-instalasi/cara-instal-metatrader-5-android',
      },
      {
        title: 'Cara Instal MetaTrader 5 di iOS',
        href: '/panduan-instalasi/cara-instal-metatrader-5-ios',
      },
      {
        title: 'Cara Uninstall MetaTrader 5',
        href: '/panduan-instalasi/cara-uninstall-metatrader-5',
      },
    ],
  },
]
const SinglePi = ({ articles }) => {
  const art = articles.map((x) => x.attributes)
  const [{ title, description, body, updatedAt }] = art
  return (
    <Container>
      <div className='overflow-x-hidden '>
        <nav>
          <Breadcrumb8
            title1='Tutorial'
            title2='Panduan Instalasi'
            title3={title}
            slug2='panduan-instalasi'
          />
        </nav>
        <div className='relative mx-auto flex max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-12'>
          <div className='hidden lg:relative lg:block lg:flex-none'>
            <div className='absolute inset-y-0 right-0 w-[50vw] bg-white' />
            <div className='sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto py-16 pl-0.5'>
              <div className='absolute top-16 bottom-0 right-0 hidden h-12 w-px bg-gradient-to-t from-slate dark:block' />
              <div className='absolute top-28 bottom-0 right-0 hidden w-px bg-slate-800' />
              <Navigation
                navigation={navigation}
                className='w-64 pr-8 xl:w-72 xl:pr-16'
              />
            </div>
          </div>
          <div className='min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16'>
            <article>
              <header>
                <p className='text-base font-medium text-blue mb-4'>
                  Panduan Instalasi
                </p>
                <h1 className='font-display text-4xl font-bold tracking-tight text-black'>
                  {title}
                </h1>
              </header>

              <div className='prose max-w-none leading-normal prose-h2:mt-[1em] prose-h2:mb-[0.5em] md:items-start w-full'>
                <ReactMarkdown
                  remarkPlugins={[remarkBreaks]}
                  className='hyperlink'
                >
                  {body}
                </ReactMarkdown>
              </div>
            </article>
            <dl className='mt-12 flex border-t border-slate-200 pt-6 dark:border-slate-800'>
              {/* <div>
            <dt className='font-display text-sm font-medium text-slate-900 dark:text-white'>
              Previous
            </dt>
            <dd className='mt-1'>
              <Link
                href='#'
                className='text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300'
              >
                <span aria-hidden='true'>&larr;</span> Tutorial
              </Link>
            </dd>
          </div> */}

              <div className='ml-auto text-right'>
                <dt className='font-display text-sm font-medium text-slate-900 dark:text-white'>
                  Next
                </dt>
                <dd className='mt-1'>
                  <Link
                    href='#'
                    className='text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300'
                  >
                    Cara Instal MetaTrader di Android{' '}
                    <span aria-hidden='true'>&rarr;</span>
                  </Link>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </Container>
  )
}

export async function getServerSideProps({ params }) {
  const { slug } = params
  const articlesRes = await fetchAPI(
    `${process.env.NEXT_PUBLIC_API_URL}/api/tutorials?populate=*&filters[slug][$eq]=${slug}`
  )

  return {
    props: { articles: articlesRes.data },
  }
}
export default SinglePi
