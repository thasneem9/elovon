import React from 'react'
import './navbar.css'
import logo from '../assets/logo.jpg' 
function NavBar() {
  return (
    <>
      <img src={logo} alt="logo-elovon" className='nav-logo'/>
   
    <nav className='navItems'>
        <a href="#about">Plans</a>
        <a href="#trainers" >Trainers</a>
        <a href="#facilities"  >Facilities</a>
        <a href="#reviews"  >Reviews</a>
        <a href="#about-us"  >About us</a>
    </nav>
       
    </>
  )
}

export default NavBar