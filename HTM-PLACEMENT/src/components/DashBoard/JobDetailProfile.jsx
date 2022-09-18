import React, { useEffect } from 'react'
import { SubTitle } from '../Typography'
import logo from './icons8-microsoft-96.png'
import {PrimaryButton} from '../Buttons';
import axios from 'axios';
function JobDetailProfile({id,job}) {
  useEffect(() => {
   if(id){
    const token = sessionStorage.getItem('bearer')
    const config = {
      headers: { 'x-access-token': `Bearer ${token}` }
    };
    axios.get(`https://htm-project.herokuapp.com/company/getcompany/?id=${id}`,config).then((res)=>{
      console.log(res.data.data[0])
    }).catch((err)=>{
      console.log(err)
    })
   }
  }, [id]);
  return (
    <div className='w-full py-10 flex justify-between items-center'>
       
        <div className="txt flex justify-start items-start">
        <img src={logo} className="w-16" alt="" />
  <div className="block text-left px-5">
        <h1 className='font-medium text-xl'>{job?.title}</h1>
         <SubTitle >{job?.company }</SubTitle>
  </div>
        </div>
        <PrimaryButton>View Profile</PrimaryButton>
    </div>
  )
}

export default JobDetailProfile