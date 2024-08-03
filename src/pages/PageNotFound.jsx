import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import pageNotFound from '../assets/pageNotFound.png'
import { useUpdateTitle } from '../hooks/useUpdateTitle'
export const PageNotFound = ({title}) => {

    useUpdateTitle(title)
  // useEffect(() => {
  //   document.title = title;
  // })
  return (
    <main>
        <section className='flex flex-col items-center'>
            <div className='flex justify-center items-center'>
              <p className=' border my-5 p-8 text-8xl dark:text-white'>404, Oops!</p>
            </div>
            <div className='w-64 flex justify-center '>
              <img  src={pageNotFound} alt="pageNotFound" className='rounded-lg' />
            </div>
        <Link to="/">
          <button className='text-white p-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:bg-gradient-to-r dark:from-indigo-500 from-10% dark:via-sky-500 via-30% dark:to-emerald-500 to-90% my-5 rounded-lg text-2xl '>Back to Home</button>
        </Link>
        </section>
    </main>
  )
}
