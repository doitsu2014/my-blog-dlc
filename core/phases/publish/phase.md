---
slug: publish
name: Publish
order: 5
focus: Release and distribution
ai_role: Publishing assistant
output: SEO metadata, packaged post, promotion plan
description: Optimise, package, and release the post, then plan its distribution
key_activities:
  - On-page SEO and metadata
  - Front matter, slug, and platform packaging
  - Pre-publish checklist and preview
  - Distribution and social copy
example_prompts:
  - "Write a meta description under 155 characters"
  - "Package this post for my Hugo site"
  - "What is still missing before I hit publish?"
  - "Draft a LinkedIn post and a short thread for this"
---

# Phase 5 — Publish

Publish takes the approved final draft to readers. The post is packaged for
the project's blog platform, checked against a pre-publish list, and
previewed. The human always presses the publish button: no agent pushes,
deploys, or schedules a post on its own.

## Focus

Release and distribution.

## The AI's role

Publishing assistant. The model writes metadata, formats front matter, runs
the project's preview or build command, and drafts promotion copy. The human
owns the release decision and every public post made in their name.

## Outputs

- SEO metadata: slug, title tag, meta description, alt text, internal links
- The packaged post in the project's content directory, plus a publish record
- A promotion plan and channel-specific social copy (when distributed)

## Gates

Every stage in Publish ends at a human approval gate.

## Exit criteria

- The post builds and previews cleanly with the project's own command
- Front matter matches the schema recorded in project memory
- Every image has alt text and every link resolves
- The human has approved the release

## Next phase

After publication, [Evolve](../evolve/phase.md) measures how the post
performs and decides whether to refresh or repurpose it.
