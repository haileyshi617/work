import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function ProjectCard({ name, id, hero }) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <Link
      key={id}
      to={id}
      className='project_item'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img src={hero} alt='project' />
      <div className={isHovering ? 'project_title' : 'hidden'}>{name}</div>
    </Link>
  );
}

export default ProjectCard;
