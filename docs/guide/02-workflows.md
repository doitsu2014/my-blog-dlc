# Workflow guide

## Phases

| # | Phase | Focus | AI role | Output |
| --- | --- | --- | --- | --- |
| 1 | Discover | Topic and audience | Research assistant | Content brief, audience profile, research notes |
| 2 | Outline | Angle and structure | Thinking partner | Angle statement, outline, headline options, hook |
| 3 | Draft | Writing | Writing partner | Draft, code samples, asset plan |
| 4 | Refine | Editing and verification | Editor | Developmental review, fact-check report, final draft |
| 5 | Publish | Release and distribution | Publishing assistant | SEO metadata, packaged post, promotion plan |
| 6 | Evolve | Measurement and improvement | Content analyst | Performance report, refresh plan, repurposed content |

## Stages

| Phase | Stage | Execution | Lead agent | Produces |
| --- | --- | --- | --- | --- |
| Discover | `brief-capture` | ALWAYS | content-strategist | content-brief, brief-questions |
| Discover | `audience-analysis` | ALWAYS | audience-analyst | audience-profile |
| Discover | `topic-research` | CONDITIONAL | research | research-notes, source-register |
| Discover | `keyword-research` | CONDITIONAL | seo | keyword-map |
| Outline | `angle-definition` | ALWAYS | content-strategist | angle-statement |
| Outline | `structure-outline` | ALWAYS | outline-architect | outline, outline-questions |
| Outline | `headline-and-hook` | ALWAYS | copywriter | headline-options, hook |
| Draft | `first-draft` | ALWAYS | writer | draft, draft-notes |
| Draft | `code-examples` | CONDITIONAL | technical-author | code-samples, code-verification-log |
| Draft | `visual-assets` | CONDITIONAL | visual-designer | asset-plan |
| Refine | `developmental-edit` | ALWAYS | developmental-editor | developmental-review |
| Refine | `technical-review` | CONDITIONAL | technical-reviewer | technical-review-record |
| Refine | `fact-check` | ALWAYS | fact-checker | fact-check-report |
| Refine | `copy-edit` | ALWAYS | copy-editor | final-draft, copy-edit-notes |
| Publish | `seo-optimization` | ALWAYS | seo | seo-metadata |
| Publish | `publish-package` | ALWAYS | publisher | publish-record (+ post file in content dir) |
| Publish | `promotion-plan` | CONDITIONAL | distribution | promotion-plan, social-copy |
| Evolve | `performance-review` | ALWAYS | analytics | performance-report |
| Evolve | `content-refresh` | CONDITIONAL | content-strategist | refresh-plan |
| Evolve | `repurposing` | CONDITIONAL | distribution | repurposed-content |

A CONDITIONAL stage checks its condition first and, when it does not apply,
reports `skipped` with a recorded reason.

## Profiles

The profile is detected from keywords in the request (longest match wins);
with no match, `classic` (or `defaultScope` in `blogdlc/config.json`) runs.
Force one with `--scope <name>`.

### `classic` (default) — 20 stages

All six phases.

brief-capture → audience-analysis → topic-research → keyword-research →
angle-definition → structure-outline → headline-and-hook → first-draft →
code-examples → visual-assets → developmental-edit → technical-review →
fact-check → copy-edit → seo-optimization → publish-package → promotion-plan →
performance-review → content-refresh → repurposing

### `quick` — 4 stages

TILs, notes, snippets. Keywords: quick, short, til, today i learned, note,
snippet, tiny, express. Question budget max 2; learnings off.

brief-capture → first-draft → copy-edit → publish-package

### `tutorial` — 17 stages

Technical how-to; code verification and technical review are central.
Keywords: tutorial, how to, how-to, guide, walkthrough, step by step,
step-by-step, getting started, setup, install. Review cap `blocking`.

brief-capture → audience-analysis → topic-research → keyword-research →
angle-definition → structure-outline → headline-and-hook → first-draft →
code-examples → visual-assets → developmental-edit → technical-review →
fact-check → copy-edit → seo-optimization → publish-package → promotion-plan

### `deep-dive` — 17 stages

Long-form, research-heavy. Keywords: deep dive, deep-dive, analysis,
explainer, investigation, long-form, long form, comparison, benchmark,
research. Guard policy `strict`, review cap `blocking`, question budget
min 1 / max 6. Same stage list as `tutorial`; topic research is expected to
run.

### `opinion` — 12 stages

Essays and retrospectives. Keywords: opinion, essay, thoughts on, reflection,
perspective, hot take, personal, story, lessons learned, retrospective.

brief-capture → audience-analysis → angle-definition → structure-outline →
headline-and-hook → first-draft → developmental-edit → fact-check →
copy-edit → seo-optimization → publish-package → promotion-plan

### `refresh` — 7 stages

Update an existing post. Keywords: refresh, update, revise, rewrite,
outdated, correction, erratum, typo, fix post. Question budget max 3.

brief-capture → keyword-research → first-draft → fact-check → copy-edit →
seo-optimization → publish-package

### `repurpose` — 3 stages

Adapt a post into other formats. Keywords: repurpose, thread, newsletter,
linkedin, cross-post, crosspost, syndicate, social post, talk outline.

brief-capture → audience-analysis → repurposing

Check any profile with `my-blog-dlc scope <name>`.

## Gates

Every executed stage ends at a human gate: **Approve**, **Request Changes**,
and where relevant **Skip**. Request Changes runs Keep / Modify / Redo, then
re-presents the gate.

## Execution modes

| Mode | Questions | Gates |
| --- | --- | --- |
| `normal` (default) | Asked, within the question budget | Presented to you |
| `yolo` | Skipped; recommended answer chosen | Auto-approved (`STAGE_AUTO_APPROVED` in audit log) |

```bash
my-blog-dlc config --mode yolo
my-blog-dlc config --mode normal
```

YOLO still runs every stage and never releases a post: Publish Package leaves
the post marked as a draft, and nothing is pushed, merged, deployed, or posted.

## Question budget

Precedence: stage `question_budget` → scope `question_budget` → project
`questionBudget` → default `{ min: 0, max: 5 }`. `max: 0` disables questions.

```bash
my-blog-dlc config --questions-min 1 --questions-max 3
```

## Non-negotiables

- Nothing is fabricated: gaps become `[TK: …]` and `[AUTHOR: …]` placeholders.
- Code is run before it is called working; the post is built before it is
  called publishable.
- The author publishes, merges, deploys, and posts. No agent does it for them.

## Parking and resuming

```bash
my-blog-dlc orchestrate park           # park at an inter-stage boundary
my-blog-dlc orchestrate next --resume  # continue
```
