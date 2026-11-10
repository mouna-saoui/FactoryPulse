const STATUS_FILTERS = ['En fonctionnement', "À l'arrêt", 'En panne']

function SearchBar({ search, status, onSearch, onStatus, onReset }) {
  return (
    <div className="search-bar-wrap">
      <div className="search-row">
        <div className="search-input-wrap">
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
          <input
            type="text"
            placeholder="Rechercher une machine..."
            value={search}
            onChange={e => onSearch(e.target.value)}
            className="search-input"
          />
          {search && (
            <button className="search-clear" onClick={() => onSearch('')} title="Effacer">
              <i className="fa-solid fa-xmark"></i>
            </button>
          )}
        </div>
      </div>

      <div className="filter-pills">
        <span className="filter-label">
          <i className="fa-solid fa-filter"></i> Filtrer :
        </span>
        <button
          className={`pill${status === '' ? ' pill-active' : ''}`}
          onClick={() => onStatus('')}
        >Tous</button>
        {STATUS_FILTERS.map(s => (
          <button
            key={s}
            className={`pill${status === s ? ' pill-active' : ''}`}
            onClick={() => onStatus(s)}
          >{s}</button>
        ))}
        {(search || status) && (
          <button className="pill pill-reset" onClick={onReset}>
            <i className="fa-solid fa-rotate-left"></i> Réinitialiser
          </button>
        )}
      </div>
    </div>
  )
}

export default SearchBar
