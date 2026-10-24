import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Section from './Section'
import Fx from './Fx'
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

  // Pastille qui glisse sous le filtre actif
  const wrap = useRef(null)
  const btns = useRef({})
  const [ind, setInd] = useState({ left: 0, width: 0 })
  const measure = () => {
    const el = btns.current[filter]
    if (el) setInd({ left: el.offsetLeft, width: el.offsetWidth })
  }
  useLayoutEffect(measure, [filter]) // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    window.addEventListener('resize', measure)
    document.fonts?.ready.then(measure)
    return () => window.removeEventListener('resize', measure)
  }, [filter]) // eslint-disable-line react-hooks/exhaustive-deps

  const list = projects.filter((p) => filter === 'all' || p.categories.includes(filter))
  const others = otherProjects.filter((p) => filter === 'all' || p.category === filter)

  return (
    <Section id="projets" num="03" eyebrow="Projets" title="Ce que j'ai construit" prev="bg">
      <div className="pj-filters rv" ref={wrap} role="tablist" aria-label="Filtrer les projets">
        <span className="pj-ind" style={{ left: ind.left, width: ind.width }} />
        {filters.map((f) => (
          <button
            key={f.id}
            ref={(el) => (btns.current[f.id] = el)}
            role="tab"
            aria-selected={filter === f.id}
            className={`pj-f ${filter === f.id ? 'active' : ''}`}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="pj-grid" key={filter}>
        {list.map((p, i) => (
          <div key={p.title} className={`pj-w rv ${i % 2 ? 'r' : 'l'}`} style={{ '--i': i }}>
            <Fx as="article" tilt={5} className={`pj ${p.featured ? 'pj-featured' : ''}`}>
              <span className="pj-idx" aria-hidden="true">
                {String(projects.indexOf(p) + 1).padStart(2, '0')}
              </span>
              <div className="pj-top">
                <span className="pj-badge">
                  {p.featured && <i className="pj-dot" />}
                  {p.badge}
                </span>
              </div>
              <h3>{p.title}</h3>
              <p className="pj-sub">{p.subtitle}</p>
              <div className="pj-cats">
                {p.categories.map((c) => (
                  <span key={c} className={`pj-cat ${c}`}>
                    {catLabel[c]}
                  </span>
                ))}
              </div>
              <p className="pj-desc">{p.description}</p>
              <ul className="pj-list">
                {p.highlights.map((h, k) => (
                  <li key={k}>{h}</li>
                ))}
              </ul>
              <div className="sx-chips small">
                {p.tech.map((t, k) => (
                  <span key={t} className="sx-chip mono" style={{ '--c': k }}>
                    {t}
                  </span>
                ))}
              </div>
            </Fx>
          </div>
        ))}
        {list.length === 0 && <p className="pj-empty">Aucun projet principal dans cette catégorie.</p>}
      </div>

      {others.length > 0 && (
        <div className="pj-others">
          <button className="btn btn-ghost" onClick={() => setShowOthers((s) => !s)} aria-expanded={showOthers}>
            {showOthers ? 'Masquer' : 'Voir'} les autres projets Web & Mobile ({others.length})
            <span className={`pj-caret ${showOthers ? 'open' : ''}`}>▾</span>
          </button>

          {showOthers && (
            <div className="pj-ot-grid" key={`o-${filter}`}>
              {others.map((o, i) => (
                <div key={o.title} className="pj-ow" style={{ '--i': i }}>
                  <Fx tilt={0} className={`ot ${o.category}`}>
                    <h4>{o.title}</h4>
                    <p>{o.desc}</p>
                    <span className="ot-stack mono">{o.stack}</span>
                  </Fx>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <p className="pj-more rv" style={{ '--i': 3 }}>
        Plus de code sur{' '}
        <a href={profile.github} target="_blank" rel="noreferrer">
          mon GitHub
        </a>
        .
      </p>
    </Section>
  )
}
