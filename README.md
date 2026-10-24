# Portfolio — Anass Lahrech

Portfolio React (Vite) construit à partir du CV : accueil, à propos, compétences, projets filtrables, parcours, contact. Thème clair/sombre, responsive, sans dépendance UI externe.

## Lancer dans VS Code (PowerShell)

```powershell
cd portfolio
npm install
npm run dev
```

Ouvrez ensuite http://localhost:5173.

## À faire avant de publier

- Placez votre photo dans `public/photo.jpg` (sinon les initiales « AL » s'affichent).
- Placez votre CV dans `public/cv.pdf` (bouton « Télécharger mon CV »).
- Ajoutez les liens GitHub de chaque projet dans `src/data.js` si vous voulez des boutons « Code » / « Démo ».

## Modifier le contenu

Tout le texte du site est dans `src/data.js` (profil, compétences, projets, parcours, langues). Les composants sont dans `src/components/`, le style dans `src/index.css` (variables de couleur en haut du fichier).

## Build et déploiement

```powershell
npm run build
```

Le dossier `dist/` peut être déployé tel quel sur Vercel, Netlify ou GitHub Pages.

Le formulaire de contact ouvre le client mail du visiteur (`mailto:`), sans serveur. Pour un vrai envoi, branchez un service comme Formspree ou EmailJS dans `src/components/Contact.jsx`.
