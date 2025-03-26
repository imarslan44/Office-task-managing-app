import React from 'react'
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Make sure to create a CSS file for styling

function Sidebar({openNav}) {

  return (
    <aside className={`sidebar h-screen bg-p1  max-lg:absolute  ${openNav?"max-lg:left-0":"max-lg:-left-full"} z-50`}>
    
    <div className="sidebar-header">
        <h2> <img src="src/components/Navbars/logo.jpg" alt="" /> OFFICE</h2>
       
      </div>
      <div className="sidebar-section">
        <h3>Application</h3>
        <ul>
        <Link to="/dashboard"><li><ion-icon name="pie-chart"></ion-icon> Dashboard</li></Link>
        <Link to="/tasks">
        <li className='active'><ion-icon name="checkmark-done-outline"></ion-icon>Tasks
        </li></Link>

        <Link to="/timeline"><li><ion-icon name="calendar"></ion-icon> Timeline</li></Link>

        <Link to="/users"> <li><ion-icon name="person">
          </ion-icon> Users</li></Link>
        </ul>
      </div>
      <div className="sidebar-section">
        <h3>Others</h3>
        <ul className='Other'>
          {/* <li><ion-icon name="trending-up"></ion-icon> Activity</li> */}
          {/* <li><ion-icon name="mail-unread"></ion-icon> Messages<span className="notification-badge">2</span></li> */}
          <li><ion-icon name="settings"></ion-icon> Settings</li>

          <Link to="/signIn/signUp"><li className='tracking-tight font-thin text-2xl' style={{color:"#f2f2f2",}} ><ion-icon name="log-out-outline" 
          style={{color:"", fontWeight: "bold"}}></ion-icon>Exit-Login</li></Link>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar

