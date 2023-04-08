import React, { useState } from 'react'
import { useRouter } from 'next/router'
const SearchBlog = () => {
  const [term, setTerm] = useState('')
  const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault()
    router.push(`/artikel/search?term=${term}`)
    setTerm()
  }
  return (
    <form className='relative mb-4' onSubmit={handleSubmit}>
      <input
        type='search'
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className='text-black placeholder-black focus:ring-accent border-black w-[220px] rounded-lg border py-[0.6rem] px-4 pl-10 '
        placeholder='Search'
      />
      <span className='absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-lg'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          width={24}
          height={24}
          className='fill-black h-4 w-4'
        >
          <path fill='none' d='M0 0h24v24H0z' />
          <path d='M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z' />
        </svg>
      </span>
    </form>
  )
}

export default SearchBlog
