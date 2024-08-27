import './header.css'

function Header() {
  return (
    <header>
      <h1>Header</h1>
      {/* Click a link = highlight active link, url changes, corresponding section displays */}
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