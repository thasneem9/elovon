import React from 'react'
import './navbar.css'
import logo from '../assets/logo.jpg' 
function NavBar() {
  return (
    <div className='nav-container'>
      <img src={logo} alt="logo-elovon" className='nav-logo'/>
   
    <nav className='navItems'>
        <a href="#plans">Plans</a>
        <a href="#trainers" >Trainers</a>
        <a href="#facilities"  >Facilities</a>
        <a href="#reviews"  >Reviews</a>
        <a href="#about-us"  >About us</a>
    </nav>
       
    </div>
  )
}

export default NavBar