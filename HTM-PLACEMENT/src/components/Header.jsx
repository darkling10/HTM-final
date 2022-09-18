import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useAuth } from '../hooks/Auth';
const Header = () => {

    const {GetUser,UserData,LogOut} = useAuth();

    useEffect(() => {
        GetUser();
        
    }, []);
  
    return (
        <div className='w-full bg-white min-h-[10vh] fixed left-0 top-0'>
            <div className="container mx-auto items-center min-h-[10vh] flex justify-between">
                <div className="logo">
                    <Link to={"/dashboard"}>
                    <h1 className="text-xl font-Inter font-bold text-primary-dark "><i class='bx text-primary-dark align-middle text-2xl bxs-briefcase'></i> BrandName</h1>
                 </Link>
                </div>
                <div className="links">
                    <Link className='mx-2 hover:underline hover:text-black text-gray-500 hover:font-medium' to="/Company">Company</Link>
                    <Link className='mx-2 hover:underline hover:text-black text-gray-500 hover:font-medium' to="/my-applications">Application</Link>
                    <Link className='mx-2 hover:underline hover:text-black text-gray-500 hover:font-medium' to="/Experience">Interview Experience</Link>
                    <Link className='mx-2 hover:underline hover:text-black text-gray-500 hover:font-medium' to="/Experience">Notification</Link>
                </div>
                <div className="profile flex  ">
                    <Link to={`/student/${UserData?._id}`}>
                    <div className='cursor-pointer flex justify-center items-center'>
                    <img src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='w-8 h-8 rounded-full' alt="" />
                    <h1 className='mx-2 font-medium text-sm '>{UserData?.name }</h1>
                
                    </div>
                    </Link>
                    <div className="logout">

                    <button onClick={()=>LogOut()} className='text-2xl text-gray-500'><i class='bx bx-log-in-circle'></i></button>
                </div>
                </div>
               
            </div>
        </div>
    );
}

export default Header;
