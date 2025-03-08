
import React, {useState}from 'react'
import Sidebar from '../sidebar/Sidebar'
import AdminDashboard from './Ad Dashboard'
const AdminPannel = () => {
 const [openNav, setOpenNav] = useState(false)
 const handleClick = ()=>{
  
 }
  return (
    <>

    <Sidebar openNav={openNav} />
    <AdminDashboard openNav={openNav} setOpenNav={setOpenNav}/>
    </>
  )
}

export default  AdminPannel