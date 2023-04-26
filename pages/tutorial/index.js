import React from 'react'
import Container from '@/components/layout/container'
import HeroPage from '@/components/HeroPage'
import Breadcrumb from '@/components/Breadcrumb'
import Cta from '@/components/Cta'
import tutorial from '@/data/tutorialData'
import CategoryTutorial from '@/components/CategoryTutorial'
import Link from 'next/link'
import Image from 'next/image'
const allCategories = ['all', ...new Set(tutorial.map((item) => item.category))]
const Tutorial = () => {
  const [tutorialItem, setTutorialItem] = React.useState(tutorial)
  const [categories, setCategories] = React.useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      setTutorialItem(tutorial)
      return
    }
    const newTuto = tutorial.filter((item) => item.category === category)
    setTutorialItem(newTuto)
  }
  return (
    <Container>
      <div className='overflow-x-hidden '>
        {' '}
        <div className='bg-black bg-[url(/images/banner-bg.png)]'>
          <nav className='bg-black'>
            <Breadcrumb title1='Tutorial Aplikasi XXX' />
          </nav>
          <HeroPage
            title='Tutorial Aplikasi XXX'
            description='Panduan komprehensif untuk mempelajari dunia trading forex secara bertahap menggunakan aplikasi XXX.'
          />
        </div>
        <section className='text-black py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6'>
          <div className='container mt-12'>
            <CategoryTutorial
              categories={categories}
              filterItems={filterItems}
            />
          </div>
          <div className='grid gap-8 lg:grid-cols-3 mt-8'>
            {tutorialItem.map((i) => {
              return (
                <div className='p-4 bg-white rounded-lg shadow-md' key={i.id}>
                  <Image
                    src={i.image}
                    width={850}
                    height={150}
                    className='rounded-lg object-cover w-full h-[150px]'
                    alt='image'
                  ></Image>
                  <div className='flex justify-between items-center mt-4 mb-2 text-gray-500'>
                    <span className='capitalize'>{i.category}</span>
                  </div>
                  <h2 className='mb-2 text-xl font-bold tracking-tight text-gray-900'>
                    <Link href={`/tutorial/panduan-instalasi/${i.link}`}>
                      {i.name}
                    </Link>
                  </h2>
                </div>
              )
            })}
          </div>
        </section>
      </div>
      <Cta />
    </Container>
  )
}

export default Tutorial
