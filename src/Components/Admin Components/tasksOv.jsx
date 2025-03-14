
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
const TasksOv = () => {
  const [TotalTasks, setTotalTasks] = useState([])
  const [PendingTasks, setPendingTasks] = useState([])
  const [CompletedTasks, setCompletedTasks] = useState([])
    const [data, setData] = useContext(AuthContext)
  
   
    useEffect(() => {

      if (data?.employees) {
        const tasksSet = new Set();
        data.employees.forEach((e) => {
          e.tasks.forEach((task) => tasksSet.add(task));
        });
        setTotalTasks(Array.from(tasksSet));

        const PendingTasksSet = Array.from(tasksSet).filter((task) => task.completed !== true);
        setPendingTasks(PendingTasksSet);

        const completedTaskSet = Array.from(tasksSet).filter((task) => task.completed === true);
        setCompletedTasks(completedTaskSet)
        

        
      }
    }, [data]);
    
console.log(TotalTasks)
console.log(PendingTasks)


  return (
    <div className='w-full  p-2 '>
    <div className='w-full py-4 px-3 bg-p1 rounded-lg shadow-sm shadow-gray-200 border-1 border-gray-100 text-xl font-medium text-p2'>
      <h3 className='flex justify-between items-center'>Tasks  completed
      <span className='text-lg font-medium text-p3 p-2'>{CompletedTasks.length}/{TotalTasks.length}</span>
      </h3>
      
    </div>

    <div>
      <h3 className='text-xl font-medium text-p2 p-1 py-2'>Pending Tasks</h3>
      <ul className='w-[100%]  overflow-auto max-h-50'>
          {/* {PendingTasks.map((task, idx)=>{
            return <li key={idx}>
                    <span>{task.employeeName}</span>
                    <span>{task.title}</span> 
                    <span>{task.deadline}</span></li>
          })} */}
          {
            data?.employees.map((employee)=>{
              
             return employee.tasks.map((task,idx)=>{
                
              return <li key={idx} className={`flex justify-between mb-2 py-5 rounded-sm border-1 border-gray-200 shadow-sm shadow-gray-200 p-1
              
              ${task.highPriority?"bg-blue-50":"bg-gray-100 "}`}>
                 <span className={`w-1/4 text-p2 font-medium ${task.highPriority?"":" "}`}>{employee.name}</span> <span className='w-1/3 text-p2 font-medium '>{task.title}</span>
                 <span>{task.deadline}</span>
              </li>
              })
            })
          }
      </ul>
    </div>
    </div>
  )
}

export default TasksOv