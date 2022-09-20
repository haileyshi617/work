import React from 'react';
import { getProjects } from '../api';
import { Link } from 'react-router-dom';

function Projects() {
  const projects = getProjects();
  const designDevelop = projects.filter(
    ({ type }) => type === 'design_develop'
  );
  const design = projects.filter(({ type }) => type === 'design');

  return (
    <div id='work'>
      <h1>work</h1>
      <div id='photos'>
        <img
          src='https://images.unsplash.com/photo-1547922657-b370d1687eb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
          alt='project'
        />
        <img
          src='https://images.unsplash.com/photo-1549375463-8cbc18ca3f24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80'
          alt='project'
        />
        <img
          src='https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=650&q=80'
          alt='project'
        />
        <img
          src='https://images.unsplash.com/photo-1549309019-a1d77aeae74f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
          alt='project'
        />
        <img
          src='https://images.unsplash.com/photo-1547149666-769b42053e67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80'
          alt='project'
        />
        <img
          src='https://images.unsplash.com/photo-1547950515-e652d0f50b1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
          alt='project'
        />
        <img
          src='https://images.unsplash.com/photo-1545342084-d03fe58ea023?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80'
          alt='project'
        />
      </div>
    </div>
  );
}

export default Projects;
