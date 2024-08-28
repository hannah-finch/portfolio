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
      <h1>Project Page</h1>
      <h1>{project.name}</h1>
    </>
  )
}

export default ProjectPage;