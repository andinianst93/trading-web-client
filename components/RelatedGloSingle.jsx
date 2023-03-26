import React from 'react'
import Link from 'next/link'
import Moment from 'react-moment'

const RelatedGloSingle = ({ a }) => {
  console.log(a)
  return (
    <article className='p-6 bg-white rounded-lg border border-gray-200 shadow-md'>
      <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
        <Link
          href={`/glosarium/${a.attributes.letter.data.attributes.slug}/${a.attributes.slug}`}
        >
          {a.attributes.title}
        </Link>
      </h2>
      <div className='flex justify-start items-center mb-5 text-gray-500'>
        <span className='text-sm'>
          {' '}
          <Moment format='D MMM YYYY'>{a.attributes.updatedAt}</Moment>
        </span>
      </div>
      <p className='mb-5 font-light text-gray-500 line-clamp-3'>
        {a.attributes.description}
      </p>
      <Link
        href={`/glosarium/${a.attributes.letter.data.attributes.slug}/${a.attributes.slug}`}
        className='text-blue-dark hover:underline'
      >
        Selengkapnya
      </Link>
    </article>
  )
}

export default RelatedGloSingle
