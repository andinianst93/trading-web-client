import React, { useState } from 'react'
import navlink from '@/data/navs'
import Link from 'next/link'
import { useGlobalContext } from '@/context/context'
import { FaTimes } from 'react-icons/fa'

const Sidebar = () => {
  const { toggleLinks, isSidebarOpen } = useGlobalContext()

  return (
    <aside
      className={
        isSidebarOpen
          ? 'fixed z-20 left-0 top-0 w-full mx-auto h-full border-r px-6 pt-4 border-r-slate-900 bg-white ease-in duration-300 lg:hidden overflow-y-auto'
          : 'ease-out duration-300 fixed left-[-100%]'
      }
    >
      <ul className='relative mt-[100px] list-none px-[0.2rem] pb-12 text-black text-xl'>
        {navlink.map((item) => {
          return (
            <li key={item.id}>
              <div className='flex items-center my-6 font-bold'>
                <span className='pr-4'>{item.icon}</span> {item.name}
              </div>
              {item.submenu && (
                <div>
                  {item.sublinks.map((i) => {
                    return (
                      <div className='my-4' key={i.id}>
                        <div className='px-12 font-bold text-lg mb-2'>
                          {i.head}
                        </div>
                        <ul className=''>
                          {i.sublink.map((x) => {
                            return (
                              <li
                                key={x.name}
                                className='text-base px-12'
                                onClick={toggleLinks}
                              >
                                <Link
                                  href={`${x.link}`}
                                  className='hover:underline'
                                >
                                  {x.name}
                                </Link>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    )
                  })}
                </div>
              )}
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar
