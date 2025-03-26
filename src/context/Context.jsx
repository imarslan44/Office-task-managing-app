import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    employees : [
        { 
            name: "John Doe", 
            email: "john.doe@example.com", 
            password: "password123",
            img: "https://static.vecteezy.com/system/resources/previews/007/662/149/large_2x/concentrated-female-entrepreneur-wears-elegant-black-costume-works-at-computer-sits-at-table-in-cozy-work-place-wears-transparent-glasses-browses-internet-makes-business-project-thinks-over-strategy-free-photo.JPG",
            profession: "Backend Developer",
            tasks: [
                { active: true, completed: false, failed: false, title: "Report Analysis", description: "Analyze the weekly report", taskDate: "2025-01-01", category: "Analysis", deadline: "2025-01-05", highPriority: true },
                { active: false, completed: true, failed: false, title: "Team Meeting", description: "Attend the team meeting", taskDate: "2024-12-28", category: "Meeting", deadline: "2024-12-28", highPriority: false },
                { active: true, completed: false, failed: false, title: "Client Call", description: "Call with the client", taskDate: "2025-01-02", category: "Communication", deadline: "2025-01-02", highPriority: true },
                { active: false, completed: false, failed: true, title: "Proposal Writing", description: "Write the project proposal", taskDate: "2024-12-27", category: "Writing", deadline: "2024-12-30", highPriority: false }
            ]
        },
        { 
            name: "Jane Smith", 
            email: "jane.smith@example.com", 
            password: "password456",
            img: "https://th.bing.com/th/id/OIP.fuly8QZrGFYj7Z5CERTCywHaE8?w=1200&h=800&rs=1&pid=ImgDetMain",
            profession: "Frontend Developer",
            tasks: [
                { active: true, completed: false, failed: false, title: "Market Research", description: "Conduct market research", taskDate: "2025-01-03", category: "Research", deadline: "2025-01-06", highPriority: false },
                { active: false, completed: true, failed: false, title: "Product Demo", description: "Give product demo to clients", taskDate: "2024-12-29", category: "Sales", deadline: "2024-12-29", highPriority: true },
                { active: true, completed: false, failed: false, title: "Budget Review", description: "Review the budget proposal", taskDate: "2025-01-04", category: "Finance", deadline: "2025-01-07", highPriority: false },
                { active: true, completed: false, failed: false, title: "Team Building", description: "Organize team building activities", taskDate: "2025-01-05", category: "Management", deadline: "2025-01-08", highPriority: true }
            ]
        },
        { 
            name: "Alin sophie", 
            email: "tom.clark@example.com", 
            password: "password789",
            img: "https://th.bing.com/th/id/OIP.AjuG-Gy2cWiRXr3TNP77PQHaEl?w=1024&h=633&rs=1&pid=ImgDetMain",
            profession: "Software Designer",
            tasks: [
                { active: true, completed: false, failed: false, title: "Code Review", description: "Review the codebase", taskDate: "2025-01-02", category: "Development", deadline: "2025-01-03", highPriority: true },
                { active: false, completed: true, failed: false, title: "Sprint Planning", description: "Plan the next sprint", taskDate: "2024-12-30", category: "Planning", deadline: "2024-12-30", highPriority: false },
                { active: true, completed: false, failed: false, title: "Bug Fixing", description: "Fix the reported bugs", taskDate: "2025-01-03", category: "Development", deadline: "2025-01-04", highPriority: true },
                { active: true, completed: false, failed: false, title: "Code Deployment", description: "Deploy the latest version", taskDate: "2025-01-04", category: "Operations", deadline: "2025-01-05", highPriority: false}
            ]
        },
        
        
    ],
    
    // Array of admin objects
     admins : [
        
        { 
            name: "Alice Johnson", 
            email: "alice.johnson@example.com", 
            password: "adminpassword789",
            
        },
    
        { 
            name: "Bob Brown", 
            email: "bob.brown@example.com", 
            password: "adminpassword101",
           
        }
    ]
}


const DataSlice = createSlice({
    name: "store",
    initialState: JSON.parse(localStorage.getItem('state'))|| initialState,
    reducers: {
        sendTaskToEmployee: (state, action)=>{
        state.employees.forEach((emp)=>{
            if(action.payload.employeeName === emp.name){
                emp.tasks.push(action.payload)
            }
        })
        },
        DeleteTask: (state, action)=>{
      
       },
       MarkAsCompleteTask: (state, action)=>{

       },
       requestReasign: (state, action)=>{

       },
      


    }
})

export const {sendTaskToEmployee}  = DataSlice.actions

export default DataSlice.reducer