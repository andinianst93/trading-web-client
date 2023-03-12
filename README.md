import React, { useState, useRef, useEffect } from 'react'
import Container from '@/components/layout/container'
import HeroPage from '@/components/HeroPage'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import { fetchAPI } from '@/config'
const Test = ({ glosari }) => {
const [visible, setVisible] = useState(false)
const [searchValue, setSearchValue] = useState('')
const [selectedItem, setSelectedItem] = useState(null)
const dropdownRef = useRef(null)

const allTitle = [...new Set(glosari.map((item) => item.attributes.title))]
const searchFilter = (searchValue, glosari, searchBy = '') => {
let lowerCaseQuery = searchValue?.toLowerCase()
console.log(searchBy)
let filteredList = searchValue
? glosari.filter((x) =>
x[allTitle]?.toLowerCase().includes(lowerCaseQuery)
)
: glosari
return filteredList
}

useEffect(() => {
document.addEventListener('mousedown', handleClick, false)
return () => document.removeEventListener('mousedown', handleClick, false)
}, [])

const handleClick = (e) => {
if (dropdownRef.current.contains(e.target)) {
return
}
setVisible(false)
}

const handleChange = (e) => {
setSearchValue(e.target.value)
if (!visible) {
setVisible(true)
}
}

const selectItem = (item) => {
setSearchValue(item.name)
setSelectedItem(item.id)
setVisible(false)
}

return (
<Container>
{' '}
<div className='overflow-x-hidden '>
<div className='bg-black bg-[url(/images/banner-bg.png)]'>
<nav className='bg-black'>
<Breadcrumb title1='Test' />
</nav>
<HeroPage title='Test' desc='Test Page' />
</div>
<section className='mx-auto flex flex-col items-center mt-8'>
<div>
<div tabIndex='0'>
<input
type='search'
className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500'
placeholder='Search Mockups...'
value={searchValue}
onChange={handleChange.bind(this)}
onFocus={() => {
setVisible(true)
}}
/>
</div>
<div ref={dropdownRef} className={`dropdown ${visible ? 'v' : ''}`}>
{visible && (
<ul>
{!glosari && (
<li key='zxc' className='dropdown_item'>
no result
</li>
)}
{glosari &&
searchFilter(searchValue, glosari).map((x) => (
<li
key={x.id}
onClick={() => selectItem(x)}
className='dropdown_item' >
<Link
href={`/glosarium/${x.attributes.letter.data.attributes.alphabet}/${x.attributes.slug}`}
className='capitalize' >
{x.attributes.title}
</Link>
</li>
))}
</ul>
)}
</div>
</div>
</section>
</div>
</Container>
)
}

export async function getStaticProps() {
const glosaricatRes = await fetchAPI(
`${process.env.NEXT_PUBLIC_API_URL}/api/glosariums?populate=*`
)
return {
props: {
glosari: glosaricatRes.data,
},
revalidate: 1,
}
}

export default Test
