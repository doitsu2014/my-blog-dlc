# Artifact Vocabulary

Artifacts are lowercase-kebab names. A stage's `produces` list names the
artifacts it writes; a stage's `consumes` list names the artifacts it reads.
The engine resolves each name to a path under the intent record directory:

```
blogdlc/spaces/<space>/intents/<intent>/<phase>/<stage>/<artifact>.md
```

## Registry

| Artifact | Produced by | Description |
| --- | --- | --- |
| `content-brief` | brief-capture | Reader, takeaway, goal, scope, constraints |
| `brief-questions` | brief-capture | Stage questions file |
| `audience-profile` | audience-analysis | Reader knowledge, objections, context |
| `research-notes` | topic-research | Findings, coverage gap, safe claims |
| `source-register` | topic-research | Every source with date and what it supports |
| `keyword-map` | keyword-research | Primary/secondary keywords and search intent |
| `angle-statement` | angle-definition | Thesis, promise, counter-argument, tone |
| `outline` | structure-outline | Section-by-section plan |
| `outline-questions` | structure-outline | Stage questions file |
| `headline-options` | headline-and-hook | Headline candidates and the choice |
| `hook` | headline-and-hook | The opening paragraph |
| `draft` | first-draft | The working draft (revised in place by Refine) |
| `draft-notes` | first-draft | Word count, placeholders, deviations |
| `code-samples` | code-examples | Verified, version-pinned examples |
| `code-verification-log` | code-examples | Commands run and their output |
| `asset-plan` | visual-assets | Diagrams, screenshots, alt text, licences |
| `developmental-review` | developmental-edit | Structural findings and decisions |
| `technical-review-record` | technical-review | Code and technical findings and verdict |
| `fact-check-report` | fact-check | Every claim, source, and verdict |
| `final-draft` | copy-edit | The publishable text |
| `copy-edit-notes` | copy-edit | Change categories, word count, reading time |
| `seo-metadata` | seo-optimization | Slug, title tag, description, OG, links |
| `publish-record` | publish-package | Post path, front matter, build result, release steps |
| `promotion-plan` | promotion-plan | Channels and timeline |
| `social-copy` | promotion-plan | Channel-native promotion copy |
| `performance-report` | performance-review | Results against the brief |
| `refresh-plan` | content-refresh | What to update and why |
| `repurposed-content` | repurposing | Derivatives per format |

The packaged post itself is written to the blog's content directory (from
project memory), not to the record directory; `publish-record` points at it.

## Rules

- Names are lowercase-kebab and match the producing stage's `produces` entry.
- Questions files end in `-questions`.
- A consumed artifact that is `required: true` and absent is a gap; the engine
  surfaces it in `consumes_absent`.
