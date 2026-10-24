import { useRef } from 'react'

// Carte interactive : lumière qui suit la souris + légère inclinaison 3D.
// Utilisation : <Fx as="article" className="ma-classe">...</Fx>
export default function Fx({ as: Tag = 'div', tilt = 6, className = '', children, ...rest }) {
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    el.style.setProperty('--mx', `${x}px`)
    el.style.setProperty('--my', `${y}px`)
    if (tilt) {
      el.style.setProperty('--ry', `${(x / r.width - 0.5) * tilt}deg`)
      el.style.setProperty('--rx', `${-(y / r.height - 0.5) * tilt}deg`)
    }
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }

  return (
    <Tag ref={ref} className={`fx ${className}`} onMouseMove={onMove} onMouseLeave={onLeave} {...rest}>
      {children}
    </Tag>
  )
}
