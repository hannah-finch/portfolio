// LOOK UP: React link to top of page (currently links leave page scrolled when new content is shown, since it's technically single page)

import { useParams, Link } from 'react-router-dom';

import '../assets/css/project-page.css'
import projectData from '../assets/project-data.json'


const Details = ({ startDate, endDate, objective, contribution, technologies }) => {
  
  const Date = (() => {
    if (startDate && endDate) {
      return <p><span className="h2 green">Date: </span>{startDate} - {endDate}</p>
    }
  })

  const Objective = (() => {
    if (objective) {
      return <p><span className="h2 green">Objective: <br></br></span>{objective}</p>
    }
  })

  const Technologies = (() => {
    if (technologies) {
      const list = (technologies.map((tech, index) => {
        return <li key={index} className="tech">{tech}</li>
      }))

      return <p><span className="h2 green">Technologies: <br></br></span>{list}</p>
    }
  })

  const Contribution = (() => {
    if (contribution) {
      return <p><span className="h2 green">My Contribution: <br></br></span>{contribution}</p>
    }
  })

  return (
    <div>
      <h3>Details:</h3>
      < Date />
      < Objective />
      < Technologies />
      < Contribution />
    </div>
  )
}

const Description = ({ name, longDescription }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{longDescription}</p>
    </div>
  )
}

const Buttons = ({ deployed, video, github }) => {

  const DeployBtn = (() => {
    if (deployed) {
      return <a className="github-link" href={deployed} target="_blank">
      Deployed Application
      </a>
    }
  })

  const VideoBtn = (() => {
    if (video) {
      return <a className="github-link" href={video} target="_blank">
      Video Walkthrough
      </a>
    }
  })

  const GithubBtn = (() => {
    if (github) {
      return <a className="github-link" href={github} target="_blank">
      View Code on GitHub
      </a>
    }
  })

  return (
    <div className="btn-container2">
      < DeployBtn />
      < VideoBtn />
      < GithubBtn />
    </div>
  )
}

const ImageSection = ({ image1, moreImages }) => {

  const Image1 = (() => {
    if (image1) {
      return <img className="shadow1 main-img" src={image1}></img>
    }
  })

  const Images = (() => {
    if (moreImages) {
      const images = (moreImages.map((image, index) => {
        return <div key={index} className="grid-img" style={{ backgroundImage: `url(${image})` }}></div>
      }))
      return(images)
    }
  })

  return (
    <>
      <h3>Screenshots:</h3>
        < Image1 />
      <div className="grid">
        < Images />
      </div>
    </>
  )
}

function ProjectPage() {
  // get project id from url
  const { id } = useParams();
  const project = projectData.projects[id];

  return (
    <>
      <h2 className="nudge-right type-out2">import &#123; <span className="teal">project</span> &#125; from &apos;<span className="green">project-data</span>&apos;;</h2>

      <section className="delay">

        <section className="text-box shadow1">
          <div className="info-container">
            <Description {...project}/>
            <Details {...project} />
          </div>
          <Buttons {...project} />
        </section>

        <div className="spacer"></div>

        <ImageSection {...project} />

        <Link to="/portfolio">&lt;-- Back to portfolio</Link>

      </section>
    </>
  )
}

export default ProjectPage;