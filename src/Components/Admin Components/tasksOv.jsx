
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthProvider'
const TasksOv = () => {
    let totalTasks = "";
    const data = useContext(AuthContext)
    useEffect(() => {
       console.log(data)
        const employees = data.userData.employees;
        
        console.log(employees);
       
    }, [])
    
console.log(totalTasks)
// employees.forEach(e => {
//   totalTasks += e.tasks.length;
// });



  return (
    <div>

    </div>
  )
}

export default TasksOv