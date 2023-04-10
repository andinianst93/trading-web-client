import React from 'react'

const CategoryTutorial = ({ categories, filterItems }) => {
  return (
    <div>
      {categories.map((i, index) => {
        return (
          <button
            type='button'
            className='text-gray-dark border capitalize bg-white hover:bg-gray-dark hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-dark font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'
            key={index}
            onClick={() => filterItems(i)}
          >
            {i}
          </button>
        )
      })}
    </div>
  )
}

export default CategoryTutorial
