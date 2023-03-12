import React from 'react'
import Link from 'next/link'

const GlosariInfo = ({ glosaricat }) => {
  const [filter, setFilter] = React.useState('')

  const searchText = (event) => {
    setFilter(event.target.value)
  }
  let dataSearch = glosaricat.filter((item) => {
    return Object.keys(item.attributes).some((key) =>
      item.attributes[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    )
  })
  return (
    <section className='px-8 mt-8'>
      <div className='max-w-[200px] md:left-[300px] lg:left-[370px] mb-8 absolute top-[500px] lg:top-[500px] md:top-[450px]'>
        <input
          aria-label='Search'
          type='text'
          value={filter}
          onChange={searchText.bind(this)}
          placeholder='Search'
          className='block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500'
        />
      </div>
      {!dataSearch.length && 'Please click All and try again.'}
      <div className='container grid md:grid-cols-2 lg:grid-cols-4'>
        {dataSearch.map((node, index) => {
          const title = node.attributes.title
          const slug = node.attributes.slug
          const alphabet = node.attributes.letter.data?.attributes.alphabet
          return (
            <article key={index} className='my-2'>
              <Link
                href={`/glosarium/${alphabet}/${slug}`}
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
