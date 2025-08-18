import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/Header.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className='header' aria-label='Main site navigation'>
      <div className='header-container'>
        <div className='brand'>
          <img src={logo} alt='Nashie Locksmiths Logo' className='logo' />
          <div className='brand-text'>
            <h1>Nashie Locksmiths</h1>
            <p className='tagline'>Car Key Experts in Western Cape</p>
          </div>
        </div>

        <nav className={`nav-list ${menuOpen ? 'open' : ''}`} aria-label='Primary navigation'>
          <NavLink to='/' onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
          <NavLink to='/services' onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>Services</NavLink>
          <NavLink to='/about' onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
          <NavLink to='/contact' onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
        </nav>

        <button className='menu-toggle' onClick={toggleMenu} aria-label='Toggle navigation menu'>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Header;
