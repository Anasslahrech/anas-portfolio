import { useEffect, useRef, useState } from 'react'
import { useActiveSection } from '../hooks'
import { useLang } from '../i18n'

const ids = ['accueil', 'apropos', 'competences', 'projets', 'parcours', 'contact']

export default function Navbar({ theme, toggleTheme }) {
  const { toggleLang, d } = useLang()
  const { profile, ui } = d
  const links = [
    { id: 'accueil', label: ui.nav.home },
    { id: 'apropos', label: ui.nav.about },
    { id: 'competences', label: ui.nav.skills },
    { id: 'projets', label: ui.nav.projects },
    { id: 'parcours', label: ui.nav.journey },
    { id: 'contact', label: ui.nav.contact },
  ]
  const [open, setOpen] = useState(false)
  const active = useActiveSection(ids)
  const bar = useRef(null)
  const [scrolled, setScrolled] = useState(false)

  // Barre de progression de lecture + barre qui se réduit au défilement
  useEffect(() => {
    const on = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      const p = h > 0 ? window.scrollY / h : 0
      bar.current?.style.setProperty('--sp', p.toFixed(4))
      setScrolled(window.scrollY > 24)
    }
    on()
    window.addEventListener('scroll', on, { passive: true })
    window.addEventListener('resize', on)
    return () => {
      window.removeEventListener('scroll', on)
      window.removeEventListener('resize', on)
    }
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#accueil" className="logo" aria-label={ui.nav.logoLabel}>
          <span className="logo-mark">AL</span>
          <span className="logo-text">{profile.name}</span>
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label={ui.nav.mainNav}>
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
            onClick={toggleLang}
            aria-label={ui.nav.langLabel}
            title={ui.nav.langLabel}
            style={{ fontWeight: 700, fontSize: '0.8rem' }}
          >
            {ui.nav.langBtn}
          </button>
          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? ui.nav.toLight : ui.nav.toDark}
            title={ui.nav.theme}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button
            className="icon-btn burger"
            onClick={() => setOpen((o) => !o)}
            aria-label={ui.nav.menu}
            aria-expanded={open}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
      <div ref={bar} className="nav-progress" />
    </header>
  )
}