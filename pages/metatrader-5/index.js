import React from 'react'
import Container from '@/components/layout/container'
import Hero from '@/components/mt5/Hero'
import KeyBenefits from '@/components/mt5/KeyBenefits'
import SecondaryFeatures from '@/components/mt5/SecondaryFeatures'
import Faq from '@/components/mt5/Faq'
import Cta from '@/components/mt5/Cta'
import Cta2 from '@/components/mt5/Cta2'
const mt = () => {
  return (
    <Container>
      <main>
        <Hero />
        <KeyBenefits />
        {/* <SecondaryFeatures /> */}
        <Cta2 />
        <Faq />
      </main>
    </Container>
  )
}

export default mt
