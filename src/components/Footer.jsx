import WaveTop from './WaveTop'
import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="ft">
      <WaveTop prev="alt" />
      <div className="container ft-in">
        <div className="ft-big">
          Anass<span>.</span>Lahrech
        </div>
        <p className="ft-sub">Ingénieur IA &amp; Data Science · Développeur Full-Stack</p>
        <div className="ft-links">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${profile.email}`}>E-mail</a>
          <a href={profile.cv} download>CV</a>
        </div>
        <div className="ft-copy">
          © {new Date().getFullYear()} {profile.name}. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}
