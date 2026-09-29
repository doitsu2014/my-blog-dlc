# Getting started

my-blog-dlc structures AI-assisted blog writing into six phases — Discover,
Outline, Draft, Refine, Publish, Evolve — and keeps the author in control at
every stage.

## 1. Install

Node.js 20 or newer is required. No dependencies.

From a clone:

```bash
git clone https://github.com/doitsu2014/my-blog-dlc.git
cd my-blog-dlc
./scripts/install.sh --from .
```

This installs the runtime under `~/.local/share/my-blog-dlc` and writes the
`my-blog-dlc` command to `~/.local/bin`, plus shell completion for your login
shell (`--no-completion` to skip). Follow the printed PATH instruction if
needed.

Windows PowerShell:

```powershell
./scripts/install.ps1 -From .
```

## 2. Configure your blog repository

From the blog's root (the repository holding your Hugo, Astro, Jekyll, … site):

```bash
cd /path/to/your-blog
my-blog-dlc config --harness claude   # or: pi, codex
my-blog-dlc doctor
```

`config` writes the harness directory, the engine, the methodology, the
orchestrator and reference skills, and the workspace memory files.

## 3. Fill in project memory

Open `blogdlc/spaces/default/memory/project.md` and replace the placeholders:
audience, voice, spelling, platform, content directory, front matter schema,
and the exact preview and build commands. The Draft, Refine, and Publish
stages read them. See [Project memory](06-project-memory.md).

## 4. Start a workflow

Open your harness and describe the post.

- Claude Code: `/blogdlc Write a tutorial on Kubernetes liveness and readiness probes`
- PI Agent: `/blogdlc Write a tutorial on Kubernetes liveness and readiness probes`
- Codex CLI: `$blogdlc Write a tutorial on Kubernetes liveness and readiness probes`

The profile is detected from the request (`tutorial` here). my-blog-dlc then:

1. selects the first stage (`brief-capture`),
2. asks the stage's questions,
3. writes the artifacts,
4. stops at an approval gate.

You approve, request changes, or skip. The next stage begins only after you
approve. Force a profile with `--scope`, for example
`/blogdlc --scope opinion Why I stopped using microservices`.

## 5. Watch progress

```bash
my-blog-dlc status            # active intent, scope, and stage
my-blog-dlc list stages       # every stage in the methodology
my-blog-dlc scope tutorial    # the stages in a profile
```

## 6. Where your work lives

```
blogdlc/
  config.json           # project configuration
  state.json            # active intent and stage progress (tool-owned)
  audit.log             # append-only event log (tool-owned)
  spaces/default/
    memory/             # org.md, team.md, project.md — your standing rules
    intents/<id>/       # one directory per post
      discover/brief-capture/content-brief.md
      outline/structure-outline/outline.md
      draft/first-draft/draft.md
      refine/copy-edit/final-draft.md
      publish/publish-package/publish-record.md
      ...
```

The packaged post itself is written to your blog's content directory (from
project memory), marked as a draft. You release it.

## 7. After publishing

Evolve (performance review, refresh, repurposing) needs real data. Park after
Publish and resume later:

```bash
my-blog-dlc orchestrate park
# two weeks later, in your harness:
/blogdlc --resume
```

## Next steps

- [Workflow guide](02-workflows.md) — phases and profiles.
- [Agents](03-agents.md) — who does what.
- [Harnesses](04-harnesses.md) — harness-specific setup.
