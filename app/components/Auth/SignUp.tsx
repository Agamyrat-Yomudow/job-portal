'use client';
import { env } from 'process';
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

const SignUp = () => {
  return (
    <div className=' overflow-hidden h-[84vh] flex flex-col items-center justify-center gap-4'>
        <Image alt='' src='/images/chair.jpg' width={400} height={200}/>
      <button
      onClick={()=>{
        signIn('google',{callbackUrl:env.NEXT_PUBLIC_URL || '/'})
      }}
       className='px-12 py-3 bg-purple-600 rounded-lg text-white transition-all duration-300 hover:bg-purple-900'>
        Sign Up Now
      </button>
    </div>
  )
}

export default SignUp
