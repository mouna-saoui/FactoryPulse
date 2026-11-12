import { NavLink, Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Accueil
        </NavLink>
        <NavLink to="/machines" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Machines
        </NavLink>
        <NavLink to="/kanban" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Kanban
        </NavLink>
      </nav>

      <div className="navbar-brand">
        <div className="navbar-logo">
          <i className="fa-solid fa-industry"></i>
        </div>
        <span className="navbar-title">FactoryPulse</span>
      </div>

      <div className="navbar-actions">
        <Link to="/machines/new" className="btn-connect">
          <i className="fa-solid fa-plus"></i> Ajouter
        </Link>
        <button className="btn-connect">
          <i className="fa-solid fa-right-to-bracket"></i> Se connecter
        </button>
      </div>
    </header>
  )
}

export default Navbar
