import '../assets/css/hero.css'

// Design idea: consider changing image and 
function Hero() {
  return(
    <div className="hero">
      <img src="./images/avatar.png"></img>
      <h2>const <span className="teal">hannahBelle</span> = &#123;<br></br>
      &nbsp;&nbsp;&nbsp;&nbsp;title: <span className="green">"Developer"</span>;<br></br>
      &nbsp;&nbsp;&nbsp;&nbsp;skillSet: <span className="green">"Full=Stack"</span>;<br></br>
      &#125;;
      </h2>
    </div>
  )
}

export default Hero;