import React from 'react'
import Sidebar from "../sidebar/Sidebar"
import DashboardNav from '../dashboardNav'
import HeatMap from '../Chartsjs/HeatMap'
const EmpDashboard = () => {
  return (
    <>
    <Sidebar/> 
    <section className='w-full h-screen grid bg-gray-100 grid-cols-12 grid-rows-10 p-4'>
    <DashboardNav/>
     
   
  
    </section>
    </>
    
  )
}

export default EmpDashboard