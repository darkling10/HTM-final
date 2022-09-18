import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Popup from './Popup';
import { PrimaryButton } from './Buttons';

const PastSchema = Yup.object().shape({
    CompanyName: Yup.string()
        .required("Required"),
    Role: Yup.string()
        .required("Required"),
    DescProject: Yup.string()
         .required("Required")

});
function PastExperience({ toggle }) {


    return (
        <Popup>
            <div className={` flex flex-col w-[500px] justify-center mx-auto relative bg-white p-8 rounded-lg`}>
                <Formik
                    initialValues={{
                        CompanyName: "",
                        Role: "",
                        DescProject:"",
                    }}
                    validationSchema={PastSchema}
                    onSubmit={(values) => {
                        console.log(JSON.stringify(values));
                        toggle();
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <label htmlFor="CompanyName" className='font-Inter relative left-[-165px] text-[16px] font-medium text-black'>Company Name</label>
                            <Field name="CompanyName" placeholder="Project Name" id="CompanyName" type="text" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-3 " />
                            {errors.CompanyName && touched.CompanyName ? (
                                <div className='text-red-600 mb-2'>{errors.CompanyName}</div>
                            ) : null}

                            <label htmlFor="Role" className='font-Inter relative left-[-200px] text-[16px] font-medium text-black'>Role</label>
                            <Field name="Role" placeholder="Project Name" id="Role" type="text" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-3 " />
                            {errors.Role && touched.Role ? (
                                <div className='text-red-600 mb-2'>{errors.Role}</div>
                            ) : null}

                            <label htmlFor="DescProject" className='font-Inter relative left-[-70px] text-[16px] font-medium text-black'>Description about the work experience </label>
                            <Field name="DescProject" id="DescProject" as="textarea" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-3 " placeholder="Project Description" />
                            {errors.DescProject && touched.DescProject ? (
                                <div className='text-red-600 mb-2'>{errors.DescProject}</div>
                            ) : null}

                            <button className='px-10 py-2 mt-4 relative bg-primary text-white rounded-md hover:bg-primary-dark' type='submit' >Save</button>
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

export default PastExperience;