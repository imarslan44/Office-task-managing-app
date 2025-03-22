import React from 'react'
import Sidebar from "../sidebar/Sidebar"
import DashboardNav from '../dashboardNav'
import TopEmployees from '../TopEmployee'
import BarChart from '../Chartsjs/BarCHart'
import TaskOv from './TaskOv'
import TaskProgressChart from '../Chartsjs/ProgressChart'
const EmpDashboard = () => {



 
  return (
    <>
    <Sidebar/> 
    <section className=' h-screen w-full flex flex-col bg-gray-100 '>
    <DashboardNav classes={'flex-1'}/>
     <section className='content  w-full  h-10/11 grid grid-cols-12 grid-rows-12 p-4 gap-4'>
    <TaskOv/>




<BarChart classes={'h-full rounded-sm col-start-1 col-span-5 row-start-3  row-span-5  '}/>
<TaskProgressChart/>
<TopEmployees classes={'col-start-6 col-span-4  row-start-3 row-span-full'}/>




     <section className='w-full h-full col-start-10 col-span-full  row-span-12 row-start-1 bg-p1 shadow-xl rounded-md text-xl p-4'>
      Task schedule
     </section>
    
       
     </section>
   
  
    </section>
    </>
    
  )
}

export default EmpDashboard