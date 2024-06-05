import React from 'react'
import JobData from '@/data';
import { Job } from '../../../data';
import JobCard from '../../components/Helper/JobCard';
import Link from 'next/link';

const AllJobs = () => {
  return (
    <div className='mt-12 w-[80%] mx-auto'>
      <div className='mb-4'>
        <h1 className='font-semibold'>Show Result ({JobData.length})</h1>
      </div>
      <div className='space-y-8'>
      {JobData.map((Job)=>(
        <Link href={`jobdetails/${Job.id}`} key={Job.id}>
            <JobCard job={Job}/>
        </Link>
      ))}
      </div>
    </div>
  )
}

export default AllJobs
