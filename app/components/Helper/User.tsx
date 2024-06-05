'use client'
import { Session } from 'next-auth'
import { signOut } from 'next-auth/react';
import React from 'react'

interface Props{
    session:Session;
}


const User = ({session}:Props) => {
  return (
    <div className='cursor-pointer'
    onClick={()=>{
        signOut({callbackUrl:`${process.env.NEXT_PUBLIC_URL}/sign-up`})
    }}
    >
      <img
      
      className='w-12 h-12 rounded-full '
       src={`${session?.user?.image}`} alt="user" />
       
    </div>
  )
}

export default User
