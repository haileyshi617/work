import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <header id='header' className='animated slideInDown'>
      <Link to='../' id='logo'>
        <div>Huiwen Shi</div>
      </Link>

      <div id='navigation'>
        <a href='#work'>work</a>
        <a href='#bio'>about</a>
        <a href='#contact'>contact</a>
      </div>
    </header>
  );
}

export default Nav;
