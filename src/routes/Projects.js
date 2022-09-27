import React from 'react';
import { getProjects } from '../api';

import ProjectCard from '../ui/ProjectCard';

function Projects() {
  const projects = getProjects();

  return (
    <div id='work'>
      <div id='photos'>
        {projects.map((p) => (
          <ProjectCard
            name={p.name}
            id={p.id}
            hero={p.resources.hero}
            key={p.id}
            description={p.summary.highlights}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
