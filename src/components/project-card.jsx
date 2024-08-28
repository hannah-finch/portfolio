import projectData from '../../public/project-data.json'
import '../assets/css/project-card.css'
import { Link } from 'react-router-dom';

function ProjectCard() {
  // map through projects in data to render info on cards
  return (
    <>
      {projectData.projects.map(project => (
        <>
          <p key={project.id}>
            {project.name} and {project.id}
          </p>
          <Link to={`/project/${project.id}`}>
            Project Page
          </Link>  
        </>
      ))}
    </>
  )
};

export default ProjectCard;