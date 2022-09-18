import React from 'react'
import { Paragraph, SubTitle, Title } from '../Typography';
import icon from './icons8-microsoft-96.png';
import { PrimaryLinkButton} from '../Buttons';
function JobCard({job={}}) {
  console.log(job)
  return (
    <div className='w-full flex justify-start items-start flex-col bg-white p-5 rounded-lg'>
        <div className="flex mb-2 w-full items-center justify-start">
            <img src={icon} className="w-8 mr-5" alt="profile" />
            <Title>{job.title}</Title>
        </div>
        <SubTitle>{job.company}</SubTitle>
        <Paragraph className="text-left my-2">
          {job.description.split(0,200) }
        </Paragraph>
        <p className='w-full text-left text-black font-medium'>Salary ~ {job.Salary?.minSalary} - {job.Salary?.minSalary}</p>
         <PrimaryLinkButton link={`/job/${job._id}`} className={"mt-3 w-full"}>View Job</PrimaryLinkButton>
    </div>
  )
}

export default JobCard