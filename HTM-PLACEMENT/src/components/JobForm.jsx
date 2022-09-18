import React, { useEffect, useState } from "react";
import { Form, Formik, Field } from "formik";
import * as yup from "yup";
import axios from 'axios';
import {BaseUrl} from '../api/apiURL';
import {useAuth} from '../hooks/Auth';
import { useNavigate } from "react-router-dom";

const JobForm = () => {
  const {UserData,getCompany} = useAuth();
  
  useEffect(()=>{
    getCompany();
  },[])
 
const navigate = useNavigate();
  const initialValues = {
    title: "",
    employmentType: "",
    experience: "",
    salaryMin: "",
    salaryMax: "",
    description: "",
    skills: "",
    tasks: "",
    requirements: "",
    perks: "",
    question1: "",
    question2: "",
    answer: "",
  };

  const validationSchema = yup.object({
    title: yup.string().max(50).required("Required"),
    employmentType: yup.string().max(50).required("Required"),
    experience: yup.string().max(50).required("Required"),
    salaryMin: yup.string().max(50).required("Required"),
    salaryMax: yup.string().max(50).required("Required"),
    description: yup.string().required("Required"),
    skills: yup.string().max(500).required("Required"),
    tasks: yup.string().required("Required"),
    requirements: yup.string().required("Required"),
    perks: yup.string().required("Required"),
    question1: yup.string().max(50).required("Required"),
    question2: yup.string().max(50).required("Required"),
  });

  return (
    <div className="min-h-screen grid grid-cols-1 place-items-center bg-white w-full  shadow-md">
     
      <div className="flex flex-col items-start p-8 rounded-lg w-full lg:w-[80%] bg-white m-10">
        <Formik
          initialValues={initialValues}
          onSubmit={(data) => {
            console.log(data);
            const token = sessionStorage.getItem('bearer')
            const config = {
              headers: { 'x-access-token': `Bearer ${token}` }
          };
         
            axios.post(`${BaseUrl}/company/createjob`,{
              title: data.title,
              company:UserData.name,
              employmentType: data.employmentType,
              experience: data.experience,
              salaryMin: data.salaryMin,
              salaryMax: data.salaryMax,
              description: data.description,
              skills: data.skills,
              tasks: data.tasks,
              requirements: data.requirements,
              perks: data.perks,
              question1: data.question1,
              question2: data.question2,
              answer: data.answer,
            },config).then((ele)=>{
              alert("Job Created Successfully");
              navigate('/dashboard')
            }).catch((err)=>{
              alert('/Error Occurred');
              navigate('/dashboard');
            })
           
          }}
        >

          {
            ({errors})=>{
            return  <Form className="w-full flex flex-col gap-3 ">
              <p className="text-left font-semibold mb-1 text-2xl">Title</p>
              <Field
                name="title"
                type="text"
                className=" w-full  pl-5 py-2 rounded border-2"
              />
              <p className="text-left font-semibold mb-1 text-2xl">Experience Required</p>
              <Field
                name="experience"
                type="text"
                className=" w-full  pl-5 py-2 rounded border-2"
              />
              <p className="text-left font-semibold mb-1 text-2xl">
                Employment Type
              </p>
              <Field
                name="employmentType"
                type="text"
                className=" w-full  pl-5 py-2 rounded border-2"
              />
              <p className="text-left font-semibold mb-1 text-2xl">
                Minimum Salary Offered
              </p>
              <Field
                name="salaryMin"
                type="text"
                className=" w-full  pl-5 py-2 rounded border-2"
              />
              <p className="text-left font-semibold mb-1 text-2xl">
                Maximum Salary Offered
              </p>
              <Field
                name="salaryMax"
                type="text"
                className=" w-full  pl-5 py-2 rounded border-2"
              />
              <p className="text-left font-semibold mb-1 text-2xl">Description</p>
              <Field
                name="description"
                type="text"
                as="textarea"
                className=" w-full  pl-5 py-2 rounded border-2"
              />
              <p className="text-left font-semibold mb-1 text-2xl">
                Skills{" "}
                <span className="text-slate-400 text-sm">
                  (Seperate Skills using Commas , )
                </span>
              </p>
              <Field
                name="skills"
                type="text"
                as="textarea"
                className=" w-full  pl-5 py-2 rounded border-2"
              />
              <p className="text-left font-semibold mb-1 text-2xl">
                Tasks{" "}
                <span className="text-slate-400 text-sm">
                  (Seperate Tasks using Commas , )
                </span>
              </p>
              <Field
                name="tasks"
                type="text"
                as="textarea"
                className=" w-full  pl-5 py-2 rounded border-2"
              />
              <p className="text-left font-semibold mb-1 text-2xl">
                Requirements{" "}
                <span className="text-slate-400 text-sm">
                  (Seperate Requirements using Commas , )
                </span>
              </p>
              <Field
                name="requirements"
                type="text"
                as="textarea"
                className=" w-full  pl-5 py-2 rounded border-2"
              />
              <p className="text-left font-semibold mb-1 text-2xl">
                Perks{" "}
                <span className="text-slate-400 text-sm">
                  (Seperate Perks using Commas , )
                </span>
              </p>
              <Field
                name="perks"
                type="text"
                as="textarea"
                className=" w-full  pl-5 py-2 rounded border-2"
              />
              <p className="text-left font-semibold mb-1 text-2xl">
                Question No.1
              </p>
              <Field
                name="question1"
                type="text"
                as="textarea"
                className=" w-full  pl-5 py-2 rounded border-2"
              />
              <p className="text-left font-semibold mb-1 text-2xl">Question No.2</p>
              <Field
                name="question2"
                type="text"
                as="textarea"
                className=" w-full  pl-5 py-2 rounded border-2"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white text-2xl w-full py-4 rounded-lg "
              >
                Submit
              </button>
            </Form>
            }
          }

        </Formik>
      </div>
    </div>
  );
};

export default JobForm;
