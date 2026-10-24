// Découpe un texte en mots puis en lettres : chaque lettre monte de son masque.
// L'animation se déclenche quand le conteneur parent reçoit .is-visible
export default function Split({ text, start = 0 }) {
  let i = start
  return (
    <>
      {text.split(' ').map((word, wi) => (
        <span key={wi}>
          <span className="sx-w" aria-hidden="true">
            {[...word].map((c, ci) => (
              <span key={ci} className="sx-c" style={{ '--i': i++ }}>
                {c}
              </span>
            ))}
          </span>{' '}
        </span>
      ))}
    </>
  )
}
