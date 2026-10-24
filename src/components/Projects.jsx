import { useState } from 'react'
import Section from './Section'
import { projects, otherProjects, profile } from '../data'

const filters = [
  { id: 'all', label: 'Tous' },
  { id: 'ia', label: 'IA & Data' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
]

const catLabel = { ia: 'IA & Data', web: 'Web', mobile: 'Mobile' }

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [showOthers, setShowOthers] = useState(false)

  const list = projects.filter((p) => filter === 'all' || p.categories.includes(filter))
  const others = otherProjects.filter((p) => filter === 'all' || p.category === filter)

  return (
    <Section id="projets" eyebrow="03 — Projets" title="Ce que j'ai construit">
      <div className="filters" role="tablist" aria-label="Filtrer les projets">
        {filters.map((f) => (
          <button
            key={f.id}
            role="tab"
            aria-selected={filter === f.id}
            className={`filter ${filter === f.id ? 'active' : ''}`}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {list.map((p) => (
          <article key={p.title} className={`card project ${p.featured ? 'featured' : ''}`}>
            <div className="project-top">
              <span className="badge-sm">{p.badge}</span>
              <div className="cats">
                {p.categories.map((c) => (
                  <span key={c} className={`cat cat-${c}`}>
                    {catLabel[c]}
                  </span>
                ))}
              </div>
            </div>
            <h3>{p.title}</h3>
            <p className="subtitle">{p.subtitle}</p>
            <p>{p.description}</p>
            <ul className="highlights">
              {p.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
            <div className="chips small">
              {p.tech.map((t) => (
                <span key={t} className="chip mono">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
        {list.length === 0 && <p className="empty">Aucun projet principal dans cette catégorie.</p>}
      </div>

      {others.length > 0 && (
        <div className="others">
          <button className="btn btn-ghost" onClick={() => setShowOthers((s) => !s)} aria-expanded={showOthers}>
            {showOthers ? 'Masquer' : 'Voir'} les autres projets Web & Mobile ({others.length})
          </button>

          {showOthers && (
            <div className="others-grid">
              {others.map((o) => (
                <article key={o.title} className="card other">
                  <h4>{o.title}</h4>
                  <p>{o.desc}</p>
                  <span className="mono stack">{o.stack}</span>
                </article>
              ))}
            </div>
          )}
        </div>
      )}

      <p className="more">
        Plus de code sur{' '}
        <a href={profile.github} target="_blank" rel="noreferrer">
          mon GitHub
        </a>
        .
      </p>
    </Section>
  )
}
