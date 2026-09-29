---
slug: topic-research
name: Topic Research
phase: discover
execution: CONDITIONAL
condition: Runs when the post makes factual, technical, or comparative claims the author has not already sourced
lead_agent: research-agent
support_agents:
  - fact-checker-agent
mode: inline
produces:
  - research-notes
  - source-register
consumes:
  - artifact: content-brief
    required: true
  - artifact: audience-profile
    required: false
requires_stage:
  - brief-capture
inputs: Content brief, audience profile, author's links and notes
outputs: research-notes.md, source-register.md
---

# Topic Research

## Steps

### Step 1: Decide whether research applies

When the post is personal experience or opinion with no load-bearing facts,
report `--result skipped` with the reason. Otherwise continue.

### Step 2: Frame the research questions

Derive the questions that change what the post says: what is true, what is
current, what has already been written, and where the existing coverage is
wrong or thin.

### Step 3: Gather sources

Prefer primary sources: official documentation, specifications, release
notes, papers, and data. Record every source in `source-register.md` with
title, URL, author, date, and what it supports. Mark anything unverified as
an assumption.

### Step 4: Synthesise

Write `research-notes.md`: findings, evidence, what competing posts cover,
the gap this post fills, and the claims the draft may rely on.

### Step 5: Complete and confirm

Report `awaiting-approval` and present the gate.
