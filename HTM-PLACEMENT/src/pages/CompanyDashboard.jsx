import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {BaseUrl} from '../api/apiURL';
import { Title ,SubTitle,Paragraph} from '../components/Typography';
import {PrimaryButton} from '../components/Buttons';

function Card({img , name , role , desc , min , max ,id}){
    return      <div className='w-full flex justify-start items-start flex-col bg-white p-5 rounded-lg'>
    <div className="flex mb-2 w-full items-center justify-start">
        <img src={"https://pbs.twimg.com/profile_images/1268212180131827715/iikV3Saa_400x400.png"} className="w-8 mr-5" alt="profile" />
        <Title>Java Developer</Title>
    </div>
    <SubTitle>Microsoft</SubTitle>
    <Paragraph className="text-left my-2">Lorem, ipsum dolor sit amet andrew si istma consectetur adipisicing elit. Ipsam, suscipit?</Paragraph>
    <p className='w-full text-left text-black font-medium'>Salary ~ 10,000 - 15,000</p>
     <PrimaryButton className={"mt-3 w-full"}>View Job</PrimaryButton>
</div>
}

function CompanyDashboard() {
   const [Loading, setLoading] = useState(true);
   const [Data, setData] = useState(null);
   
   useEffect(()=>{
   const fetchJobs= ()=>{
    const token = sessionStorage.getItem('bearer');
    
    const config = {
        headers: { 'x-access-token': `Bearer ${token}` }
    };
    axios.get(`${BaseUrl}/company/jobposted`,config).then((res)=>{
     console.log(res.data.data)
     setData(res.data.data);
     setLoading(false)
    }).catch((err)=>console.log(err))
}
   fetchJobs();
   },[])    
    return (
    <div className='pt-10'>
     <Title>Jobs Posted By </Title>
     <div className="grid w-[80%] mx-auto grid-cols-3">

     </div>
    </div>
  )
}

export default CompanyDashboard