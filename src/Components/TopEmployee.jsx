import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { useSelector } from 'react-redux';

const TopEmployees = ({ classes }) => {
 
  const employees = useSelector(state=>state.employees)



  return (
    <div className={`bg-p1 rounded-lg p-5 shadow-xl sm:overflow-y-auto ${classes}`}>
      <h2 className='mb-2 text-p2 text-xl font-medium tracking-tight'>Top Employees</h2>
      <ul>

      <div id='nav' className='bg- w-full  flex justify-between border-b-2 border-p2/60  pl-5 py-2 font-medium '>
        <span className='text-p2' >Employee</span>
        <div className='w-4/10 flex justify-between'><span className=' text-blue-700/80'>Completed</span><span className='text-green-700/80'>pts</span></div>
      </div>

        {employees?.map((e, idx) => (
          <li key={idx} className='flex justify-between py-3 rounded-sm border-b border-gray-300 items-center hover:bg-gray-200 '>

            <div className='flex w-6/11 items-center h-full'>
        
              <span className='inline-block text-xl text-p2/30 h-5 my-auto'>{idx + 1}.</span>
              {console.log(e.img)}
              <img src={e.img} alt="" className='w-10 h-10 border rounded-md object-cover bg-top mt-2 mr-2 ml-1 ' />
          
              <div className='flex flex-col  h-full justify-center '>
                <span className='text-p2/90 text-lg'>{e.name}</span>
                <span className='text-p2/60 text-sm/2'>{e.profession}</span>
              </div>
            </div>
            <span className='text-center w-15  text-blue-700/80'>{e.tasks.length} Tasks</span>
            <span className='text-center  text-green-700/80'>44</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopEmployees;