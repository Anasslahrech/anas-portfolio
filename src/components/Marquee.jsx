const row1 = [
  'Python', 'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision',
  'TensorFlow', 'Scikit-learn', 'spaCy', 'SHAP', 'Pandas',
]
const row2 = [
  'FastAPI', 'React', 'Laravel', 'React Native', 'Django',
  'Node.js', 'MySQL', 'MongoDB', 'Docker', 'Git',
]

function Row({ items, reverse }) {
  const list = [...items, ...items] // doublé pour une boucle sans coupure
  return (
    <div className={`hx-row ${reverse ? 'rev' : ''}`}>
      <div className="hx-track">
        {list.map((t, i) => (
          <span key={i} className="hx-tag">
            <i>✦</i>
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="hx-marquee" aria-hidden="true">
      <Row items={row1} />
      <Row items={row2} reverse />
    </div>
  )
}
