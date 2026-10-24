import { useState } from 'react'
import Section from './Section'
import Fx from './Fx'
import { profile } from '../data'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // Pas de backend : le formulaire ouvre le client mail du visiteur.
  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Contact portfolio — ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  const links = [
    { ico: '✉️', label: 'E-mail', value: profile.email, href: `mailto:${profile.email}` },
    { ico: '📞', label: 'Téléphone', value: profile.phone, href: `tel:${profile.phoneHref}` },
    { ico: '💼', label: 'LinkedIn', value: 'anass-lahrech', href: profile.linkedin, ext: true },
    { ico: '💻', label: 'GitHub', value: 'Anasslahrech', href: profile.github, ext: true },
  ]

  return (
    <Section id="contact" num="05" eyebrow="Contact" title="Travaillons ensemble" alt prev="bg">
      <div className="ct-grid">
        <div>
          <p className="ct-lead rv l" style={{ '--i': 0 }}>
            Je recherche un poste de développeur / data scientist. Une opportunité, une question, un projet ?
            Écrivez-moi, je réponds rapidement.
          </p>
          <div className="ct-links">
            {links.map((l, i) => (
              <div key={l.label} className="rv l" style={{ '--i': i + 1 }}>
                <Fx
                  as="a"
                  tilt={0}
                  className="ct-link"
                  href={l.href}
                  {...(l.ext ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  <span className="ct-ico">{l.ico}</span>
                  <span className="ct-t">
                    <small>{l.label}</small>
                    {l.value}
                  </span>
                  <span className="ct-arrow">→</span>
                </Fx>
              </div>
            ))}
          </div>
        </div>

        <div className="rv r" style={{ '--i': 1 }}>
          <Fx as="form" tilt={0} className="ct-form" onSubmit={submit}>
            <h3>Envoyez-moi un message</h3>
            <div className="fl">
              <input name="name" value={form.name} onChange={update} placeholder=" " required autoComplete="name" />
              <label>Nom</label>
            </div>
            <div className="fl">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={update}
                placeholder=" "
                required
                autoComplete="email"
              />
              <label>E-mail</label>
            </div>
            <div className="fl">
              <textarea name="message" rows="5" value={form.message} onChange={update} placeholder=" " required />
              <label>Message</label>
            </div>
            <button className="btn btn-primary hx-shine" type="submit">
              Envoyer le message <span className="ct-send">➜</span>
            </button>
          </Fx>
        </div>
      </div>
    </Section>
  )
}
