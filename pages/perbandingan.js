import React from 'react'
import Container from '@/components/layout/container'
import Perbandingan from '@/components/perbandingan/Perbandingan'
import Hero from '@/components/perbandingan/Hero'
const perbandingan = () => {
  return (
    <Container>
      <main className='border-b border-gray-two'>
        <Hero />
        <Perbandingan />
      </main>
    </Container>
  )
}

export default perbandingan
