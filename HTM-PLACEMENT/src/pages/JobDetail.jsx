import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import { PrimaryButton } from '../components/Buttons';
import JobDetailProfile from '../components/DashBoard/JobDetailProfile';
import JobQuestion from '../components/Job/JobQuestion';
import { Paragraph, SubTitle , Title} from '../components/Typography';
import axios from 'axios';
import {BaseUrl} from '../api/apiURL';
function JobDetail() {
    const {jobid} = useParams();
    const [qform, setqform] = useState(false);
    const [job, setjob] = useState(null);
    const [skills, setskills] = useState([]);
    const toggle = ()=>{
      setqform(!qform);
    }
    useEffect(() => {
     const fetch = ()=>{
      const token = sessionStorage.getItem('bearer')
      const config = {
        headers: { 'x-access-token': `Bearer ${token}` }
      };
        axios.get(`https://htm-project.herokuapp.com/company/job/?id=${jobid}`,config).then((ele)=>{
          console.log(ele.data.data)
          setjob(ele.data.data[0])
          let res = ele.data.data[0].skills;
          console.log(res.split(','))
          setskills( res.split(','))
          console.log(res)
        }).catch((err)=>{
          console.log(err)
        })
     }
     fetch()
    }, []);
  return (
    <div className='w-[100%] mx-auto min-h-screen'>
{
  qform ?       <JobQuestion  toggle={toggle} /> :  null
}
     <div className="w-[80%] mx-auto ">
     <JobDetailProfile id={job?.postedBy} job={job} />
        <section className="details w-full flex items-center justify-start">
        <i className='bx bxs-time-five text-gray-400 px-2 ' ></i>
       <span className='text-gray-500 pr-10'> Full Time</span>
       <i class='bx bxs-user text-gray-400 px-2' ></i>
       <span className='text-gray-500 pr-10'> Freasher</span>

       <i class='bx bxs-building text-gray-500 pr-2'></i>
       <span className='text-gray-500 pr-10'> 10,000 + </span>

       <i class='bx bxs-dollar-circle text-gray-500 pr-2'></i>
       <span className='text-gray-500 pr-10'> 10,000 - 20,000 </span>

        </section>

        <section className='text-left my-10'>
          <Title>About Us</Title>
          <Paragraph className={"my-5"}>   
          {job?.description}
          </Paragraph>
        </section>


        <section className="skills flex justify-start items-center">
          <Title >Skills</Title>
          <span className="mx-5"></span>
        {
          skills.length>0 ? skills.map((ele)=>{
            return      <div className=" mr-2  skill bg-light-blue py-3 rounded-full text-primary px-10">
            {ele}
           </div>
      
          }) : null
        }     
        
        </section>


        <section className="work my-10 text-left">
        <Title >What Will You Do ?</Title>
        <div className="span my-5"></div>
        {job?.tasks}
        </section>



        <section className="work my-10 text-left">
        <Title >You Should Have</Title>
        <div className="span my-5"></div>
        {
          job?.requirements
        }
        </section>

        <section className="work my-10 text-left">
        <Title >Perks</Title>
        <div className="span my-5"></div>
        {
          job?.perks
        }
        </section>
        <PrimaryButton onClick = {()=>toggle()}>Apply Now</PrimaryButton>
        <div className="spacer mb-10"></div>
      </div>  
    </div>
  )
}

export default JobDetail