import React from 'react'
import "./Navbar.css";

const Navbar = ({cartCount}) => {
  return (
    <div className='navbar'>
      <h2>My store</h2>
      <p>Cart : {cartCount}</p>
      
    </div>
  )
}

export default Navbar
