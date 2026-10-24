import { useEffect, useRef } from 'react'

// Réseau de neurones animé : les points se relient entre eux
// et sont attirés par la souris. Utilise les couleurs du thème.
export default function NeuralBg() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const host = canvas.parentElement
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let w = 0
    let h = 0
    let raf = 0
    let frame = 0
    let visible = true
    let pts = []
    let ca = '#38bdf8'
    let cb = '#a78bfa'
    const mouse = { x: -9999, y: -9999 }

    const readColors = () => {
      const s = getComputedStyle(document.documentElement)
      ca = s.getPropertyValue('--accent').trim() || ca
      cb = s.getPropertyValue('--accent-2').trim() || cb
    }

    const resize = () => {
      const r = host.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = r.width
      h = r.height
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const n = Math.max(28, Math.min(85, Math.round((w * h) / 16000)))
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.8,
        c: Math.random() < 0.5 ? 0 : 1,
      }))
      readColors()
      if (reduce) draw()
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      if (frame++ % 30 === 0) readColors()
      const LINK = 130
      const MOUSE = 170

      if (!reduce) {
        for (const p of pts) {
          p.x += p.vx
          p.y += p.vy
          if (p.x < 0 || p.x > w) p.vx *= -1
          if (p.y < 0 || p.y > h) p.vy *= -1
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          const d = Math.hypot(dx, dy)
          if (d < MOUSE && d > 0.1) {
            p.x += (dx / d) * 0.6
            p.y += (dy / d) * 0.6
          }
        }
      }

      ctx.lineWidth = 1
      ctx.strokeStyle = ca
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y)
          if (d < LINK) {
            ctx.globalAlpha = (1 - d / LINK) * 0.35
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.stroke()
          }
        }
      }

      ctx.strokeStyle = cb
      for (const p of pts) {
        const d = Math.hypot(mouse.x - p.x, mouse.y - p.y)
        if (d < MOUSE) {
          ctx.globalAlpha = (1 - d / MOUSE) * 0.65
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        }
      }

      ctx.globalAlpha = 0.9
      for (const p of pts) {
        ctx.fillStyle = p.c ? cb : ca
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
    }

    const loop = () => {
      if (visible) draw()
      raf = requestAnimationFrame(loop)
    }

    const onMove = (e) => {
      const r = host.getBoundingClientRect()
      mouse.x = e.clientX - r.left
      mouse.y = e.clientY - r.top
    }
    const onLeave = () => {
      mouse.x = mouse.y = -9999
    }

    resize()
    if (!reduce) raf = requestAnimationFrame(loop)

    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting))
    io.observe(host)
    window.addEventListener('resize', resize)
    host.addEventListener('mousemove', onMove)
    host.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener('resize', resize)
      host.removeEventListener('mousemove', onMove)
      host.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return <canvas ref={ref} className="hx-canvas" aria-hidden="true" />
}
