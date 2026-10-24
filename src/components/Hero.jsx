import { useState } from 'react'
import { profile, stats } from '../data'
import { useTyping } from '../hooks'

function Avatar() {
  const [failed, setFailed] = useState(false)
  return (
    <div className="avatar-wrap">
      <div className="avatar-glow" />
      {failed ? (
        <div className="avatar avatar-fallback" aria-label={profile.name}>
          AL
        </div>
      ) : (
        <img
          className="avatar"
          src={profile.photo}
          alt={`Portrait de ${profile.name}`}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}

export default function Hero() {
  const typed = useTyping(profile.roles)

  return (
    <section id="accueil" className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <span className="badge">
            <span className="dot" /> {profile.available}
          </span>
          <h1>
            Bonjour, je suis <span className="gradient-text">{profile.name}</span>
          </h1>
          <p className="typing" aria-live="polite">
            {typed}
            <span className="caret">|</span>
          </p>
          <p className="lead">{profile.intro}</p>

          <div className="cta-row">
            <a href="#projets" className="btn btn-primary">
              Voir mes projets
            </a>
            <a href={profile.cv} download className="btn btn-ghost">
              Télécharger mon CV
            </a>
            <a href="#contact" className="btn btn-link">
              Me contacter →
            </a>
          </div>

          <div className="socials">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`}>E-mail</a>
          </div>
        </div>

        <Avatar />
      </div>

      <div className="container stats">
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
