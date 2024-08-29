import projectData from '../../public/project-data.json'
import '../assets/css/project-card.css'
import { Link } from 'react-router-dom';

function ProjectCard() {
  // map through projects in data to render info on cards
  return (
    <>
      {projectData.projects.map(project => (
        
        <Link to={`/project/${project.id}`} key={project.id}>
          
          {project.name}<br></br>
        
        </Link>
        
      ))}
    </>
  )
};

export default ProjectCard;