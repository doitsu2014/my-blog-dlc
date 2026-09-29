---
slug: keyword-research
name: Keyword Research
phase: discover
execution: CONDITIONAL
condition: Runs when the post should be found through search
lead_agent: seo-agent
support_agents:
  - audience-analyst-agent
mode: inline
produces:
  - keyword-map
consumes:
  - artifact: content-brief
    required: true
  - artifact: audience-profile
    required: false
requires_stage:
  - brief-capture
  - audience-analysis
  - topic-research
inputs: Content brief, audience profile, search tools or data the author provides
outputs: keyword-map.md
---

# Keyword Research

## Steps

### Step 1: Decide whether search matters

When the post is for an existing audience only (newsletter, community,
personal essay), report `--result skipped` with the reason. Otherwise
continue.

### Step 2: Identify search intent

Name the queries the reader would type and classify the intent:
informational, navigational, commercial, or transactional. The post must
match the dominant intent of its primary query.

### Step 3: Build the keyword map

Record one primary keyword, three to eight secondary keywords and phrasings,
and the questions people ask. Note volume or difficulty only when the author
supplied real data; never invent numbers.

### Step 4: Check the existing results

Summarise what currently ranks for the primary query and what those pages do
well or miss. Check the blog's own archive for posts that would compete for
the same query.

### Step 5: Complete and confirm

Write `keyword-map.md`. Report `awaiting-approval` and present the gate.
