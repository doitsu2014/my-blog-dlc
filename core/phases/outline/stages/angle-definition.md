---
slug: angle-definition
name: Angle Definition
phase: outline
execution: ALWAYS
condition: Always executes — the post needs one thesis before it needs a structure
lead_agent: content-strategist-agent
support_agents:
  - audience-analyst-agent
mode: inline
produces:
  - angle-statement
consumes:
  - artifact: content-brief
    required: true
  - artifact: audience-profile
    required: false
  - artifact: research-notes
    required: false
  - artifact: keyword-map
    required: false
requires_stage:
  - brief-capture
  - audience-analysis
  - topic-research
  - keyword-research
inputs: Content brief, audience profile, research notes, keyword map
outputs: angle-statement.md
---

# Angle Definition

## Steps

### Step 1: Load prior context

Read the content brief and every available Discover artifact. Note the gap
the research found and the dominant search intent.

### Step 2: Propose angles

Offer three to five distinct angles as a question. Each names the thesis in
one sentence, the promise to the reader, and why this author is credible on
it. Mark the recommended angle and say why.

### Step 3: Stress-test the chosen angle

Check it against the reader: is it new to them, is it true, is it specific
enough to disagree with? Record the strongest counter-argument the post must
address.

### Step 4: Write the angle statement

Record thesis, promise, counter-argument, tone (from project memory), and
what the post will deliberately not claim.

### Step 5: Complete and confirm

Report `awaiting-approval` and present the gate.
