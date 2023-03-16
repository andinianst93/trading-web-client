import React, { useState } from 'react'
import { useRouter } from 'next/router'
const GlosariSearch = () => {
  const [term, setTerm] = useState('')
  const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault()
    router.push(`/glosarium/search?term=${term}`)
    setTerm()
  }
  return (
    <form className='relative mt-8 basis-3/12 lg:block' onSubmit={handleSubmit}>
      <input
        type='search'
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className='focus:ring-accent w-max lg:w-screen lg:max-w-lg border py-[0.6875rem] px-4 pl-10 rounded-lg'
        placeholder='Search'
      />
      <span className='absolute left-0 top-0 flex h-full w-12 items-center justify-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          width={24}
          height={24}
          className=' h-4 w-4 '
        >
          <path fill='none' d='M0 0h24v24H0z' />
          <path d='M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z' />
        </svg>
      </span>
    </form>
  )
}

export default GlosariSearch
