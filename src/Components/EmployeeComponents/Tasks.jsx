import React, {useContext} from 'react'
import "./Employee.css"
import DashboardNav from '../dashboardNav'
import TaskSchedule from '../TaskSchedule'
import Sidebar from '../sidebar/Sidebar'
import { AuthContext } from '../../context/AuthProvider'
import { useSelector } from 'react-redux'
import TaskOv from './TaskOv'
const Tasks  = () => {
const [,,LogedinUser] = useContext(  AuthContext );
const employees = useSelector( state  => state.employees ); 
const [userData] = employees.filter((e)=>e.email === LogedinUser.email)

  return (
    <>
    <Sidebar/>
    <section className='w-full h-screen bg-slate-300/30 flex flex-col relative'>
      <DashboardNav />

      <section className='flex h-full w-full   gap-4 relative overflow-x-auto'>

      <div className='flex max-sm:w-[200%] relative w-full sm:p-4 sm:gap-4'>

        <div id="content" className='w-9/12 flex flex-col gap-4 h-full max-sm:w-1/2 '>
         <TaskOv classes="max-sm:p-4  sm:h-2/12"></TaskOv>

          <div className='list w-full bg-p1 rounded-md  overflow-y-auto shadow-lg h-full '>
            <ul className='p-4'>
              { userData?.tasks.map((task, idx) => {
                return <li key={crypto.randomUUID()} className='flex flex-col gap-5 justify-between  p-5 shadow-md border-2 border-gray-200 my-2 cursor-pointer  min-h-15 max-h-10 overflow-hidden hover:min-h-30 hover:max-h-96 transition-all duration-1000 rounded-sm'>
                 <div className='flex justify-between text-p2'>
                  <h3 className='w-90 font-medium text-lg  block'>{task.title}</h3> 
                  
                  <span className='w-30  '>{task.highPriority ? "High" : "Normal"}</span>

                  <span className='w-30'>{task.deadline || task.date}</span>
                  </div>

                  <p className='text-p2/70'>{task.description}</p>
                  <div className="actions flex justify-end gap-5 text-p2  underline ">
                    <button className='cursor-pointer hover:text-blue-800'>request reasign!📤</button>
                    <button className='cursor-pointer hover:text-blue-800'>Mark as completed✅</button>
                    <button className='cursor-pointer hover:text-blue-800'>Set as pending⏱️</button>
                  </div>

                </li>
                
              })}
            </ul>
          </div>
        </div>

        <TaskSchedule classes={'w-3/12 h-full overflow-y-auto max-sm:flex-1'}/>
      </div>

      </section>
    </section>
    </>
  )
}

export default Tasks 