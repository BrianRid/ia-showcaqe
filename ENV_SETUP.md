# Configuration Notion

## Mise en place rapide

1. **Créer le fichier `.env.local`** à la racine du projet :

```env
# Token d'intégration Notion (commence par secret_ ou ntn_)
NOTION_TOKEN=secret_xxxxxxxxxxxxxxxxxxxxx

# ID de la database
NOTION_DATABASE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

2. **Redémarrer le serveur** :

```bash
npm run dev
```

## Comment obtenir vos credentials Notion

### 1. Créer une intégration Notion

- Allez sur https://www.notion.so/my-integrations
- Cliquez sur "+ New integration"
- Nom : "IA Showcase" (ou autre)
- Type : **Internal Integration**
- Associated workspace : Choisissez le workspace où se trouve votre database
- Capabilities : "Read content" (minimum)
- Copiez le **Internal Integration Secret** → c'est votre `NOTION_TOKEN`
  - Commence par `secret_` ou `ntn_`

### 2. Partager votre database avec l'intégration

- Ouvrez votre database Notion
- Cliquez sur `•••` en haut à droite
- "Connections" → "Connect to"
- Cherchez et sélectionnez votre intégration

### 3. Trouver l'ID de la database

L'URL de votre database ressemble à:
```
https://notion.so/workspace/DATABASE_ID?v=VIEW_ID
```

L'ID est la partie `DATABASE_ID` (32 caractères hexadécimaux).

**Exemple** :
```
https://notion.so/myworkspace/abc123def456?v=xyz789
                              ^^^^^^^^^^^
                             C'est l'ID !
```

### 4. Configurer et lancer

```bash
# 1. Créer .env.local avec vos valeurs
# 2. Redémarrer le serveur
npm run dev
```

## Structure de la database Notion

Votre database Notion doit avoir les propriétés suivantes (noms exacts) :

- **Titre** (Title)
- **published** (Select) - avec option "Production" pour publier un projet
- **Cadre du projet** (Text)
- **Client** (Text)
- **Secteur d'activité** (Text)
- **Métiers concernés** (Text)
- **Role du Wiver** (Text)
- **Problématique principale** (Text)
- **Limite solution actuelle** (Text)
- **Objectif principal** (Text)
- **Objectifs secondaires** (Text)
- **Solution IA** (Text)
- **Type de solution** (Select)
- **Cas d'usage** (Text)
- **Valeur apportée** (Text)
- **Niveau de maturité** (Select)
- **LLM(s) utilisé(s)** (Multi-select)
- **Outils et framework** (Text)
- **KPIs de succès** (Text)
- **North Star** (Text)
- **Hypothèse de valeur validée ?** (Select)
- **Enseignements clés** (Text)
- **Réplicabilité** (Text)

**Note** : Seuls les projets avec `Published = "Production"` seront affichés dans l'application.
