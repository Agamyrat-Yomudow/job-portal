'use client'

import React, { useState,useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa6';

const ScrolToTop = () => {
   const [isVisible,setIsVisible]=useState(false)

   useEffect(() => {
      const toggleVisibility=()=>{
        if (window.scrollY > 300) {
          setIsVisible(true)
         
        }
        else setIsVisible(false)
      }
      window.addEventListener('scroll',toggleVisibility)

      return ()=>{
        window.removeEventListener('scroll',toggleVisibility)

      }
   }, []);

   const scrollToTop=()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
   }

  return (
    <div className='fixed bottom-4 animate-pulse right-4'>
      {isVisible && 
         <button onClick={scrollToTop} className='bg-blue-500 h-12 w-12 rounded-full text-white flex items-center justify-center focus:outline-none'>
          <FaArrowUp/>
        </button>}
    </div>
  )
}

export default ScrolToTop
