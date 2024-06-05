import { authOptions } from '@/auth'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import React from 'react'
import User from '../Helper/User'

const Nav = async () => {
    const session= await   getServerSession(authOptions)
    console.log(session)
  return (
    <div className=' overflow-hidden h-[13vh] shadow-md'>
      <div className='w-[90%] md:w-[80%] h-full mx-auto flex items-center justify-between'>
         <div className='w-40 h-40 md:w-64 md:h-64 '>
            <Link href='/'>
                <img 
                className='w-full h-full'
                 src="/images/logo.png" alt="" />
            </Link>
         </div>
         <div className='flex items-center space-x-4 '>
           {
            !session && (
                <Link href='/sign-up'>
                <button className='font-semibold text-sm sm:text-base sm:px-6 sm:py-2 px-4 py-1.5 bg-blue-600 rounded-lg text-white transition-all duration-300 hover:bg-blue-800'>
                   Sign up
                </button>
               </Link>
            )
           }
           {
            session && <User session={session}/>
           }
           {
            session && (
                
                <button className='font-semibold text-sm sm:text-base sm:px-6 sm:py-2 px-4 py-1.5 bg-orange-600 rounded-lg text-white transition-all duration-300 hover:bg-orange-800'>
                   Post a job
                </button>
               
            )
           }
           
         </div>
      </div>
      
    </div>
  )
}

export default Nav
