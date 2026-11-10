function StatCard({ label, value, accent, icon }) {
  return (
    <div className="stat-card">
      <div className="stat-icon-wrap" style={{ background: `${accent}18`, color: accent }}>
        <i className={icon}></i>
      </div>
      <div className="stat-body">
        <span className="stat-value" style={{ color: accent }}>{value}</span>
        <span className="stat-label">{label}</span>
      </div>
    </div>
  )
}

export default StatCard
