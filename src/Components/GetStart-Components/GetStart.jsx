import React from 'react'
import NavBar from '../Header'
import Hero from './Hero'
const GetStart = ({handleLogOut,isLogedin}) => {
  return (
    <main>
     
    <NavBar/>
    <Hero  handleLogOut={handleLogOut}/>
    </main>
  )
}

export default GetStart