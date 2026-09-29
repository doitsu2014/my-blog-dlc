# my-blog-dlc for PI Agent

This project uses **my-blog-dlc**, an AI-assisted blog writing lifecycle
built around six phases: **Discover → Outline → Draft → Refine → Publish →
Evolve**.

## Start a workflow

Type `/blogdlc` followed by the post you want to write:

```text
/blogdlc Write a tutorial on Kubernetes liveness and readiness probes
```

The workflow profile is detected from the request. You can name one
explicitly: `classic`, `quick`, `tutorial`, `deep-dive`, `opinion`,
`refresh`, `repurpose`.

Force the skill when needed: `/skill:blogdlc`.

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

- `{{HARNESS_DIR}}/skills/blogdlc/` — the orchestrator skill (PI loads it on demand)
- `{{HARNESS_DIR}}/skills/` — reference skills: editorial-style,
  technical-writing, seo-onpage, platform-publishing
- `{{HARNESS_DIR}}/prompts/blogdlc.md` — the `/blogdlc` prompt template
- `{{HARNESS_DIR}}/agents/` — the 17 agent personas
- `{{HARNESS_DIR}}/phases/` — the six phases and their stages
- `{{HARNESS_DIR}}/scopes/` — the workflow profiles
- `{{HARNESS_DIR}}/protocols/` — stage, question, recovery, and learnings protocols
- `{{HARNESS_DIR}}/tools/` — the deterministic engine

## Workspace

`blogdlc/` holds the workspace: memory (`spaces/default/memory/`), intent
artifacts (`spaces/default/intents/`), `state.json`, and `audit.log`. Fill in
`spaces/default/memory/project.md` (voice, audience, platform) before the
first workflow.

## Principles

- Every post has one reader and one takeaway.
- Drafting is cheap; voice and truth are the constraint.
- Nothing is fabricated: gaps are marked, never filled with invention.
- The author publishes. Every post is read by a human before it ships.
