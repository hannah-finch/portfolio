import '../assets/css/portfolio.css'
import ProjectCard from '../components/project-card.jsx'


// Portfolio section = titled images of 6 applications with links to deployed and GitHub

function Portfolio() {
  return (
    <>
    <h2 className="nudge-right type-out">hannahBelle.<span className="teal">portfolio</span>();</h2>
    
    <section className="text-box shadow1 delay">
      <h3>My Work:</h3>
      <ProjectCard />
    </section>  

    </>
  )
}

export default Portfolio;