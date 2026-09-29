---
slug: visual-assets
name: Visual Assets
phase: draft
execution: CONDITIONAL
condition: Runs when diagrams, screenshots, charts, or a cover image carry meaning the text cannot
lead_agent: visual-designer-agent
support_agents: []
mode: inline
produces:
  - asset-plan
consumes:
  - artifact: draft
    required: true
  - artifact: outline
    required: false
requires_stage:
  - first-draft
inputs: Draft, outline, the blog's image conventions in project memory
outputs: asset-plan.md
---

# Visual Assets

## Steps

### Step 1: Decide whether visuals apply

When the post reads fully without visuals and the platform needs no cover
image, report `--result skipped` with the reason. Otherwise continue.

### Step 2: Find the places a picture earns its space

Mark each passage where a diagram, screenshot, chart, or table would replace
a paragraph of explanation. Decoration is not a reason.

### Step 3: Specify each asset

For each asset record: placement, purpose, type, source (create, screenshot,
licensed stock), file name and path per project memory, dimensions, and alt
text that describes the content, not the appearance. Author text diagrams
(Mermaid, ASCII) directly when the platform renders them.

### Step 4: Check rights

Record the licence and attribution for any image not created by the author.
Never embed an image whose licence is unknown.

### Step 5: Complete and confirm

Insert image placeholders with alt text into the draft. Write
`asset-plan.md`. Report `awaiting-approval` and present the gate.
