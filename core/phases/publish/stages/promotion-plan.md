---
slug: promotion-plan
name: Promotion Plan
phase: publish
execution: CONDITIONAL
condition: Runs when the post will be actively distributed beyond the blog itself
lead_agent: distribution-agent
support_agents:
  - copywriter-agent
mode: inline
produces:
  - promotion-plan
  - social-copy
consumes:
  - artifact: final-draft
    required: true
  - artifact: publish-record
    required: false
  - artifact: audience-profile
    required: false
  - artifact: headline-options
    required: false
requires_stage:
  - publish-package
inputs: Final draft, publish record, audience profile, channels in project memory
outputs: promotion-plan.md, social-copy.md
---

# Promotion Plan

## Steps

### Step 1: Decide whether promotion applies

When the author will not share the post beyond the blog and its feed, report
`--result skipped` with the reason. Otherwise continue.

### Step 2: Pick channels

Choose the channels where the reader in the audience profile actually is,
from the list in project memory: newsletter, LinkedIn, X/Twitter, Mastodon,
Bluesky, Reddit, Hacker News, dev.to, communities. Note each channel's
self-promotion rules.

### Step 3: Write channel-native copy

For each channel write copy that stands on its own: the insight first, the
link second. Respect length limits. Offer two variants for the primary
channel. Record everything in `social-copy.md`.

### Step 4: Schedule and cross-post

Propose a timeline (launch day, follow-ups, a later resurfacing) and any
cross-posting with a canonical URL back to the blog. The author posts; no
agent posts on the author's behalf.

### Step 5: Complete and confirm

Write `promotion-plan.md`. Report `awaiting-approval` and present the gate.
