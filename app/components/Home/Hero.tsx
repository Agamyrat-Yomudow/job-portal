import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='pt-2 pb-4'>
      <div className='flex flex-col w-full h-[60vh] items-center justify-center'>
        <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-4'>
           <div> 
            <h1 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#05264e] font-extrabold '>
                The <span className='text-blue-500'>Easiest Way</span> <br /> to Get Your New Job
            </h1>
            <p className='text-[#4f5e64] md:text-lg text-base mt-1'>Each month, more than 3 million job seekers turn to website in their search for work, making over 140,000 applications every single day</p>
            <div className='mt-4'>
                <input 
                className='border py-4 px-5 rounded-l-md w-[60%] md:w-[70%] lg:w-[75%] outline-none bg-gray-200' 
                placeholder='Search Job.' 
                type="text" />
                <button className= 'cursor-pointer bg-blue-500 px-5 py-4 outline-none text-white rounded-r-md'>
                    Search
                </button>
            </div>
           </div>
           <div className='hidden lg:block'>
              <Image alt='hero' src='/images/hero.svg' height={400} width={700}/>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
