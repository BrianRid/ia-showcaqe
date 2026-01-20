# IA Showcase - Wivoo

Vitrine des missions et retours d'expérience Data & IA réalisés par Wivoo, utilisant **shadcn/ui**.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn/ui

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
npm start
```

## Structure

```
/app
  /page.tsx              # Page d'accueil avec liste des missions
  /project/[id]/page.tsx # Page de détail d'une mission
  /layout.tsx            # Layout principal
  /globals.css           # Styles globaux

/components
  /project-card.tsx      # Card de mission (shadcn)
  /project-list.tsx      # Liste des missions
  /ui/                   # Composants shadcn/ui
    /card.tsx
    /badge.tsx
    /button.tsx
    /separator.tsx

/lib
  /data-source.ts        # Source de données (CSV)
  /utils.ts              # Utilitaires

/types
  /project.ts            # Types TypeScript
```

## Design

Design minimaliste et élégant basé sur shadcn/ui avec:

- Cards propres et lisibles
- Badges pour les statuts
- Layout responsive
- Typographie claire
- Espacement cohérent

## Composants shadcn/ui

Les composants suivants sont installés:

- Card
- Badge
- Button
- Separator

Pour ajouter d'autres composants:

```bash
npx shadcn@latest add [component-name]
```

## Data

### Sources de données

Le projet supporte deux sources de données :

1. **CSV** (par défaut) : fichier local `🧠 IA Showcase – Réalisations IA 2ed331cabede80878a93dc2b059d6a01.csv`
2. **Notion API** : récupération dynamique depuis une database Notion

### Configuration Notion

Pour utiliser Notion comme source de données :

1. Créer un fichier `.env.local` :

```env
USE_NOTION=true
NOTION_TOKEN=secret_xxxxxxxxxxxxxxxxxxxxx
NOTION_DATABASE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

2. Redémarrer le serveur

Voir [ENV_SETUP.md](./ENV_SETUP.md) pour le guide complet de configuration Notion.
