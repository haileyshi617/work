import React from 'react';
import { getProjects } from '../api';

import ProjectCard from '../ui/ProjectCard';

function Projects() {
  const projects = getProjects();

  return (
    <div id='work'>
      <div id='photos'>
        {projects.map(({ name, id, resources }) => (
          <ProjectCard name={name} id={id} resources={resources} key={id} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
