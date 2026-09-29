---
slug: refine
name: Refine
order: 4
focus: Editing and verification
ai_role: Editor
output: Developmental review, fact-check report, final draft
description: Edit for structure, verify every claim, and polish the language
key_activities:
  - Developmental (structural) editing
  - Technical review of code and commands
  - Fact-checking and citation
  - Copy editing and proofreading
example_prompts:
  - "Where does this draft lose the reader?"
  - "Check every claim in this post against its source"
  - "Does this code still work on the current version?"
  - "Tighten this without changing my voice"
---

# Phase 4 — Refine

Refine is where a draft becomes publishable. Editing moves from large to
small: structure first, then technical accuracy, then facts, then sentences.
Polishing a paragraph that the structural edit will delete is wasted work.

## Focus

Editing and verification.

## The AI's role

Editor. The model reads the draft in full, classifies findings by severity,
and cites the exact passage. The bar for AI-assisted writing is the bar for
human writing, applied with more suspicion. The human decides which edits to
accept.

## Outputs

- A developmental review with structural findings and applied revisions
- A technical review record (technical posts)
- A fact-check report: every claim, its source, and its verdict
- A final draft with copy-edit notes

## Gates

Every stage in Refine ends at a human approval gate. Blocking findings must
be resolved before the stage completes.

## Exit criteria

- No open blocking findings
- Every factual claim is verified, softened, or removed
- Every code sample passed technical review
- The final draft passes the style guide in project memory

## Next phase

When Refine is approved, [Publish](../publish/phase.md) optimises for search,
packages the post for the blog platform, and plans distribution.
