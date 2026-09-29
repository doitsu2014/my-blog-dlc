---
name: classic
depth: Standard
keywords: []
description: "Full lifecycle through all six phases with one human approval per stage"
skeleton: off
review_cap: advisory
guard_policy: relaxed
sensors: on
learnings: on
summary_confirmation: off
phases:
  - discover
  - outline
  - draft
  - refine
  - publish
  - evolve
skip: []
---

# classic scope

`classic` is the implicit default scope — used when neither the author nor
`defaultScope` names one. It runs every phase with one human approval per
stage, advisory reviews, and the learnings ritual on.

Guard Policy defaults to relaxed: changed inputs are recorded and announced
rather than reopening approval. Human-turn authority and the audit trail
remain in force.

## Why these stages

Every phase participates. Discover establishes the brief, reader, research,
and search intent. Outline fixes the angle, structure, headline, and hook.
Draft writes the post with its code and visuals. Refine edits, reviews, fact
checks, and proofreads. Publish optimises, packages, and plans distribution.
Evolve measures, refreshes, and repurposes.

Conditional stages (topic research, keyword research, code examples, visual
assets, technical review, promotion plan, content refresh, repurposing)
self-skip at runtime after their condition check, with the reason recorded.

Evolve usually runs weeks after publication: park after Publish and resume
when there is data.

## Membership

All six phases, all 20 stages.
