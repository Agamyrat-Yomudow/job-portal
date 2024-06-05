import { Job } from "@/data";
import Image from "next/image";
import React from "react";
import { BiMoney } from "react-icons/bi";
import { FaMapLocation, FaRegBookmark } from "react-icons/fa6";

interface Props {
  job: Job;
}

const JobCard = ({ job }: Props) => {
  return (
    <div className="relative p-4 mb-6 border-2 cursor-pointer hover:scale-110 hover:shadow-sm rounded-lg border-gray-500 border-opacity-10 transition-all duration-300">
      <div className="flex items-center space-x-6">
        <div className="flex items-center">
          <Image width={60} height={60} alt="" src={job?.image} />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between ">
            <p className="text-lg font-semibold">{job.title}</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <FaMapLocation className="text-pink-700 " />
              <p className="text-sm font-semibold text-opacity-60  text-black">
                {job.location}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <BiMoney className="text-pink-700 " />
              <p className="text-sm font-semibold text-opacity-60  text-black">
                {job.salary}
              </p>
            </div>
          </div>
          <div className="flex gap-3">
             <div className="text-[10px] py-1 sm:text-sm capitalize bg-opacity-30 px-3 md:px-6  text-opacity-80 font-semibold rounded-full bg-green-400  text-black ">{job.jobtype}</div>
             <div className="text-[10px] py-1 sm:text-sm capitalize bg-opacity-30 px-3 md:px-6  text-opacity-80 font-semibold rounded-full bg-green-400  text-black ">Private</div>
             <div className="text-[10px] py-1 sm:text-sm capitalize bg-opacity-30 px-3 md:px-6  text-opacity-80 font-semibold rounded-full bg-blue-400  text-black ">Urgent</div>

          </div>
        </div>
      </div>
      <div className="absolute right-2   top-4">
        <FaRegBookmark className="w-5 h-5"/>
      </div>
    </div>
  );
};

export default JobCard;
