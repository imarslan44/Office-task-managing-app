import React from 'react'
import Button from './Button'
const DashboardNav = ({setOpenNav,classes}) => {
  return (
    <nav className={`w-full col-span-full  h-2 z-10 py-8 ${classes}`}>

    <div className=' w-full col-span-full items-center  flex justify-between pr-5 h-full px-4'>

      
      <h1 className='lg:text-4xl sm:text-2xl text-2xl font-medium text-p2 '>Hello Arslan 👋</h1>
      <Button content={<ion-icon name="menu" style={{ fontSize:"30px"}}></ion-icon>} classes={"px-2 p-1 h-10 max-sm:text-sm  max-sm:h-8 lg:text-xl"} onclick={()=>setOpenNav((prev)=>!prev)}>
        
    </Button>
    
    </div>

  

    </nav>
  )
}

export default DashboardNav