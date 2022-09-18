import React, { useState ,useEffect} from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Popup from './Popup';
import { PrimaryButton } from './Buttons';

const ProjectSchema = Yup.object().shape({

    ProjectName: Yup.string()
        .required('Required'),
    Skills: Yup.string()
        .required('Required'),
    Desc: Yup.string()
        .required("Required"),
    Website: Yup.string().url()
        .required("Required"),
    Image: Yup.string()
        .required("Image is neccesary")



});
function ProjectForm({ toggle }) {
    const [Images, SetImages] = useState([]);
    const [ImageUrl, SetImageUrl] = useState([]);

    useEffect(() => {
        if (Images.length > 1) {
            return;
        }
        const newImageURLs = [];
        Images.forEach(Image => newImageURLs.push(URL.createObjectURL(Image)))
        SetImageUrl(newImageURLs);
    }, [Images])

    const handleImageChange = (e) => {
        SetImages([...e.target.files]);
    }

    return (


        <Popup>
            <div className={` flex flex-col w-[500px] justify-center mx-auto relative bg-white p-8 rounded-lg`}>
                <Formik
                    initialValues={{
                        ProjectName: "",
                        Skills: "",
                        Desc: "",
                        Website: "",
                        Image: ""
                    }}
                    validationSchema={ProjectSchema}
                    onSubmit={(values) => {
                        console.log(JSON.stringify(values));
                        toggle();
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <label htmlFor="ProjectName" className='font-Inter relative left-[-165px] text-[16px] font-medium text-black'>Project Name</label>
                            <Field name="ProjectName" placeholder="Project Name" id="ProjectName" type="text" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-3 " />
                            {errors.ProjectName && touched.ProjectName ? (
                                <div className='text-red-600 mb-2'>{errors.ProjectName}</div>
                            ) : null}

                            <label htmlFor="Skills" className='font-Inter relative left-[-165px] text-[16px] font-medium text-black'>Project Name</label>
                            <Field name="Skills" id="Skills" type="text" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-3 " placeholder="Enter comma separated values" />
                            {errors.Skills && touched.Skills ? (
                                <div className='text-red-600 mb-2'>{errors.Skills}</div>
                            ) : null}

                            <label htmlFor="Desc" className='font-Inter relative left-[-165px] text-[16px] font-medium text-black'>Project Name</label>
                            <Field name="Desc" id="Desc" as="textarea" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-3 " placeholder="Project Description" />
                            {errors.Desc && touched.Desc ? (
                                <div className='text-red-600 mb-2'>{errors.Desc}</div>
                            ) : null}

                            <label htmlFor="Website" className='font-Inter relative left-[-165px] text-[16px] font-medium text-black'>Website Link</label>
                            <Field name="Website" id="Website" type="link" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-3 " placeholder="Website.com" />
                            {errors.Website && touched.Website ? (
                                <div className='text-red-600 mb-2'>{errors.Website}</div>
                            ) : null}
                            <div className='flex flex-row justify-around items-center mb-4'>
                                <label htmlFor="Image" className='font-Inter relative left-[-20px] text-[16px] font-medium text-black'>Cover Photo of Project</label>
                                <input type="file" name="Image" id="Image" className='hidden'
                                    onChange={handleImageChange}
                                />
                                <button className='px-4 py-1  bg-primary text-white rounded-md hover:bg-primary-dark'>
                                    Upload Image
                                </button>
                            </div>
                            <button className='px-10 py-2 mt-4 relative  bg-primary text-white rounded-md hover:bg-primary-dark' type='submit' >Save</button>

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

export default ProjectForm;