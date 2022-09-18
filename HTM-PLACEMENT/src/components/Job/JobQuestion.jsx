import React from 'react'
import { Formik, Field,Form } from "formik";
import * as yup from "yup";
import {PrimaryButton} from '../Buttons';



function JobQuestion({toggle}) {
  

      const validationSchema = yup.object({
        question1: yup
        .string()
        .min(200, "Must Be min 200 Characters")
        .required("Required"),
        question2: yup
          .string()
          .min(200, "Must Be min 200 Characters")
          .required("Required"),
      });

  return (
    <div className='w-full flex justify-center items-center min-h-screen fixed bg-[rgba(0,0,0,0.5)]'>
        <div className="form p-5 w-[50vw] rounded-lg min-h-[50vh] bg-white">
           <Formik initialValues={{question1:"",question2:""}} 
           validationSchema={validationSchema}
           onSubmit={(values)=>{
            console.log(values,"Values ")
            toggle();
           }}
           >

            {
                ({errors})=>{
                    return <Form>
                              <h1 className='text-left font-semibold my-3 text-xl ' > Why Should We Hire You ? </h1>
                              <Field type="text" as="textarea" className={errors.question1 ?` w-full    pl-8 py-2 rounded border-red-400 border-2`:"w-full    pl-8 py-2 rounded border-2" } name="question1" placeholder="Enter your answer " />
                              <h1 className='text-left font-semibold my-3 text-xl ' >  Cover Letter </h1>

                              <Field type="text" as="textarea" className={errors.question2 ?` w-full    pl-8 py-2 rounded border-red-400 border-2`:"w-full    pl-8 py-2 rounded border-2" } name="question2" placeholder="Enter your answer " />
                           <div className="w-full gap-2 grid grid-cols-2">
                            <div className="cancel flex justify-center items-center">
                            <button onClick={()=>toggle()} className='bg-[#FFF6F8] w-full font-semibold py-3 rounded-md text-[#F50057] px-10 '>Cancel</button>

                            </div>
                           <PrimaryButton className={"my-5 py-3"} type='submit'>Apply For This Job </PrimaryButton>

                           </div>
                    </Form>
                }
            }

           </Formik>
        </div>
    </div>
  )
}

export default JobQuestion