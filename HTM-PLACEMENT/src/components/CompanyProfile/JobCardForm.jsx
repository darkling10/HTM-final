import { Formik,Field,Form } from 'formik';
import React from 'react'
import * as yup from 'yup'

export const JobCardForm = ({toggle}) => {
    const initialValues = {
      title: "",
      description: "",
      salaryLowerLimit: "",
      salaryUpperLimit: "",
      
    };
  
    const validationSchema = yup.object({
        title: yup.string().max(50).required("Required"),
        description: yup.string().max(250).required("Required"),
        salaryLowerLimit: yup.string().required("Required"),
        salaryUpperLimit: yup.string().required("Required"),
        
      });
  
    return (
      <div className="h-screen grid grid-cols-1 place-items-center bg-[rgba(0,0,0,0.5)] w-full fixed shadow-md ">
        <div className="flex flex-col items-start justify-center p-12 rounded-lg bg-white ">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(data) =>{
                console.log(data);
                toggle()
                
            }}
          >
            <Form>
              <p className="text-left font-semibold mb-1">Title</p>
              <Field
                name="title"
                type="text"
                
                className=" w-[30rem] lg:w-[40rem]  px-3  py-2 rounded border-2"
              />
              <p className="text-left font-semibold mb-1">Description</p>
              <Field
                name="description"
                type="text"
                as="textarea"
                className=" w-[30rem] lg:w-[40rem]   px-3 py-2 rounded border-2"
              />
              <p className="text-left font-semibold mb-1">Salary Lower Limit</p>
              <Field
                name="salaryLowerLimit"
                type="text"
                className=" w-[30rem] lg:w-[40rem]   px-3 py-2 rounded border-2"
              />
              <p className="text-left font-semibold mb-1">Salary Upper Limit</p>
              <Field
                name="salaryUpperLimit"
                type="text"
                className=" w-[30rem] lg:w-[40rem]   px-3 py-2 rounded border-2"
              />
              
              
              <div className="mt-3  w-full">
            <button
              type="submit"
              className="bg-blue-600 text-white px-12 py-2 rounded-lg w-full"
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

  export default JobCardForm;