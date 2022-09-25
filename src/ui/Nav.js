import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
function Nav() {
  // Add drop shadow effect when scrolled to a certain position
  const [isActive, setIsActive] = useState(false);

  const headerRef = useRef();

  useEffect(() => {
    const { offsetHeight } = headerRef.current;

    window.addEventListener('scroll', () => {
      if (window.scrollY > offsetHeight) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    });
  });
  return (
    <header
      id='header'
      className={`animated slideInDown ${isActive ? 'active' : ''}`}
      ref={headerRef}
    >
      <NavLink to='/' id='logo'>
        <div>Huiwen Shi</div>
      </NavLink>

      <div id='navigation'>
        <NavLink to='/projects'>work</NavLink>
        <NavLink to='/about'>about</NavLink>
        <NavLink to='/contact'>contact</NavLink>
      </div>
    </header>
  );
}

export default Nav;
