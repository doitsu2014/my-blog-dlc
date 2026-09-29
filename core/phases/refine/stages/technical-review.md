---
slug: technical-review
name: Technical Review
phase: refine
execution: CONDITIONAL
condition: Runs when the post contains code, commands, architecture, or technical claims
lead_agent: technical-reviewer-agent
support_agents:
  - technical-author-agent
mode: inline
produces:
  - technical-review-record
consumes:
  - artifact: draft
    required: true
  - artifact: code-samples
    required: false
  - artifact: code-verification-log
    required: false
requires_stage:
  - developmental-edit
  - code-examples
workspace_requires: true
inputs: Draft, code samples, verification log
outputs: technical-review-record.md
---

# Technical Review

## Steps

### Step 1: Decide whether review applies

When the post has no code and no technical claims, report `--result skipped`
with the reason. Otherwise continue.

### Step 2: Re-run the examples

Re-execute every code sample from a clean state using the verification log.
A sample that only worked in the author's environment is a defect.

### Step 3: Check correctness and safety

Look for wrong or outdated APIs, deprecated flags, insecure defaults
(disabled TLS, `chmod 777`, secrets in code, `curl | sh` without a warning),
missing error handling the reader will copy, and version drift from what the
post claims.

### Step 4: Check the explanation

Verify that the prose explains what the code does, that terms are used
correctly, and that simplifications are labelled as simplifications.

### Step 5: Record and complete

Write `technical-review-record.md`: each finding with severity, location,
evidence, and fix, plus a verdict. Apply accepted fixes to the draft. Report
`awaiting-approval` and present the gate.
