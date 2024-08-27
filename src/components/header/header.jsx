import './header.css'

// Will use Link components from react-router-dom to conditionally render the different sections
// Click a link = highlight active link, url changes, corresponding section displays

function Header() {
  return (
    <header>
      <h1>Header</h1>
      <nav>
        <a href='/about'><li>About Me</li></a>
        <a href='/portfolio'><li>Portfolio</li></a>
        <a href='/contact'><li>Contact</li></a>
        <a href='/resume'><li>Resume</li></a>
      </nav>
    </header>
  )
}

export default Header;