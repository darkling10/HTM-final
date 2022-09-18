import React from "react";
import registerCoverImage from "../components/assets/images/registerCoverImage.svg";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import  {BaseUrl  }from "../api/apiURL";
import { useNavigate } from "react-router-dom";
import axios from 'axios'; 
import {useAuth} from '../hooks/Auth';
const SignIn = () => {
  const validationSchema = yup.object({
    email: yup.string().email("Invalid Email Address").required("Required"),
    password: yup
      .string()
      .min(8, "Password Must Be greater than 8 Characters")
      .required("Required"),
    userType: yup.string(),
  });
  const {setToken} = useAuth();
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-2 items-center h-screen">
      <Formik
        initialValues={{email: "", password: "", userType: "student" }}
        onSubmit={async(values) => {
          axios.post(`${BaseUrl}/users/login`,
          {
            email:values.email,
            password:values.password,
            userType:values.userType
          }          
          ).then((ele)=>{
            let data = ele.data;
            let {token}=data;
            sessionStorage.setItem('userType',values.userType);
            setToken(token)
            navigate('/dashboard');
          }).catch((err)=>alert(err.response.data.message))

        }}
        
        validationSchema={validationSchema}
      >


{(({errors,touched})=>{
        return   <Form className="flex flex-col justify-center items-start lg:items-center  h-full w-auto mx-6 lg:mr-36">
        <p className="text-[3rem] font-semibold lg:ml-24">Login To Your Account</p>
      
        <div className="m-4 w-72 lg:w-96">
          <p className="text-left font-semibold mb-1">Enter Your Email Id</p>
          <Field
            name="email"
            type="email"
            className={errors.email ?` w-[25rem] lg:w-[30rem]   pl-8 py-2 rounded border-red-400 border-2`:"w-[25rem] lg:w-[30rem]   pl-8 py-2 rounded border-2" }
            placeholder="JohnDoe@gmail.com"
          />
        </div>

        <div className="m-4 w-72 lg:w-96">
          <p className="text-left font-semibold mb-1">Password</p>
          <Field
            name="password"
            placeholder="YourPass@1234"

            type="password"
            className={errors.password ?` w-[25rem] lg:w-[30rem]   pl-8 py-2 rounded border-red-400 border-2`:"w-[25rem] lg:w-[30rem]   pl-8 py-2 rounded border-2" }
          />
        </div>
        <div className="m-4 w-72 lg:w-96">
          <p className="text-left font-semibold mb-1">Who Are You?</p>
          <Field
            name="userType"
            as="select"
            className="w-[25rem] lg:w-[30rem]  pl-8 py-2 rounded border-2"
          >
            <option value="student">Student</option>

            <option value="company">Company</option>

            <option value="college">College</option>
          </Field>
        </div>
        <div className="m-4 w-72 lg:w-96">
          <button
            type="submit"

            className="bg-blue-600 disabled:bg-gray-400 text-white w-[25rem]  lg:w-[30rem] px-12 py-2 rounded-lg ">
              Sign In
          </button>
        </div>

        <div className="mw-72 lg:w-96 text-center">
          <p className="ml-28">
            Already Have An Account?
            <a href="/sign-up" className="text-blue-800 font-semibold">
              Sign up
            </a>
          </p>
        </div>
        <></>
      </Form>
   
      })}
       </Formik>
      <div className="flex flex-col justify-evenly items-center h-full bg-blue-500">
        <div className="text-white ml-12 text-left w-auto">
          <p className="text-[2.4rem] font-semibold w-full mb-5">
            The Oppurtunities are waiting for you
          </p>
          <p className="text-[20px] ">
            Get acces to Top Most Companies Job Offers and apply to them without
            any hesitaiton on a click
          </p>
        </div>
        <div className="">
          <img src={registerCoverImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
