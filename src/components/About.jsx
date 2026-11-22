import Section from './Section'
import Fx from './Fx'
import { useLang } from '../i18n'

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
  const { profile, qualities, languages, ui } = useLang().d
  return (
    <Section id="apropos" num="01" eyebrow={ui.about.eyebrow} title={ui.about.title} alt>
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
              <span>🎓</span> {ui.about.school}
            </li>
            <li className="rv l" style={{ '--i': 5 }}>
              <span>✉️</span> <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
          </ul>
        </div>

        <div className="ab-side">
          <div className="rv r" style={{ '--i': 1 }}>
            <Fx className="ab-card">
              <h3>{ui.about.languages}</h3>
              <div className="rings">
                {languages.map((l) => (
                  <Ring key={l.name} {...l} />
                ))}
              </div>
            </Fx>
          </div>

          <div className="rv r" style={{ '--i': 2 }}>
            <Fx className="ab-card">
              <h3>{ui.about.qualities}</h3>
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