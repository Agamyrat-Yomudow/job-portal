import React from 'react'


interface Props{
    mainHeading:string,
    subHeading:string
}


const Heading = ({mainHeading,subHeading}:Props) => {
  return (
    <div className='text-center p-3'>
      <h1 className='font-bold text-3xl text-black opacity-90'>{mainHeading}</h1>
      <p className='text-base font-medium text-gray-800 opacity-80 mt-2'>{subHeading}</p>
    </div>
  )
}

export default Heading
