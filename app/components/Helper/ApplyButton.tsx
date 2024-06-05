'use client'

import React from 'react'
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";
const ApplyButton = () => {
    const apply = () => {
        toast.success('Application Successfull')
    }

  return (
    <div className=''>
      <button onClick={apply} className='px-8 py-3 bg-blue-700 hover:bg-blue-900 transition-all duration-300 rounded-lg font-semibold text-white'>Apply Now</button>
      <ToastContainer position='top-center'/>
    </div>
  )
}

export default ApplyButton
