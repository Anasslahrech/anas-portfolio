import { useState } from 'react'
import Section from './Section'
import { profile } from '../data'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // Pas de backend : le formulaire ouvre le client mail de l'utilisateur.
  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Contact portfolio — ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <Section id="contact" eyebrow="05 — Contact" title="Travaillons ensemble">
      <div className="contact-grid">
        <div className="contact-info">
          <p>
            Je recherche un poste de développeur / data scientist  / stage pfe. Une opportunité, une question, un projet ?
            Écrivez-moi, je réponds rapidement.
          </p>
          <ul className="contact-list">
            <li>
              <span>✉️</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <span>📞</span>
              <a href={`tel:${profile.phoneHref}`}>{profile.phone}</a>
            </li>
            <li>
              <span>📍</span> {profile.location}
            </li>
            <li>
              <span>💼</span>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <span>💻</span>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <form className="card form" onSubmit={submit}>
          <label>
            Nom
            <input name="name" value={form.name} onChange={update} required autoComplete="name" />
          </label>
          <label>
            E-mail
            <input type="email" name="email" value={form.email} onChange={update} required autoComplete="email" />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" value={form.message} onChange={update} required />
          </label>
          <button className="btn btn-primary" type="submit">
            Envoyer le message
          </button>
        </form>
      </div>
    </Section>
  )
}
