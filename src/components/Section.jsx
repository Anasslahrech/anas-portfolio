import { useReveal } from '../hooks'
import Split from './Split'
import WaveTop from './WaveTop'

export default function Section({ id, num, eyebrow, title, prev, alt = false, className = '', children }) {
  const [ref, visible] = useReveal()
  return (
    <section id={id} className={`sx ${alt ? 'alt' : ''} ${className}`}>
      {prev && <WaveTop prev={prev} />}
      <div ref={ref} className={`container sx-in ${visible ? 'is-visible' : ''}`}>
        <header className="sx-head">
          <span className="sx-num" aria-hidden="true">
            {num}
          </span>
          <span className="sx-eyebrow">{eyebrow}</span>
          <h2 aria-label={title}>
            <Split text={title} />
          </h2>
          <span className="sx-bar" />
        </header>
        {children}
      </div>
    </section>
  )
}
