# my-blog-dlc

This project uses **my-blog-dlc** for structured AI-assisted blog writing
across six phases: **Discover → Outline → Draft → Refine → Publish → Evolve**.

## Start a workflow

Describe the post you want to write:

```text
{{INVOKE}} Write a tutorial on Kubernetes liveness and readiness probes
```

The workflow profile is detected from the request. You can also name one
explicitly: `classic`, `quick`, `tutorial`, `deep-dive`, `opinion`,
`refresh`, `repurpose`.

## Commands

| Command | Purpose |
| --- | --- |
| `{{INVOKE}}` | Start or resume the active workflow |
| `{{INVOKE}} --status` | Show the active intent, scope, and stage |
| `{{INVOKE}} --doctor` | Validate the workspace and configuration |
| `{{INVOKE}} --version` | Print the framework version |

On the command line, the same operations are available as
`my-blog-dlc status`, `my-blog-dlc doctor`, and `my-blog-dlc orchestrate next`.

## Principles

- Every post has one reader and one takeaway.
- Drafting is cheap; voice and truth are the constraint.
- Nothing is fabricated: gaps are marked, never filled with invention.
- The author publishes. Every post is read by a human before it ships.
- The compounding asset is your context — voice, audience, archive — not
  the model.

## Where things live

- `blogdlc/` — the workspace: memory, artifacts, state, and audit log
- `{{HARNESS_DIR}}/` — the harness configuration and engine
