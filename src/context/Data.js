// Array of employee objects
// Array of employee objects

export const setLocalStorage=(state)=>{
localStorage.setItem("state",  JSON.stringify(state));
}


export const getLocalStorage=()=>{
const state = JSON.parse(localStorage.getItem("state"))

return {state}

}