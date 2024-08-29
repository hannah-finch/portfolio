import { Link } from 'react-router-dom'

// text or icon links to GitHub, LinkedIn, and third platform... (Stack Overflow, Twitter, Instagram)
function Footer() {
  return (
    <footer className="shadow1">
      <a href='https://github.com/hannahschwen' target="_blank">
        <img src="./images/icons/icon_github.png"></img>
      </a>
      <a href='https://www.linkedin.com/in/hannah-schwen-663969314/' target="_blank">
        <img src="./images/icons/icon_linkedin.png"></img>
      </a>
      <a href='mailto:hannahschwen@gmail.com'>
        <img src="./images/icons/icon_email.png"></img>
      </a>
      <a href='https://www.instagram.com/hannah.schwen/' target="_blank">
        <img src="./images/icons/icon_instagram.png"></img>
      </a>   
    </footer>
  )
}

export default Footer;