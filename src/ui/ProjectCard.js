import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function ProjectCard({ name, id, hero, description }) {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div className='project_card'>
      <Link
        key={id}
        to={id}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className='card_container'>
          <img src={hero} alt='project' />{' '}
          <div className='text_container'>
            <h1 className='project_title'>{name}</h1>
            <p>{description}</p>
            <br />
            <p className='view'>View</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProjectCard;
