import Section from './Section'
import { skills } from '../data'

export default function Skills() {
  return (
    <Section id="competences" eyebrow="02 — Compétences" title="Ma boîte à outils" className="alt">
      <div className="skills-grid">
        {skills.map((group) => (
          <article key={group.title} className="card skill-card">
            <h3>
              <span className="skill-icon" aria-hidden="true">
                {group.icon}
              </span>
              {group.title}
            </h3>
            <div className="chips">
              {group.items.map((it) => (
                <span key={it} className="chip">
                  {it}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
