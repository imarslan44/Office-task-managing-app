import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getLocalStorage } from '../context/Data';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
const ProtectedRoutes = ({children}) => {

 const [userRole] = useContext(AuthContext)

    const navigate = useNavigate();
console.log(userRole)
    useEffect(() => {
      if(userRole != "employee" && userRole != "admin"){
        navigate("/signIn/signUp")
       
       }
    }, [userRole])
    
       
    return (
      children
    )
  

}

export default ProtectedRoutes