---
slug: audience-analysis
name: Audience Analysis
phase: discover
execution: ALWAYS
condition: Always executes — every post is written for a specific reader
lead_agent: audience-analyst-agent
support_agents:
  - content-strategist-agent
mode: inline
produces:
  - audience-profile
consumes:
  - artifact: content-brief
    required: true
requires_stage:
  - brief-capture
inputs: Content brief, project memory audience notes, reader feedback the author shares
outputs: audience-profile.md
---

# Audience Analysis

## Steps

### Step 1: Load prior context

Read the content brief and the audience section of project memory. Read any
reader comments, emails, or questions the author supplied.

### Step 2: Profile the reader

Describe the primary reader: role, experience level, what they already know,
what they have tried, and the problem that sends them looking. Name one
secondary reader at most.

### Step 3: Map knowledge and objections

List the prerequisite knowledge the post can assume, the terms that need
defining, and the objections or misconceptions the reader brings.

### Step 4: Record the reading context

Where and how the reader arrives (search, newsletter, social, a colleague's
link), how much time they have, and what they will do right after reading.

### Step 5: Complete and confirm

Write `audience-profile.md`. Report `awaiting-approval` and present the gate.
