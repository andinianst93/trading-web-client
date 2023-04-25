import React from 'react'
import Container from '@/components/layout/container'
import Hero from '@/components/web-trading/Hero'
import KeyBenefits from '@/components/web-trading/KeyBenefits'
import SecondaryFeatures from '@/components/web-trading/SecondaryFeatures'
import Faq from '@/components/web-trading/Faq'
import Cta from '@/components/web-trading/Cta'
const web = () => {
  return (
    <Container>
      <main>
        <Hero />
        <KeyBenefits />
        {/* <SecondaryFeatures /> */}
        <Cta />
        <Faq />
      </main>
    </Container>
  )
}

export default web
