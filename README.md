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
  /data-source.ts        # Source de données (Notion)
  /sources/
    /notion-source.ts    # Implémentation Notion
  /parsers/
    /notion-parser.ts    # Parser Notion vers Project
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

### Source de données : Notion

Le projet utilise **Notion** comme source de données unique.

### Configuration

1. Créer un fichier `.env.local` :

```env
NOTION_TOKEN=secret_xxxxxxxxxxxxxxxxxxxxx
NOTION_DATABASE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

2. Redémarrer le serveur

Voir [ENV_SETUP.md](./ENV_SETUP.md) pour le guide complet de configuration Notion.

**Note** : Seuls les projets avec le champ `published = "Production"` dans Notion seront affichés.
