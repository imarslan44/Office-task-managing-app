import React from 'react'
import Sidebar from "../sidebar/Sidebar"
import DashboardNav from '../dashBoardNav';
import TopEmployees from '../TopEmployee'
import BarChart from '../Chartsjs/BarCHart'
import TaskOv from './TaskOv'
import TaskProgressChart from '../Chartsjs/ProgressChart'
import TaskSchedule from '../TaskSchedule'


const EmpDashboard = ({openNav, setOpenNav}) => {


  return (
    <>
    <Sidebar openNav={openNav}></Sidebar>
    <section className=' h-screen w-full flex flex-col bg-gray-100 '>
    <DashboardNav classes={'flex-1'} setOpenNav={setOpenNav}/>
     <section className='content  w-full  h-10/11 grid grid-cols-12 grid-rows-12 p-4 gap-4 overflow-hidden'>
    <TaskOv/>

     <BarChart classes={'h-full rounded-sm col-start-1 col-span-5 row-start-3  row-span-5  '}/>
     <TaskProgressChart/>
     <TopEmployees classes={'col-start-6 col-span-4  row-start-3 row-span-full'}/>


<TaskSchedule classes={'col-start-10 col-span-full  row-span-12 row-start-1'}></TaskSchedule>

     
    
       
     </section>
   
  
    </section>
    </>
    
  )
}

export default EmpDashboard