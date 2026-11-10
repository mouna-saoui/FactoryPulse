import { Link } from 'react-router-dom'
import StatCard from '../components/StatCard'
import heroImg from '../assets/Factory.jpg'

const STATUS_CLASS = {
  'En fonctionnement': 'status-running',
  "À l'arrêt": 'status-stopped',
  'En panne': 'status-broken',
}

function Dashboard({ machines }) {
  const total = machines.length
  const running = machines.filter(m => m.status === 'En fonctionnement').length
  const stopped = machines.filter(m => m.status === "À l'arrêt").length
  const broken = machines.filter(m => m.status === 'En panne').length

  return (
    <div className="page page-dashboard">

      {/* ── Hero ── */}
      <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <p className="hero-eyebrow">Supervision industrielle · Safi, Maroc</p>
            <h1 className="hero-title">
              Pilotez votre usine<br />en temps réel
            </h1>
            <p className="hero-desc">
              FactoryPulse centralise la gestion de vos machines, surveille leur statut
              et optimise votre production au quotidien.
            </p>
            <Link to="/machines" className="hero-cta">
              <i className="fa-solid fa-gears"></i> Voir les machines
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="stats-section">
        <div className="stats-grid">
          <StatCard label="Total machines" value={total} accent="#0E00AC" icon="fa-solid fa-layer-group" />
          <StatCard label="En fonctionnement" value={running} accent="#16a34a" icon="fa-solid fa-circle-check" />
          <StatCard label="À l'arrêt" value={stopped} accent="#F95700" icon="fa-solid fa-circle-pause" />
          <StatCard label="En panne" value={broken} accent="#dc2626" icon="fa-solid fa-circle-xmark" />
        </div>
      </section>

      {/* ── Table ── */}
      <section className="panel">
        <div className="panel-header">
          <h2 className="panel-title">
            <i className="fa-solid fa-table-list"></i> Aperçu des machines
          </h2>
          <Link to="/machines" className="link-more">Voir tout <i className="fa-solid fa-arrow-right"></i></Link>
        </div>
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Zone</th>
                <th>Statut</th>
                <th>Production / jour</th>
              </tr>
            </thead>
            <tbody>
              {machines.slice(0, 6).map(m => (
                <tr key={m.id}>
                  <td><span className="tag-id">{m.id}</span></td>
                  <td className="td-name">{m.name}</td>
                  <td className="td-muted">{m.zone}</td>
                  <td>
                    <span className={`status-badge ${STATUS_CLASS[m.status]}`}>
                      {m.status}
                    </span>
                  </td>
                  <td className="td-num">{m.dailyProduction} u.</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </div>
  )
}

export default Dashboard
