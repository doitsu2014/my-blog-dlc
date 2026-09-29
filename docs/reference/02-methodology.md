# Methodology reference

The methodology is data: phases, stages, scopes, and agents authored as
Markdown with YAML frontmatter. The engine loads it at runtime and derives the
workflow order for a scope. Adding a stage never requires an engine change.

## Layout

```
core/
  phases/<phase>/phase.md          # phase metadata
  phases/<phase>/stages/<stage>.md # stage metadata + body
  scopes/<scope>.md                # workflow profile
  agents/<agent>.md                # agent persona
  skills/<skill>/SKILL.md          # orchestrator + reference skills
  protocols/*.md                   # stage, question, recovery, learnings
  knowledge/*.md                   # audit format, artifact vocabulary
  memory/{org,team,project}.md     # memory templates
  data/stage-graph.json            # compiled graph (generated)
```

## Phase frontmatter

| Field | Type | Notes |
| --- | --- | --- |
| `slug` | string | Must match the directory name |
| `name` | string | Display name |
| `order` | number | Sort order (1–6: discover, outline, draft, refine, publish, evolve) |
| `focus` | string | |
| `ai_role` | string | |
| `output` | string | |
| `description` | string | |
| `key_activities` | string[] | |
| `example_prompts` | string[] | |

## Stage frontmatter

| Field | Type | Notes |
| --- | --- | --- |
| `slug` | string | Must match the filename stem |
| `name` | string | Display name (defaults to title case) |
| `phase` | string | One of the six phase slugs; must match the parent directory |
| `execution` | `ALWAYS` \| `CONDITIONAL` | |
| `condition` | string | Required for conditional stages |
| `lead_agent` | string | Must reference a known agent |
| `support_agents` | string[] | |
| `mode` | `inline` \| `subagent` \| `pipeline` \| `mob` | Default `inline` |
| `reviewer` | string | Optional reviewer agent |
| `review_class` | `adversarial` \| `advisory` | |
| `produces` | string[] | Artifact names |
| `consumes` | object[] | `{ artifact, required }` |
| `requires_stage` | string[] | Ordering edges (ignored when the target is not in the scope) |
| `workspace_requires` | boolean | Stage writes outside the record (code, post files) |
| `question_budget` | `{ min, max }` | Optional per-stage question cap |
| `scopes` | string[] | Optional explicit scope list (overrides phase membership) |
| `inputs` / `outputs` | string | Human-facing prose |

## Scope frontmatter

| Field | Type | Notes |
| --- | --- | --- |
| `name` | string | Profile name |
| `depth` | `Minimal` \| `Standard` \| `Comprehensive` | |
| `keywords` | string[] | Trigger phrases for auto-detection (longest match wins) |
| `description` | string | |
| `phases` | string[] | Phases that run |
| `include` / `skip` | string[] | Stage-level overrides |
| `skeleton` | `on` \| `off` | |
| `review_cap` | `blocking` \| `advisory` \| `none` | |
| `guard_policy` | `strict` \| `relaxed` \| `off` | What happens when an approved input changes |
| `sensors` | `on` \| `off` | |
| `learnings` | `on` \| `off` | Enables the learnings protocol and stage diaries |
| `summary_confirmation` | `on` \| `off` | |
| `mode` | `normal` \| `yolo` | Optional autonomy override |
| `question_budget` | `{ min, max }` | Optional per-scope question cap |

## Agent frontmatter

| Field | Type | Notes |
| --- | --- | --- |
| `name` | string | Equals the filename stem |
| `display_name` | string | |
| `tier` | `judgment` \| `balanced` \| `templated` | Reasoning-depth hint |
| `description` | string | Folded (`>`) scalar allowed |

## Skill frontmatter

`name` (equals the directory name) and `description` (routing text, at most
1024 characters). The orchestrator skill also sets `argument-hint`.

## Artifacts

Artifact names are lowercase-kebab; the full registry (artifact → producing
stage → description) is in
[`core/knowledge/artifacts.md`](../../core/knowledge/artifacts.md). A consumed
artifact resolves to the producing stage's record path; missing ones appear in
the directive's `consumes_absent`.

## Applicability

A stage runs under a scope when:

1. the stage declares an explicit `scopes` list and the scope is in it, or
2. the scope's `include` names the stage, or
3. the stage's phase is in `scope.phases` and the scope's `skip` does not name
   the stage.

## Workflow order

Applicable stages are topologically sorted by `requires_stage` edges (edges to
stages outside the scope are dropped), with ties broken by phase order and
then slug. This yields the deterministic `stage_index` and `stage_total` that
directives carry.

## Compiled graph

`node scripts/package.mjs` compiles the methodology to
`core/data/stage-graph.json`: phases, stages, scopes, and the `scopeGrid`
(scope → ordered stage slugs). `my-blog-dlc graph` prints the same structure.

## Adding a stage

1. Add `core/phases/<phase>/stages/<slug>.md` with the frontmatter above.
2. Reference only known agents and produced artifacts.
3. Give conditional stages a `condition` and a self-skip step that reports
   `--result skipped --reason "…"`.
4. Add the stage to a scope's `include` if phase membership does not cover it.
5. Run `node scripts/package.mjs`, `node scripts/lint.mjs`, and
   `node tests/run-tests.mjs`.
