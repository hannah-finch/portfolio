import '../assets/css/hero.css'

// Design idea: consider changing image and 
function Hero() {
  // if (window.location.path === "/" ) {                   
    return(
      <div className="hero">
        <img src="./images/avatar.png"></img>
        <h2>const <span className="teal">hannahBelle</span> = &#123;<br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;title: &apos;<span className="green">Developer</span>&apos;;<br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;skillSet: &apos;<span className="green">Full-Stack</span>&apos;;<br></br>
        &#125;;
        </h2>
      </div>
    )
  // } else {
  //   return (<h1>error</h1>)
  // }

}

export default Hero;