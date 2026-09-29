---
name: platform-publishing
description: >
  Use when packaging a post for a blog platform or cross-posting it: content
  directory and file naming, front matter keys and draft flags, image
  directories, build and preview commands, and canonical URLs. Covers Hugo,
  Jekyll, Astro, Next.js/MDX, Gatsby, Docusaurus, Eleventy, Ghost, WordPress,
  and cross-posting to dev.to, Hashnode, and Medium.
license: MIT
compatibility: Static site generators, headless and hosted CMSs, syndication platforms.
---

# Platform Publishing

Apply this skill whenever a stage writes a post into the blog's repository
or CMS, previews it, or cross-posts it. The project's own configuration is
authoritative: the tables below are common defaults, not rules. Verify
against the repository (config files, existing posts, theme archetypes)
before writing anything.

## When this skill applies

- Draft: placing images and assets where the platform expects them.
- Publish: writing the post file, front matter, build and preview.
- Publish and Evolve: cross-posting and syndication.

## Discover the contract first

1. Read project memory for platform, content directory, front matter
   schema, and build command.
2. If absent, inspect the repository: config file, an existing post, and
   any archetype or template.
3. Copy the front matter keys from a recent post; do not invent keys the
   theme does not read.
4. Record what you found in project memory so the next post skips this step.

## Static site generators

| Platform | Config | Content dir (typical) | Draft mechanism | Preview |
| --- | --- | --- | --- | --- |
| Hugo | `hugo.toml` / `config.toml` | `content/posts/<slug>.md` or `content/posts/<slug>/index.md` (page bundle) | `draft: true`; shown with `hugo server -D` | `hugo server -D`; build `hugo` |
| Jekyll | `_config.yml` | `_posts/YYYY-MM-DD-<slug>.md`; drafts in `_drafts/` | `_drafts/` folder or `published: false` | `bundle exec jekyll serve --drafts` |
| Astro | `astro.config.*` | `src/content/blog/<slug>.md(x)` (content collections) | Schema-defined, often `draft: true` | `npm run dev`; build `npm run build` |
| Next.js + MDX | `next.config.*` | Project-specific, e.g. `content/posts/` or `app/blog/<slug>/page.mdx` | Project-specific flag | `npm run dev`; build `npm run build` |
| Gatsby | `gatsby-config.*` | Per source plugin, e.g. `content/blog/<slug>/index.md` | Project-specific flag | `gatsby develop`; build `gatsby build` |
| Docusaurus | `docusaurus.config.*` | `blog/YYYY-MM-DD-<slug>.md` or folder | `draft: true` (excluded in production) | `npm start`; build `npm run build` |
| Eleventy | `eleventy.config.*` / `.eleventy.js` | Project-specific, e.g. `posts/<slug>.md` | Project-specific (often `draft: true` plus a filter) | `npx @11ty/eleventy --serve` |

Astro content collections validate front matter against a schema; a missing
required key fails the build. Read the collection config before writing.

## Common front matter keys

```yaml
---
title: "Human-readable title"
description: "Meta description, about 150–160 characters"
date: 2026-01-15T09:00:00+07:00   # include the time zone
lastmod: 2026-01-15               # Hugo; others use updated/updatedDate
slug: short-descriptive-slug
tags: [kubernetes, networking]
categories: [tutorials]
cover: /images/short-descriptive-slug/cover.png
canonicalURL: https://blog.example.com/posts/short-descriptive-slug/
draft: true
---
```

Key names vary by theme (`image` vs `cover` vs `heroImage`, `canonical` vs
`canonicalURL`, `summary` vs `description`). Use the names the theme reads.

## Images and assets

- Hugo page bundles keep images beside `index.md`; otherwise `static/images/`.
- Jekyll commonly uses `assets/images/`.
- Astro can import images from `src/assets/` (optimised) or serve from
  `public/`.
- Next.js and Docusaurus serve static files from `public/` or `static/`.
- Use a per-post folder named after the slug; keep file names descriptive.

## Hosted and headless CMS

- **Ghost**: posts are created in the editor or via the Admin API; status
  `draft` until published; set the canonical URL and meta fields in post
  settings. Never publish through the API without the author's approval.
- **WordPress**: create as `draft` (editor or REST API); set categories,
  tags, featured image, and SEO plugin fields. Scheduling is a publish action
  and needs approval.
- Credentials for any API live in environment variables, never in the repo
  or the workspace artifacts.

## Cross-posting and syndication

- Publish on the blog first; cross-post after it is indexed where possible.
- **dev.to**: front matter supports `published: false` and `canonical_url`.
- **Hashnode**: set the original URL (canonical) in post settings.
- **Medium**: use the import tool, which sets the canonical link, or set it
  in the story settings.
- Every cross-post links back to the original and sets its canonical URL to
  the blog.

## Pre-publish checklist

- [ ] File in the right directory with the right name.
- [ ] Front matter matches the schema; draft flag still on.
- [ ] Date and time zone correct; future dates behave as the platform
      expects (some generators hide future-dated posts).
- [ ] Build or preview command run; output recorded; no warnings about the
      post.
- [ ] Images load; alt text present; links resolve.
- [ ] Code blocks render with highlighting; MDX components import correctly.
- [ ] Release steps written down (flip draft, merge, deploy).

## Common pitfalls

- Inventing front matter keys the theme ignores.
- Forgetting the time zone, so the post appears on the wrong day.
- Future-dated posts silently excluded from the build.
- Absolute image paths that break under a base path.
- Cross-posts without a canonical URL.
- Publishing or deploying without the author's go-ahead.

## How this skill plugs into my-blog-dlc

- `visual-assets`: place assets per the platform's image conventions in
  `asset-plan`.
- `seo-optimization`: produce front matter-ready values in `seo-metadata`.
- `publish-package`: write the post file, run the build or preview, and
  record the path, front matter, build result, checklist, and release steps
  in `publish-record`.
- `promotion-plan` and `repurposing`: cross-post with canonical URLs.
- `content-refresh`: update `lastmod`/updated dates and keep slugs stable.
- Record platform, content directory, file naming, front matter schema,
  image directory, and build/preview commands in project memory at
  `blogdlc/spaces/default/memory/project.md`.
