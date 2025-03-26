import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter as Router,Routes, Route, useNavigate} from 'react-router-dom'
import GetStart from './Components/GetStart-Components/GetStart'
import Login from './Components/Login'
import Sidebar from './Components/sidebar/Sidebar'
import AdminPannel from './Components/Admin Components/AdminPannel'
import EmpDashboard from './Components/EmployeeComponents/EmpDashboard'
import Tasks from './Components/EmployeeComponents/Tasks'
import { getLocalStorage, setLocalStorage } from './context/Data'
import { useSelector } from 'react-redux'
import ProtectedRoutes from './Components/ProtectedRoutes'
import { AuthContext } from './context/AuthProvider'




const App = () => {

  const AppComponent = ()=>{
const [openNav, setOpenNav] = useState(false)
  

const [userRole, setUserRole] = useContext(AuthContext)

const [logedInUserData, setlogedInUserData]
= useState(null);

   const state = useSelector((state)=>state);
   const data = getLocalStorage();

const navigate = useNavigate()

useEffect(() => {
  const isData = getLocalStorage()
   if(!isData.employees){
  setLocalStorage(state)
  
  }
},[])


async function handleLogin(email, password){

const employees =  await data.state.employees;
const admins =  await data.state.admins;
const employee =  employees.find(e => e.email === email && e.password === password);
const admin = admins.find(e => e.email === email && e.password === password);

if(employee){
 
  setlogedInUserData(employee);
  setUserRole("employee");
  localStorage.setItem("userRole","employee")
  localStorage.setItem("logedInUserData", JSON.stringify(employee));
  navigate("/dashboard")
}else if(admin){

  setlogedInUserData(admin);
  localStorage.setItem("userRole","admin");
  localStorage.setItem("logedInUserData", JSON.stringify(admin));
  setUserRole("admin");
  navigate("/dashboard")
}

}

 

//copied code above


  return (
    <div className='App-conatiner flex'>
    
      
        <Routes>

        <Route exact path="/" element={ <GetStart />} />

        <Route path="/signIn/signUp" element={<Login handleLogin={handleLogin} setUserRole={setUserRole}/>} />

        <Route path='/dashboard' 
        element={
         <ProtectedRoutes>
          {userRole === "employee" && <EmpDashboard openNav={openNav} setOpenNav={setOpenNav}/> || userRole === "admin" && <AdminPannel openNav={openNav} setOpenNav={setOpenNav}/>}
        </ProtectedRoutes>
      }/>
        <Route path='/Tasks' element={<Tasks/>}/>
        <Route path='/Timeline' element={<EmpDashboard/>}/>
      

        </Routes>
  
    
    </div>
  )
}
return (
<Router>
  <AppComponent/>
</Router>
)

}

export default App