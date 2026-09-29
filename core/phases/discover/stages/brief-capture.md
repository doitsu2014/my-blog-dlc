---
slug: brief-capture
name: Brief Capture
phase: discover
execution: ALWAYS
condition: Always executes — establishes what the piece is, for whom, and why
lead_agent: content-strategist-agent
support_agents: []
mode: inline
produces:
  - content-brief
  - brief-questions
consumes: []
requires_stage: []
inputs: The author's idea, notes, links, an existing post (for refresh or repurpose)
outputs: content-brief.md, brief-questions.md
---

# Brief Capture

## Steps

### Step 1: Load prior context

Read the request and any notes, links, or drafts the author supplied. Read
project memory (`blogdlc/spaces/<space>/memory/project.md`) for the blog's
audience, voice, platform, and content pillars. When the request refreshes
or repurposes an existing post, locate that post and read it in full.

### Step 2: Ask clarifying questions

Create `<record>/discover/brief-capture/brief-questions.md` and ask:

- What is the one thing the reader should know or be able to do afterwards?
- Who is the reader, and why would they read this now?
- What post type is this: tutorial, deep dive, opinion, news, TIL, update?
- What is explicitly out of scope?
- What does success look like: comments, sign-ups, search traffic, a decision?
- Is there a deadline, target length, or series this belongs to?

Follow the question flow in `protocols/question-flow.md`.

### Step 3: Analyse answers

Run ambiguity detection and contradiction analysis. A post that tries to
serve two readers or make two points is two posts; say so and let the author
choose. Do not carry a contradiction into the next stage.

### Step 4: Generate the content brief

Write a one-page brief: working title, post type, reader, key takeaway,
success criteria, in/out of scope, target length, deadline, source post (for
refresh or repurpose), and assumptions.

### Step 5: Complete and confirm

Report the lifecycle outcome through the engine
(`my-blog-dlc orchestrate report --stage brief-capture --result awaiting-approval`)
and present the approval gate.
