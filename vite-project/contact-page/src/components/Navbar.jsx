import React from 'react'
import '../components/nav.css'

const Navbar = () => {
  return (
    <>
    <nav>
       <div className="logo">
        <img src="../images/logo.png" alt="" />
       </div>
       <div className="content">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
       </div>
    </nav>
    
    </>
  )
}

export default Navbar