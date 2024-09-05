import projectData from '../assets/project-data.json'
import '../assets/css/project-card.css'

import { Link } from 'react-router-dom';

function ProjectCard() {

 // map through projects in data to render info on cards

  const Card = (projectData.projects.map((project, index) => {
    if (project.publish == true) {
      return (
        <section key={project.id} className="card shadow1">

        <div>
          <Link to={`/project/${project.id}`}>
            <div
              className="img2 shadow3"
              style={{ backgroundImage: `url(${project.codeImage})` }}>
              <div
                className="img1"
                style={{ backgroundImage: `url(${project.image1})` }}>
              </div>
            </div>
          </Link>
          <h3>{project.name}</h3>
          <p>{project.shortDescription}</p>
        </div>

        <Link to={`/project/${project.id}`} className="details-btn">Details --&gt;</Link>
        </section> 
      )
    }
  }))
  return(Card);
}

export default ProjectCard;