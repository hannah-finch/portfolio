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

      <section className="text-box">
        <h3>{project.name}</h3>
        <p><span className="h2 green">Date: </span>{project.startDate} - {project.endDate}</p>
        <p><span className="h2 green">Objective: </span>{project.objective}</p>
        <p><span className="h2 green">Technologies: </span>{project.technologies}</p>
        <p><span className="h2 green">My Contribution: </span>{project.contribution}</p>
      </section>

      <section className="text-box">
        <div className="flex">
          <img src={project.image1}></img>

        </div>
        
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