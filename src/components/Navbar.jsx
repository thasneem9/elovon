import React from 'react'
import './navbar.css'
import logo from '../assets/logo.jpg' 
function NavBar() {
  return (
    <div className='nav-container'>
      <img src={logo} alt="logo-elovon" className='nav-logo'/>
   
    <nav className='navItems'>
        <a href="#plans">Plans</a>
       {/*  <a href="#trainers" >Trainers</a> */}
        <a href="#classes"  >Classes</a>
        <a href="#reviews"  >Reviews</a>
        <a href="#contact"  >Contact</a>
    </nav>
       
    </div>
  )
}

export default NavBar