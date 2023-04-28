import React from 'react'
import { fetchAPI } from '@/config'
import { Navigation } from '@/components/tutorial/Navigation'
import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import Container from '@/components/layout/container'
import Breadcrumb from '@/components/Breadcrumb'
import Link from 'next/link'
import Cta from '@/components/Cta'
const navigation = [
  {
    title: 'Panduan Instalasi',
    link: 'tutorial/panduan-instalasi',
    links: [
      {
        title: 'Cara Install Aplikasi Trading Forex XXX',
        href: '/panduan-instalasi/cara-install-aplikasi-trading-xxx',
      },
      {
        title: 'Cara Instal MetaTrader 5 di PC',
        href: '/panduan-instalasi/cara-instal-metatrader-5-pc',
      },
      {
        title: 'Cara Install MetaTrader 5 di Android',
        href: '/panduan-instalasi/cara-instal-metatrader-5-android',
      },
      {
        title: 'Cara Install MetaTrader di iOS',
        href: '/panduan-instalasi/cara-install-metatrader-5-ios',
      },
      {
        title: 'Cara Uninstall MetaTrader 5',
        href: '/panduan-instalasi/cara-uninstall-metatrader-5',
      },
    ],
  },
  {
    title: 'Pembukaan Akun',
    link: 'tutorial/pembukaan-akun',
    links: [
      {
        title: 'Perbedaan Akun Demo dan Real Forex',
        href: '/pembukaan-akun/perbedaan-akun-demo-dan-real-forex',
      },
      {
        title: 'Cara Buka Akun Demo ',
        href: '/pembukaan-akun/cara-buka-akun-demo',
      },
      {
        title: 'Cara Buka Akun Real',
        href: '/pembukaan-akun/cara-buka-akun-real',
      },
      {
        title: 'Cara Verifikasi Akun',
        href: '/pembukaan-akun/cara-verifikasi-akun',
      },
      {
        title: 'Cara Login Akun Forex',
        href: '/pembukaan-akun/cara-login-akun-forex',
      },
    ],
  },
  {
    title: 'Kelola Akun Saya',
    link: 'tutorial/kelola-akun-saya',
    links: [
      {
        title: 'Cara Ubah Password',
        href: '/kelola-akun-saya/cara-ubah-password',
      },
      {
        title: 'Cara Ganti Email',
        href: '/kelola-akun-saya/cara-ganti-email',
      },
      {
        title: 'Cara Ganti Nomor Telepon',
        href: '/kelola-akun-saya/cara-ganti-nomor-telepon',
      },
      {
        title: 'Cara Membatalkan Akun',
        href: '/kelola-akun-saya/cara-membatalkan-akun',
      },
      {
        title: 'Cara Subscribe Copy Trade',
        href: '/kelola-akun-saya/cara-subscribe-copy-trade',
      },
    ],
  },
  {
    title: 'Kelola Dana Saya',
    link: 'tutorial/kelola-dana-saya',
    links: [
      {
        title: 'Cara Deposit Melalui Bank Lokal',
        href: '/kelola-dana-saya/cara-deposit-melalui-bank-lokal',
      },
      {
        title: 'Cara Penarikan Dana di Aplikasi ',
        href: '/kelola-dana-saya/cara-penarikan-dana-di-aplikasi',
      },
    ],
  },
  {
    title: 'Cara Trading',
    link: 'tutorial/cara-trading',
    links: [
      {
        title: 'Cara Memulai Trading Forex di Aplikasi XXX',
        href: '/cara-trading/cara-memulai-trading-forex-di-aplikasi-xxx',
      },
      {
        title: 'Fitur-fitur Trading di XXX',
        href: '/cara-trading/fitur-trading-xxx',
      },
      {
        title: 'Cara menggunakan stop loss dan take profit',
        href: '/cara-trading/cara-menggunakan-stop-loss-dan-take-profit',
      },
      {
        title: 'Cara Menggunakan Signal Forex',
        href: '/cara-trading/cara-menggunakan-sinyal-forex',
      },
    ],
  },
]
const TutorialIndex = () => {
  return (
    <Container>
      <div className='overflow-x-hidden '>
        <nav className='bg-black'>
          <div className='mx-auto max-w-7xl px-6 lg:flex lg:items-center lg:px-8 '>
            <Breadcrumb title1='Tutorial' />
          </div>
        </nav>
        <section className='bg-black'>
          <div className='mx-auto max-w-7xl py-8 px-6 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:pb-14'>
            <div className='mx-auto max-w-2xl lg:mx-0 lg:flex-auto'>
              <p className='mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                Esse id magna consectetur
              </p>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                Esse id magna consectetur fugiat non dolor in ad laboris magna
                laborum ea consequat. Nisi irure aliquip nisi adipisicing veniam
                voluptate id. In veniam incididunt ex veniam adipisicing sit.
              </p>
              <div className='mt-10 flex items-center gap-x-6'>
                <a
                  href='#'
                  className='rounded-md bg-blue px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                  Mulai Trading
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className='relative mx-auto flex max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-12'>
          <div className='hidden lg:relative lg:block lg:flex-none'>
            <div className='absolute inset-y-0 right-0 w-[50vw] bg-white' />
            <div className='sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto py-16 pl-0.5'>
              <div className='absolute top-28 bottom-0 right-0 hidden w-px bg-slate-800' />
              <Navigation
                navigation={navigation}
                className='w-64 pr-8 xl:w-72 xl:pr-16'
              />
            </div>
          </div>
          <main className='min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16'>
            <article>
              <header>
                <h1 className='font-display text-4xl font-bold tracking-tight text-black'>
                  Lorem, ipsum.
                </h1>
              </header>

              <div className='mt-12 prose max-w-none text-black leading-normal prose-h2:mt-[1em] prose-h2:mb-[0.5em] md:items-start w-full'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat libero sequi, nemo voluptatem saepe ad laudantium
                  itaque at exercitationem sint.
                </p>
              </div>
              <div className='mt-8 grid lg:grid-cols-2 gap-4'>
                <Link
                  href='/tutorial/panduan-instalasi'
                  className='block max-w-sm p-6 bg-white border border-gray-200 text-black rounded-lg shadow hover:text-blue'
                >
                  <h2 className='mb-2 text-2xl  font-bold tracking-tight text-gray-900'>
                    Panduan Instalasi
                  </h2>
                  <p className='font-normal '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                  </p>
                </Link>
                <Link
                  href='/tutorial/pembukaan-akun'
                  className='block max-w-sm p-6 text-black bg-white border border-gray-200 rounded-lg shadow hover:text-blue'
                >
                  <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                    Pembukaan Akun
                  </h2>
                  <p className='font-normal text-gray-700 dark:text-gray-400'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                  </p>
                </Link>
                <Link
                  href='/tutorial/kelola-akun-saya'
                  className='block max-w-sm p-6 text-black bg-white border border-gray-200 rounded-lg shadow hover:text-blue'
                >
                  <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                    Kelola Akun Saya
                  </h2>
                  <p className='font-normal text-gray-700 dark:text-gray-400'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                  </p>
                </Link>
                <Link
                  href='/tutorial/kelola-dana-saya'
                  className='block max-w-sm p-6 bg-white border text-black border-gray-200 rounded-lg shadow hover:text-blue'
                >
                  <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                    Kelola Dana Saya
                  </h2>
                  <p className='font-normal text-gray-700 dark:text-gray-400'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                  </p>
                </Link>
                <Link
                  href='/tutorial/cara-trading'
                  className='block max-w-sm p-6 bg-white border text-black border-gray-200 rounded-lg shadow hover:text-blue'
                >
                  <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                    Cara Trading
                  </h2>
                  <p className='font-normal text-gray-700 dark:text-gray-400'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                  </p>
                </Link>
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
                    href='/tutorial/panduan-instalasi'
                    className='text-base font-semibold text-blue hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300'
                  >
                    Panduan Instalasi {''}
                    <span aria-hidden='true'>&rarr;</span>
                  </Link>
                </dd>
              </div>
            </dl>
          </main>
        </div>
      </div>
      <Cta />
    </Container>
  )
}

export default TutorialIndex
