import '../assets/css/portfolio.css'
import ProjectCard from '../components/project-card.jsx'


// Portfolio section = titled images of 6 applications with links to deployed and GitHub

function Portfolio() {
  return (
    <>
    <h2 className="nudge-right type-out">hannahBelle.<span className="teal">portfolio</span>();</h2>
    
    <section className="delay">

    <section className="text-box shadow1">
      <h3>My Work:</h3>

      <section className="grid">
        <ProjectCard />
      </section>

    </section>  

    </section>
    </>
  )
}

export default Portfolio;