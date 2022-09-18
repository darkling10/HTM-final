import React, { useEffect, useState } from 'react';
import CoverImg from '../components/CoverImg';

import ProfileImg from "../components/ProfileImg"
import PopFormOne from '../components/PopFormOne';
import { SubTitle } from '../components/Typography';
import EducationForm from '../components/EducationForm';
import ProjectForm from '../components/ProjectForm';
import PastExperience from '../components/PastExperience';
import Certifications from '../components/CertificateForm';
import SkilsForm from '../components/SkillsForm';
import { useAuth } from '../hooks/Auth';

function ProfilePage() {

    const [openForm1, setopenForm1] = useState(false);
    const [openForm2, setopenForm2] = useState(false);
    const [openForm3, setopenForm3] = useState(false);
    const [openForm4, setopenForm4] = useState(false);
    const [openForm5, setopenForm5] = useState(false);
    const [openForm6, setopenForm6] = useState(false);
    const {UserData} = useAuth()
    const toggle1 = () => {
        setopenForm1(!openForm1)
    }
    const toggle2 = () => {
        setopenForm2(!openForm2)
    }
    const toggle3 = () => {
        setopenForm3(!openForm3)
    }
    const toggle4 = () => {
        setopenForm4(!openForm4)
    }
    const toggle5 = () => {
        setopenForm5(!openForm5)
    }
    const toggle6 = () => {
        setopenForm6(!openForm6)
    }
    const {GetUser} = useAuth();
    useEffect(() => {
        GetUser()
        
    }, []);
    return (
        <div className=' mb-5'>
            <div className='w-full'>
                <CoverImg img={UserData?.CoverIMG} />
            </div>
            <div className=' grid grid-cols-2'>
                <div className="">
                    <ProfileImg />
                </div>
                <div className='flex flex-row justify-center mt-3 '>
                    <a href={""} className='mx-4'><img alt='icon' src="https://img.icons8.com/color/30/000000/instagram-new--v1 png" /></a>
                    {console.log("")}
                    <a href={""} className=''><img alt='icon' src="https://img.icons8.com/color/30/000000/twitter--v1.png" /></a>
                    <a href={""} className='mx-4'><img alt='icon' src="https://img.icons8.com/fluency/30/000000/github.png" /></a>
                    <a href={""} className=''><img alt='icon' src="https://img.icons8.com/ultraviolet/30/000000/domain.png" /></a>
                </div>
            </div>
            <div className=" flex justify-between lg:px-72 px-[30px]">
                <p className='font-Inter text-[16px] font-medium text-black' >John Doe</p>
                <span className='cursor-pointer' onClick={() => toggle1()} >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" /><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" /></svg>
                </span>
            </div>
            <div className='flex flex-row lg:px-72 px-[30px] justify-arround mt-6'>
                <div className=' flex  text-p-gray mr-7 pr-4'>
                    <svg className="mr-3 w-8 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                    Location
                </div>

                <div className='flex place-content-center text-p-gray mr-7 pr-4'>
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                    D-O-B
                </div>

                <div className='flex place-content-center text-p-gray mr-7 pr-4'>
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                    RitvikJain22@vit.edu.in
                </div>
            </div>
            <div className='flex justify-start  lg:px-72 px-[30px] mt-5'>
                <span>Tech Geek  | Vlogger | Coder | Open Source Enthusiast
                </span>
            </div>
            <div className='flex flex-row justify-start md:justify-evenly w-auto md:mx-auto '>
                <div className='  px-[30px] mt-5 mb-4'>
                    <div className="flex justify-center items-center px-2 py-2   text-light-voilet rounded-full bg-light-blue text-base font-medium">
                        <div className="flex max-w-full leading-none text-xs font-normal">Frontend Development</div>
                    </div>
                </div>
                <div className='  px-[30px] mt-5 mb-4'>
                    <div className="flex justify-center items-center px-2 py-2  text-light-voilet rounded-full bg-light-blue text-base font-medium">
                        <div className="flex max-w-full leading-none text-xs font-normal">UI UX Designer</div>
                    </div>
                </div>
                <div className='  px-[30px] mt-5 mb-4'>
                    <div className="flex justify-center items-center px-2 py-2  text-light-voilet rounded-full bg-light-blue text-base font-medium">
                        <div className="flex max-w-full leading-none text-xs font-normal">Full Stack Developer</div>
                    </div>
                </div>
            </div>
            <span className='h-fit'>About</span>
            <div className='flex  justify-between border-b-2 pb-2 lg:mx-72 h-auto p-4 mx-[30px] mt-5'>
                <p className='self-center text-p-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam corrupti rerum earum id itaque blanditiis voluptas? Enim laudantium, consectetur maiores nisi distinctio libero dolor temporibus iusto amet inventore dolores perferendis.</p>
            </div>
            <span>Education</span>
            <div className='flex  justify-start border-b-2 pb-2 lg:mx-72 h-auto mx-[30px] mt-5'>
                {/* <div className='text-p-gray mx-auto  flex flex-col justify-center items-center'>No Education Added </div>
                 */}
                <div className='text-p-gray mx-auto  flex flex-col justify-center items-center'>
                    <div className='bg-light-blue p-4 rounded-lg '>
                        <p className="text-light-voilet text-sm">Diploma in computer science</p>
                        <p className='text-xs my-1 '>MIT College Pune , India</p>
                        <p className='text-xs '>7-5-2018   to 8-4-2021</p>
                    </div>
                </div>
                <div className='text-p-gray mx-auto  flex flex-col justify-center items-center'>
                    <div className='bg-light-blue p-4 rounded-lg '>
                        <p className="text-light-voilet text-sm">B.E Computer Engineering</p>
                        <p className='text-xs my-1 '>VIT College Pune , India</p>
                        <p className='text-xs '>7-5-2018   to 8-4-2021</p>
                    </div>
                </div>

                <div className='p-2 rounded-full bg-[#F8F7FF] h-fit self-center'>
                    <p className='text-light-voilet px-2 text-lg  cursor-pointer ' onClick={() => toggle2()}>+</p>
                </div>
            </div>
            <span className='h-fit'>Project</span>
            <div className='flex   justify-start border-b-2 p-2  lg:mx-72 h-auto  mx-[30px] bg-light-blue  '>
                {/* <div className='text-p-gray  mx-auto flex flex-col justify-center items-center'>No Project Added </div> */}
                <div className='grid grid-cols-[5fr_5fr]'>
                    <div className=''>
                        <img src="" alt="" className='' />
                    </div>
                    <div className=''>
                        <div className='flex flex-row justify-between '>
                            <p className="text-[25px]">Investment Landing Page</p>
                            <div className='p-2 rounded-full bg-[#F8F7FF] h-fit self-center'>
                                <p className='text-light-voilet px-2 text-lg cursor-pointer  ' onClick={() => toggle3()}>+</p>
                            </div>

                        </div>
                        <div className='my-3 flex flex-start '>
                            <span className='text-light-voilet text-sm bg-light-blue mr-4 px-4 py-1 rounded-xl'>Frontend Development</span>
                            <span className='text-light-voilet text-sm bg-light-blue  px-4 py-1 rounded-xl'>UI UX Design</span>
                        </div>
                        <div className='text-p-gray text-left'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis
                        </div>
                    </div>

                </div>
                {/* <div className='p-2 rounded-full bg-[#F8F7FF] h-fit self-center'>
                    <p className='text-light-voilet px-2 text-lg cursor-pointer ' onClick={() => toggle3()}>+</p>
                </div> */}

            </div><div className='flex   justify-start border-b-2 pb-2 h-auto p-4 lg:mx-72 mx-[30px] mt-5'>
                <span>Past Experience</span>
                <div className='text-p-gray mx-auto  flex flex-col  justify-center items-center'>No Past Experience Added </div><div className='p-2 rounded-full bg-[#F8F7FF] h-fit self-center'>
                    <p className='text-light-voilet px-2 text-lg cursor-pointer ' onClick={() => toggle4()}>+</p>
                </div>

            </div>
            <div className='flex   justify-start border-b-2 pb-2 h-auto p-4  lg:mx-72 mx-[30px] mt-5'>
                <span>Certifications</span>
                <div className='text-p-gray mx-auto  flex  flex-col justify-center items-center'>No Certifications Added </div><div className='p-2 rounded-full bg-[#F8F7FF] h-fit self-center'>
                    <p className='text-light-voilet px-2 text-lg cursor-pointer ' onClick={() => toggle5()}>+</p>
                </div>

            </div><div className='flex justify-start pb-2 h-auto p-4  lg:mx-72 mx-[30px] mt-5'>
                <span>Skills</span>
                <div className='text-p-gray mx-auto  flex flex-col  justify-center items-center'>No Skills Added </div><div className='p-2 rounded-full bg-[#F8F7FF] h-fit self-center'>
                    <p className='text-light-voilet px-2 text-lg cursor-pointer  ' onClick={() => toggle6()}>+</p>
                </div>

            </div>
            {
                openForm1 ? <PopFormOne toggle={toggle1} /> : null
            }
            {
                openForm2 ? <EducationForm toggle={toggle2} /> : null
            }
            {
                openForm3 ? <ProjectForm toggle={toggle3} /> : null
            }
            {
                openForm4 ? <PastExperience toggle={toggle4} /> : null
            }
            {
                openForm5 ? <Certifications toggle={toggle5} /> : null
            }
            {
                openForm6 ? <SkilsForm toggle={toggle6} /> : null
            }
        </div>

    )
}

export default ProfilePage;