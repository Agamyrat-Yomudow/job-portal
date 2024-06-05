import React from 'react'
import Heading from '../Helper/Heading'
import JobCategoryCard from '../Helper/JobCategoryCard'

const JobCategory = () => {
  return (
    <div className='pt-20 pb-12 '>
      <Heading mainHeading='Popular Job Category ' subHeading='2020 jobs live-293 added-today'/>
      <div className='w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto mt-10  gap-10 items-center'>
      <JobCategoryCard image='/images/icon1.png' category='Finance' openPosition='23'/>
      <JobCategoryCard image='/images/icon2.png' category='Marketing' openPosition='23'/>
      <JobCategoryCard image='/images/icon3.png' category='Design' openPosition='23'/>
      <JobCategoryCard image='/images/icon4.png' category='Development' openPosition='23'/>
      <JobCategoryCard image='/images/icon5.png' category='Humen resourse' openPosition='23'/>
      <JobCategoryCard image='/images/icon6.png' category='Automative Jobs' openPosition='23'/>
      <JobCategoryCard image='/images/icon7.png' category='Customer Service' openPosition='23'/>
      <JobCategoryCard image='/images/icon8.png' category='Health and Care' openPosition='23'/>
      <JobCategoryCard image='/images/icon9.png' category='Project Management' openPosition='23'/>

      </div>
    </div>
  )
}

export default JobCategory
