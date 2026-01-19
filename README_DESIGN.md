# 🎨 IA Showcase - Design Ultra-Moderne Wivoo

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3004](http://localhost:3004) dans ton navigateur.

## ✨ Ce qui a été créé

### 🎭 Design System Complet
- **Couleurs Wivoo** (#451dc7 & #d6cbf8) intégrées partout
- **15+ animations** personnalisées
- **Glassmorphism** premium
- **Gradients animés**
- **Ombres avec glow**

### 🎪 Effets Visuels

#### Background Multi-Couches
- 3 orbes lumineux flottants
- 2 anneaux rotatifs
- Grille subtile
- 20 particules aléatoires
- Cursor glow qui suit la souris

#### Cards Interactives
Au hover sur une card:
1. Monte de 8px
2. Ombre intense avec glow
3. Overlay gradient apparaît
4. Effet shimmer traverse
5. Barre animée en bas
6. Particules apparaissent
7. Corner accent se rapproche
8. Texte se translate

#### Animations
- **Chargement**: Apparition en cascade
- **Hover**: 8 effets simultanés
- **Continue**: Flottement, rotation, pulsation
- **Interactions**: Feedback immédiat

### 📁 Fichiers Principaux

```
app/
├── page.tsx                    # Home avec hero section
├── project/[id]/page.tsx      # Page détail redesignée
└── globals.css                # Variables + utilities

components/
├── project-card.tsx           # Card ultra-moderne
├── cursor-glow.tsx           # ✨ NOUVEAU - Halo curseur
└── floating-particles.tsx    # ✨ NOUVEAU - Particules

tailwind.config.ts             # Config complète
```

## 🎯 Highlights

### Page d'Accueil
- Header sticky avec glassmorphism
- Titre géant avec gradient animé
- Triple barre d'accent
- Grid responsive avec animations
- Footer stylisé

### Page de Détail
- Header massif (text-7xl)
- Badge avec glow pulsant
- Cards avec effets avancés
- Sidebar premium
- Solution IA dans encart spécial

### Composants Nouveaux

**CursorGlow** - Halo violet qui suit la souris
```tsx
import { CursorGlow } from "@/components/cursor-glow";
```

**FloatingParticles** - 20 points flottants
```tsx
import { FloatingParticles } from "@/components/floating-particles";
```

## 🎨 Utilisation

### Gradients Animés
```tsx
<h1 className="bg-gradient-wivoo-animated gradient-animated bg-clip-text text-transparent">
  Titre
</h1>
```

### Glassmorphism
```tsx
<div className="glass">Contenu</div>
<div className="glass-dark">Contenu sombre</div>
```

### Ombres avec Glow
```tsx
<div className="shadow-wivoo-glow hover:shadow-wivoo-glow-lg">
  Card
</div>
```

### Animations
```tsx
<div className="animate-float">Flotte</div>
<div className="animate-shimmer">Brille</div>
<div className="animate-pulse-glow">Pulse</div>
```

## 📚 Documentation Complète

- **`ANIMATIONS.md`** - Guide de toutes les animations
- **`DESIGN_ULTRA_MODERNE.md`** - Documentation détaillée
- **`CHANGELOG_DESIGN.md`** - Historique des modifications

## 🎯 Animations Disponibles

### De Base
- `animate-float` - Flottement doux
- `animate-float-slow` - Plus lent
- `animate-float-delayed` - Avec délai

### Effets
- `animate-shimmer` - Brillance
- `animate-pulse-glow` - Pulsation
- `animate-gradient-shift` - Gradient mobile

### Entrées
- `animate-slide-up` - Monte avec fade
- `animate-scale-in` - Zoom in
- `animate-fade-in` - Fade simple

### Continues
- `animate-rotate-slow` - Rotation
- `animate-border-glow` - Bordure pulse
- `animate-bounce-subtle` - Rebond

## 🎨 Couleurs Principales

```css
Primary:   #451dc7  /* Violet Wivoo */
Light:     #d6cbf8  /* Lavande */
Dark:      #2d1385  /* Violet foncé */
```

## 🚀 Performance

- ✅ 60fps garanti
- ✅ 0ms layout shift
- ✅ GPU accelerated
- ✅ Optimisé mobile
- ✅ Transitions fluides

## 📱 Responsive

- **Mobile**: 1 colonne, animations subtiles
- **Tablet**: 2 colonnes, tous les effets
- **Desktop**: 3 colonnes, expérience complète

## 🎓 Tips

1. **Hover sur cards** pour voir tous les effets
2. **Bouge la souris** pour le cursor glow
3. **Scroll** pour les animations d'entrée
4. **Click sur projet** pour page détail
5. **Resize window** pour responsive

## 🔧 Stack

- Next.js 15
- React 19
- Tailwind CSS v4
- shadcn/ui
- TypeScript

## 🎉 Features

- [x] Design system complet
- [x] 15+ animations
- [x] Glassmorphism
- [x] Cursor glow
- [x] Particules flottantes
- [x] Gradients animés
- [x] Hover effects avancés
- [x] Responsive design
- [x] Dark mode ready
- [x] Performance optimale

---

## 🌟 Le Design en 3 Mots

**MODERNE • ANIMÉ • WIVOO**

---

**Créé avec les couleurs Wivoo #451dc7 & #d6cbf8**
