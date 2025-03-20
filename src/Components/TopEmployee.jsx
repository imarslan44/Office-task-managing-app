import React, { useEffect, useState} from 'react'


const TopEmployees = ({data, classes}) => {
const [employees, setEmployees] = useState(null)


useEffect(() => {
  setEmployees(data?.employees)
}, [data])

  return (
    <div className={`col-start-5 col-span-5 row-start-2 row-span-5 bg-p1   rounded-lg p-5 shadow-xl shadow-s1/10 sm:overflow-auto ${classes}`}>
  
        <h2 className='mb-2 text-p2 text-2xl max-sm:text-xl font-medium'>Top Employees</h2>

        <ul >
          {
           employees?.map((e,idx)=>{
            return <li key={idx} className='flex justify-between py-4 rounded-sm border-b-1   border-gray-300 items-center hover:bg-gray-200'>
              <div className='flex w-2/3 '>
              <span className='inline-block text-xl text-black h-5 my-auto'>{idx + 1}.</span>
              <img src={e.img} alt="" className='w-10 h-10 border-1 rounded-md object-cover bg-top mx-2 my-auto'/>
              <div className='flex flex-col  '>
              <span className='  text-p2 text-lg max-sm:text-md'>{e.name}</span>
              <span className='  text-p2/60 max-sm:text-xs'>{e.profession}</span>
              </div>
              </div>
              <span className=' text-center w-15 text-p2 max-sm:text-sm' >{e.tasks.length}</span>
              <span className=' text-center max-sm:text-sm w-15'>44-Pts</span>
              
              </li>
           })
          }
          
        </ul>
        
    </div>
  )
}

export default TopEmployees