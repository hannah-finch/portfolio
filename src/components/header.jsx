import { Link } from 'react-router-dom';

// Will use Link components from react-router-dom to conditionally render the different sections
// Click a link = highlight active link, url changes, corresponding section displays

function Header() {
  return (
    <header>
      <h1>Header</h1>
      <nav>
        <Link to={'/about'}>About Me</Link>
        <Link to={'/portfolio'}>Portfolio</Link>
        <Link to={'/contact'}>Contact</Link>
        <Link to={'/resume'}>Resume</Link>
      </nav>
    </header>
  )
}

export default Header;