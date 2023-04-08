import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Moment from 'react-moment'
const BlogCardCategory = ({ a }) => {
  return (
    <article className='p-6 bg-white rounded-lg shadow-md '>
      <Image
        src={a.attributes.image.data.attributes.url}
        width={850}
        height={150}
        className='rounded-lg object-cover w-full h-[250px]'
        alt={a.attributes.title}
      ></Image>
      <div className='flex justify-between items-center my-5 text-gray-500'>
        <span className='bg-primary-100 text-primary-800 text-base font-medium inline-flex items-center px-2.5 py-0.5 rounded capitalize'>
          {a.attributes.category.data?.attributes.title}
        </span>
        <Moment format='D MMM YYYY' className='text-base'>
          {a.attributes.updatedAt}
        </Moment>
      </div>

      <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
        <Link
          href={`/artikel/${a.attributes.category.data?.attributes.slug}/${a.attributes.slug}`}
        >
          {a.attributes.title}
        </Link>
      </h2>
      <p className='mb-5 font-light text-gray-500 line-clamp-2'>
        {a.attributes.description}
      </p>
      <div className='flex justify-between items-center'>
        <p>{a.attributes.author.data.attributes.name}</p>
        <Link
          href={`/artikel/${a.attributes.category.data?.attributes.slug}/${a.attributes.slug}`}
          className='inline-flex items-center font-medium text-primary-600 hover:underline'
        >
          Read more
          <svg
            className='ml-2 w-4 h-4'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
              clipRule='evenodd'
            ></path>
          </svg>
        </Link>
      </div>
    </article>
  )
}

export default BlogCardCategory
