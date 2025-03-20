import React from 'react'
import Sidebar from "../sidebar/Sidebar"
import DashboardNav from '../dashboardNav'
import HeatMap from '../Chartsjs/HeatMap'
import BarChart from '../Chartsjs/BarCHart'
const EmpDashboard = () => {

  const styles = `w-full p-8 flex justify-around bg-p1 shadow-sm text-xl row-span-2 font-semibold text-p2`
  return (
    <>
    <Sidebar/> 
    <section className='w-full h-screen flex flex-col bg-gray-100 '>

    <DashboardNav classes={''}/>

     <section className='content w-full h-full flex-1 grid grid-cols-12 grid-rows-12 p-4 gap-4  max-h-full'>
   
   <div className={`col-start-1 col-span-3 ${styles}`}>
    Total Tasks  4
   </div>
   <div className={`col-start-4 col-span-3  ${styles}`}>
   Pending Tasks 4
   </div>
   <div className={`col-span-3 ${styles}`}>
    Completed Tasks 6
   </div>




<BarChart classes={'h-full rounded-sm col-start-1 col-span-5 row-start-3  row-span-5  '}/>

     <section className='w-full h-full col-start-10 col-span-full  row-span-full row-start-1 bg-p1 shadow-xl rounded-md'>
      Task schedule
     </section>
    
       
     </section>
   
  
    </section>
    </>
    
  )
}

export default EmpDashboard