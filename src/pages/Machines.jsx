import { useState } from 'react'
import { Link } from 'react-router-dom'
import MachineCard from '../components/MachineCard'
import SearchBar from '../components/SearchBar'

function Machines({ machines, onDelete, onStatusChange }) {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('')

  const filtered = machines.filter(m => {
    const matchSearch = m.name.toLowerCase().includes(search.toLowerCase())
    const matchStatus = statusFilter === '' || m.status === statusFilter
    return matchSearch && matchStatus
  })

  function handleReset() {
    setSearch('')
    setStatusFilter('')
  }

  return (
    <div className="page">
      <div className="page-header">
        <h1>Machines</h1>
        <Link to="/machines/new" className="btn-primary">+ Ajouter</Link>
      </div>

      <SearchBar
        search={search}
        status={statusFilter}
        onSearch={setSearch}
        onStatus={setStatusFilter}
        onReset={handleReset}
      />

      {filtered.length === 0 ? (
        <div className="empty-state">
          <i className="fa-solid fa-magnifying-glass"></i>
          <p>Aucune machine ne correspond à votre recherche.</p>
          <button className="btn-secondary" onClick={handleReset}>Réinitialiser</button>
        </div>
      ) : (
        <div className="machines-grid">
          {filtered.map(machine => (
            <MachineCard
              key={machine.id}
              machine={machine}
              onDelete={onDelete}
              onStatusChange={onStatusChange}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Machines
