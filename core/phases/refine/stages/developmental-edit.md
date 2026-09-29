---
slug: developmental-edit
name: Developmental Edit
phase: refine
execution: ALWAYS
condition: Always executes — structure and argument are reviewed before sentences
lead_agent: developmental-editor-agent
support_agents:
  - audience-analyst-agent
mode: inline
produces:
  - developmental-review
consumes:
  - artifact: draft
    required: true
  - artifact: content-brief
    required: true
  - artifact: angle-statement
    required: false
  - artifact: outline
    required: false
  - artifact: audience-profile
    required: false
requires_stage:
  - first-draft
  - code-examples
  - visual-assets
inputs: Draft, brief, angle statement, outline, audience profile
outputs: developmental-review.md (and revisions applied to draft.md)
---

# Developmental Edit

## Steps

### Step 1: Read the draft in full, as the reader

Read the whole draft once without editing, as the reader named in the
audience profile. Note where attention drops, where a term is undefined, and
where the argument jumps.

### Step 2: Check against the contract

Does the draft deliver the key takeaway in the brief, argue the thesis in
the angle statement, and keep the headline's promise? Flag scope creep and
sections that serve the author more than the reader.

### Step 3: Classify findings

Each finding: severity (blocking, major, minor, nit), the section and quoted
passage, why it matters to the reader, and a suggested fix. Blocking means
the post fails its brief, misleads, or loses the reader for good.

### Step 4: Apply agreed revisions

Present the findings and ask which to apply. Apply the accepted structural
revisions to `draft.md` in place. Record every finding, the decision, and
what changed in `developmental-review.md`.

### Step 5: Complete and confirm

Report `awaiting-approval` and present the gate. Blocking findings must be
resolved or explicitly waived by the author.
