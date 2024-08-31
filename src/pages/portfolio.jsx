import '../assets/css/portfolio.css'
import ProjectCard from '../components/project-card.jsx'


// Portfolio section = titled images of 6 applications with links to deployed and GitHub

function Portfolio() {
  return (
    <>
    <h2 className="nudge-right type-out">hannahBelle.<span className="teal">portfolio</span>();</h2>
    
    <section className="delay">

    <section className="text-box shadow1">
      <section className="grid">
        <ProjectCard />
      </section>

      <a className="github-link" href='https://github.com/hannahschwen' target="_blank">
        View more work on GitHub -->
      </a>

    </section>  

    </section>
    </>
  )
}

export default Portfolio;