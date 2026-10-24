import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>
          © {new Date().getFullYear()} {profile.name}. Tous droits réservés.
        </span>
        <a href="#accueil">↑ Haut de page</a>
      </div>
    </footer>
  )
}
