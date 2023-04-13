import React from 'react'
import Container from '@/components/layout/container'
import { useRouter } from 'next/router'
import { fetchAPI } from '@/config'
import GlosariSearchResults from '@/components/GlosariSearchResults'
import Link from 'next/link'
import { MdKeyboardArrowLeft } from 'react-icons/md'
const GlosariIndexSearch = ({ glosariums }) => {
  const router = useRouter()
  return (
    <Container>
      <main className='pt-[2rem] md:px-48'>
        <Link
          href='/glosarium'
          className='text-black hover:text-blue-dark font-bold flex items-center mb-4'
        >
          <MdKeyboardArrowLeft className='mr-2' /> Back To Glosarium
        </Link>
        <h1>Search Results for {router.query.term}</h1>
        {glosariums.length === 0 && (
          <h3 className='text-black'>Tidak ada istilah untuk ditampilkan</h3>
        )}
        <section className='min-h-screen text-black'>
          <div className='md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0 pt-8'>
            {glosariums.map((a) => {
              return <GlosariSearchResults key={a.id} a={a} />
            })}
          </div>
        </section>
      </main>
    </Container>
  )
}
export async function getServerSideProps({ query: { term } }) {
  const glosariumRes = await fetchAPI(
    `${process.env.NEXT_PUBLIC_API_URL}/api/glosariums?populate=*&filters[title][$containsi]=${term}`
  )
  return {
    props: {
      glosariums: glosariumRes.data,
    },
  }
}
export default GlosariIndexSearch
