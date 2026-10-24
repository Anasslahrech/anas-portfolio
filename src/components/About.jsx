import Section from './Section'
import { profile, qualities, languages } from '../data'

export default function About() {
  return (
    <Section id="apropos" eyebrow="01 — À propos" title="Qui suis-je ?">
      <div className="about-grid">
        <div className="about-text">
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <ul className="meta-list">
            <li>
              <span>📍</span> {profile.location}
            </li>
            <li>
              <span>🎓</span> ISMAGI — Cycle Ingénieur 2023–2026
            </li>
            <li>
              <span>✉️</span> <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
          </ul>
        </div>

        <div className="card about-side">
          <h3>Langues</h3>
          {languages.map((l) => (
            <div key={l.name} className="lang">
              <div className="lang-head">
                <strong>{l.name}</strong>
                <span>{l.level}</span>
              </div>
              <div className="bar" role="progressbar" aria-valuenow={l.percent} aria-valuemin="0" aria-valuemax="100">
                <div className="bar-fill" style={{ width: `${l.percent}%` }} />
              </div>
            </div>
          ))}

          <h3 style={{ marginTop: '1.5rem' }}>Qualités</h3>
          <div className="chips">
            {qualities.map((q) => (
              <span key={q} className="chip">
                {q}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
