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

  const project = projectData.projects[id];

  return (
    <>
      <h2 className="nudge-right type-out2">import &#123; <span className="teal">project</span> &#125; from &apos;<span className="green">project-data</span>&apos;;</h2>

      <section className="delay">

      <section className="text-box shadow1">
        <div className="info-container">
          <div>
            <h1>{project.name}</h1>
            <p>{project.longDescription}</p>
          </div>
          <div>
            <h3>Details:</h3>
            <p><span className="h2 green">Date: </span>{project.startDate} - {project.endDate}</p>
            <p><span className="h2 green">Objective: <br></br></span>{project.objective}</p>
            <p><span className="h2 green">Technologies: <br></br></span>{project.technologies}</p>
            <p><span className="h2 green">My Contribution: <br></br></span>{project.contribution}</p>
          </div>
        </div>

        <div className="btn-container2">
          <a className="github-link" href={project.deployed} target="_blank">
          Deployed Application
          </a>
          <a className="github-link" href={project.github} target="_blank">
          View Code on GitHub --&gt;
          </a>
        </div>
        
      </section>

      <h3>Screenshots:</h3>

      <img className="shadow1 main-img" src={project.image1}></img>

      <div className="grid">

        {project.moreImages.map(image => {
          if (!image) {
            return
          } else {
            return ( 
              <>
                <div className="grid-img" style={{ backgroundImage: `url(${image})` }}></div>
              </>
            )
          }
        })}
      </div>

      
      </section>


    </>
  )
}

export default ProjectPage;