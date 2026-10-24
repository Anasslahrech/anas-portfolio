import { useEffect, useRef, useState } from 'react'
import { profile, stats } from '../data'
import { useTyping } from '../hooks'
import NeuralBg from './NeuralBg'
import Marquee from './Marquee'
import './hero.css'

const orbit = ['Python', 'React', 'FastAPI', 'TensorFlow', 'Laravel', 'spaCy']

const termLines = [
  { t: '$ python predict.py', c: 'cmd' },
  { t: '> RandomForest + SHAP', c: '' },
  { t: '> score = 0.87', c: 'ok' },
  { t: '✓ succès probable', c: 'ok' },
]

// Titre : chaque lettre monte de son masque, l'une après l'autre
function Letters({ text, start = 0, className = '' }) {
  return (
    <span className={`hx-line ${className}`} aria-hidden="true">
      {[...text].map((c, i) => (
        <span key={i} className="hx-ch" style={{ '--i': start + i }}>
          {c}
        </span>
      ))}
    </span>
  )
}

// Compteur animé pour les chiffres clés (ex : "11+")
function Count({ value }) {
  const m = String(value).match(/^(\d+)(.*)$/)
  const target = m ? parseInt(m[1], 10) : 0
  const suffix = m ? m[2] : ''
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!m) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(target)
      return
    }
    let raf
    let t0
    const step = (t) => {
      if (t0 === undefined) t0 = t
      const p = Math.min((t - t0) / 1400, 1)
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    const id = setTimeout(() => {
      raf = requestAnimationFrame(step)
    }, 900)
    return () => {
      clearTimeout(id)
      cancelAnimationFrame(raf)
    }
  }, [target]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {m ? n : value}
      {suffix}
    </>
  )
}

function Stage() {
  const ref = useRef(null)
  const [failed, setFailed] = useState(false)

  // Inclinaison 3D de la photo selon la souris
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    ref.current.style.setProperty('--ry', `${x * 16}deg`)
    ref.current.style.setProperty('--rx', `${-y * 16}deg`)
  }
  const onLeave = () => {
    ref.current.style.setProperty('--ry', '0deg')
    ref.current.style.setProperty('--rx', '0deg')
  }

  return (
    <div className="hx-stage hx-pop" ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}>
      <svg className="hx-ring" viewBox="0 0 200 200" aria-hidden="true">
        <defs>
          <path id="hx-circ" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" />
        </defs>
        <text>
          <textPath href="#hx-circ" textLength="497" lengthAdjust="spacing">
            INGÉNIEUR IA • DATA SCIENCE • FULL-STACK • MACHINE LEARNING •
          </textPath>
        </text>
      </svg>

      <div className="hx-orbit" aria-hidden="true">
        {orbit.map((label, i) => (
          <div key={label} className="hx-orbit-item" style={{ '--a': `${i * (360 / orbit.length)}deg` }}>
            <span className="hx-chip">{label}</span>
          </div>
        ))}
      </div>

      <div className="hx-photo">
        <div className="hx-blob-back" />
        <div className="hx-blob">
          {failed ? (
            <div className="hx-fallback">AL</div>
          ) : (
            <img src={profile.photo} alt={`Portrait de ${profile.name}`} onError={() => setFailed(true)} />
          )}
        </div>
      </div>

      <div className="hx-term" aria-hidden="true">
        <div className="hx-term-bar">
          <i /> <i /> <i />
          <span>predict.py</span>
        </div>
        <div className="hx-term-body">
          {termLines.map((l, i) => (
            <div key={i} className={`hx-tl ${l.c}`} style={{ '--n': l.t.length + 1, '--k': i }}>
              {l.t}
            </div>
          ))}
          <span className="hx-cursor" />
        </div>
      </div>
    </div>
  )
}

function Waves() {
  const d = 'M0 60 C360 0, 1080 120, 1440 60 C1800 0, 2520 120, 2880 60 V120 H0 Z'
  return (
    <div className="hx-waves" aria-hidden="true">
      {['a', 'b', 'c'].map((k) => (
        <svg key={k} className={`hx-wave ${k}`} viewBox="0 0 2880 120" preserveAspectRatio="none">
          <path d={d} />
        </svg>
      ))}
    </div>
  )
}

export default function Hero() {
  const typed = useTyping(profile.roles)
  const root = useRef(null)
  const [first, ...rest] = profile.name.split(' ')
  const last = rest.join(' ')

  // Lumière qui suit la souris
  const onMove = (e) => {
    const r = root.current.getBoundingClientRect()
    root.current.style.setProperty('--mx', `${e.clientX - r.left}px`)
    root.current.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <section id="accueil" className="hx" ref={root} onMouseMove={onMove}>
      <NeuralBg />
      <div className="hx-grid" aria-hidden="true" />
      <div className="hx-spot" aria-hidden="true" />

      <div className="container hx-inner">
        <div className="hx-text">
          <span className="hx-badge hx-in" style={{ '--d': '0.1s' }}>
            <span className="dot" /> {profile.available}
          </span>

          <p className="hx-hello hx-in" style={{ '--d': '0.2s' }}>
            &lt;Bonjour, je suis /&gt;
          </p>

          <h1 className="hx-title" aria-label={profile.name}>
            <Letters text={first} start={0} />
            <Letters text={last} start={first.length} className="outline" />
          </h1>

          <p className="typing hx-in" style={{ '--d': '1s' }} aria-live="polite">
            {typed}
            <span className="caret">|</span>
          </p>
          <p className="lead hx-in" style={{ '--d': '1.1s' }}>
            {profile.intro}
          </p>

          <div className="cta-row hx-in" style={{ '--d': '1.2s' }}>
            <a href="#projets" className="btn btn-primary hx-shine">
              Voir mes projets
            </a>
            <a href={profile.cv} download className="btn btn-ghost">
              Télécharger mon CV
            </a>
            <a href="#contact" className="btn btn-link">
              Me contacter →
            </a>
          </div>

          <div className="socials hx-in" style={{ '--d': '1.3s' }}>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`mailto:${profile.email}`}>E-mail</a>
          </div>
        </div>

        <Stage />
      </div>

      <div className="container hx-stats">
        {stats.map((s, i) => (
          <div key={s.label} className="hx-stat hx-up" style={{ '--d': `${0.9 + i * 0.12}s` }}>
            <strong>
              <Count value={s.value} />
            </strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>

      <Marquee />
      <Waves />
    </section>
  )
}
