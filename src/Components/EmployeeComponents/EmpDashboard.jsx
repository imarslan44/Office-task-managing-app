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

   <section className=' h-screen w-full max-sm:w-screen flex flex-col bg-gray-100   '>
    <DashboardNav classes={'h-1/12'} setOpenNav={setOpenNav}/>
    <div  className="h-full w-full max-sm:w-screen flex flex-col  overflow-x-auto">
     <section className='flex h-full   w-full max-lg:w-[200%] sm:gap-3 sm:p-3 '>

{/* <div>
    
</div> */}
<div className='sm:w-9/12 min-h-full  flex flex-col gap-3 max-sm:w-screen z-10 '>
     <TaskOv classes={`max-sm:w-screen w-9/12 max-sm:p-3 sm:h-2/12`}/>
<div className='wrapper max-sm:w-dvw overflow-x-auto h-auto  sm:h-full '>


  <div className="  w-full h-auto sm:h-full sm:gap-4     
     max-sm:w-[200%] grid grid-cols-2 grid-rows-1 gap-1 overflow-x-auto ">

    <div className='flex flex-col gap-3 max-sm:w-full h-full'>
    <TaskProgressChart classes={`w-full  h-1/2`}/>
     <BarChart classes={' rounded-sm w-full h-1/2 '}/>
    </div>
    <TopEmployees classes={`h-full w-full`}/>

  </div>


</div>
</div>

<TaskSchedule classes={'h-full lg:flex-1 max-sm:w-dvw '}/>

     
    
       
     </section>
     </div>
     </section>
    </>
    
  )
}

export default EmpDashboard