import React, {useState} from 'react'
import "./admin.css"
import { useDispatch, useSelector } from 'react-redux';
import { sendTaskToEmployee } from '../../context/Context';
function CreateTask({classes}) {
    const [inputVals, setinputVals] = useState({
      title:"",
      date: "",
      employeeName: "",
      catagory: "",
      description: ""
   
   });

   const dispatch = useDispatch()
   const data = useSelector(state=>state);
   const employees = data.employees

const handleChange = (e) => {
   
   const { name, value } = e.target;
   setinputVals((prevTask) => ({
     ...prevTask,
     [name]: value,
   }));
   
 };

 const SubmitForm = (e)=>{
    e.preventDefault()

   const isValidName = employees.some(e => e.name === inputVals.employeeName);

   dispatch(sendTaskToEmployee(inputVals))
 localStorage.setItem("state", state)
   
   if(isValidName){
   const selectedEmployee =
     employees.find(e=>e.name === inputVals.employeeName);
   selectedEmployee.tasks.push(inputVals)
   localStorage.setItem("employees", JSON.stringify(users.employees))

   setinputVals((inputVal) => {
     const resetVals = {};
     Object.keys(inputVal).forEach(key => resetVals[key] = "");
     return resetVals;
   })
   

   }else{
      e.preventDefault()
      alert("Empoloyee not found")
   }
 }


  return (
    <form className={`flex flex-col xl:col-start-10  h-full   rounded-lg overflow-hidden  col-start-9 col-span-full row-start-2 row-span-full bg-p1 shadow-sm p-5 max-xl:col-start-10 max-lg:hidden max-xl:overflow-y-auto  ${classes}`}>

    <div className='w-full'>
         <div className='input-wrapper'>
            <h3>Task Title</h3>
            <input type="text" placeholder='Make a UI design' 
            name="title" 
            value={inputVals.title}
            onChange={handleChange}/>
         </div>
        
         <div className='input-wrapper'>
            <h3>Date</h3>
            <input type="Date"
             name='date'
            value={inputVals.date}
            onChange={handleChange}/>
          </div>
         <div className='input-wrapper'>
            <h3>Asign to</h3>
            <input type="text" placeholder='eployee name'
             name='employeeName'
             value={inputVals.employeeName}
             onChange={handleChange}
            />
         </div>
         <div className='input-wrapper'>
            <h3>Catagory</h3>
            <input type="text" placeholder='design, dev, etc.'
             name='catagory'
             value={inputVals.catagory}
             onChange={handleChange}
            />
         </div>
    </div>

      
      <div className='w-full flex justify-between gap-2   my-4 h-10 text-gray-700'>
      <button className='flex-1    border-1 border-gray-400 text-xl selected-priority rounded-md'>Normal</button>
      <button className='flex-1  rounded-md border-1 border-gray-400 text-xl'>High</button>
      </div>
   

    <div className='divs'>
        <div className='input-wrapper'>
            <h3>Description </h3>
            <textarea  id="" cols="30" rows="5" className='outline-none max-xl:h-18'
            name="description"
             value={inputVals.description}
             onChange={handleChange}
            ></textarea>
            <div>
               <button
            className='border-2 border-p3 hover:bg-p1 hover:text-black hover:border-p2 text-p1 w-full py-2  text-xl mt-2 rounded-sm  tracking-wide bg-p3'
            onClick={SubmitForm}
            >Send  Task</button></div>
        
        </div>
    </div>
        
</form>
  )
}

export default CreateTask