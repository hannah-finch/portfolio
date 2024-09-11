import '../assets/css/resume.css'
import standInResume from '../components/stand-in-resume.pdf'

// Resume section = link to download resume and list of my proficiencies

function Resume() {
  return (
    <>
    <h2 className="nudge-right type-out">hannahBelle.<span className="teal">resume</span>();</h2>
    
    <section className="delay">

    <section className="text-box shadow1">
      <h3>Resume</h3>

      <a href = {standInResume} target = "_blank">RESUME</a>

    </section>  
    
    </section>
    
    </>
  )
}

export default Resume;