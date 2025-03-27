import React from 'react'

const TaskOv = () => {

     const styles = `w-full  flex justify-around  text-xl row-span-2 font-semibold text-p2  col-start-1 col-span-9 gap-3 flex-wrap`
     
  return (
    <div className={`TaskOv ${styles}`}>

   
    <div className={`flex-1 p-8 bg-p1 shadow-sm`}>
     Total Tasks  4
    </div>
    <div className={`flex-1 p-8  bg-p1 shadow-sm`}>
    Pending Tasks 4
    </div>
    <div className={`flex-1 p-8 bg-p1 shadow-sm`}>
   
     Completed Tasks 6
    </div>
 </div>
  )
}

export default TaskOv