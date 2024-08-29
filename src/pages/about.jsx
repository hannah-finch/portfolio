import { Link} from 'react-router-dom';

import '../assets/css/about.css';

// on first load, About me title and section should be selected by default
// About me section = photo and bio

function About() {
  return (
    <>
    <h2 className="nudge-right">hannahBelle.<span className="teal">about</span>();</h2>
    <div className="text-box shadow 1">
      <h3>I'm a full-stack developer who loves a challenge</h3>
      <p>
        My dad once joked that while other kids were learning their ABC’s from Sesame Street, I was mastering mine on a keyboard.  Computers gave me limitless resources and endless possibilities.  Unlike the physical world, where materials could run out, in the digital world, I was only limited by ideas – and I had a lot of ideas.
      </p>
      <p>
        I built my first blog in elementary school.  From there, I drove deeper into website creation, gradually learning HTML and CSS until I was crafting sites from scratch. It was during yet another YouTube coding tutorial that the realization struck me—I’ve wanted to be a developer all along.
      </p>
      <p>
        Now, I’m focused on earning certification so I can help bring other’s ideas to life in the limitless digital world. 
      </p>
    </div>
    <div className="spacer"></div>
    <div className="btn-container">
      <Link className="btn-green shadow1" to="/portfolio">.portfolio()</Link>
      <Link  className="btn-red shadow1"to="/contact">.contact()</Link>
      <Link className="btn-teal shadow1" to="/resume">.resume()</Link>
    </div>
    <div className="spacer"></div>
    </>
    
  )
}

export default About;