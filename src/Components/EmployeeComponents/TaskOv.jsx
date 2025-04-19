import React from 'react'

const TaskOv = ({classes}) => {

     const styles = `w-full  flex justify-around  text-lg row-span-2 font-semibold text-s3  col-start-1 col-span-3 gap-3 flex-wrap ${classes}`;

  return (
    <div className={`TaskOv ${styles}`}>

   
    <div className={` p-4 flex-1  bg-blue-500   shadow-sm flex justify-center items-center gap-2 rounded-sm  `}>
     Total Tasks  <span className="">13</span>
    </div>
    <div className={` p-4 flex-1   bg-red-500 shadow-sm flex justify-center items-center gap-2 rounded-sm `}>
      New Tasks <span className="">3</span>
    </div>
    <div className={` p-4 flex-1    bg-orange-400 shadow-sm flex justify-center items-center gap-2 rounded-sm `}>
    Pending Tasks <span className="">4</span>
    </div>
    <div className={` p-4 flex-1   bg-green-500 shadow-sm flex justify-center items-center gap-2 rounded-sm `}>
   
     Completed Tasks <span className="">6</span>
    </div>
 </div>
  )
}

export default TaskOv