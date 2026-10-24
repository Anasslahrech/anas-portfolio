import Section from './Section'
import { experience, education } from '../data'

function Timeline({ children }) {
  return <ol className="timeline">{children}</ol>
}

export default function Journey() {
  return (
    <Section id="parcours" eyebrow="04 — Parcours" title="Expérience & Formation" className="alt">
      <div className="journey-grid">
        <div>
          <h3 className="col-title">💼 Expérience</h3>
          <Timeline>
            {experience.map((e) => (
              <li key={e.role + e.company} className="tl-item">
                <span className="tl-dot" />
                <div className="card">
                  <span className="period">{e.period}</span>
                  <h4>{e.role}</h4>
                  <p className="org">
                    {e.company} · {e.place}
                  </p>
                  <ul className="highlights">
                    {e.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                  {e.tech.length > 0 && (
                    <div className="chips small">
                      {e.tech.map((t) => (
                        <span key={t} className="chip mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </Timeline>
        </div>

        <div>
          <h3 className="col-title">🎓 Formation</h3>
          <Timeline>
            {education.map((e) => (
              <li key={e.title} className="tl-item">
                <span className="tl-dot" />
                <div className="card">
                  <span className="period">{e.period}</span>
                  <h4>{e.title}</h4>
                  <p className="org">{e.school}</p>
                  {e.detail && <p className="detail">{e.detail}</p>}
                </div>
              </li>
            ))}
          </Timeline>
        </div>
      </div>
    </Section>
  )
}
