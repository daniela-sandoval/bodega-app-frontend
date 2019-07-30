import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <NavLink exact to='/bodega'>HOME</NavLink>
    <NavLink exact to='/bodega/profile'>PROFILE</NavLink>
    <NavLink exact to='/bodega/cart'>CART</NavLink>
    <NavLink exact to='/logout'>LOGOUT</NavLink>
    </div>
  )
}

export default Navbar
