import { useReveal } from '../hooks'

export default function Section({ id, eyebrow, title, children, className = '' }) {
  const [ref, visible] = useReveal()
  return (
    <section id={id} className={`section ${className}`}>
      <div ref={ref} className={`container reveal ${visible ? 'is-visible' : ''}`}>
        <header className="section-head">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
        </header>
        {children}
      </div>
    </section>
  )
}
