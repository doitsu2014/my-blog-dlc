# Agents

Seventeen agents, defined in `core/agents/`. A stage names one lead agent and
optional support agents; the conductor reads the lead persona before running
the stage. Tier hints at the reasoning depth the role needs: `judgment` for
decisions and reviews, `balanced` for production work.

| Agent | Display name | Tier | Leads | Supports |
| --- | --- | --- | --- | --- |
| `composer-agent` | Adaptive Composer | judgment | profile selection and plan reshaping (cross-cutting) | — |
| `content-strategist-agent` | Content Strategist | judgment | brief-capture, angle-definition, content-refresh | audience-analysis |
| `audience-analyst-agent` | Audience Analyst | balanced | audience-analysis | keyword-research, angle-definition, developmental-edit |
| `research-agent` | Research Agent | balanced | topic-research | fact-check |
| `seo-agent` | SEO Specialist | balanced | keyword-research, seo-optimization | headline-and-hook, performance-review |
| `outline-architect-agent` | Outline Architect | judgment | structure-outline | — |
| `copywriter-agent` | Copywriter | balanced | headline-and-hook | seo-optimization, promotion-plan, repurposing |
| `writer-agent` | Writer Agent | balanced | first-draft | — |
| `technical-author-agent` | Technical Author | balanced | code-examples | technical-review |
| `visual-designer-agent` | Visual Designer | balanced | visual-assets | — |
| `developmental-editor-agent` | Developmental Editor | judgment | developmental-edit | structure-outline |
| `technical-reviewer-agent` | Technical Reviewer | judgment | technical-review | code-examples |
| `fact-checker-agent` | Fact Checker | judgment | fact-check | topic-research, content-refresh |
| `copy-editor-agent` | Copy Editor | balanced | copy-edit | — |
| `publisher-agent` | Publisher Agent | balanced | publish-package | — |
| `distribution-agent` | Distribution Strategist | balanced | promotion-plan, repurposing | — |
| `analytics-agent` | Content Analyst | balanced | performance-review | content-refresh |

## What each one owns

- **Adaptive Composer** — picks the lightest profile that keeps the gates the
  post needs; proposes reshaping mid-workflow, never silently.
- **Content Strategist** — one reader, one takeaway, one goal; chooses the
  angle; decides light update vs refresh vs rewrite.
- **Audience Analyst** — concrete reader profile, assumed knowledge,
  objections; reads every review as that reader.
- **Research Agent** — primary sources, a source register, the coverage gap.
- **SEO Specialist** — search intent, keyword map, metadata, internal links;
  readability wins every conflict; real data only.
- **Outline Architect** — structure pattern and section plan where every
  section serves the thesis.
- **Copywriter** — honest headlines and hooks; channel-native promotion copy.
- **Writer Agent** — drafts in the author's voice; marks gaps with `[TK]` and
  `[AUTHOR]`; never fabricates.
- **Technical Author** — minimal, runnable, version-pinned examples; runs
  every one.
- **Visual Designer** — visuals only where they carry meaning; alt text and
  licences for all.
- **Developmental Editor** — structure, argument, pacing; findings classified
  blocking / major / minor / nit.
- **Technical Reviewer** — re-runs examples from a clean state; flags wrong,
  outdated, or unsafe code.
- **Fact Checker** — every checkable claim verified against a primary source;
  a known-wrong claim is blocking.
- **Copy Editor** — style guide, clarity, mechanics; keeps the voice; never
  changes meaning silently.
- **Publisher Agent** — front matter and file layout per project memory; runs
  the build; hands the release to the author.
- **Distribution Strategist** — channels where the reader is; cross-posts with
  canonical URLs; adapts, never pastes.
- **Content Analyst** — measures against the brief with data the author
  supplies; proposes refreshes and learnings.

## Adding an agent

Add `core/agents/<slug>-agent.md` with `name`, `display_name`, `tier`, and
`description`, then reference it from a stage. An agent unreferenced by any
stage (other than `composer-agent`) fails `node scripts/lint.mjs`.
