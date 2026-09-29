---
slug: publish-package
name: Publish Package
phase: publish
execution: ALWAYS
condition: Always executes — packages the approved post for the blog platform
lead_agent: publisher-agent
support_agents: []
mode: inline
produces:
  - publish-record
consumes:
  - artifact: final-draft
    required: true
  - artifact: seo-metadata
    required: false
  - artifact: asset-plan
    required: false
  - artifact: code-samples
    required: false
requires_stage:
  - copy-edit
  - seo-optimization
workspace_requires: true
inputs: Final draft, SEO metadata, asset plan, platform settings in project memory
outputs: The post file in the blog's content directory, publish-record.md
---

# Publish Package

## Steps

### Step 1: Load the platform contract

Read the platform section of project memory: static site generator or CMS,
content directory, file naming, front matter schema, image directory, and
the build or preview command. Load the `platform-publishing` skill for the
platform's conventions. When project memory does not record them, ask.

### Step 2: Write the post file

Write the final draft into the content directory with front matter built
from the SEO metadata: title, date, slug, description, tags or categories,
cover image, canonical URL, and `draft: true` (or the platform equivalent)
until the author releases it. Copy or reference assets per the asset plan.

### Step 3: Build and preview

Run the project's own build or preview command. Record the exact command and
result. Fix broken links, missing images, and front matter errors. Never
claim the post builds without running the command.

### Step 4: Run the pre-publish checklist

Headline and slug final; description set; every image has alt text; every
link resolves; code blocks render; no placeholders; reading time noted;
date and time zone correct; author and licence correct.

### Step 5: Hand the release to the author

Write `publish-record.md`: the file path, front matter, build result,
checklist, and the exact steps to release (flip `draft`, merge, deploy).
Do not publish, push, merge, or deploy on the author's behalf unless they
approve it at the gate. Report `awaiting-approval` and present the gate.
