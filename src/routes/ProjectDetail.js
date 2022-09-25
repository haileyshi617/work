import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { getProjectById, getNextProjectId } from '../api';

function ProjectDetail() {
  const { id } = useParams();
  const project = getProjectById(id);
  const nextId = getNextProjectId(id);

  return (
    <div className='project_detail'>
      <section className='detail_section'>
        <img
          src='https://uploads-ssl.webflow.com/607d0c47994877dd32deea97/610a8f1cbd4ad0ef8e4eaf14_01_Hero.png'
          alt='heroImage'
        ></img>
      </section>
      <section className='detail_section'>
        <h2 className='title'>{project.name}</h2>
        <p>{project.description}</p>
        <ul>
          {project.skills.map((skill) => (
            <li key={skill}>{`#${skill}`} </li>
          ))}
        </ul>
      </section>
      <section className='detail_section'>
        <h2>The Challenge</h2>
        <div className='flex_container'>
          <div className='flex_item'>
            <h3>What</h3>
            <p>{project.challenge.what}</p>
          </div>
          <div className='flex_item'>
            <h3>Why</h3>
            <p>{project.challenge.why}</p>
          </div>
          <div className='flex_item'>
            <h3>How</h3>
            <p>{project.challenge.how}</p>
          </div>
        </div>
      </section>
      <section className='detail_section'>
        <img
          src='https://uploads-ssl.webflow.com/607d0c47994877dd32deea97/610a8f1cbd4ad0ef8e4eaf14_01_Hero.png'
          alt='heroImage'
        ></img>
        <img
          src='https://uploads-ssl.webflow.com/607d0c47994877dd32deea97/610a8f1cbd4ad0ef8e4eaf14_01_Hero.png'
          alt='heroImage'
        ></img>
        <img
          src='https://uploads-ssl.webflow.com/607d0c47994877dd32deea97/610a8f1cbd4ad0ef8e4eaf14_01_Hero.png'
          alt='heroImage'
        ></img>
      </section>
      {project.link && (
        <section className='detail_section'>
          <a href={project.link}>See more about {project.name}</a>
        </section>
      )}
      <section className='detail_section'>
        <h2>Takeaways</h2>
        <div className='flex_container'>
          <div className='flex_item'>
            <h3>What</h3>
            <p>{project.challenge.what}</p>
          </div>
          <div className='flex_item'>
            <h3>Why</h3>
            <p>{project.challenge.why}</p>
          </div>
          <div className='flex_item'>
            <h3>How</h3>
            <p>{project.challenge.how}</p>
          </div>
        </div>
      </section>
      <hr />
      <section className='detail_section'>
        <div className='links'>
          <Link to={`../projects`}>{'<'} Project List</Link>
          <Link
            to={nextId ? `../projects/${nextId}` : '#'}
            className={nextId ? '' : 'disabled'}
          >
            Next Project {'>>'}
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetail;
