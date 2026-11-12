import { useLocation } from 'react-router-dom'

const TITLES = {
  '/': 'Dashboard',
  '/machines': 'Machines',
  '/machines/new': 'Ajouter une machine',
  '/kanban': 'Kanban',
}

function Topbar() {
  const { pathname } = useLocation()
  const title = TITLES[pathname] ?? 'FactoryPulse'

  return (
    <header className="topbar">
      <h2 className="topbar-title">{title}</h2>
      <div className="topbar-right">
        <div className="topbar-search">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input type="text" placeholder="Rechercher..." readOnly />
        </div>
        <div className="topbar-avatar">M</div>
      </div>
    </header>
  )
}

export default Topbar
