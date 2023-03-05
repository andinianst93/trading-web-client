import React from 'react'

const GlosariCat = ({ categories, filterItems }) => {
  const [active, setActive] = React.useState(false)

  return (
    <>
      <section className='py-8 lg:py-[25px] flex shadow-sm px-8 mt-[70px] mb-8'>
        <div className='mx-auto'>
          {categories.map((category, index) => {
            return (
              <button
                type='button'
                key={index}
                onClick={() => filterItems(category)}
                className='px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-one hover:bg-black hover:text-white capitalize mr-2 mb-4'
              >
                {category}
              </button>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default GlosariCat
