---
name: quick
depth: Minimal
keywords:
  - quick
  - short
  - til
  - today i learned
  - note
  - snippet
  - tiny
  - express
description: "Lightest run for a short post or TIL: brief, draft, proofread, package"
skeleton: off
review_cap: none
guard_policy: off
sensors: off
learnings: off
summary_confirmation: off
question_budget:
  min: 0
  max: 2
phases:
  - discover
  - draft
  - refine
  - publish
skip:
  - audience-analysis
  - topic-research
  - keyword-research
  - code-examples
  - visual-assets
  - developmental-edit
  - technical-review
  - fact-check
  - seo-optimization
  - promotion-plan
---

# quick scope

`quick` is the lightest useful run, for a TIL, a short note, or a snippet
post. It goes straight from a brief to a draft, a proofread, and a packaged
post.

Guard Policy defaults to off. Human presence stays up — the approval gates
still fire.

## Why these stages

Brief Capture pins the one takeaway. First Draft sketches a tiny outline
inline and writes the post. Copy Edit proofreads and flags any claim that
should be checked. Publish Package writes the post with front matter and
runs the build. Everything else is skipped; promote the post to `tutorial`
or `classic` when it grows.

## Membership

Discover: brief-capture.
Draft: first-draft.
Refine: copy-edit.
Publish: publish-package.

Everything else is SKIP.
