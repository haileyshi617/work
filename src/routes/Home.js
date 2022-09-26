import React from 'react';

function Home() {
  return (
    <div id='top_part'>
      <div className='home'>
        <p>{`I’m Huiwen 👋🏼 — a UX designer & front-end developer based in Boston.`}</p>
        <p>{`I love collaboration, playful UI ✨, clean designs and implementations.`}</p>
        <br />
        <div className='socials-container'>
          <div>
            <a
              className='social'
              target='_blank'
              rel='noreferrer'
              href='https://www.linkedin.com/in/huiwen-shi-a0815b1a2/'
            >
              <i className='fab fa-linkedin'></i>
            </a>
          </div>
          <div>
            <a
              className='social'
              target='_blank'
              rel='noreferrer'
              href='https://www.instagram.com/hshi123/'
            >
              <i className='fab fa-instagram'></i>
            </a>
          </div>
          <div>
            <a
              className='social'
              target='_blank'
              rel='noreferrer'
              href='https://dribbble.com/gaandng'
            >
              <i className='fab fa-dribbble'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
