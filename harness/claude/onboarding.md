# my-blog-dlc for Claude Code

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

## Commands

| Command | Purpose |
| --- | --- |
| `{{INVOKE}}` | Start or resume the active workflow |
| `{{INVOKE}} --status` | Show the active intent, scope, and stage |
| `{{INVOKE}} --doctor` | Validate the workspace and configuration |
| `{{INVOKE}} --version` | Print the framework version |

On the command line the same operations are available as
`my-blog-dlc status`, `my-blog-dlc doctor`, and `my-blog-dlc orchestrate next`.

## Editorial method (imported)

The method — layered practice files `org.md`, `team.md`, `project.md`
(standards, voice, audience, platform) — is authored once at
`blogdlc/spaces/default/memory/` and pulled into Claude's ambient context by
`.claude/rules/blogdlc.md`. Edit the method there, never in the stub. Fill in
`project.md` before the first workflow.

## What was installed

- `{{HARNESS_DIR}}/skills/blogdlc/` — the orchestrator skill
- `{{HARNESS_DIR}}/skills/` — reference skills: editorial-style,
  technical-writing, seo-onpage, platform-publishing
- `{{HARNESS_DIR}}/rules/blogdlc.md` — the ambient method import
- `{{HARNESS_DIR}}/agents/` — the 17 agent personas
- `{{HARNESS_DIR}}/phases/` — the six phases and their stages
- `{{HARNESS_DIR}}/scopes/` — the workflow profiles
- `{{HARNESS_DIR}}/protocols/` — stage, question, recovery, and learnings protocols
- `{{HARNESS_DIR}}/tools/` — the deterministic engine

## Personal overrides

Copy `.claude/settings.local.json.example` to `.claude/settings.local.json`
(gitignored) to override settings without affecting shared configuration.
