import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import factoryImg from '../assets/factoy.jpeg'

const INITIAL = { name: '', zone: '', status: 'En fonctionnement', dailyProduction: '' }

function AddMachine({ machines, onAdd }) {
  const [form, setForm] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Le nom est obligatoire.'
    if (!form.zone.trim()) e.zone = 'La zone est obligatoire.'
    if (
      form.dailyProduction === '' ||
      isNaN(form.dailyProduction) ||
      Number(form.dailyProduction) < 0 ||
      !Number.isInteger(Number(form.dailyProduction))
    ) e.dailyProduction = 'Entier >= 0 requis.'
    return e
  }

  function generateId() {
    const nums = machines.map(m => parseInt(m.id.replace('M-', ''), 10)).filter(n => !isNaN(n))
    const next = nums.length > 0 ? Math.max(...nums) + 1 : 1
    return `M-${String(next).padStart(3, '0')}`
  }

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setErrors(prev => ({ ...prev, [e.target.name]: undefined }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length > 0) { setErrors(e2); return }
    onAdd({ ...form, id: generateId(), dailyProduction: Number(form.dailyProduction) })
    navigate('/machines')
  }

  return (
    <div className="page">
      <div className="add-layout">

        {/* Form card */}
        <div className="panel add-form-panel">
          <h3 className="panel-title" style={{ marginBottom: '1.5rem' }}>Informations de la machine</h3>
          <form onSubmit={handleSubmit} noValidate className="add-form">

            <div className="form-group">
              <label>Nom de la machine <span className="req">*</span></label>
              <input name="name" value={form.name} onChange={handleChange} placeholder="Ex : Robot de soudage" />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label>Zone de production <span className="req">*</span></label>
              <input name="zone" value={form.zone} onChange={handleChange} placeholder="Ex : Atelier A" />
              {errors.zone && <span className="form-error">{errors.zone}</span>}
            </div>

            <div className="form-group">
              <label>Statut</label>
              <select name="status" value={form.status} onChange={handleChange}>
                <option value="En fonctionnement">En fonctionnement</option>
                <option value="À l'arrêt">À l'arrêt</option>
                <option value="En panne">En panne</option>
              </select>
            </div>

            <div className="form-group">
              <label>Production journalière (unités) <span className="req">*</span></label>
              <input name="dailyProduction" type="number" min="0" value={form.dailyProduction} onChange={handleChange} placeholder="Ex : 120" />
              {errors.dailyProduction && <span className="form-error">{errors.dailyProduction}</span>}
            </div>

            <div className="form-actions">
              <button type="button" className="btn-outline" onClick={() => navigate('/machines')}>Annuler</button>
              <button type="submit" className="btn-primary">Ajouter la machine</button>
            </div>
          </form>
        </div>

        {/* Image panel */}
        <div className="add-img-panel" style={{ backgroundImage: `url(${factoryImg})` }}>
          <div className="add-img-overlay">
            <div className="add-img-badge">FactoryPulse</div>
            <h2 className="add-img-title">Gérez vos machines industrielles</h2>
            <p className="add-img-sub">Chaque machine ajoutée renforce la performance de votre usine.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AddMachine
