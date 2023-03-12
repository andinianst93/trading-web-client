import React from 'react'
import Link from 'next/link'
const TopBlog = ({ a }) => {
  return (
    <>
      {a.attributes.popular === true && (
        <div className='lg:block lg:ml-auto hidden'>
          <div className='flex flex-col rounded-lg bg-white md:max-w-md md:flex-row mb-2'>
            <div className='flex flex-col justify-start px-6 py-2'>
              <Link href='/#' className='hover:text-blue'>
                <h5 className='text-sm font-medium line-clamp-3'>
                  {a.attributes.title}
                </h5>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default TopBlog
