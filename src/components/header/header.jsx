import './header.css'

// Will use Link components from react-router-dom to conditionally render the different sections
// Click a link = highlight active link, url changes, corresponding section displays

function Header() {
  return (
    <header>
      <h1>Header</h1>
      <nav>
        <li>About Me</li>
        <li>Portfolio</li>
        <li>Contact</li>
        <li>Resume</li>
      </nav>
    </header>

  )
}

export default Header;