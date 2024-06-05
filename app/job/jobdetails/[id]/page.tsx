import ApplyButton from "@/app/components/Helper/ApplyButton";
import JobCard from "@/app/components/Helper/JobCard";
import { authOptions } from "@/auth";
import JobData from "@/data";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";

const JobDetail = async ({ params }: { params: { id: string } }) => {
  const singleJob = JobData.find((job) => job.id.toString() == params.id);
  const session = await getServerSession(authOptions);
  const firsFourJob=JobData.slice(0,4)
  return (
    <div className="mt-20 mb-12 ">
      <div className="w-[80%] mx-auto block sm:flex items-center justify-between">
        <div className="flex-[0.7]">
          <JobCard job={singleJob!} />
        </div>
        {session && <ApplyButton />}
        {!session && (
          <Link href="/sign-up">
            <button className="px-8 py-3 rounded-lg bg-emerald-600 text-white">
              Sign Up To Apply
            </button>
          </Link>
        )}
      </div>
      <div className="mt-16 w-[80%] mx-auto">
        <h1 className="font-semibold text-xl">Job Description</h1>
        <p className="mt-4 text-opacity-70 text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et magni quam
          reprehenderit tempora atque, expedita totam. Expedita quis ullam
          labore, nisi nihil corrupti possimus quae, voluptatibus ab totam
          nostrum reiciendis.
        </p>
     
      
        <h1 className="font-semibold text-xl mt-8">Key Responsibility</h1>
        <p className="mt-4 text-opacity-70 text-black">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
          officia consequatur quam est velit quasi! Quas sit deleniti pariatur
          soluta! Maxime, provident est? Quia consequatur tenetur exercitationem
          ex eaque vero? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Et magni quam reprehenderit tempora atque, expedita totam.
          Expedita quis ullam labore, nisi nihil corrupti possimus quae,
          voluptatibus ab totam nostrum reiciendis.
        </p>

        <h1 className="font-semibold text-xl mt-8">Skills</h1>
         <ul className="mt-4">
            <li className="mt-4 text-black text-opacity-70">React Js</li>
            <li className="mt-4 text-black text-opacity-70">Next Js</li>
            <li className="mt-4 text-black text-opacity-70">Tailwind Css</li>
            <li className="mt-4 text-black text-opacity-70">Typescript</li>
            <li className="mt-4 text-black text-opacity-70">Next auth</li>
         </ul>

         <h1 className="mt-8 font-semibold text-xl">Related Job</h1>
          <div className="mt-4">
            {firsFourJob.map((Job)=>(
                <Link href={`/job/jobdetails/${Job.id}`} key={Job.id} className="space-y-4 ">
                    <JobCard job={Job}/>
                </Link>
            ))}
          </div>
      </div>
    </div>
  );
};

export default JobDetail;
