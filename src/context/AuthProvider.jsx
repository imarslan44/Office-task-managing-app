import React, { createContext, useState } from 'react'
import { useEffect } from 'react'
import { getLocalStorage } from './Data'

export const AuthContext = createContext()

function AuthProvider({children}) {

  const [userData, setUserData] = useState(null)

  useEffect(() => {
    
    const {employees, admins} = getLocalStorage()

    setUserData({employees,admins})
  },[])
  
 
  return (
    <div>
      <AuthContext.Provider value={{userData, setUserData}}>
      {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider