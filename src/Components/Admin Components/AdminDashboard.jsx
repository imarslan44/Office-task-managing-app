import React from 'react'
import Button from '../Button'
import BarChart from '../Chartsjs/BarCHart'
import LineChartWithFill from '../Chartsjs/lineChart'
import CreateTask from './createTask'
import TopEmployee from '../TopEmployee'
import TasksOv from './tasksOv'
import DashboardNav from '../dashboardNav'
const AdminDashboard = ({openNav, setOpenNav}) => {
  
  return (
    <section className='w-full h-screen  bg-blue-50 grid grid-cols-12 grid-rows-10 p-3 pt-0 gap-3'>

    <DashboardNav/>
    <BarChart/> 
    <div className='col-start-6 col-span-4 row-start-7 row-span-full bg-p1 rounded-md p-4 -shadow-xs'>
   <h3 className='text-lg pb-5 font-medium text-p2 '>Growth Over time</h3>
   <LineChartWithFill/>
   </div>
    <TopEmployee/>
   
    <CreateTask/>
   
   <div className='col-start-1 col-span-4 row-start-2  row-span-5 bg-p1 rounded-md p-4 shadow-xs'>

   <TasksOv/>
   
   </div>

    </section>


  )
}

export default AdminDashboard