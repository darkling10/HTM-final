import { Formik,Field,Form } from 'formik';
import React from 'react'
import * as yup from 'yup'

export const AboutForm = ({toggle}) => {
    const initialValues = {
      about: "",
      website: "",
      industry: "",
      companySize: "",
      headquarters: "",
      specialties: "",
      workspace: "",
      timings: "",
    };
  
    const validationSchema = yup.object({
        about: yup.string().max(500).required("Required"),
        website: yup.string().max(50).required("Required"),
        industry: yup.string().required("Required"),
        companySize: yup.string().required("Required"),
        headquarters: yup.string().required("Required"),
        specialties: yup.string().required("Required"),
        workspace: yup.string().required("Required"),
        timings: yup.string().required("Required"),
      });
  
    return (
      <div className="h-screen grid grid-cols-1 place-items-center bg-[rgba(0,0,0,0.5)] w-full top-0 left-0 fixed shadow-md  ">
        <div className="flex flex-col items-start justify-center p-12 rounded-lg bg-white ">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(data) =>{
                
                toggle()
                
            }}
          >
            <Form>
              <p className="text-left font-semibold mb-1">About</p>
              <Field
                name="about"
                type="text"
                as="textarea"
                className=" w-[30rem] lg:w-[40rem]   pl-12 py-2 rounded border-2"
              />
              <p className="text-left font-semibold mb-1">Website</p>
              <Field
                name="website"
                type="text"
                className=" w-[30rem] lg:w-[40rem]   pl-12 py-2 rounded border-2"
              />
              <p className="text-left font-semibold mb-1">Industry</p>
              <Field
                name="industry"
                type="text"
                className=" w-[30rem] lg:w-[40rem]   pl-12 py-2 rounded border-2"
              />
              <p className="text-left font-semibold mb-1">Company Size</p>
              <Field
                name="companySize"
                type="text"
                className=" w-[30rem] lg:w-[40rem]   pl-12 py-2 rounded border-2"
              />
              <p className="text-left font-semibold mb-1">Headquarters</p>
              <Field
                name="headquarters"
                type="text"
                className=" w-[30rem] lg:w-[40rem]   pl-12 py-2 rounded border-2"
              />
              <p className="text-left font-semibold mb-1">Specialties</p>
              <Field
                name="specialties"
                type="text"
                as="textarea"
                className=" w-[30rem] lg:w-[40rem]   pl-12 py-2 rounded border-2"
              />
              <p className="text-left font-semibold mb-1">Workspace</p>
              <Field
                name="workspace"
                type="text"
                as="textarea"
                className=" w-[30rem] lg:w-[40rem]   pl-12 py-2 rounded border-2"
              />
              <p className="text-left font-semibold mb-1">Typical Timing on Site</p>
              <Field
                name="timings"
                type="text"
                
                className=" w-[30rem] lg:w-[40rem]   pl-12 py-2 rounded border-2"
              />
              <div className="mt-3  w-full">
            <button
              type="submit"
              className="bg-blue-600 text-white w-full  lg:w-[30rem] px-12 py-2 rounded-lg "
            >
              Submit
            </button>
          </div>
            </Form>
          </Formik>
        </div>
      </div>
    );
  };

  export default AboutForm;