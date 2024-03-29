import React from 'react'
import Link from 'next/link'
const GlosariInfoAlphabet = ({ a }) => {
  return (
    <section className='px-8 mt-8'>
      <div className='container grid lg:grid-cols-4'>
        {' '}
        {a.attributes.glosariums.data.map((item) => {
          return (
            <article className='my-2' key={item.id}>
              <Link
                href={`/kamus/a/${item.attributes.slug}`}
                className='bg-white  hover:text-[#0000FF] hover:underline w-[550px] flex'
              >
                <div className='flex flex-col justify-between leading-normal'>
                  <h3 className='text-xl text-black font-thin text-gray-900 capitalize'>
                    {item.attributes.title}
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

export default GlosariInfoAlphabet
