import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='navBarContainer'>
      <nav className='nav'>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
          Mission
        </NavLink>
        <NavLink
          to='/gallery'
          className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
          Gallery
        </NavLink>
      </nav>
    </div>
  )
}

export default NavBar;