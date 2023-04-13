import React from 'react'
import Link from 'next/link'

const GlosariInfo = ({ glosaricat }) => {
  return (
    <section className='mt-8'>
      <div className='container grid md:grid-cols-2 lg:grid-cols-4'>
        {glosaricat.map((node, index) => {
          const title = node.attributes.title
          const slug = node.attributes.slug
          const alphabet = node.attributes.letter.data?.attributes.alphabet
          return (
            <article key={index} className='my-2'>
              <Link
                href={`/kamus/${alphabet}/${slug}`}
                className='bg-white  hover:text-[#0000FF] hover:underline w-[550px] flex'
              >
                <div className='flex flex-col justify-between leading-normal'>
                  <h3 className='text-xl font-thin text-gray-900 capitalize'>
                    {title}
                  </h3>
                </div>
              </Link>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default GlosariInfo
