import { Link} from 'react-router-dom';

import '../assets/css/about.css';

// on first load, About me title and section should be selected by default
// About me section = photo and bio


/*

{`class ${literal}`}

*/

function About() {

  return (
    <>
    <h2 className="nudge-right type-out">hannahBelle.<span className="teal">about</span>();</h2>
    
    <section className="delay">

    <section className="text-box shadow1">
      <h3>I’m a full-stack developer who loves a challenge</h3>
      <p>
        My dad once joked that while other kids were learning their ABC’s from Sesame Street, I was mastering mine on a keyboard.  Computers gave me limitless resources and endless possibilities.  Unlike the physical world, where materials could run out, in the digital world, I was only limited by ideas – and I had a lot of ideas.
      </p>
      <p>
        I built my first blog in elementary school.  From there, I drove deeper into website creation, gradually learning HTML and CSS until I was crafting sites from scratch. It was during yet another YouTube coding tutorial that the realization struck me—I’ve wanted to be a developer all along.
      </p>
      <p>
        Now, I’m focused on earning certification so I can help bring other’s ideas to life in the limitless digital world. 
      </p>
    </section>

    <div className="spacer"></div>

    <section className="btn-container">
      <Link className="btn-green shadow1" to="/portfolio">.portfolio()</Link>
      <Link  className="btn-red shadow1"to="/contact">.contact()</Link>
      <Link className="btn-teal shadow1" to="/resume">.resume()</Link>
    </section>

    <div className="spacer"></div>

    <section className="skills-section">
      <img src="./images/portrait.jpg" className="shadow1"></img>
      <div className="text-box shadow1 skills-container">
        {/* TODO: change this to icons, edit skills, add design skills, other tech programs/skills like github, figma*/}
        <h3>front-end skills:</h3>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>Tailwind</li>
        <h3>back-end skills:</h3>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>Tailwind</li>
      </div>
    </section>
    
    </section>
    </>
    
  )
}

export default About;