import React, { useEffect, useState } from "react";

import companyCoverImage from "../components/assets/images/companyCoverImage.svg";
// import companyLogo from "../components/assets/images/companyLogo.svg";
import JobCard from "../components/DashBoard/JobCard";
import editIcon from "../components/assets/icons/edit.svg";
import envelopeIcon from "../components/assets/icons/envelope.svg";
import calendarIcon from "../components/assets/icons/calendar.svg";
import locationIcon from "../components/assets/icons/location.svg";
import JobCardForm from "../components/CompanyProfile/JobCardForm";
import AboutForm from "../components/CompanyProfile/AboutForm";
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { BaseUrl, config } from "../api/apiURL";

function CompanyProfile() {
  const [form, setform] = useState(false);
  const [about, setabout] = useState(false);
  const [company, setcompany] = useState(null);
  let {id} = useParams();
  const fetchProfile = (id)=>{
    let token = sessionStorage.getItem('bearer');
    if(token){
      const mconfig = config(token);
      axios.get(`${BaseUrl}/company/getcompany/?id=${id}`,mconfig).then((ele)=>{
            
        setcompany(ele.data.data[0])
        console.log(ele.data.data[0])
  
      }).catch((err)=>{
        console.log(err);
      })
  
    }
  }
  useEffect(() => {
    fetchProfile(id);
  }, [id]);
  const toggle = ()=>{
    setform(!form)
  }
  const toggleabout = ()=>{
    setabout(!about)
  }
  return (
    <div className="w-full min-h-screen  overflow-hidden">
        {
        form ? 
       <JobCardForm toggle={toggle} /> : null
      }
      {
        about ? <AboutForm toggle={toggleabout} /> : null
      }
      <div className="w-full h-auto">
        <img 
          src={company?.coverPic ?company.coverPic:"https://static.vecteezy.com/system/resources/previews/006/892/682/original/microsoft-logo-icon-editorial-free-vector.jpg"}
          alt="coverstudent" className="max-h-[35vh] object-cover w-full" />
      </div>
    
      <div className="container mx-auto">
        <img
          src={company?.profileURL ?company.coverPic:"https://static.vecteezy.com/system/resources/previews/006/892/682/original/microsoft-logo-icon-editorial-free-vector.jpg"}
          alt=""
          className="mt-[-10vh] rounded-full w-[20vh] h-[20vh] "
        />
      </div>

      <div className="container mx-auto ">
        <div className="flex flex-row justify-between w-full mt-10 ">
          <span className="  text-xl font-semibold ">Microsoft</span>
          <span onClick={()=>toggle()}>
            <img
              src={editIcon}
              alt=""
              className="cursor-pointer"
              
            />
          </span>
        </div>

        <div className="flex flex-row justify-between w-[30rem]  mt-5  text-slate-400 ">
          <p className="flex flex-row gap-1">
            <img
              src={locationIcon}
              alt=""
              className="cursor-pointer w-5"
              
            />
            Worldwide
          </p>
          <p className="flex flex-row gap-2">
            <img
              src={calendarIcon}
              alt=""
              className="cursor-pointer w-5"
              
            />
            14 Feb 1945
          </p>
          <p className="flex flex-row gap-2">
            <img
              src={envelopeIcon}
              alt=""
              className="cursor-pointer w-5"
              onClick={() => {
               
              }}
            />
            careers@microsoft.com
          </p>
        </div>

        <div className=" mt-3 flex">
          <span className="mr-2">Computer Software</span>|
          <span className="mx-2">Operating System</span>|
          <span className="ml-2">Metaverse</span>
        </div>

        <div className="flex flex-row justify-between w-[52rem]  mt-3 ">
          <a
            href="/company/:id"
            className="px-3 py-2 w-48 bg-purple-100 text-blue-600 rounded-full"
          >
            Frontend Development
          </a>
          <a
            href="/company/:id"
            className="px-3 py-2 w-48  bg-purple-100 text-blue-600 rounded-full"
          >
            UI/UX Designer
          </a>
          <a
            href="/company/:id"
            className="px-3 py-2 w-48 bg-purple-100 text-blue-600 rounded-full"
          >
            Full Stack Developer
          </a>
          <a
            href="/company/:id"
            className="px-3 py-2 w-48 bg-purple-100 text-blue-600 rounded-full"
          >
            Mobile App Developer
          </a>
        </div>

        <div className=" mt-12  border-b-2 "></div>

        <div className="flex flex-col items-start">
          <div className="flex flex-row justify-between w-full mt-3">
            <h1 className="text-[2rem] ">About</h1>
            <span  onClick={()=>toggleabout()}>
              <img
                src={editIcon}
                alt=""
                className="cursor-pointer"
                
              />
            </span>
          </div>

          <p className="text-start">
            At Microsoft, our mission is to empower every person and every
            organization on the planet to achieve more. Microsoft enables
            digital transformation for the era of an intelligent cloud and an
            intelligent edge. Microsoft operates in 190 countries and is made up
            of 181,000 passionate employees worldwide.
          </p>
        </div>

        <div className="flex flex-col items-start">
          <h1 className="text-[2rem] mt-3">Website</h1>
          <a href="/company/:id" className="text-blue-600">
            https://news.microsoft.com/
          </a>
        </div>

        <div className="flex flex-col items-start">
          <h1 className="text-[2rem] mt-3">Industry</h1>
          <p className="text-slate-400">Software Development</p>
        </div>

        <div className="flex flex-col items-start">
          <h1 className="text-[2rem] mt-3">Company Size</h1>
          <p className="text-slate-400">100,000+</p>
        </div>

        <div className="flex flex-col items-start">
          <h1 className="text-[2rem] mt-3">Headquarters</h1>
          <p className="text-slate-400">Remond, Washington</p>
        </div>

        <div className="flex flex-col items-start">
          <h1 className="text-[2rem] mt-3">Specialties</h1>
          <p className="text-slate-400 text-start">
            Business Software, Developer Tools, Home & Educational Software,
            Tablets, Search, Advertising, Servers, Windows Operating System,
            Windows Applications & Platforms, Smartphones, Cloud Computing,
            Quantum Computing, Future of Work, Productivity, AI, Artificial
            Intelligence, Machine Learning, Laptops, Mixed Reality, Virtual
            Reality, Gaming, Developers, and IT Professional
          </p>
        </div>

        <div className=" mt-10  border-b-2 "></div>

        <div className="flex flex-col items-start">
          <h1 className="text-[2rem] mt-3">Workspace</h1>
          <p className="text-slate-400 text-start">
            We value and support flexibility as part of our hybrid workplace
            where every employee can do their best work by working the way they
            work best.
          </p>
        </div>

        <div className="flex flex-col items-start">
          <h1 className="text-[2rem] mt-3">Typical Timing on Site</h1>
          <p className="text-slate-400">Flexible Timing</p>
        </div>

        <div className=" mt-10  border-b-2 "></div>

        <div className="flex flex-col items-start w-full mt-8">
          <div className="flex flex-row justify-between w-full  ">
            <span className="  text-[2rem] ">Jobs</span>
            
          </div>

          <div className="grid grid-cols-3 w-full ">
            {/* <JobCard />
            <JobCard />
            <JobCard /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyProfile;
