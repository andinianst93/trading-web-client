import React from 'react'
import { fetchAPI } from '@/config'
import { Navigation } from '@/components/tutorial/Navigation'
import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import Container from '@/components/layout/container'
import Breadcrumb8 from '@/components/Breadcrumb8'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Cta from '@/components/Cta'
const navigation = [
  {
    title: 'Panduan Instalasi',
    link: '/panduan-instalasi',
    links: [
      {
        title: 'Cara Install Aplikasi Trading Forex XXX',
        href: `cara-install-aplikasi-trading-xxx`,
      },
      {
        title: 'Cara Instal MetaTrader 5 di PC',
        href: `cara-instal-metatrader-5-pc`,
      },
      {
        title: 'Cara Install MetaTrader 5 di Android',
        href: `cara-instal-metatrader-5-android`,
      },
      {
        title: 'Cara Install MetaTrader di iOS',
        href: 'cara-install-metatrader-5-ios',
      },
      {
        title: 'Cara Uninstall MetaTrader 5',
        href: 'cara-uninstall-metatrader-5',
      },
    ],
  },
  {
    title: 'Pembukaan Akun',
    link: '/pembukaan-akun',
    links: [
      {
        title: 'Perbedaan Akun Demo dan Real Forex',
        href: '/tutorial/pembukaan-akun/perbedaan-akun-demo-dan-real-forex',
      },
      {
        title: 'Cara Buka Akun Demo ',
        href: '/tutorial/pembukaan-akun/cara-buka-akun-demo',
      },
      {
        title: 'Cara Buka Akun Real',
        href: '/tutorial/pembukaan-akun/cara-buka-akun-real',
      },
      {
        title: 'Cara Verifikasi Akun',
        href: '/tutorial/pembukaan-akun/cara-verifikasi-akun',
      },
      {
        title: 'Cara Login Akun Forex',
        href: '/tutorial/pembukaan-akun/cara-login-akun-forex',
      },
    ],
  },
  {
    title: 'Kelola Akun Saya',
    link: '/kelola-akun-saya',
    links: [
      {
        title: 'Cara Ubah Password',
        href: '/tutorial/kelola-akun-saya/cara-ubah-password',
      },
      {
        title: 'Cara Ganti Email',
        href: '/tutorial/kelola-akun-saya/cara-ganti-email',
      },
      {
        title: 'Cara Ganti Nomor Telepon',
        href: '/tutorial/kelola-akun-saya/cara-ganti-nomor-telepon',
      },
      {
        title: 'Cara Membatalkan Akun',
        href: '/tutorial/kelola-akun-saya/cara-membatalkan-akun',
      },
      {
        title: 'Cara Subscribe Copy Trade',
        href: '/tutorial/kelola-akun-saya/cara-subscribe-copy-trade',
      },
    ],
  },
  {
    title: 'Kelola Dana Saya',
    link: '/tutorial/kelola-dana-saya',
    links: [
      {
        title: 'Cara Deposit Melalui Bank Lokal',
        href: '/tutorial/kelola-dana-saya/cara-deposit-melalui-bank-lokal',
      },
      {
        title: 'Cara Penarikan Dana di Aplikasi ',
        href: '/tutorial/kelola-dana-saya/cara-penarikan-dana-di-aplikasi',
      },
    ],
  },
  {
    title: 'Cara Trading',
    link: '/tutorial/cara-trading',
    links: [
      {
        title: 'Cara Memulai Trading Forex di Aplikasi XXX',
        href: '/tutorial/cara-trading/cara-memulai-trading-forex-di-aplikasi-xxx',
      },
      {
        title: 'Fitur-fitur Trading di XXX',
        href: '/tutorial/cara-trading/fitur-trading-xxx',
      },
      {
        title: 'Cara menggunakan stop loss dan take profit',
        href: '/tutorial/cara-trading/cara-menggunakan-stop-loss-dan-take-profit',
      },
      {
        title: 'Cara Menggunakan Signal Forex',
        href: '/tutorial/cara-trading/cara-menggunakan-sinyal-forex',
      },
    ],
  },
]
const SinglePi = ({ articles }) => {
  let router = useRouter()

  const art = articles.map((x) => x.attributes)
  const [{ title, description, body, updatedAt }] = art
  let allLinks = navigation.flatMap((section) => section.links)
  let linkIndex = allLinks.findIndex((link) => link.href === router.query.slug)
  let previousPage = allLinks[linkIndex - 1]
  let nextPage = allLinks[linkIndex + 1]

  return (
    <Container>
      <div className='overflow-x-hidden '>
        <nav>
          <div className='mx-auto max-w-7xl px-6 lg:flex lg:items-center lg:px-8 '>
            <Breadcrumb8
              title1='Tutorial'
              title2='Panduan Instalasi'
              title3={title}
              slug2='panduan-instalasi'
            />
          </div>
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
              {previousPage && (
                <div>
                  <dt className='font-display text-sm font-medium text-slate'>
                    Previous
                  </dt>
                  <dd className='mt-1'>
                    <Link
                      href={`${previousPage.href}`}
                      className='text-base font-semibold text-blue'
                    >
                      <span aria-hidden='true'>&larr;</span>{' '}
                      {previousPage.title}
                    </Link>
                  </dd>
                </div>
              )}
              {nextPage && (
                <div className='ml-auto text-right'>
                  <dt className='font-display text-sm font-medium text-slate'>
                    Next
                  </dt>
                  <dd className='mt-1'>
                    <Link
                      href={`${nextPage.href}`}
                      className='text-base font-semibold text-blue'
                    >
                      {nextPage.title}
                      <span aria-hidden='true'>&rarr;</span>
                    </Link>
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      </div>
      <Cta />
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
