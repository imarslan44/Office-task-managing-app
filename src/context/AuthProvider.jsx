import React, { createContext, useState } from 'react'
import { useEffect } from 'react'
import { getLocalStorage } from './Data'

export const AuthContext = createContext()

function AuthProvider({children}) {

  const [userData, setUserData] = useState(getLocalStorage())
  // const {employees, admins} = userData
  
  

  return (
    <div>
      <AuthContext.Provider value={[userData, setUserData]}>
      {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider