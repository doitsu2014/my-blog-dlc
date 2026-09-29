---
slug: repurposing
name: Repurposing
phase: evolve
execution: CONDITIONAL
condition: Runs when the piece will be adapted into other formats or channels
lead_agent: distribution-agent
support_agents:
  - copywriter-agent
mode: inline
produces:
  - repurposed-content
consumes:
  - artifact: content-brief
    required: true
  - artifact: final-draft
    required: false
  - artifact: audience-profile
    required: false
  - artifact: performance-report
    required: false
requires_stage:
  - brief-capture
  - performance-review
inputs: The source post, content brief, audience profile, target formats
outputs: repurposed-content.md
---

# Repurposing

## Steps

### Step 1: Decide whether repurposing applies

When no other format or channel is planned, report `--result skipped` with
the reason. Otherwise continue.

### Step 2: Load the source and pick formats

Read the source post in full (the final draft, or the published post named
in the brief). Agree the target formats with the author: newsletter issue,
thread, LinkedIn post, talk outline, slide deck outline, video script, or a
cross-post on another platform.

### Step 3: Adapt, do not paste

Rewrite for each format's reader and constraints: a thread leads with the
insight, a newsletter adds a personal note, a talk needs a narrative arc.
Keep facts identical to the verified source; add nothing unverified.

### Step 4: Link back

Every derivative credits and links to the original. Cross-posts set a
canonical URL to the blog.

### Step 5: Complete and confirm

Write `repurposed-content.md` with one section per format. Report
`awaiting-approval` and present the gate.
