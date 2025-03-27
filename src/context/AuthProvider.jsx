import React, { createContext, useState } from 'react'
import { useEffect } from 'react'
import { getLocalStorage } from './Data'
import { Navigate, useNavigate } from 'react-router-dom'
export const AuthContext = createContext()

function AuthProvider({children}) {

  const [userRole, setUserRole] = useState(localStorage.getItem("userRole") || null)
  const [LogedinUser, setLogedinUser] = useState(JSON.parse(localStorage.getItem("logedInUserData")))
 
  // const {employees, admins} = userData
  

  return (
    <div>
      <AuthContext.Provider value={[userRole, setUserRole, LogedinUser, setLogedinUser]}>
      {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider