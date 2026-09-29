---
slug: structure-outline
name: Structure Outline
phase: outline
execution: ALWAYS
condition: Always executes — structure is fixed before drafting begins
lead_agent: outline-architect-agent
support_agents:
  - developmental-editor-agent
mode: inline
produces:
  - outline
  - outline-questions
consumes:
  - artifact: angle-statement
    required: true
  - artifact: content-brief
    required: true
  - artifact: research-notes
    required: false
  - artifact: keyword-map
    required: false
requires_stage:
  - angle-definition
inputs: Angle statement, content brief, research notes, keyword map
outputs: outline.md, outline-questions.md
---

# Structure Outline

## Steps

### Step 1: Pick a structure pattern

Choose the pattern that fits the post type and say why: step-by-step
tutorial, problem → solution, claim → evidence → implication, comparison
matrix, narrative, or listicle. Ask the author when two patterns fit
equally well (`outline-questions.md`).

### Step 2: Draft the section list

For each section record: heading, purpose (what the reader gains), key
points, the evidence or example it uses, and an approximate length. Put the
payoff early; do not bury the key takeaway at the end.

### Step 3: Check flow and coverage

Every section must serve the thesis. Flag orphan sections, missing
prerequisites, and places where the reader must hold too much in their head.
Map secondary keywords and reader questions to the sections that answer
them.

### Step 4: Plan the ending

Record the conclusion and the single call to action (reply, subscribe, try
the code, read next).

### Step 5: Complete and confirm

Write `outline.md`. Report `awaiting-approval` and present the gate.
