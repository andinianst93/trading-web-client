import React from 'react'
import Container from '@/components/layout/container'
import Hero from '@/components/aplikasi-trading/Hero'
import KeyBenefits from '@/components/aplikasi-trading/KeyBenefits'
import SecondaryFeatures from '@/components/aplikasi-trading/SecondaryFeatures'
import Faq from '@/components/aplikasi-trading/Faq'
import Cta from '@/components/aplikasi-trading/Cta'
const web = () => {
  return (
    <Container>
      <main>
        <Hero />
        <KeyBenefits />
        <SecondaryFeatures />
        <Cta />
        <Faq />
      </main>
    </Container>
  )
}

export default web
