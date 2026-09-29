# Harnesses

my-blog-dlc is one harness-neutral core with thin per-harness projections. The
methodology, agents, stages, scopes, and engine are identical on every
harness; only discovery paths, invocation, and settings differ.

| Harness | Configure | Invoke | Harness dir | Skill location | Context file |
| --- | --- | --- | --- | --- | --- |
| PI Agent | `my-blog-dlc config --harness pi` | `/blogdlc` | `.pi/` | `.pi/skills/blogdlc/` | `AGENTS.md` |
| Codex CLI | `my-blog-dlc config --harness codex` | `$blogdlc` | `.codex/` | `.agents/skills/blogdlc/` | `AGENTS.md` |
| Claude Code | `my-blog-dlc config --harness claude` | `/blogdlc` | `.claude/` | `.claude/skills/blogdlc/` | `CLAUDE.md` |

Every harness also gets the four reference skills (`editorial-style`,
`technical-writing`, `seo-onpage`, `platform-publishing`) next to the
orchestrator skill, and the shared workspace at `blogdlc/`.

`config` merges a managed block into the context file and `.gitignore`
(delimited by `# BEGIN my-blog-dlc:<harness>` / `# END …`), so your own
content in those files is preserved.

## PI Agent

Project config lives in `.pi/`. PI discovers project skills under
`.pi/skills/` and prompt templates under `.pi/prompts/` after project trust is
granted. my-blog-dlc ships:

- `.pi/skills/blogdlc/SKILL.md` — the orchestrator, loaded on demand
- `.pi/prompts/blogdlc.md` — the `/blogdlc` prompt template
- `.pi/agents/`, `.pi/phases/`, `.pi/scopes/`, `.pi/protocols/`,
  `.pi/knowledge/`, `.pi/tools/`

Force the skill with `/skill:blogdlc` when automatic routing misses it.

## Codex CLI

Project config lives in `.codex/`. Codex discovers skills at
`.agents/skills/`, so my-blog-dlc places the orchestrator and reference skills
there. The context file is `AGENTS.md` and the invoke token is `$blogdlc`.

Codex runs project skills and hooks only in a trusted project. Approve the
project when prompted; if skills do not appear, trust the folder and restart
the session. `.codex/config.toml` sets `project_doc = "AGENTS.md"` and enables
network access for research.

## Claude Code

Project config lives in `.claude/`. The orchestrator skill is at
`.claude/skills/blogdlc/SKILL.md`, and `.claude/rules/blogdlc.md` imports the
memory files (`blogdlc/spaces/default/memory/*`) into ambient context by
reference — a stub, not a copy. Edit the method at the workspace root.

`.claude/settings.json` pre-approves the engine's own commands plus
`WebSearch` and `WebFetch` for research. Copy
`.claude/settings.local.json.example` to `.claude/settings.local.json` for
personal overrides.

## Running the engine without a global install

The engine is projected into every harness directory, so a conductor can run
`node <harness-dir>/tools/my-blog-dlc.mjs <args>` when `my-blog-dlc` is not on
the PATH.

## Adding a harness

1. Create `harness/<name>/manifest.mjs` exporting a manifest object.
2. Add `harness/<name>/onboarding.md` and any native config files.
3. Register the harness dir and invoke string in `core/tools/lib/paths.mjs`.
4. Run `node scripts/package.mjs <name>`.

The manifest declares `coreDirs`, `coreFiles`, `harnessFiles`,
`projectFiles`, `coreProjectFiles`, and `onboarding`. The packager substitutes
`{{HARNESS_DIR}}`, `{{INVOKE}}`, and `{{PRODUCT}}` in every text file. See
[`harness/pi/manifest.mjs`](../../harness/pi/manifest.mjs) for the simplest
example.
