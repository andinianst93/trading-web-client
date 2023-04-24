import React from 'react'
import Container from '@/components/layout/container'
import Hero from '@/components/mt5/Hero'
import KeyBenefits from '@/components/mt5/KeyBenefits'
import SecondaryFeatures from '@/components/mt5/SecondaryFeatures'
import Faq from '@/components/mt5/Faq'
import Cta from '@/components/mt5/Cta'
const mt = () => {
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

export default mt
