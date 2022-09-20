import React from 'react';

function Home() {
  return (
    <div id='top_part'>
      <div id='about' className='animated slideInLeft'>
        <p>{`I’m Huiwen 👋🏼 — a UX Designer & Front-end Developer.
For the past 7 years I’ve been working on creating products that promotes connection. I love collaboration, playful UI ✨ and clean designs.`}</p>
        <br />
        <div className='socials-container'>
          <div className='animated zoomIn'>
            <a className='social'>
              <i className='fab fa-linkedin'></i>
            </a>
          </div>
          <div className='animated zoomIn'>
            <a className='social'>
              <i className='fab fa-instagram'></i>
            </a>
          </div>
          <div className='animated zoomIn'>
            <a className='social'>
              <i className='fab fa-dribbble'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
