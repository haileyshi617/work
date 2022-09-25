import React from 'react';
import {
  getWorkExperience,
  getEducation,
  getSkills,
  capitalizeFirstLetter,
} from '../api';

function About() {
  const workExperience = getWorkExperience();
  const educations = getEducation();
  const skills = getSkills();

  return (
    <div className='about' id='bio'>
      <section className='about_section'>
        <h3>Design and Build</h3>
        <p>
          I have worked on various stages of building responsive, user-friendly
          interfaces. I enjoy working on the design and build teams to
          contribute to the full development cycle. I am detail-driven and
          highly organized. I always strive to develop clean, modular,
          interactive, and scalable projects.
        </p>
      </section>
      <section className='about_section'>
        <h3>Work Experience</h3>
        {workExperience.map((work) => (
          <div key={work.company} className='col-container'>
            <div className='date-container'>
              <p>
                {work.startDate} - {work.endDate ? work.endDate : 'Present'}
              </p>
            </div>
            <div className='detail-container'>
              <div className='overview-container'>
                <p>
                  <b>{work.title}</b>, {work.company},<i> {work.location}</i>
                </p>
              </div>
              <hr />
              <ul className='detail-list'>
                {work.tasks.map((task, i) => (
                  <li key={i}>
                    <p>{task}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
      <section className='about_section'>
        <h3>Education</h3>
        {educations.map((edu) => (
          <div className='col-container' key={edu.school}>
            <div className='date-container'>
              <p>
                {edu.startDate} - {edu.endDate}
              </p>
            </div>
            <div className='detail-container'>
              <p>
                <b>{edu.school}</b>, <i>{edu.location}</i>
              </p>
              <p>{edu.degree}</p>
            </div>
          </div>
        ))}
      </section>
      <section className='about_section'>
        <h3>Tools</h3>
        <ul className='tools'>
          {Object.entries(skills).map(([key, value]) => (
            <li key={key}>
              <p>
                <b>{capitalizeFirstLetter(key.split('_').join(' '))}</b> -{' '}
                {value.join(', ')}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default About;
