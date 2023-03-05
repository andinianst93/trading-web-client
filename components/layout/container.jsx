import React from 'react'
import Header from './header'
import Footer from './footer'
import Sidebar from './sidebar'
const Container = ({ children }) => {
  return (
    <div className='bg-white font-mulish w-full text-base text-gray antialiased'>
      <Header className='sticky-header' />
      <Sidebar />
      <main>
        {children}
        <Footer />
      </main>
    </div>
  )
}

export default Container
