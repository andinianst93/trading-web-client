import React from 'react'
import RelatedGloSingle from './RelatedGloSingle'
const RelatedGlo = ({ glosariRel }) => {
  const glosariNewRel = glosariRel.slice(0, 3)
  return (
    <section className='py-8 px-4 lg:py-0 lg:px-0 mx-auto '>
      <div className='mb-8 mx-auto flex items-center justify-center'></div>
      <h2 className='text-2xl text-black font-bold lg:px-0 px-4'>
        Artikel Terkait
      </h2>
      <div className='mt-6 mb-8 lg:flex lg:gap-x-2 mx-auto'>
        <div className='lg:grid lg:grid-flow-row lg:max-w-screen-2xl mx-auto lg:px-0 px-0'>
          <div className='grid gap-8 lg:grid-cols-3'>
            {glosariNewRel.map((a) => {
              return <RelatedGloSingle key={a.id} a={a} {...a} />
            })}
          </div>
        </div>
        {/* Banner */}
        <div className='lg:flex-auto lg:w-54 lg:ml-8 lg:my-12 lg:block hidden'></div>
      </div>
    </section>
  )
}

export default RelatedGlo
