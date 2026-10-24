import { useState } from 'react'
import { useActiveSection } from '../hooks'
import { profile } from '../data'

const links = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'apropos', label: 'À propos' },
  { id: 'competences', label: 'Compétences' },
  { id: 'projets', label: 'Projets' },
  { id: 'parcours', label: 'Parcours' },
  { id: 'contact', label: 'Contact' },
]
const ids = links.map((l) => l.id)

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(ids)

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a href="#accueil" className="logo" aria-label="Retour à l'accueil">
          <span className="logo-mark">AL</span>
          <span className="logo-text">{profile.name}</span>
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Navigation principale">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
            title="Changer de thème"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button
            className="icon-btn burger"
            onClick={() => setOpen((o) => !o)}
            aria-label="Ouvrir le menu"
            aria-expanded={open}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  )
}
