# CLI reference

```
my-blog-dlc <command> [options]
```

## Human commands

### `my-blog-dlc config`

Configure the project for a harness.

| Flag | Meaning |
| --- | --- |
| `--harness <name>` | `pi`, `claude`, or `codex` |
| `--mode <normal\|yolo>` | `normal` asks questions and presents gates; `yolo` auto-picks recommended answers and auto-approves gates |
| `--questions-min <n>` | Minimum clarifying questions per stage |
| `--questions-max <n>` | Maximum clarifying questions per stage (`0` disables) |
| `--project <dir>` | Project root (default: current directory) |
| `--json` | Machine-readable output |

With no flags, prints the current configuration (harness, default scope,
mode, question budget, available harnesses).

Configuration files:

| File | Purpose | Committed |
| --- | --- | --- |
| `blogdlc/config.json` | Shared project settings | yes |
| `blogdlc/config.local.json` | Per-author overrides (wins) | ignored |

The optional `defaultScope` key sets the profile used when a request matches
no keyword (default `classic`).

### `my-blog-dlc init`

Create the `blogdlc/` workspace and copy the memory templates. Runs
automatically on the first workflow, so it is usually unnecessary.

### `my-blog-dlc doctor`

Validate Node version, methodology integrity, agent references, memory files,
harness configuration, and state consistency. Exits non-zero on failure.
`--json` for machine output.

### `my-blog-dlc status`

Show the active intent, scope, mode, current stage, and per-stage progress.
`--json` prints the full report.

### `my-blog-dlc list <phases|stages|scopes|agents>`

List methodology entries. Default `phases`. `--json` for machine output.

### `my-blog-dlc stage <slug>` / `scope [<name>]` / `phase <slug>`

Show one entry in detail. `scope` with no name lists every profile; with a
name it prints the ordered stage list. `--json` for machine output.

### `my-blog-dlc graph`

Print the compiled workflow graph (phases, stages, scopes, and the scope grid)
as JSON.

### `my-blog-dlc version` / `my-blog-dlc help`

Print the version or help.

Aliases: `--status`, `--doctor`, `--version`, `--help`.

### `my-blog-dlc completion`

Print or install shell completion for `bash`, `zsh`, `fish`, and
`powershell`, generated from the live methodology.

| Command | Meaning |
| --- | --- |
| `my-blog-dlc completion` | Show supported shells and the detected one |
| `my-blog-dlc completion <shell>` | Print the completion script to stdout |
| `my-blog-dlc completion status [--shell <shell>]` | Report `up to date`, `STALE`, or `not installed` |
| `my-blog-dlc completion install [--shell <shell>] [--dir <dir>] [--no-rc]` | Write the script and wire it into your shell rc file |
| `my-blog-dlc completion uninstall [--shell <shell>]` | Remove the script and its managed rc block |

`--shell` defaults to the shell detected from `$SHELL`. `--no-rc` writes only
the script. The rc block is idempotent and delimited by
`# >>> my-blog-dlc completion >>>` / `# <<< my-blog-dlc completion <<<`.

| Shell | Script | Activation |
| --- | --- | --- |
| bash | `$XDG_DATA_HOME/my-blog-dlc/completions/my-blog-dlc.bash` | sourced from `~/.bashrc` |
| zsh | `$XDG_DATA_HOME/my-blog-dlc/completions/_my-blog-dlc` | sourced from `~/.zshrc` |
| fish | `$XDG_CONFIG_HOME/fish/completions/my-blog-dlc.fish` | autoloaded |
| powershell | `$XDG_CONFIG_HOME/powershell/my-blog-dlc-completion.ps1` | dot-sourced from the PowerShell profile |

A running shell keeps the completion it loaded at startup; reload it after
`install`.

## Orchestration commands

What a harness conductor calls. Each prints one JSON directive.

### `my-blog-dlc orchestrate next [options] "<description>"`

| Flag | Meaning |
| --- | --- |
| `--new-intent` | Start a new intent even if one is active |
| `--scope <name>` | Force a profile: `classic`, `quick`, `tutorial`, `deep-dive`, `opinion`, `refresh`, `repurpose` |
| `--resume` | Clear a park marker and continue |

```bash
my-blog-dlc orchestrate next "Write a tutorial on Kubernetes liveness and readiness probes"
my-blog-dlc orchestrate next --new-intent --scope opinion "Why I stopped writing microservices"
```

With no active workflow and no description, returns an `error` directive.

### `my-blog-dlc orchestrate report --stage <slug> --result <outcome>`

| Result | Effect |
| --- | --- |
| `in-progress` | Mark the stage active |
| `awaiting-approval` | Mark the stage awaiting the human gate (auto-approved in `yolo`) |
| `approved` | Complete the stage and advance |
| `completed` | Complete the stage without a human gate and advance |
| `rejected` | Keep the stage active and record the feedback |
| `revised` | Reopen the gate after a revision |
| `skipped` | Skip a conditional stage (requires `--reason`) |

Optional: `--user-input "<text>"`, `--reason "<text>"`.

### `my-blog-dlc orchestrate park`

Park the workflow at the current inter-stage boundary. Useful after Publish,
before Evolve has data.

## Directives

| kind | Meaning |
| --- | --- |
| `run-stage` | Run the named stage, then report |
| `ask` | Present a question or gate, then follow `route` |
| `print` | Do what `message` says, print output, stop |
| `error` | Print `message` and stop |
| `done` | Workflow complete |
| `parked` | Workflow parked |

A `run-stage` directive carries `stage_file`, `lead_agent_file`,
`support_agent_files`, `produces`, `produce_paths`, `consumes`,
`consumes_absent`, `memory_path`, `protocol_modules`, `record_dir`,
`narration`, `execution_mode`, `mode_source`, `auto_approve`,
`answer_policy`, `question_budget`, `workspace_requires`, and `workflow`
(`scope`, `stage_index`, `stage_total`).

Artifacts land at
`blogdlc/spaces/<space>/intents/<intent>/<phase>/<stage>/<artifact>.md`.

## Audit log

`blogdlc/audit.log` is append-only JSONL written by the engine. Event names
are listed in `core/knowledge/audit-format.md`. Never edit it or
`blogdlc/state.json` by hand.

## Environment

| Variable | Meaning |
| --- | --- |
| `MY_BLOG_DLC_HOME` | Engine/install root (set by the installer's launcher) |
| `MY_BLOG_DLC_INSTALL_ROOT` | Installer: install root |
| `MY_BLOG_DLC_BIN_DIR` | Installer: command directory |
| `NO_COLOR` | Disable ANSI colour |
