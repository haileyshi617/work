import React from 'react';

import Nav from './Nav';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

function Layout(props) {
  return (
    <ScrollToTop>
      <Nav />
      <div className='layout'>{props.children} </div>
      <Footer />
    </ScrollToTop>
  );
}

export default Layout;
