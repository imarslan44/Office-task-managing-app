import React, { createContext, useState } from 'react'
import { useEffect } from 'react'
import { getLocalStorage } from './Data'
import { Navigate, useNavigate } from 'react-router-dom'
export const AuthContext = createContext()

function AuthProvider({children}) {

  const [userRole, setUserRole] = useState(localStorage.getItem("userRole") || null)
  // const {employees, admins} = userData
  
  console.log(userRole)


  return (
    <div>
      <AuthContext.Provider value={[userRole, setUserRole]}>
      {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider