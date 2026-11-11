const COLUMNS = [
  { key: 'En fonctionnement', accent: '#16a34a', bg: '#f0fdf4', icon: 'fa-solid fa-circle-check' },
  { key: "À l'arrêt",        accent: '#F95700', bg: '#fff7ed', icon: 'fa-solid fa-circle-pause' },
  { key: 'En panne',          accent: '#dc2626', bg: '#fef2f2', icon: 'fa-solid fa-circle-xmark' },
]

function Kanban({ machines, onStatusChange }) {
  function handleDragStart(e, id) { e.dataTransfer.setData('machineId', id) }
  function handleDrop(e, status) {
    e.preventDefault()
    onStatusChange(e.dataTransfer.getData('machineId'), status)
  }
  function handleDragOver(e) { e.preventDefault() }

  return (
    <div className="page">
      <div className="page-header">
        <h1><i className="fa-solid fa-table-columns"></i> Kanban</h1>
      </div>
      <div className="kanban-board">
        {COLUMNS.map(({ key, accent, bg, icon }) => {
          const cards = machines.filter(m => m.status === key)
          return (
            <div
              key={key}
              className="kanban-col"
              onDrop={e => handleDrop(e, key)}
              onDragOver={handleDragOver}
            >
              {/* Column header */}
              <div className="kanban-col-head" style={{ background: accent }}>
                <span className="kanban-col-title">
                  <i className={icon}></i> {key}
                </span>
                <span className="kanban-col-count">{cards.length}</span>
              </div>

              {/* Cards */}
              <div className="kanban-cards" style={{ background: bg }}>
                {cards.length === 0 && (
                  <div className="kanban-empty">
                    <i className="fa-regular fa-rectangle-list"></i>
                    <span>Glissez une carte ici</span>
                  </div>
                )}
                {cards.map(m => (
                  <div
                    key={m.id}
                    className="kanban-card"
                    draggable
                    onDragStart={e => handleDragStart(e, m.id)}
                    style={{ borderLeft: `3px solid ${accent}` }}
                  >
                    <div className="kanban-card-top">
                      <span className="tag-id">{m.id}</span>
                      <i className="fa-solid fa-grip-vertical kc-drag-icon"></i>
                    </div>
                    <p className="kanban-card-name">{m.name}</p>
                    <div className="kanban-card-meta">
                      <span><i className="fa-solid fa-location-dot"></i> {m.zone}</span>
                      <span><i className="fa-solid fa-chart-line"></i> {m.dailyProduction} u./j</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Kanban
