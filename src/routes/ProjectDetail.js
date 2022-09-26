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
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        <ul>
          {project.skills.map((skill) => (
            <li key={skill}>{`#${skill}`} &nbsp; </li>
          ))}
        </ul>
      </section>

      <section className='detail_section'>
        <div className='flex_container'>
          <div className='flex_item'>
            <h3>Problem</h3>
            <p>{project.summary.problem}</p>
          </div>
          <div className='flex_item'>
            <h3>Highlights</h3>
            <p>{project.summary.highlights}</p>
          </div>
        </div>
      </section>

      <hr />

      <section className='detail_section statement'>
        <div className='text'>{project.statement}</div>
      </section>

      <hr />

      <section className='detail_section'>
        {project.resources.details.map((section, index) => (
          <section className='resource_section' key={index}>
            <div className='text_container'>
              {section.title ? <h2>{section.title}</h2> : null}
              <p>{section.text}</p>
            </div>

            <img src={section.source} alt={section.alt} />
          </section>
        ))}
      </section>

      {project.link && (
        <section className='detail_section link'>
          <p>
            More about{' '}
            <a href={project.link} target='_blank' rel='noreferrer'>
              {project.name} 🡥
            </a>
          </p>
        </section>
      )}
      <hr />
      <section className='detail_section'>
        <h2>Takeaways</h2>
        <div className='flex_container'>
          <div className='flex_item'>
            <h3>What I learned</h3>
            <p>{project.takeaways.learn}</p>
          </div>
          <div className='flex_item'>
            <h3>What's next</h3>
            <p>{project.takeaways.improve}</p>
          </div>
        </div>
      </section>

      <hr />

      <section className='detail_section short'>
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
