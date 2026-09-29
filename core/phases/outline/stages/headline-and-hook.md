---
slug: headline-and-hook
name: Headline and Hook
phase: outline
execution: ALWAYS
condition: Always executes — the headline and first paragraph decide whether anyone reads the rest
lead_agent: copywriter-agent
support_agents:
  - seo-agent
mode: inline
produces:
  - headline-options
  - hook
consumes:
  - artifact: angle-statement
    required: true
  - artifact: outline
    required: true
  - artifact: keyword-map
    required: false
requires_stage:
  - structure-outline
inputs: Angle statement, outline, keyword map
outputs: headline-options.md, hook.md
---

# Headline and Hook

## Steps

### Step 1: Generate headline options

Write eight to twelve headlines across different promises: outcome, curiosity,
contrarian, how-to, number, and question. Include the primary keyword
naturally in at least half when a keyword map exists.

### Step 2: Filter for honesty

Remove any headline the post does not deliver on. Clickbait that the body
does not pay off is a blocking defect, not a style choice.

### Step 3: Recommend a shortlist

Present the best three with the trade-off of each and a recommendation. The
author chooses. Record the choice and the runners-up in
`headline-options.md`.

### Step 4: Write the hook

Draft two or three opening paragraphs (under 80 words each) that state the
problem, why it matters to this reader, and what they will get. Record the
chosen hook in `hook.md`.

### Step 5: Complete and confirm

Report `awaiting-approval` and present the gate.
