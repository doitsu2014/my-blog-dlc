# my-blog-dlc for Codex CLI

This project uses **my-blog-dlc**, an AI-assisted blog writing lifecycle
built around six phases: **Discover → Outline → Draft → Refine → Publish →
Evolve**.

## Start a workflow

Type `$blogdlc` followed by the post you want to write:

```text
$blogdlc Write a tutorial on Kubernetes liveness and readiness probes
```

The workflow profile is detected from the request. You can name one
explicitly: `classic`, `quick`, `tutorial`, `deep-dive`, `opinion`,
`refresh`, `repurpose`.

## Commands

| Command | Purpose |
| --- | --- |
| `{{INVOKE}}` | Start or resume the active workflow |
| `{{INVOKE}} --status` | Show the active intent, scope, and stage |
| `{{INVOKE}} --doctor` | Validate the workspace and configuration |
| `{{INVOKE}} --version` | Print the framework version |

On the command line the same operations are available as
`my-blog-dlc status`, `my-blog-dlc doctor`, and `my-blog-dlc orchestrate next`.

## What was installed

- `.agents/skills/blogdlc/` — the orchestrator skill (Codex discovers it there)
- `.agents/skills/` — reference skills: editorial-style, technical-writing,
  seo-onpage, platform-publishing
- `{{HARNESS_DIR}}/agents/` — the 17 agent personas
- `{{HARNESS_DIR}}/phases/` — the six phases and their stages
- `{{HARNESS_DIR}}/scopes/` — the workflow profiles
- `{{HARNESS_DIR}}/protocols/` — stage, question, recovery, and learnings protocols
- `{{HARNESS_DIR}}/tools/` — the deterministic engine

## Editorial method

Standards, voice, audience, and platform settings live in
`blogdlc/spaces/default/memory/` (`org.md`, `team.md`, `project.md`). Fill in
`project.md` before the first workflow.

## Trust

Codex runs project hooks and skills only in a trusted project. Approve the
project when Codex asks; if skills do not appear, trust the folder and restart
the session.
