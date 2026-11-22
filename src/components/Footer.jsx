import WaveTop from './WaveTop'
import { useLang } from '../i18n'

export default function Footer() {
  const { profile, ui } = useLang().d
  return (
    <footer className="ft">
      <WaveTop prev="alt" />
      <div className="container ft-in">
        <div className="ft-big">
          Anass<span>.</span>Lahrech
        </div>
        <p className="ft-sub">{ui.footer.sub}</p>
        <div className="ft-links">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${profile.email}`}>{ui.hero.email}</a>
          <a href={profile.cv} download>{ui.footer.cv}</a>
        </div>
        <div className="ft-copy">
          © {new Date().getFullYear()} {profile.name}. {ui.footer.rights}
        </div>
      </div>
    </footer>
  )
}