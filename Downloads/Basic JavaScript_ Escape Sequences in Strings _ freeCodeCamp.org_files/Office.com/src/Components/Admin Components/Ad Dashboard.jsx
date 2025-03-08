import React from 'react'
import Button from '../Button'
import BarChart from '../BarCHart'
import HeatMap from '../heatmapChart'
const AdminDashboard = ({openNav, setOpenNav}) => {
  
  return (
    <section className='w-full h-screen bg-linear-to-br bg-blue-50 grid grid-cols-12 grid-rows-12 px-2'>
    
    <nav className='col-span-full py-4 bg-p1 flex justify-between pr-5'>
      <h1 className='text-3xl font-medium text-p2'>Hello Arslan 👋</h1>
      <Button content="Logout" classes={"px-3 h-10 "} onclick={()=>setOpenNav((prev)=>!prev)}></Button>
    </nav>
    <BarChart/>
    <HeatMap/>
    </section>


  )
}

export default AdminDashboard