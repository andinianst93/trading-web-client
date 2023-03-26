import React from 'react'
import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import Sidebar from './sidebar'
const Container = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <div className='bg-white font-mulish w-full text-base text-gray antialiased'>
        <Header className='sticky-header' />
        <Sidebar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
Container.defaultProps = {
  title: 'ADN: Web Demo',
  description: 'ADN web demo.',
}
export default Container
