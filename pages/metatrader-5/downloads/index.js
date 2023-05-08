import React from 'react'
import Container from '@/components/layout/container'
import Cta from '@/components/downloadsMt5/Cta'
import LearnMore from '@/components/downloadsMt5/LearnMore'
import Hero from '@/components/downloadsMt5/Hero'
const mtdownload = () => {
  return (
    <Container>
      <main>
        <Hero />
        <Cta />
        <LearnMore />
      </main>
    </Container>
  )
}

export default mtdownload
