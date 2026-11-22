import { createContext, useContext, useEffect, useState } from 'react'
import { fr, en } from './data'

const dict = { fr, en }
const LangContext = createContext({ lang: 'fr', toggleLang: () => {}, d: fr })

function initialLang() {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'fr' || saved === 'en') return saved
  } catch {}
  return navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : 'en'
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initialLang)
  const d = dict[lang]

  useEffect(() => {
    document.documentElement.lang = d.ui.htmlLang
    document.title = d.ui.pageTitle
    try {
      localStorage.setItem('lang', lang)
    } catch {}
  }, [lang, d])

  const toggleLang = () => setLang((l) => (l === 'fr' ? 'en' : 'fr'))

  return <LangContext.Provider value={{ lang, toggleLang, d }}>{children}</LangContext.Provider>
}

// { lang, toggleLang, d }  →  d.ui = textes de l'interface, d.profile / d.skills / ... = contenu
export const useLang = () => useContext(LangContext)