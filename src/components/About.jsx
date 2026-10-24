import Section from './Section'
import Fx from './Fx'
import { profile, qualities, languages } from '../data'

function Ring({ code, name, level, percent }) {
  return (
    <div className="ring">
      <div className="ring-svg">
        <svg viewBox="0 0 80 80" aria-hidden="true">
          <defs>
            <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" style={{ stopColor: 'var(--accent)' }} />
              <stop offset="100%" style={{ stopColor: 'var(--accent-2)' }} />
            </linearGradient>
          </defs>
          <circle className="ring-bg" cx="40" cy="40" r="34" pathLength="100" />
          <circle className="ring-fg" cx="40" cy="40" r="34" pathLength="100" style={{ '--p': percent }} />
        </svg>
        <strong>{code}</strong>
      </div>
      <span className="ring-name">{name}</span>
      <span className="ring-level">{level}</span>
    </div>
  )
}

export default function About() {
  return (
    <Section id="apropos" num="01" eyebrow="À propos" title="Qui suis-je ?" alt>
      <div className="ab-grid">
        <div className="ab-text">
          <p className="ab-lead rv l" style={{ '--i': 0 }}>
            {profile.about[0]}
          </p>
          <p className="rv l" style={{ '--i': 1 }}>
            {profile.about[1]}
          </p>
          <p className="rv l" style={{ '--i': 2 }}>
            {profile.about[2]}
          </p>

          <ul className="ab-meta">
            <li className="rv l" style={{ '--i': 3 }}>
              <span>📍</span> {profile.location}
            </li>
            <li className="rv l" style={{ '--i': 4 }}>
              <span>🎓</span> ISMAGI · Cycle Ingénieur 2023-2026
            </li>
            <li className="rv l" style={{ '--i': 5 }}>
              <span>✉️</span> <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
          </ul>
        </div>

        <div className="ab-side">
          <div className="rv r" style={{ '--i': 1 }}>
            <Fx className="ab-card">
              <h3>Langues</h3>
              <div className="rings">
                {languages.map((l) => (
                  <Ring key={l.name} {...l} />
                ))}
              </div>
            </Fx>
          </div>

          <div className="rv r" style={{ '--i': 2 }}>
            <Fx className="ab-card">
              <h3>Qualités</h3>
              <div className="sx-chips">
                {qualities.map((q, i) => (
                  <span key={q} className="sx-chip" style={{ '--c': i }}>
                    {q}
                  </span>
                ))}
              </div>
            </Fx>
          </div>
        </div>
      </div>
    </Section>
  )
}
