import { createContext, useContext, useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import { BaseUrl } from "../api/apiURL";
import axios from 'axios';
const AuthContext = createContext({});

 function AuthProvider ({children}){
    const [UserData, setUserData] = useState(null);
    const navigate = useNavigate();
    let userToken = sessionStorage.getItem("bearer");
  
    const validUser = ()=>{
        if(userToken)
        {
            return true;
        }
        return false;
    }
   
    const getCompany = async()=>{
        const token = sessionStorage.getItem('bearer')
        if(token){
            try {
                const config = {
                    headers: { 'x-access-token': `Bearer ${token}` }
                };
                axios.get(`${BaseUrl}/company/profile`,config).then((res)=>{
                  setUserData(res.data.data)
                }).catch((err)=>console.log(err))
         

            } catch (error) {
            navigate('/')
            }
        }else{
            alert("Error occurred");
            navigate('/')
        }
       
    }

    const GetUser=async()=>{
        const token = sessionStorage.getItem('bearer')
        if(token){
            try {
                const config = {
                    headers: { 'x-access-token': `Bearer ${token}` }
                };
                axios.get(`${BaseUrl}/student/profile`,config).then((res)=>{
                   let user = res.data.data[0];
                   console.log(user)
                   setUserData(user)
                
                }).catch((err)=>console.log(err))
    
            } catch (error) {
            navigate('/')
            }
        }else{
            navigate('/')
        }
       
    }

    const LogOut = ()=>{
        sessionStorage.removeItem("bearer");
        navigate('/');
    }

    const setToken=(token)=>
    {
    sessionStorage.setItem('bearer',token)
    }
    const getToken = ()=>{
        if(sessionStorage.getItem('token')!==null){
            return  sessionStorage.getItem('bearer');
        }
     return null;
    }
    return <AuthContext.Provider value={{validUser,getCompany, getToken , LogOut,GetUser,setToken,UserData}} >
        {children}
    </AuthContext.Provider>
}

 function useAuth() {
    return useContext(AuthContext);
  }

  export {useAuth,AuthProvider}