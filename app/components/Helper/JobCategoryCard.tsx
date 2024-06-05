import Image from 'next/image'
import React from 'react'

interface Props{
    image:string,
    category:string,
    openPosition:string
}


const JobCategoryCard = ({image,category,openPosition}:Props) => {
  return (
    <div className='p-4 border-2 hover:shadow-sm rounded-lg transition-all duration-300 hover:scale-110 border-gray-500 border-opacity-10 cursor-pointer'>
        <div className='flex space-x-4 items-center'>
            <Image width={60} height={60} src={image} alt={category} />
            <div className='flex flex-col  '>
              <div className='text-lg font-semibold '>{category}</div>  
              <p className='text-sm text-black text-opacity-50 font-semibold'>({openPosition} open position)</p>
            </div>
        </div>
    </div>
  )
}

export default JobCategoryCard
