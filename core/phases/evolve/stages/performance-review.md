---
slug: performance-review
name: Performance Review
phase: evolve
execution: ALWAYS
condition: Always executes in Evolve — measures the post against its brief
lead_agent: analytics-agent
support_agents:
  - seo-agent
mode: inline
produces:
  - performance-report
consumes:
  - artifact: content-brief
    required: false
  - artifact: publish-record
    required: false
  - artifact: seo-metadata
    required: false
  - artifact: keyword-map
    required: false
  - artifact: promotion-plan
    required: false
requires_stage:
  - publish-package
  - promotion-plan
inputs: Analytics exports, search console data, comments and replies the author provides
outputs: performance-report.md
---

# Performance Review

## Steps

### Step 1: Wait for data

Performance needs time. When the post went live less than about two weeks
ago, recommend parking the workflow (`my-blog-dlc orchestrate park`) and
resuming later. Ask the author for the data: page views, read time, search
impressions and queries, referrers, sign-ups, comments, and replies.

### Step 2: Measure against the brief

Compare the data with the success criteria in the content brief. Report what
the post was for, not just what is easy to count. Never invent or estimate
numbers the author did not supply.

### Step 3: Read the qualitative signal

Summarise comments, replies, and questions: what readers valued, where they
were confused, what they asked for next, and any reported errors.

### Step 4: Draw conclusions

Record what worked, what did not, and why — with evidence. Propose
candidate learnings for project memory (headline patterns, channels, post
length) and ideas for follow-up posts.

### Step 5: Complete and confirm

Write `performance-report.md`. Report `awaiting-approval` and present the
gate.
