import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Popup from './Popup';
import { PrimaryButton } from './Buttons';

const SkillSchema = Yup.object().shape({
    SkillName: Yup.string()
        .required("Required"),
    Level: Yup.string()
        .required("Required")

});
function SkilsForm({ toggle }) {
    return (
        <Popup>
            <div className={` flex flex-col w-[500px] justify-center mx-auto relative bg-white p-8 rounded-lg`}>
                <Formik
                    initialValues={{
                        SkillName: "",
                        Level: "Beginer"

                    }}
                    validationSchema={SkillSchema}
                    onSubmit={(values) => {
                        console.log(JSON.stringify(values));
                        toggle();
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <label htmlFor="SkillName" className='font-Inter relative left-[-165px] text-[16px] font-medium text-black'>Company Name</label>
                            <Field name="SkillName" placeholder="Skill Name" id="SkillName" type="text" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-3 " />
                            {errors.SkillName && touched.SkillName ? (
                                <div className='text-red-600 '>{errors.SkillName}</div>
                            ) : null}

                            <label htmlFor="Level" className='font-Inter relative left-[-190px] text-[16px] font-medium text-black'>Level</label>
                            <Field name="Level" id="Level" as="select" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-3 " >
                                <option value="Beginner" className='bg-white'>Beginer</option>
                                <option value="Intermediate" className='bg-white'>Intermediate</option>
                            </Field>
                            {errors.Level && touched.Level ? (
                                <div className='text-red-600 '>{errors.Level}</div>
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

export default SkilsForm;