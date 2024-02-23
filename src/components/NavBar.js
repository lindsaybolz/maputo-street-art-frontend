import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='navBarContainer'>
      <img 
      className='logo'
      src={require('../resources/logo.png')}
      alt='Woman sitting and similing in chair outside.'
      />      
      <nav className='nav'>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
          Home
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
          About Us
        </NavLink>
        <NavLink
          to='/stories'
          className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
          Success Stories
        </NavLink>
        <NavLink
          to='/store'
          className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
          Merch Store
        </NavLink>
        <NavLink
          to='/tour'
          className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
          Walking Tour
        </NavLink>
        <NavLink
          to='/gallery'
          className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
          Gallery
        </NavLink>
        <NavLink
          to='/join'
          className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
        Join Movement
        </NavLink>
        <NavLink
          to='/donate'
          className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
          Donate
        </NavLink>
      </nav>
    </div>
  )
}

export default NavBar;