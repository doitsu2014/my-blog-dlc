---
slug: fact-check
name: Fact Check
phase: refine
execution: ALWAYS
condition: Always executes — every claim that could be wrong is checked before it is public
lead_agent: fact-checker-agent
support_agents:
  - research-agent
mode: inline
produces:
  - fact-check-report
consumes:
  - artifact: draft
    required: true
  - artifact: source-register
    required: false
  - artifact: research-notes
    required: false
requires_stage:
  - developmental-edit
  - technical-review
inputs: Draft, source register, research notes
outputs: fact-check-report.md
---

# Fact Check

## Steps

### Step 1: Extract the claims

List every checkable claim in the draft: numbers, dates, names, quotes,
version numbers, "X is faster than Y", "most teams do Z", and every
statement attributed to a person or organisation.

### Step 2: Verify each claim

Check each claim against a primary source. Record the verdict: verified,
outdated, unsupported, or wrong, with the source and the date checked.
Resolve every remaining `[TK]` placeholder or escalate it to the author.

### Step 3: Check links and attribution

Every link resolves and points at what the text says it does. Every quote is
verbatim and attributed. Borrowed ideas are credited.

### Step 4: Propose corrections

For each non-verified claim, propose a fix: correct it, cite it, soften it
("in my experience"), or remove it. Apply the author's accepted fixes to
the draft.

### Step 5: Complete and confirm

Write `fact-check-report.md`. Report `awaiting-approval` and present the
gate. A claim marked wrong and left in the draft is a blocking finding.
