---
slug: copy-edit
name: Copy Edit
phase: refine
execution: ALWAYS
condition: Always executes — every post is proofread before it ships
lead_agent: copy-editor-agent
support_agents: []
mode: inline
produces:
  - final-draft
  - copy-edit-notes
consumes:
  - artifact: draft
    required: true
  - artifact: developmental-review
    required: false
  - artifact: fact-check-report
    required: false
  - artifact: headline-options
    required: false
requires_stage:
  - first-draft
  - developmental-edit
  - fact-check
inputs: Draft, developmental review, fact-check report, the style guide in project memory
outputs: final-draft.md, copy-edit-notes.md
---

# Copy Edit

## Steps

### Step 1: Load the style guide

Read the style and voice sections of project memory: spelling variant,
heading case, Oxford comma, numerals, terminology, and banned phrases.

### Step 2: Edit line by line

Fix grammar, spelling, punctuation, and consistency. Cut filler, redundant
hedges, and throat-clearing. Break sentences over about 30 words. Keep the
author's voice: the goal is clarity, not a different writer.

### Step 3: Check mechanics

Heading hierarchy, list parallelism, code-fence language tags, link text
that makes sense out of context, consistent product names and casing, and no
leftover `[TK]` or `[AUTHOR]` placeholders.

### Step 4: Produce the final draft

Write `final-draft.md`. In `copy-edit-notes.md` record the categories of
change, any change of meaning (which must be confirmed with the author), and
the final word count and estimated reading time.

### Step 5: Complete and confirm

Report `awaiting-approval` and present the gate.
