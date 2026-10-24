import Section from './Section'
import Fx from './Fx'
import { skills } from '../data'

// Taille de chaque carte dans la grille « bento » (total de 6 colonnes par ligne)
const spans = [4, 2, 3, 3, 2, 2, 2, 3, 3]

export default function Skills() {
  return (
    <Section id="competences" num="02" eyebrow="Compétences" title="Ma boîte à outils" prev="alt">
      <div className="sk-grid">
        {skills.map((group, gi) => (
          <div key={group.title} className="sk-w rv" style={{ '--span': spans[gi] ?? 3, '--i': gi }}>
            <Fx className={`sk-card ${gi === 0 ? 'sk-feature' : ''}`}>
              <div className="sk-head">
                <span className="sk-ico" aria-hidden="true">
                  {group.icon}
                </span>
                <h3>{group.title}</h3>
                <span className="sk-count">{String(group.items.length).padStart(2, '0')}</span>
              </div>
              <div className="sx-chips">
                {group.items.map((it, i) => (
                  <span key={it} className="sx-chip" style={{ '--c': i + gi * 2 }}>
                    {it}
                  </span>
                ))}
              </div>
            </Fx>
          </div>
        ))}
      </div>
    </Section>
  )
}
