---
slug: code-examples
name: Code Examples
phase: draft
execution: CONDITIONAL
condition: Runs when the post teaches code, commands, or configuration
lead_agent: technical-author-agent
support_agents:
  - technical-reviewer-agent
mode: inline
produces:
  - code-samples
  - code-verification-log
consumes:
  - artifact: draft
    required: true
  - artifact: outline
    required: false
requires_stage:
  - first-draft
workspace_requires: true
inputs: Draft, outline, the target language, framework, and versions
outputs: code-samples.md, code-verification-log.md
---

# Code Examples

## Steps

### Step 1: Decide whether code applies

When the post contains no code, commands, or configuration, report
`--result skipped` with the reason. Otherwise continue.

### Step 2: Pin the environment

Record the language, runtime, framework, and library versions the examples
target, and the operating system assumptions. Readers copy code months
later; the versions are part of the example.

### Step 3: Build the examples

Write each example as a complete, minimal, runnable unit in a scratch
directory. Prefer one example that grows over many disconnected fragments.
Remove secrets, real hostnames, and personal data.

### Step 4: Run and record

Execute every example and every shell command. Record the exact command,
the output, and the result in `code-verification-log.md`. Never claim an
example works without running it; when it cannot be run here, mark it
`UNVERIFIED` and say why.

### Step 5: Sync the draft

Update the code blocks in the draft to match the verified examples, with
language tags on every fence. Record the final examples in
`code-samples.md`. Report `awaiting-approval` and present the gate.
