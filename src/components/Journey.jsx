import { useEffect, useRef } from 'react'
import Section from './Section'
import Fx from './Fx'
import { useReveal } from '../hooks'
import { experience, education } from '../data'

// Frise dont le trait lumineux se dessine au fil du défilement
function Timeline({ children }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const on = () => {
      const r = el.getBoundingClientRect()
      const p = Math.min(1, Math.max(0, (window.innerHeight * 0.7 - r.top) / r.height))
      el.style.setProperty('--tp', p.toFixed(3))
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
    <ol ref={ref} className="tl">
      {children}
    </ol>
  )
}

function TlItem({ children }) {
  const [ref, on] = useReveal()
  return (
    <li ref={ref} className={`tl-i ${on ? 'on' : ''}`}>
      <span className="tl-dot" />
      <div className="tl-in">
        <Fx className="tl-card" tilt={3}>
          {children}
        </Fx>
      </div>
    </li>
  )
}

export default function Journey() {
  return (
    <Section id="parcours" num="04" eyebrow="Parcours" title="Expérience & Formation" alt prev="bg">
      <div className="jn-grid">
        <div className="rv l" style={{ '--i': 0 }}>
          <h3 className="jn-title">
            <span>💼</span> Expérience
          </h3>
          <Timeline>
            {experience.map((e) => (
              <TlItem key={e.role + e.company}>
                <span className="period">{e.period}</span>
                <h4>{e.role}</h4>
                <p className="org">
                  {e.company} · {e.place}
                </p>
                <ul className="pj-list">
                  {e.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
                {e.tech.length > 0 && (
                  <div className="sx-chips small">
                    {e.tech.map((t) => (
                      <span key={t} className="sx-chip mono">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </TlItem>
            ))}
          </Timeline>
        </div>

        <div className="rv r" style={{ '--i': 1 }}>
          <h3 className="jn-title">
            <span>🎓</span> Formation
          </h3>
          <Timeline>
            {education.map((e) => (
              <TlItem key={e.title}>
                <span className="period">{e.period}</span>
                <h4>{e.title}</h4>
                <p className="org">{e.school}</p>
                {e.detail && <p className="tl-detail">{e.detail}</p>}
              </TlItem>
            ))}
          </Timeline>
        </div>
      </div>
    </Section>
  )
}
