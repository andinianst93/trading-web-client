import React from 'react'
import Link from 'next/link'
const GlosariSearchResults = ({ a }) => {
  console.log(a)
  return (
    <section className='px-8'>
      <div className='container grid lg:grid-cols-4'>
        <article key={a.id}>
          <Link
            href={`/glosarium/a/${a.attributes.slug}`}
            className='bg-white  hover:text-[#0000FF] hover:underline w-[550px] flex'
          >
            <div className='flex flex-col justify-between leading-normal'>
              <h3 className='text-xl text-black font-thin text-gray-900 capitalize'>
                {a.attributes.title}
              </h3>
            </div>
          </Link>
        </article>
      </div>
    </section>
  )
}

export default GlosariSearchResults
