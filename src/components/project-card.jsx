import projectData from '../../public/project-data.json'
import '../assets/css/project-card.css'

function ProjectCard() {
  // map through projects in data to render info on cards
  return (
    <>
      {projectData.projects.map(project => (

          <p key={project.id}>
            {project.name} and {project.id}
          </p>

      ))}
    </>
  )
};

export default ProjectCard;