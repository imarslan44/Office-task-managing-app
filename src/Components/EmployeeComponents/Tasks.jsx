import React from 'react'
import DashboardNav from '../dashboardNav'
import TaskSchedule from '../TaskSchedule'
import Sidebar from '../sidebar/Sidebar'
const Tasks  = () => {

  return (
    <>
    <Sidebar/>
    <section className='w-full h-screen bg-gray-100 flex flex-col'>
      <DashboardNav/>
      <section className='flex h-full w-full bg-blue-100 p-4 gap-4'>
  <div id="content" className='w-9/12 flex flex-col gap-4'>
  <div className={`TaskOv w-full flex justify-between gap-4 text-xl font-medium text-p2`}>

    <div className={`flex-1 p-8 bg-p1 shadow-sm`}>
    New Tasks  3
    </div>
    <div className={`flex-1 p-8  bg-p1 shadow-sm`}>
    Pending Tasks 4
    </div>
    <div className={`flex-1 p-8 bg-p1 shadow-sm`}>
    Completed Tasks 6
    </div>
  </div>

  <div className='w-full h-full bg-p1 rounded-md'>
   <ul className='p-4'>
    <li className='flex gap-5 justify-between px-5 p-5 shadow-md border-2 border-gray-200 my-2 cursor-pointer min-h-15 hover:min-h-30  transition-all duration-500'><h3>This is a Title</h3> <span>This is a Description this could be very very very long and lengthy</span><span>catagory</span><span>11-12-2025</span></li>
    <li className='flex gap-5 justify-between px-5 p-5 shadow-md border-2 border-gray-200 my-2 cursor-pointer min-h-15 hover:min-h-30  transition-all duration-500'><h3>This is a Title</h3> <span>This is a Description this could be very very very long and lengthy</span><span>catagory</span><span>11-12-2025</span></li>
    <li className='flex gap-5 justify-between px-5 p-5 shadow-md border-2 border-gray-200 my-2 cursor-pointer min-h-15 hover:min-h-30  transition-all duration-500'><h3>This is a Title</h3> <span>This is a Description this could be very very very long and lengthy</span><span>catagory</span><span>11-12-2025</span></li>
   </ul>
  </div>
  </div>
  <TaskSchedule classes={'w-3/12'}/>
      </section>
   </section>
   </>
  )
}

export default Tasks 