# FactoryPulse

Tableau de bord industriel pour la supervision et la gestion des machines d'une usine.  
Développé avec **React 19** + **Vite**, dans le cadre d'un brief académique.

---

## Aperçu

FactoryPulse permet de :

- Visualiser en temps réel le statut de toutes les machines
- Ajouter et supprimer des machines
- Filtrer et rechercher par nom ou statut
- Glisser-déposer les machines entre les colonnes du Kanban pour changer leur statut

---

## Pages

| Page | Route | Description |
|---|---|---|
| Dashboard | `/` | Hero, statistiques globales et aperçu des machines |
| Machines | `/machines` | Liste complète avec recherche et filtres par statut |
| Ajouter | `/machines/new` | Formulaire d'ajout avec validation |
| Kanban | `/kanban` | Board drag & drop — 3 colonnes par statut |

---

## Stack technique

| Outil | Version |
|---|---|
| React | 19.3 |
| React Router DOM | 7.x |
| Vite | 8.x |
| ESLint | 10.x |
| Font Awesome | 7.x (CDN) |
| Google Fonts | Metal Mania |

---

## Structure du projet

```
factory-pulse/
├── public/
│   └── factorypulse_machines.json   # Données initiales des machines
├── src/
│   ├── assets/                      # Images (hero, formulaire, logo)
│   ├── components/
│   │   ├── Navbar.jsx               # Barre de navigation principale
│   │   ├── Sidebar.jsx              # Sidebar (composant alternatif)
│   │   ├── Topbar.jsx               # Barre supérieure contextuelle
│   │   ├── StatCard.jsx             # Carte de statistique
│   │   ├── MachineCard.jsx          # Carte machine avec statut et suppression
│   │   └── SearchBar.jsx            # Recherche + filtres par statut
│   ├── hooks/
│   │   └── useMachines.js           # Fetch, ajout, suppression, mise à jour statut
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Machines.jsx
│   │   ├── AddMachine.jsx
│   │   └── Kanban.jsx
│   ├── styles/
│   │   └── navbar.css
│   ├── App.jsx                      # Routing et layout global
│   ├── index.css                    # Tous les styles globaux et composants
│   └── main.jsx                     # Point d'entrée React
├── index.html
├── package.json
└── vite.config.js
```

---

## Installation

```bash
# Cloner le dépôt
git clone git@github.com:mouna-saoui/FactoryPulse.git
cd FactoryPulse/factory-pulse

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

L'application sera disponible sur `http://localhost:5173`.

---

## Scripts disponibles

```bash
npm run dev       # Serveur de développement avec HMR
npm run build     # Build de production
npm run preview   # Prévisualiser le build
npm run lint      # Analyse ESLint
```

---

## Données machines

Les machines sont chargées depuis `/public/factorypulse_machines.json`.  
Chaque machine a la structure suivante :

```json
{
  "id": "M-001",
  "name": "Robot de soudage",
  "zone": "Atelier A",
  "status": "En fonctionnement",
  "dailyProduction": 125
}
```

Les statuts possibles sont : `En fonctionnement` · `À l'arrêt` · `En panne`

---

## Auteur

**Mouna Saoui** — Brief académique · Safi, Maroc · Novembre 2026
