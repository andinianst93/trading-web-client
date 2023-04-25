import React from 'react'
import Container from '@/components/layout/container'
import Hero from '@/components/akun-real/Hero'
import How from '@/components/akun-real/How'
import Why from '@/components/akun-real/Why'
import Cta from '@/components/akun-real/Cta'
import Faq from '@/components/akun-real/Faq'
const AkunReal = () => {
  return (
    <Container>
      <main>
        <Hero />
        <Why />
        <How />
        <Cta />
        <Faq />
      </main>
    </Container>
  )
}

export default AkunReal
