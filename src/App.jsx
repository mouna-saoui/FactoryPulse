import { Routes, Route } from 'react-router-dom'
import { useMachines } from './hooks/useMachines'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Machines from './pages/Machines'
import AddMachine from './pages/AddMachine'
import Kanban from './pages/Kanban'

function App() {
  const { machines, loading, error, addMachine, deleteMachine, updateStatus } = useMachines()

  if (loading) return <div className="center-msg">Chargement...</div>
  if (error) return <div className="center-msg error">{error}</div>

  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard machines={machines} />} />
          <Route path="/machines" element={
            <Machines machines={machines} onDelete={deleteMachine} onStatusChange={updateStatus} />
          } />
          <Route path="/machines/new" element={
            <AddMachine machines={machines} onAdd={addMachine} />
          } />
          <Route path="/kanban" element={
            <Kanban machines={machines} onStatusChange={updateStatus} />
          } />
        </Routes>
      </main>
    </div>
  )
}

export default App
