import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-[#111111]'>
        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 pb-4 border-white border-opacity-10 border-b-2'>
            <div className='flex-col flex gap-4'>
                <div>
                    <p className='uppercase text-white font-bold text-2xl'>Jobify</p>
                </div>
                <div>
                    <p className='text-sm text-white text-opacity-70'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Exercitationem aliquam quis iste!</p>
                </div>
                <div className='flex gap-3'>
                    <div className='w-10 h-10 rounded-full flex items-center justify-center bg-blue-700'>
                        <FaFacebookF className='text-white '/> 
                    </div>
                    <div className='w-10 h-10 rounded-full flex items-center justify-center bg-indigo-400'>
                        <FaTwitter className='text-white '/> 
                    </div>
                    <div className='w-10 h-10 rounded-full flex items-center justify-center bg-red-700'>
                        <FaYoutube className='text-white '/> 
                    </div>
                    <div className='w-10 h-10 rounded-full flex items-center justify-center bg-red-400'>
                        <FaInstagram className='text-white '/> 
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-white text-2xl w-fit font-semibold mb-3'>About Us</h1>
                <p className='text-white  w-fit hover:text-yellow-300 cursor-pointer text-opacity-30 mb-2'>Job</p>
                <p className='text-white  w-fit hover:text-yellow-300 cursor-pointer text-opacity-30 mb-2'>Privacy</p>
                <p className='text-white  w-fit hover:text-yellow-300 cursor-pointer text-opacity-30 mb-2'>Police</p>
                <p className='text-white  w-fit hover:text-yellow-300 cursor-pointer text-opacity-30 mb-2'>Application</p>
                <p className='text-white  w-fit hover:text-yellow-300 cursor-pointer text-opacity-30 mb-2'>Candidates</p>

            </div>
            <div>
                <h1 className='text-white text-2xl w-fit font-semibold mb-3'>Quick Link</h1>
                <p className='text-white  w-fit hover:text-yellow-300 cursor-pointer text-opacity-30 mb-2'>All Job</p>
                <p className='text-white  w-fit hover:text-yellow-300 cursor-pointer text-opacity-30 mb-2'>Job Detail</p>
                <p className='text-white  w-fit hover:text-yellow-300 cursor-pointer text-opacity-30 mb-2'>How To Apply</p>
                <p className='text-white  w-fit hover:text-yellow-300 cursor-pointer text-opacity-30 mb-2'>Resume</p>

            </div>
            
            <div>
                <h1 className='text-white text-2xl w-fit font-semibold mb-3'>Get In Touch</h1>
                <p className='text-white  w-fit hover:text-yellow-300 cursor-pointer text-opacity-30 mb-2'>+00122346789</p>
                <p className='text-white  w-fit hover:text-yellow-300 cursor-pointer text-opacity-30 mb-2'>example@gmail.com</p>
                <p className='text-white  w-fit hover:text-yellow-300 cursor-pointer text-opacity-30 mb-2'>Dhaka Tangail,Bangladesh</p>

            </div>
        </div>
        <p className='w-[80%] uppercase mx-auto pt-6 text-white text-opacity-40  '>CopyRight by webdev warrior-2024</p>
      
    </div>
  )
}

export default Footer
