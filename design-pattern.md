# DrSan — Architecture de la landing page (refonte)

```
drsan-home-page/
├── public/
│   └── images/                      # Assets officiels
│       ├── logo-drsan.png           # Logo (Header + Footer)
│       ├── google-play.png          # Badge Google Play
│       └── app-store.png            # Badge App Store (cadré en CSS)
├── src/
│   ├── app/                           # Next.js App Router
│   │   ├── layout.tsx                 # Polices Geist, métadonnées, lang=fr
│   │   ├── page.tsx                   # Composition de la page
│   │   └── globals.css                # Tailwind v4 + tokens charte (brand-*/accent)
│   └── components/
│       └── landing/                   # Composants modulaires de la landing
│           ├── Header.jsx             # Nav institutionnelle + toggles thème/langue (FR/EN/AR)
│           ├── Hero.jsx               # Promesse de valeur + KPI prévisionnels 2026
│           ├── PatientMobile.jsx      # Mockup smartphone CSS (dossier médical interactif)
│           ├── HealthCardSection.jsx  # Carte de santé (QR, drapeau, OTP / HDS-RGPD)
│           ├── CardJourneySection.jsx # Parcours carte en 3 étapes (timeline)
│           ├── HospitalDashboardPreview.jsx  # Console web : lits, files, pharmacie
│           ├── AppDownloadSection.jsx # Badges stores + QR codes (scan desktop → mobile)
│           ├── EmergencySection.jsx   # File d'attente temps réel & lits d'urgence (client)
│           ├── QrCodePattern.jsx      # QR décoratif partagé (Tailwind pur)
│           └── Footer.jsx             # Pied 4 colonnes (logo, coordonnées, plateforme, légal)
├── archive/
│   └── legacy-landing/                # Ancienne landing archivée (non référencée)
└── package.json
```

## Système visuel — charte DrSan (strict)

- **Primaire / dominant** : Bleu Royal `#002AFF` → tokens `brand-50 … brand-950`
  (`brand-600 = #002AFF`, `brand-700` hover foncé, `brand-400` sur fonds sombres).
- **Secondaire / accent** : Rouge vibrant `#E71818` → tokens `accent*`
  (dots live, filet haut du footer, paliers d'attente critiques).
- **Fonds** : blancs nets ou gris très doux `#F8FAFC` (slate-50) / `slate-900-950` en mode sombre.
  **Aucun vert** dans l'interface (ni teal, ni emerald).
- **Rayons** : `rounded-md` (6px) et `rounded-lg` (8px) maximum sur toutes les cartes ;
  exception : châssis du mockup smartphone (`rounded-[30px]`, chrome matériel).
- **Surfaces** : bordures 1px `border-slate-200` ou `shadow-sm` — pas d'ombres volumineuses.
- **Transitions** : natives uniquement, `transition-all duration-200 ease-in-out`
  (aucune librairie d'animation ; `animate-ping` natif Tailwind réservé au point live).
- **Icônes** : `lucide-react` uniquement ; pas de librairie UI tierce.

## Principes de contenu

- Densité informationnelle type SaaS de santé : données médicales réalistes (**100 % FR**).
- Voix active, titres percutants, sections numérotées (01 → 06).
- Navbar sans CTA : deux toggles iconiques (thème clair/sombre, langue FR/EN/AR) uniquement.
- Prévisions 2026 du déploiement Djibouti : 60+ établissements, 500 000+ citoyens,
  1,5 M+ e-prescriptions/an, SLA objectif 99.99 %.
- Footer strictement en 4 colonnes ; bandeau « Projet national de digitalisation de la
  santé · Djibouti 2026 » ; © DrSan & Cybersan Group.

## Commandes

```bash
npm run dev      # développement
npm run build    # build de production
npm run lint     # ESLint
```
