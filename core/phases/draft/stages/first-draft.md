---
slug: first-draft
name: First Draft
phase: draft
execution: ALWAYS
condition: Always executes — writes (or, for a refresh, revises) the post
lead_agent: writer-agent
support_agents: []
mode: inline
produces:
  - draft
  - draft-notes
consumes:
  - artifact: content-brief
    required: true
  - artifact: outline
    required: false
  - artifact: angle-statement
    required: false
  - artifact: headline-options
    required: false
  - artifact: hook
    required: false
  - artifact: audience-profile
    required: false
  - artifact: research-notes
    required: false
  - artifact: source-register
    required: false
requires_stage:
  - brief-capture
  - structure-outline
  - headline-and-hook
inputs: Outline, hook, headline, brief, research notes, voice notes in project memory
outputs: draft.md, draft-notes.md
---

# First Draft

## Steps

### Step 1: Load voice and structure

Read the voice, tone, and style sections of project memory, and one or two
recent posts from the blog's content directory as voice samples. Read the
outline, hook, and chosen headline. When there is no outline (a `quick`
post), sketch a three-to-five-point outline from the brief first and show it
in `draft-notes.md`.

For a refresh, start from the existing post instead of a blank page and keep
everything that is still true and still works.

### Step 2: Write the draft

Write `draft.md` in Markdown, section by section, following the outline.
Use the chosen headline as the H1 and the chosen hook as the opening. Keep
the author's voice; avoid filler, stacked hedges, and generic phrasing
("In today's fast-paced world", "Let's dive in", "It's worth noting").

### Step 3: Mark what you do not know

Wherever the draft needs a fact, number, or quote not in the source register,
insert `[TK: what is needed]` rather than inventing it. Wherever the author's
personal experience belongs, insert `[AUTHOR: prompt]`. Never fabricate an
anecdote, a quote, a statistic, or a citation.

### Step 4: Record deviations

In `draft-notes.md` record: word count, sections that moved or merged and
why, every `[TK]` and `[AUTHOR]` placeholder, and code or visuals the draft
expects.

### Step 5: Complete and confirm

Present the draft with the list of open placeholders. Report
`awaiting-approval` and present the gate.
