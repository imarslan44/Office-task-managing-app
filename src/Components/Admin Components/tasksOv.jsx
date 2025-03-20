
import React, {useEffect, useState } from 'react'

const TasksOv = ({data,classes}) => {
  const [TotalTasks, setTotalTasks] = useState([])
  const [PendingTasks, setPendingTasks] = useState([])
  const [CompletedTasks, setCompletedTasks] = useState([])
    
  
   
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
    



  return (
    <div className={`col-start-1 col-span-4 row-start-2  row-span-5 bg-p1 rounded-md p-4 shadow-xl shadow-s1/10 ${classes}`}>

    <div className='w-full   h-full  relative'>

    <div className='w-full pb-2 px-1 bg-p1 rounded-lg   text-2xl font-medium text-p2'>
      <h3 className='flex justify-between items-start'>Tasks  completed
      <span className='text-lg font-medium text-p3 p-2'>{CompletedTasks.length}/{TotalTasks.length}</span>
      </h3>
      
    </div>

    <div>
      <h3 className='text-lg  text-p2/70 p-1 py-2'>Pending Tasks</h3>
      <ul className='w-[100%]  overflow-auto h-5/7 absolute'>
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
              
              ${task.highPriority?"bg-p3/5":"bg-gray-100 "}`}>
                 <span className={`w-1/4 text-p2 font-medium ${task.highPriority?"":" "}`}>{employee.name}</span> <span className='w-1/3 text-p2 font-medium '>{task.title}</span>
                 <span>{task.deadline}</span>
              </li>
              })
            })
          }
      </ul>
    </div>
    </div>
    </div>
  )
}

export default TasksOv