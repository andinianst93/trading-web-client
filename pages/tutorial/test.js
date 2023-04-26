import React from 'react'
import Link from 'next/link'
const test = () => {
  return (
    <div className='relative mx-auto flex max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-12'>
      <div className='hidden lg:relative lg:block lg:flex-none'>
        <div className='absolute inset-y-0 right-0 w-[50vw] bg-slate dark:hidden' />
        <div className='sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto py-16 pl-0.5'>
          <div className='absolute top-16 bottom-0 right-0 hidden h-12 w-px bg-gradient-to-t from-slate dark:block' />
          <div className='absolute top-28 bottom-0 right-0 hidden w-px bg-slate-800 dark:block' />
          <div className='w-64 pr-8 xl:w-72 xl:pr-16' />
        </div>
      </div>
      <div className='min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16'>
        <article>
          <header className='mb-9 space-y-1'>
            <p className='font-display text-sm font-medium text-black'>
              contoh
            </p>

            <h1 className='font-display text-3xl tracking-tight text-slate'>
              contoh
            </h1>
          </header>

          <p>artikel</p>
        </article>
        <dl className='mt-12 flex border-t border-slate pt-6'>
          <div>
            <dt className='font-display text-sm font-medium text-slate'>
              Previous
            </dt>
            <dd className='mt-1'>
              <Link
                href='#'
                className='text-base font-semibold text-slate hover:text-slate'
              >
                <span aria-hidden='true'>&larr;</span> judul
              </Link>
            </dd>
          </div>
          <div className='ml-auto text-right'>
            <dt className='font-display text-sm font-medium text-slate'>
              Next
            </dt>
            <dd className='mt-1'>
              <Link
                href='#'
                className='text-base font-semibold text-slate hover:text-slate-600'
              >
                judul <span aria-hidden='true'>&rarr;</span>
              </Link>
            </dd>
          </div>
        </dl>
      </div>
      <div className='hidden xl:sticky xl:top-[4.5rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6'>
        <nav aria-labelledby='on-this-page-title' className='w-56'>
          <div>
            <h2
              id='on-this-page-title'
              className='font-display text-sm font-medium text-slate'
            >
              On this page
            </h2>
            <ol role='list' className='mt-4 space-y-3 text-sm'>
              <li>
                <h3>
                  <Link
                    href='#'
                    className='font-normal text-slate-500 hover:text-slate'
                  >
                    sdfsfsdfsdf
                  </Link>
                </h3>
                <ol role='list' className='mt-2 space-y-3 pl-5 text-slate-500'>
                  <li>
                    <Link href='#' className='hover:text-slate-600'>
                      asdasda
                    </Link>
                  </li>
                </ol>
              </li>
            </ol>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default test
