---
name: technical-writing
description: >
  Use when writing, verifying, or reviewing technical blog content: tutorials,
  how-to guides, explainers, and deep dives that contain code, shell
  commands, configuration, or architecture. Covers example design, version
  pinning, running and logging every example, code-block presentation,
  explaining concepts to a named reader, and safe-by-default patterns.
license: MIT
compatibility: Any language, framework, or platform.
---

# Technical Writing for Blogs

Apply this skill whenever a post teaches code, commands, configuration, or
technical concepts. Readers copy examples into real systems months after
publication; treat every example as production input.

## When this skill applies

- Outline: choosing a tutorial or explainer structure.
- Draft: writing and running code examples.
- Refine: technical review and fact-checking technical claims.
- Evolve: refreshing posts after version changes.

## Know the post type

| Type | Reader's goal | Shape |
| --- | --- | --- |
| Tutorial | Learn by doing, end to end | Steps from nothing to a working result |
| How-to guide | Solve one specific problem | Goal, prerequisites, steps, verify |
| Explainer | Understand a concept | Problem, mental model, example, limits |
| Deep dive | Understand internals or trade-offs | Claim, evidence, implications |
| Reference | Look something up | Tables, exhaustive and scannable |

Do not mix types in one post. A tutorial that detours into theory loses the
reader who wants to finish.

## Prerequisites and environment

- State prerequisites up front: knowledge, tools, accounts, versions.
- Pin versions of language, runtime, framework, and key libraries
  (`Node.js 20`, `Python 3.12`, `Kubernetes 1.30`).
- State operating system and shell assumptions; note differences for
  macOS, Linux, and Windows where they matter.
- Record the date the examples were verified.

## Example design

- Prefer one example that grows through the post over many unrelated
  fragments.
- Each example is minimal (nothing irrelevant) and complete (imports,
  setup, and teardown shown or linked).
- Use realistic but fake data: `example.com`, `user@example.com`,
  `203.0.113.0/24`, placeholder keys like `YOUR_API_KEY`.
- Never include real secrets, tokens, internal hostnames, or personal data.
- Link a companion repository for anything longer than a screen.

## Run every example

1. Create a clean scratch directory or container.
2. Run each example and each command exactly as written in the post.
3. Record the command, the output, and pass/fail in the verification log.
4. When an example cannot be run here (paid service, special hardware),
   mark it `UNVERIFIED` and say why in the post or notes.
5. Keep the code in the draft byte-identical to the verified code.

## Code-block presentation

- Every fence has a language tag (` ```python `, ` ```bash `, ` ```yaml `).
- Separate commands from output; do not mix prompts (`$`) into copyable
  blocks unless the platform strips them.
- Show file names for files the reader creates (a caption or comment such as
  `# app/main.py`).
- Highlight or explain changed lines when an example evolves.
- Keep lines short enough to avoid horizontal scrolling where possible.

## Explaining

- Explain what the code does and why, not just what to type.
- Define every term the audience profile says the reader may not know, at
  first use.
- Label simplifications ("this ignores retries for clarity").
- Show expected output so readers can confirm they are on track.
- Include a troubleshooting note for the most likely failure.

## Safe by default

- Never disable TLS verification, use `chmod 777`, run as root, or pipe
  `curl` into a shell without an explicit warning and a safer alternative.
- Handle errors in code readers will copy.
- Use least-privilege credentials and environment variables for secrets.
- Mark destructive commands clearly (`rm -rf`, `DROP`, `--force`).

## Technical review checklist

- [ ] Every example re-runs from a clean state.
- [ ] APIs, flags, and options exist in the stated version and are not
      deprecated.
- [ ] Prose matches what the code actually does.
- [ ] No insecure pattern without a warning.
- [ ] Performance or comparison claims come with a reproducible method.
- [ ] Links point to the documentation for the stated version.

## Common pitfalls

- "It works on my machine" examples that depend on hidden local state.
- Undated posts with unpinned versions.
- Code fragments that cannot be assembled into a working whole.
- Benchmarks without method, hardware, or versions.
- Tutorials that skip the step the author found obvious.

## How this skill plugs into my-blog-dlc

- `structure-outline`: choose the post type and its shape; list
  prerequisites in `outline`.
- `code-examples`: pin the environment, build and run every example, and
  record commands and output in `code-verification-log` and final examples
  in `code-samples`.
- `technical-review`: re-run examples and record findings and a verdict in
  `technical-review-record`.
- `fact-check`: verify version numbers and technical claims in
  `fact-check-report`.
- `content-refresh`: flag version drift in `refresh-plan`.
- Record the blog's default languages, versions, companion-repo location,
  and code-block conventions in project memory at
  `blogdlc/spaces/default/memory/project.md`.
