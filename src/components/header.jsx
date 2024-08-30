import { NavLink } from 'react-router-dom';

// Will use Link components from react-router-dom to conditionally render the different sections
// Click a link = highlight active link, url changes, corresponding section displays

function Header() {
  return (
    <header className="shadow2">
      <h1><span className="teal">Hannah Belle</span>
       {/* : <span className="green">Full-Stack Developer</span> */}
       </h1>
      <nav>
        <NavLink to={'/about'}className={({ isActive }) => (isActive ? "active-link" : "normal-link")}>
          .about()
        </NavLink>
        <NavLink to={'/portfolio'}className={({ isActive }) => (isActive ? "active-link" : "normal-link")}>
          .portfolio()
        </NavLink>
        <NavLink to={'/contact'}className={({ isActive }) => (isActive ? "active-link" : "normal-link")}>
          .contact()
        </NavLink>
        <NavLink to={'/resume'}className={({ isActive }) => (isActive ? "active-link" : "normal-link")}>
          .resume()
        </NavLink>
      </nav>
    </header>
  )
}

export default Header;