// LOOK UP: React link to top of page (currently links leave page scrolled when new content is shown, since it's technically single page)

import { useParams } from 'react-router-dom';

import '../assets/css/project-page.css'
import projectData from '../../public/project-data.json'

// Project Page, render information for a single project

function ProjectPage() {
  // get project id from url
  const { id } = useParams();
  // get project data by index = id
  // this is a temporary solution and should be replaced with a method that doesn't require the project id to equal its index in the projectData array

  // maybe add array of additional images to json, map to display them
  const project = projectData.projects[id];

  return (
    <>
      <h2 className="nudge-right type-out">import <span className="teal">projectData</span>;</h2>

      <section className="delay">

      <section className="text-box shadow1">
        <div className="info-container">
          <div className="text-group">
            <h1>{project.name}</h1>
            <p>{project.longDescription}</p>
          </div>
          <div className="text-group">
            <h3>Details:</h3>
            <p><span className="h2 green">Date: </span>{project.startDate} - {project.endDate}</p>
            <p><span className="h2 green">Objective: <br></br></span>{project.objective}asdf asdf asd fasdf a sdfasd asdf asdfas</p>
            <p><span className="h2 green">Technologies: <br></br></span>{project.technologies} sadf sdfa sdfasdfasd</p>
            <p><span className="h2 green">My Contribution: <br></br></span>{project.contribution}asdfasdfasdf asd fasd asdfasdf asd sda f</p>
          </div>
        </div>

        <div className="btn-container2">
          <a className="github-link" href='https://github.com/hannahschwen' target="_blank">
          Deployed Application
          </a>
          <a className="github-link" href='https://github.com/hannahschwen' target="_blank">
          View Code on GitHub -->
          </a>
        </div>
        
      </section>

      <section className="text-box shadow1">

          <img src={project.image1}></img>


        
        <p>{project.longDescription}</p>




      </section>
      </section>


      <h1>Project Page</h1>
      {/* {project.name} */}
      {project.shortDescription}
      
      


      {project.deployed}
      {project.github}
      
      
      
      {project.image2}
    </>
  )
}

export default ProjectPage;