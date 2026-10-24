import { useEffect, useRef, useState } from 'react'

// Halo lumineux qui suit la souris sur tout le site (écrans avec souris uniquement)
export function CursorGlow() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || !window.matchMedia('(hover: hover)').matches) return
    let raf = 0
    let x = -999
    let y = -999
    const move = (e) => {
      x = e.clientX
      y = e.clientY
      if (!raf) {
        raf = requestAnimationFrame(() => {
          el.style.setProperty('--cx', `${x}px`)
          el.style.setProperty('--cy', `${y}px`)
          raf = 0
        })
      }
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [])
  return <div ref={ref} className="cg" aria-hidden="true" />
}

// Bouton « retour en haut »
export function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const on = () => setShow(window.scrollY > 700)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <a href="#accueil" className={`btt ${show ? 'show' : ''}`} aria-label="Retour en haut de page">
      ↑
    </a>
  )
}
