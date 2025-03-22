import React, {useContext}from 'react'
import Button from '../Button'
import BarChart from '../Chartsjs/BarCHart'
import LineChartWithFill from '../Chartsjs/lineChart'
import CreateTask from './createTask'
import TopEmployee from '../TopEmployee'
import TasksOv from './tasksOv'
import DashboardNav from '../dashboardNav'
import { AuthContext } from '../../context/AuthProvider'


const AdminDashboard = ({openNav, setOpenNav}) => {
  const [data] = useContext(AuthContext)

  return (
    <section className='w-full h-screen  bg-s1/10 grid grid-cols-12 grid-rows-10 p-3 pt-0 gap-5 max-lg:grid-cols-8 max-sm:flex max-sm:flex-col  max-sm:gap-0 max-sm:px-0 '>
   
    <DashboardNav classes={''}/>
    <div className='flex justify-around mb-2 sm:hidden sticky top-2 left-0 z-20'> 
    <span className="bg-gray-200 px-2 py-1 rounded-md">Insights</span>
    <span className="bg-gray-200 px-2 py-1 rounded-md">Top Employees</span>
    <span className="bg-gray-200 px-2 py-1 rounded-md">Create Task</span>
  </div>
    <TopEmployee classes={''}/>
   
    <TasksOv data={data} classes={'max-sm:min-h-[600px]'}/>
    <BarChart classes={' max-sm:p-1 max-sm:shadow-none col-start-1  col-span-5 row-start-7 row-span-full pb-8'}/> 
    <LineChartWithFill />
    <CreateTask classes={'shadow-xl shadow-s1/10'}/>
   
    
    </section>


  )
}

export default AdminDashboard