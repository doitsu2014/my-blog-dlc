---
slug: content-refresh
name: Content Refresh
phase: evolve
execution: CONDITIONAL
condition: Runs when the post is outdated, underperforming for its query, or has reported errors
lead_agent: content-strategist-agent
support_agents:
  - analytics-agent
  - fact-checker-agent
mode: inline
produces:
  - refresh-plan
consumes:
  - artifact: performance-report
    required: false
  - artifact: final-draft
    required: false
  - artifact: publish-record
    required: false
requires_stage:
  - performance-review
inputs: Performance report, the published post, reported errors, version changes
outputs: refresh-plan.md
---

# Content Refresh

## Steps

### Step 1: Decide whether a refresh applies

When the post is current, correct, and meeting its goal, report
`--result skipped` with the reason. Otherwise continue.

### Step 2: Audit the published post

Read the live post in full. List what is outdated (versions, screenshots,
prices, links), what is wrong, what readers asked about that is missing, and
where the post underperforms for its primary query.

### Step 3: Plan the changes

For each item record the change, the reason, and the evidence. Decide
between a light update (corrections, links), a substantial update (new
sections, new examples), or a rewrite that deserves a new post and a
redirect.

### Step 4: Plan the disclosure

Specify how the update is disclosed: an "Updated on" date, a changelog
note, or an erratum at the top for a correction that changes the conclusion.

### Step 5: Complete and confirm

Write `refresh-plan.md` and recommend starting a new intent under the
`refresh` profile to carry it out. Report `awaiting-approval` and present
the gate.
