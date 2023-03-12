import React from 'react'

const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(items / pageSize)

  if (pagesCount === 1) return null
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1)

  return (
    <div>
      <ul className='inline-flex items-center -space-x-px'>
        {pages.map((page) => (
          <li
            key={page}
            className={
              page === currentPage
                ? 'px-3 py-2 bg-black text-white rounded-md'
                : ' bg-white text-black'
            }
          >
            <button
              type='button'
              onClick={() => onPageChange(page)}
              className='px-3 py-2 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 '
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination
