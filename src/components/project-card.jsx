import projectData from '../../public/project-data.json'
import '../assets/css/project-card.css'
import { Link } from 'react-router-dom';

function ProjectCard() {
  // map through projects in data to render info on cards
  return (
    <>
    
      {projectData.projects.map(project => (
        
        <div key={project.id} className="card shadow1">
          
          <div>
            <div className="img-box shadow3" style={{ backgroundImage: `url(${project.image1})` }}>
            </div>
            <h3>{project.name}</h3>
            <p>{project.shortDescription}</p>
          </div>

          <Link to={`/project/${project.id}`} className="details-btn">Details --></Link>
        </div>





        // <Link to={`/project/${project.id}`} key={project.id} className="card">
          

        //   <section className="">
        //     <img src={project.image1}></img>
        //     <h3>{project.name}</h3>
        //     <p>{project.shortDescription}</p>

        //     <Link className="btn-red">.more()</Link>
        //   </section>
        //   <div className="inspect"></div>
        
        // </Link>
        
      ))}
    </>
  )
};

export default ProjectCard;