---
name: editorial-style
description: >
  Use when drafting, editing, or proofreading blog prose: applying the blog's
  voice and style guide, cutting filler and generic AI phrasing, readability,
  headings and lists, inclusive and accessible language, attribution and
  quotes, and change discipline that keeps the author's voice. Applies to any
  language variant the project memory names.
license: MIT
compatibility: Any blog, any platform.
---

# Editorial Style

Apply this skill whenever a stage writes or edits prose. The goal is a post
that is clear, correct, consistent, and unmistakably the author's.

## When this skill applies

- Outline: tone decisions in the angle statement, headline and hook copy.
- Draft: writing in the author's voice.
- Refine: developmental and copy editing.
- Publish and Evolve: social copy and repurposed content.

## Precedence

1. The style guide and voice notes in project memory.
2. The author's established habits, visible in recent posts.
3. This skill's defaults.

When project memory is silent on a rule, follow the defaults below and
propose the rule as a learning.

## Voice

- Read one or two recent posts before drafting or editing; match sentence
  length, formality, humour, and person (I/we/you).
- Keep the author's opinions strong where they are strong; do not sand them
  into neutrality.
- Never invent personal anecdotes, feelings, or experiences. Use
  `[AUTHOR: prompt]` placeholders instead.

## Clarity defaults

- Lead with the point; background second.
- One idea per paragraph; short paragraphs for screens.
- Active voice unless the actor is unknown or irrelevant.
- Concrete over abstract: a specific example beats a general claim.
- Break sentences over about 30 words.
- Define jargon at first use for the reader in the audience profile.

## Cut on sight

- Throat-clearing: "In this post, we will explore…", "Before we begin…".
- Generic AI phrasing: "delve", "in today's fast-paced world", "let's dive
  in", "it's worth noting", "navigating the landscape", "a testament to",
  "game-changer", "unlock the power of", "in conclusion".
- Stacked hedges: "might possibly perhaps".
- Empty intensifiers: "very", "really", "extremely", "incredibly".
- Redundant summaries that repeat the previous paragraph.

## Mechanics checklist

- [ ] Spelling variant consistent (e.g. US or UK) per project memory.
- [ ] Heading case consistent (sentence case or title case).
- [ ] Heading levels do not skip (H2 → H4).
- [ ] List items parallel in grammar; punctuation consistent.
- [ ] Numbers per style guide (e.g. words for one to nine, numerals after).
- [ ] Product names and casing correct (`JavaScript`, `GitHub`, `macOS`).
- [ ] Link text meaningful out of context.
- [ ] Code identifiers in backticks; code fences tagged.
- [ ] No leftover `[TK]` or `[AUTHOR]` placeholders.
- [ ] Dates and time zones unambiguous.

## Inclusive and accessible language

- Prefer neutral terms (`allowlist/denylist`, `primary/replica`).
- Use they/them for unspecified people.
- Avoid "simply", "just", "obviously", "easy" — they shame readers who
  struggle.
- Avoid idioms that do not translate for an international audience.
- Describe images in alt text; never rely on colour alone.

## Quotes and attribution

- Quotes are verbatim, attributed, and linked to the source.
- Paraphrases are credited.
- Never attribute a statement to a person without a source.

## Change discipline

- Copy edits improve expression; they never change a claim silently.
- Record categories of change; flag any change of meaning for the author.
- When unsure whether a quirk is voice or error, ask.

## Common pitfalls

- Editing the voice away and leaving generic prose.
- Line editing sections the developmental edit will cut.
- Inconsistent terminology for the same thing within one post.
- Headlines and social copy that sound like a different writer.

## How this skill plugs into my-blog-dlc

- `angle-definition`: record tone in `angle-statement`.
- `headline-and-hook` and `promotion-plan`: keep copy in the author's voice.
- `first-draft`: follow voice notes and record placeholders in
  `draft-notes`.
- `developmental-edit`: classify prose-level issues only after structure.
- `copy-edit`: apply the mechanics checklist; record changes in
  `copy-edit-notes` and produce `final-draft`.
- `repurposing`: adapt voice per format in `repurposed-content`.
- Record the style guide (spelling variant, heading case, numerals,
  terminology, banned phrases) and voice notes in project memory at
  `blogdlc/spaces/default/memory/project.md`.
