const STATUS_OPTIONS = ['En fonctionnement', "À l'arrêt", 'En panne']

const STATUS_META = {
  'En fonctionnement': { cls: 'status-running', dot: '#16a34a', shadow: 'rgba(22,163,74,0.4)' },
  "À l'arrêt":        { cls: 'status-stopped', dot: '#F95700', shadow: 'rgba(249,87,0,0.4)'  },
  'En panne':          { cls: 'status-broken',  dot: '#dc2626', shadow: 'rgba(220,38,38,0.4)' },
}

function MachineCard({ machine, onDelete, onStatusChange }) {
  const meta = STATUS_META[machine.status] ?? STATUS_META["À l'arrêt"]

  function handleDelete() {
    if (window.confirm(`Supprimer "${machine.name}" ?`)) onDelete(machine.id)
  }

  return (
    <div className="machine-card">
      {/* Status dot — top right */}
      <span
        className="mc-status-dot"
        title={machine.status}
        style={{
          background: meta.dot,
          boxShadow: `0 0 0 4px ${meta.shadow}`,
        }}
      ></span>

      {/* ID tag */}
      <span className="tag-id mc-id">{machine.id}</span>

      {/* Machine name — Metal Mania font */}
      <h3 className="mc-name">{machine.name}</h3>

      {/* Meta info */}
      <div className="mc-meta">
        <span className="mc-meta-item">
          <i className="fa-solid fa-location-dot"></i>
          {machine.zone}
        </span>
        <span className="mc-meta-item">
          <i className="fa-solid fa-chart-line"></i>
          {machine.dailyProduction} unités / jour
        </span>
      </div>

      {/* Status select */}
      <select
        value={machine.status}
        onChange={e => onStatusChange(machine.id, e.target.value)}
        className="status-select"
      >
        {STATUS_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
      </select>

      {/* Circular delete button — bottom right */}
      <button className="btn-delete-circle" onClick={handleDelete} title="Supprimer">
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  )
}

export default MachineCard
