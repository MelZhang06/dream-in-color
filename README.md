# Do You Dream in Color?

A bilingual personal journal and dream archive: essays from waking life, and AI-generated images based on remembered dreams.

The design combines an independent magazine with a personal creative archive. Quiet typography and generous space hold images whose styles can change from dream to dream.

## Features

- Chinese and English essays with separate, directly linkable reading pages.
- Translation links generated from a shared content key.
- Dream archive with uncropped images and bilingual memories.
- Responsive layouts, semantic HTML, keyboard navigation, visible focus states, and a skip link.
- Static HTML output; content and navigation work without client-side JavaScript. Optional scroll reveals progressively enhance the homepage.
- Schema-validated Markdown content collections.
- Optional canonical and language-alternate metadata when `SITE_URL` is configured.

## Stack

Astro, TypeScript, CSS, and Markdown. No database, runtime backend, or third-party tracking is required.

## Run locally

Use Node.js 22.12 or newer (Node 24 LTS is recommended).

```sh
npm ci
npm run dev
```

```sh
npm run check
npm run build
npm run preview
```

The production output is `dist/`. Dependencies are pinned by `package-lock.json`.

## Structure

```text
src/content/writing/   Articles, one Markdown file per language
src/content/dreams/    Dream memories and image metadata
src/content.config.ts Content schemas
src/layouts/          Shared document, navigation, metadata, footer
src/pages/            Homepage, indexes, content routes, About, 404
src/styles/           Responsive site styles
public/images/        Original dream images
.github/workflows/    Pull-request and push validation
```

## Add an essay

Create a Markdown file in `src/content/writing/`:

```yaml
---
title: Your title
lang: en
translationKey: a-shared-name
excerpt: A short introduction.
order: 2
---
```

Write the body below the frontmatter. For a translation, create another file with the same `translationKey`, set `lang: zh`, and use the Chinese title and text. Articles without a translation remain supported. Use unique `order` values per essay, shared between translations; smaller values appear first. No dates are invented for undated content.

## Add a dream

Place the image in `public/images/`, then add a Markdown file to `src/content/dreams/`:

```yaml
---
title: Your dream title
titleZh: 梦境标题
number: '002'
image: /images/dream-002.jpg
alt: A meaningful description of what appears in the image.
memoryZh: 醒来后记得的片段。
order: 2
---
```

The Markdown body holds the English memory. Keep images reasonably sized for the web. Avoid committing private photo-library paths or image-generation credentials.

## Deploy to Cloudflare Pages

1. Push this project to your GitHub repository.
2. In Cloudflare, create a Pages project and connect that repository.
3. Build command: `npm run build`; output directory: `dist`; root: repository root.
4. Set `NODE_VERSION` to `24` and, after choosing the public domain, set `SITE_URL` to its full HTTPS URL.
5. Select the production branch. Commits to it trigger deployment; other branches can receive previews.
6. Add your custom domain in the Pages dashboard and follow its DNS instructions. Set `SITE_URL` to that domain and redeploy.

No Cloudflare account credentials belong in this repository. GitHub Actions validates the site but does not deploy it; Cloudflare handles deployment through its Git integration.

Official references:
- https://docs.astro.build/en/guides/content-collections/
- https://developers.cloudflare.com/pages/configuration/git-integration/
- https://developers.cloudflare.com/pages/configuration/custom-domains/

## Project decisions

**Static content first.** Essays and dreams do not need a database. Storing them as Markdown makes edits reviewable and keeps hosting portable.

**Separate language routes.** Each translation has a stable URL and correct document language. Switching languages works without JavaScript.

**Images keep their identity.** Neutral page styling and preserved image proportions accommodate a changing visual archive without forcing every dream into one aesthetic.

**Small browser footprint.** The site uses system fonts, a small homepage reveal script, and no application framework in the browser. Core reading works offline after downloading the built pages and assets through a local server.

## Authorship and rights

The author supplied the essay in Chinese and English, the dream image, and the remembered dream. Site implementation was developed with AI assistance. The About text and dream title are editorial starting points to review with the author.

No license has been selected yet. Code, writing, and images are not offered under an open-source or Creative Commons license by default. Public repository visibility does not grant reuse rights. If a code license is added later, specify separately whether it covers the original writing and artwork.
