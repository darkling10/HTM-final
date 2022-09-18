import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from 'yup';
import Popup from './Popup';
import { PrimaryButton } from './Buttons';


const EduSchema = Yup.object().shape({

    College: Yup.string()
    .required("Required"),
    EduType: Yup.string()
        .required('Required'),
    Status: Yup.string()
        .required("Required"),
    CompletionYr: Yup.number()
        .required("Required"),
    Stream: Yup.string()
        .required("Required"),
    Performance: Yup.number()
        .required("Required")

});

function EducationForm({ toggle }) {
    return (
        <Popup>
            <div className={` flex flex-col w-[500px] justify-center mx-auto relative bg-white p-8 rounded-lg`}>
                <Formik
                    initialValues={{
                        College:"",
                        EduType: "Degree",
                        Status: "Persuing",
                        CompletionYr: "",
                        Stream: "",
                        Performance: ""
                    }}
                    validationSchema={EduSchema}
                    onSubmit={(values) => {
                        console.log(JSON.stringify(values));
                        toggle();
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <label htmlFor="College" className='font-Inter relative left-[-189px] text-[16px] font-medium text-black'>College</label>
                            <Field name="College" id="College" type="text" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-3 " />
                            {errors.College && touched.College ? (
                                <div className='text-red-600 mb-2'>{errors.College}</div>
                            ) : null}

                            <label htmlFor="EduType" className='font-Inter relative left-[-160px] text-[16px] font-medium text-black'>Education Type</label>
                            <Field name="EduType" id="EduType" as="select" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-3 ">
                                <option value="Degree" className='bg-white'>Degree</option>
                                <option value="UnderGraduate" className='bg-white'>UnderGraduate</option>
                                <option value="Junior College" className='bg-white'>Junior College</option>
                            </Field>
                            {errors.EduType && touched.EduType ? (
                                <div className='text-red-600 mb-2'>{errors.EduType}</div>
                            ) : null}

                            <label htmlFor="Status" className='font-Inter relative left-[-190px] text-[16px] font-medium text-black'>Status</label>
                            <Field name="Status" id="Status" as="select" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-3 " >
                                <option value="Persuing" className='bg-white'>Persuing</option>
                                <option value="Completed" className='bg-white'>Completed</option>
                            </Field>
                            {errors.Status && touched.Status ? (
                                <div className='text-red-600 mb-2'>{errors.Status}</div>
                            ) : null}

                            <label htmlFor="CompletionYr" className='font-Inter relative left-[-155px] text-[16px] font-medium text-black'>Completion Year</label>
                            <Field name="CompletionYr" id="CompletionYr" type="number" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-3 " />
                            {errors.CompletionYr && touched.CompletionYr ? (
                                <div className='text-red-600 mb-2'>{errors.CompletionYr}</div>
                            ) : null}

                            <label htmlFor="Stream" className='font-Inter relative left-[-188px] text-[16px] font-medium text-black'>Stream</label>
                            <Field name="Stream" id="Stream" type="select" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-3 " />
                            {errors.Stream && touched.Stream ? (
                                <div className='text-red-600 mb-2'>{errors.Stream}</div>
                            ) : null}


                            <label htmlFor="Performance" className='font-Inter relative left-[-150px] text-[16px] font-medium text-black'>Performance <span className='text-[10px] text-p-gray'>(CGPA)</span></label>
                            <Field name="Performance" id="Performance" type="number" max={10} className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-3 " />
                            {errors.Performance && touched.Performance ? (
                                <div className='text-red-600 mb-2'>{errors.Performance}</div>
                            ) : null}

                            <button className='px-10 py-2 bg-primary text-white rounded-md hover:bg-primary-dark' type='submit' >Save</button>


                            <PrimaryButton className="ml-4" onClick={() => {
                                toggle()
                            }}>Cancel</PrimaryButton>
                        </Form>
                    )}
                </Formik>
            </div>
        </Popup>

    )
}

export default EducationForm