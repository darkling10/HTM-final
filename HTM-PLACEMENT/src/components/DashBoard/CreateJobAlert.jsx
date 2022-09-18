import React from 'react'
import { PrimaryButton } from '../Buttons';
import {Paragraph, Title} from '../Typography';

function CreateJobAlert() {
  return (
    <div className='w-full bg-light-blue p-5 text-left min-h-[30vh] rounded-md'>
       <Title>Create Job Alert</Title>
       <Paragraph>Create Job Alert now and never miss a job by creating job alert </Paragraph>
       <input type="text" className='w-full p-2 bg-white mt-4 mb-2 rounded-md' />
       <PrimaryButton className={"my-2 w-full"}> Create Job Alert</PrimaryButton>
    </div>
  )
}

export default CreateJobAlert