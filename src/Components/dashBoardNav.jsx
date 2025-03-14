import React from 'react'
import Button from './Button'
const DashboardNav = () => {
  return (
    <nav className='col-span-full items-center  flex justify-between pr-5'>
      <h1 className='text-3xl font-medium text-p2'>Hello Arslan 👋</h1>
      <Button content="Logout" classes={"px-3 h-10 "} onclick={()=>setOpenNav((prev)=>!prev)}>
        
    </Button>
    </nav>
  )
}

export default DashboardNav