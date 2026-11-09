import { useState, useEffect } from 'react'

export function useMachines() {
  const [machines, setMachines] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/factorypulse_machines.json')
      .then(res => {
        if (!res.ok) throw new Error('Erreur de chargement des données')
        return res.json()
      })
      .then(data => { setMachines(data); setLoading(false) })
      .catch(err => { setError(err.message); setLoading(false) })
  }, [])

  function addMachine(machine) {
    setMachines(prev => [...prev, machine])
  }

  function deleteMachine(id) {
    setMachines(prev => prev.filter(m => m.id !== id))
  }

  function updateStatus(id, status) {
    setMachines(prev => prev.map(m => m.id === id ? { ...m, status } : m))
  }

  return { machines, loading, error, addMachine, deleteMachine, updateStatus }
}
