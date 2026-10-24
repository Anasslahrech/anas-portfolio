// Vague animée posée en haut d'une section.
// prev = couleur de la section précédente : "bg" ou "alt"
export default function WaveTop({ prev = 'bg' }) {
  const d = 'M0 0 V60 C360 120, 1080 0, 1440 60 C1800 120, 2520 0, 2880 60 V0 Z'
  return (
    <div className={`wt wt-${prev}`} aria-hidden="true">
      {['a', 'b', 'c'].map((k) => (
        <svg key={k} className={`wt-l ${k}`} viewBox="0 0 2880 120" preserveAspectRatio="none">
          <path d={d} />
        </svg>
      ))}
    </div>
  )
}
