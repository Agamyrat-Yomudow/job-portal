import React from 'react'
import Heading from '../Helper/Heading'
import JobData from '@/data'
import Link from 'next/link'
import JobCard from '../Helper/JobCard'

const FeaturesJob = () => {
  return (
    <div className='pt-20 pb-12'>
      <Heading mainHeading='Featured Job' subHeading='Know your worth and find the job that qualify your life'/>
      <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2  gap-10 mt-10'>
        {JobData.map((job)=>(
            <Link key={job.id} href={`/job/jobdetails/${job.id}`}>
            <JobCard job={job}/>
            </Link>
        ))}
      </div>
      <Link href='job/alljobs'>
        <div className='mt-8 text-center'>
            <button className='bg-blue-700 text-white py-2 px-8 rounded-lg font-semibold  transition-all duration-300 hover:bg-blue-900'>View All jobs</button>
        </div>
      </Link>
    </div>
  )
}

export default FeaturesJob
