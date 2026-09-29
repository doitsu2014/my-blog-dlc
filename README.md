# my-blog-dlc

![version](https://img.shields.io/badge/version-0.1.0-blue)
![license](https://img.shields.io/badge/license-MIT-green)

my-blog-dlc turns AI coding assistants into a structured, verifiable
**blog writing** workflow. One harness-neutral core runs natively in
**PI Agent**, **Codex CLI**, and **Claude Code**.

It is the blog-writing sibling of
[my-aidlc](https://github.com/doitsu2014/my-aidlc): the same deterministic
engine, approval gates, audit trail, and layered memory, with a methodology
built for writing posts instead of shipping software.

```
Discover -> topic & audience            (Research assistant)
Outline  -> angle & structure           (Thinking partner)
Draft    -> writing, code, visuals      (Writing partner)
Refine   -> edit, verify, proofread     (Editor)
Publish  -> SEO, packaging, promotion   (Publishing assistant)
Evolve   -> measure, refresh, repurpose (Content analyst)
```

## Quick start

### 1. Install

macOS, Linux, or WSL (from a clone):

```bash
git clone https://github.com/doitsu2014/my-blog-dlc.git
cd my-blog-dlc
./scripts/install.sh --from .
```

Windows PowerShell:

```powershell
git clone https://github.com/doitsu2014/my-blog-dlc.git
cd my-blog-dlc
./scripts/install.ps1 -From .
```

The installer adds the `my-blog-dlc` command and shell completion for your
login shell. Node.js 20+ is required. To skip completion, pass
`--no-completion` (or `-NoCompletion` on Windows); manage it later with
`my-blog-dlc completion install|uninstall`.

### 2. Configure your blog repository

From the root of your blog (Hugo, Jekyll, Astro, Next.js/MDX, Eleventy, …):

```bash
cd /path/to/your-blog
my-blog-dlc config --harness claude   # or: pi, codex
my-blog-dlc doctor
```

This writes the harness directory, the engine, the methodology, the
orchestrator and reference skills, and the workspace memory files.

Then fill in `blogdlc/spaces/default/memory/project.md`: audience, voice,
style rules, and — most importantly — the **Platform** section (content
directory, file naming, front matter schema, preview and build commands).
The Draft, Refine, and Publish stages read it.

### 3. Start a workflow

Open your harness in the blog repository and describe the post:

```text
/blogdlc Write a tutorial on Kubernetes liveness and readiness probes
```

Codex CLI uses `$blogdlc`; PI Agent uses `/blogdlc` or `/skill:blogdlc`.
my-blog-dlc detects a workflow profile from the request (`tutorial` here),
asks for missing decisions, and stops at an approval gate after each stage.

## Pick your harness

| Harness | Configure | Open | Invoke |
| --- | --- | --- | --- |
| PI Agent | `my-blog-dlc config --harness pi` | `pi` | `/blogdlc` |
| Codex CLI | `my-blog-dlc config --harness codex` | `codex` | `$blogdlc` |
| Claude Code | `my-blog-dlc config --harness claude` | `claude` | `/blogdlc` |

## Workflow profiles

| Profile | Detected from | Stages |
| --- | --- | --- |
| `classic` | (default) | All 6 phases, 20 stages |
| `quick` | quick, short, TIL, note, snippet | brief → draft → copy edit → package |
| `tutorial` | tutorial, how to, guide, walkthrough, setup | Discover → Publish, verified code + technical review |
| `deep-dive` | deep dive, analysis, explainer, comparison, benchmark | Discover → Publish, strict sourcing, larger question budget |
| `opinion` | opinion, essay, reflection, lessons learned | Angle and edit heavy; no research, keyword, or code pass |
| `refresh` | update, refresh, revise, outdated, correction, typo | Revise an existing post, fact check, republish |
| `repurpose` | repurpose, thread, newsletter, LinkedIn, cross-post | Adapt a post to other formats |

Name one explicitly with `--scope <name>` or in the request. Conditional
stages (topic research, keyword research, code examples, visual assets,
technical review, promotion plan, content refresh, repurposing) self-skip
with a recorded reason when they do not apply.

## Guardrails

- **Nothing is fabricated.** Missing facts become `[TK: …]` placeholders and
  personal stories become `[AUTHOR: …]` prompts; the fact check and copy edit
  stages will not pass a post that still contains them.
- **The author publishes.** Publish Package writes the post into your content
  directory as a draft and runs your build — it never pushes, merges,
  deploys, or posts to social channels on your behalf.
- **Code runs before it ships.** Code Examples executes every sample and
  Technical Review re-runs it from a clean state.
- **Every decision is audited.** Gates, rejections, skips, and auto-approvals
  land in `blogdlc/audit.log`.

## Configuration

Project configuration is layered, most specific wins. Show the current values
with `my-blog-dlc config` (or `my-blog-dlc config --json`).

| File | Purpose | Committed |
| --- | --- | --- |
| `blogdlc/config.json` | Shared project settings | yes |
| `blogdlc/config.local.json` | Per-author overrides (wins over `config.json`) | ignored |

```json
{
  "harness": "claude",
  "version": "0.1.0",
  "mode": "normal",
  "questionBudget": { "min": 1, "max": 3 },
  "defaultScope": "classic"
}
```

### Execution mode

| Mode | Questions | Approval gates | Use for |
| --- | --- | --- | --- |
| `normal` (default) | Asked, bounded by the question budget | Presented to the author | Anything you will publish |
| `yolo` | Skipped; the recommended answer is chosen | Auto-satisfied | Rough drafts, experiments |

```bash
my-blog-dlc config --mode yolo       # auto-pick answers and auto-approve gates
my-blog-dlc config --mode normal     # back to human questions and gates
```

YOLO does **not** skip any stage and never releases a post; every
auto-approval is recorded as `STAGE_AUTO_APPROVED` in `blogdlc/audit.log`.

### Question budget

```bash
my-blog-dlc config --questions-min 1 --questions-max 3
my-blog-dlc config --questions-max 0     # no questions; generate directly
```

Precedence: **stage** `question_budget` → **scope** `question_budget` →
project `questionBudget` → default `{ min: 0, max: 5 }`.

### Workspace layout

```text
blogdlc/
  config.json            # project configuration
  config.local.json      # per-author overrides (gitignored)
  state.json             # active intent and stage progress (tool-owned)
  audit.log              # append-only event log (tool-owned)
  spaces/default/
    memory/              # org.md, team.md, project.md - standards, voice, platform
    intents/<id>/        # one directory per post; artifacts per phase/stage
```

`state.json` and `audit.log` are tool-owned: never edit them by hand.

### Inspecting and validating

```bash
my-blog-dlc config        # show harness, mode, and question budget
my-blog-dlc status        # active intent, mode, and per-stage progress
my-blog-dlc doctor        # validate the engine, workspace, and configuration
my-blog-dlc list stages   # phases | stages | scopes | agents
```

## What's inside

- **6 phases / 20 stages** from brief to measurement and refresh
- **17 agents** — strategist, audience analyst, researcher, SEO, outline
  architect, copywriter, writer, technical author, visual designer,
  developmental editor, technical reviewer, fact checker, copy editor,
  publisher, distribution, analytics, and the adaptive composer
- **7 workflow profiles** with keyword auto-detection
- **4 reference skills**: `editorial-style`, `technical-writing`,
  `seo-onpage`, `platform-publishing`
- **Human approval gates** at every stage, or opt-in **YOLO mode**
- **Audit trail** plus persistent org/team/project memory and a learnings
  ritual that feeds lessons back into memory
- **Shell completion** for bash, zsh, fish, and PowerShell

## Repository layout

- `core/` — hand-authored, harness-neutral methodology and engine
  - `core/phases/` — the six phases and their stage files
  - `core/agents/` — 17 agent definitions
  - `core/scopes/` — workflow profiles
  - `core/protocols/` — stage, question, recovery, and learnings protocols
  - `core/skills/` — the orchestrator skill and the reference skills
  - `core/memory/` — org/team/project memory templates
  - `core/knowledge/` — artifact vocabulary and audit format
  - `core/tools/` — the Node.js engine
  - `core/data/` — compiled stage graph and scope grid
- `harness/<name>/` — thin, harness-specific manifests and integrations
- `scripts/` — packaging, installer, and lint
- `tests/` — unit and integration tests
- `docs/` — user and developer documentation

Edit `core/` or `harness/<name>/`, never generated `dist/` output.

## Development

```bash
node scripts/package.mjs                 # generate every harness into dist/
node scripts/package.mjs --check         # determinism guard
node scripts/lint.mjs                    # methodology integrity
node tests/run-tests.mjs                 # unit + integration
```

## References

- [my-aidlc](https://github.com/doitsu2014/my-aidlc) — the software-delivery
  sibling this project is derived from
- [MIT license](LICENSE)
