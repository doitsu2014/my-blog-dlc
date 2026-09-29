# Reference skills

Four platform-neutral reference skills ship alongside the orchestrator in
`core/skills/`. Stages and agents load the matching one when the work touches
its subject. Each skill ends with "How this skill plugs into my-blog-dlc",
naming the stages that use it and what they record.

| Skill | Load when | Main stages |
| --- | --- | --- |
| `editorial-style` | Drafting and editing prose | first-draft, developmental-edit, copy-edit |
| `technical-writing` | The post teaches code, commands, or configuration | code-examples, technical-review, first-draft (tutorials) |
| `seo-onpage` | The post should be found through search | keyword-research, headline-and-hook, seo-optimization, performance-review |
| `platform-publishing` | Packaging the post for the blog platform | publish-package, promotion-plan (cross-posts), repurposing |

## `editorial-style`

Voice, clarity defaults, phrases to cut, mechanics checklist, inclusive and
accessible language, quotes and attribution, and change discipline. Style
rules in project memory take precedence over the skill's defaults.

## `technical-writing`

Post types, prerequisites and pinned environments, example design, running
every example, code-block presentation, explaining code, safe-by-default
patterns, and a technical review checklist.

## `seo-onpage`

Search intent, keyword maps, headings and body, the metadata checklist (slug,
title tag, meta description, Open Graph, canonical), images, links,
structured data, and post-publication review. People first; no invented
search data.

## `platform-publishing`

Discovering the platform contract, conventions for static site generators
(Hugo, Jekyll, Astro, Next.js/MDX, Gatsby, Docusaurus, Eleventy), common
front matter keys and draft flags, images and assets, hosted and headless CMS
(Ghost, WordPress), cross-posting to dev.to, Hashnode, and Medium with
canonical URLs, and a pre-publish checklist.

Record the platform contract in the Platform section of `project.md` once;
`publish-package` reads it every time. See
[Project memory](06-project-memory.md).

## Adding a skill

Add `core/skills/<name>/SKILL.md` with `name` (equal to the directory name)
and a routing `description` (under 1024 characters), end it with a
"How this skill plugs into my-blog-dlc" section, list it in the orchestrator
skill's reference table, and run `node scripts/package.mjs`.
