---
slug: seo-optimization
name: SEO Optimization
phase: publish
execution: ALWAYS
condition: Always executes — every post needs a slug, title tag, description, and alt text
lead_agent: seo-agent
support_agents:
  - copywriter-agent
mode: inline
produces:
  - seo-metadata
consumes:
  - artifact: final-draft
    required: true
  - artifact: keyword-map
    required: false
  - artifact: headline-options
    required: false
  - artifact: asset-plan
    required: false
requires_stage:
  - copy-edit
inputs: Final draft, keyword map, headline options, asset plan, the blog's archive
outputs: seo-metadata.md
---

# SEO Optimization

## Steps

### Step 1: Write the metadata

Record: URL slug (short, lowercase, hyphenated, no dates unless the blog
uses them), title tag (about 60 characters), meta description (about 150–160
characters, states the benefit), canonical URL for cross-posts, and Open
Graph / social title, description, and image.

### Step 2: Check on-page structure

One H1. Headings describe their sections. The primary keyword appears in the
title, the first paragraph, and at least one heading, naturally. Never stuff
keywords; readability wins every conflict.

### Step 3: Link the post into the archive

Propose two to five internal links to existing posts (and back-links from
older posts to this one) and verify that external links are to authoritative
sources.

### Step 4: Check images and structured data

Every image has alt text and a descriptive file name. Propose structured
data (Article, HowTo, FAQ) only when the platform supports it and the content
matches.

### Step 5: Complete and confirm

Write `seo-metadata.md`. Apply accepted in-text changes to `final-draft.md`.
Report `awaiting-approval` and present the gate.
