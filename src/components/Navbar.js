import React from 'react';
import { NavLink } from 'react-router-dom'
import "../Stylesheets/navbar.scss";

const Navbar = () => {
  const handleClick = (event) => {
    localStorage.clear()
  }
  return (
    <div className="nav">
    <NavLink className="nav-link" exact to='/bodega'>HOME</NavLink>
    <NavLink className="nav-link" exact to='/bodega/profile'>PROFILE</NavLink>
    <NavLink className="nav-link" exact to='/bodega/cart'>CART</NavLink>
    <NavLink className="nav-link" onClick={handleClick} exact to='/'>LOGOUT</NavLink>
    </div>
  )
}

export default Navbar
