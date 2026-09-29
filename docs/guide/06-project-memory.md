# Project memory

Memory is the method every stage reads. It lives in
`blogdlc/spaces/default/memory/` and is yours to edit. `config` and the first
workflow copy the templates there without overwriting existing files.

| File | Scope | Holds |
| --- | --- | --- |
| `org.md` | Every blog you or your organisation runs | Editorial standards, disclosure, rights, accessibility |
| `team.md` | The team (or solo author) | Workflow, review, distribution rules |
| `project.md` | This blog | Context, audience, voice, platform, channels, constraints |

Most specific wins, but a narrower rule never contradicts a broader one. On
Claude Code, `.claude/rules/blogdlc.md` imports all three into ambient
context.

## Fill in `project.md` first

Replace every `replace …` placeholder before the first workflow.

### Blog Context

Name, URL, author names as they appear on posts, and 3–5 content pillars.
Brief capture and angle definition use the pillars to keep posts on-topic.

### Audience

Primary reader, what they already know, where they come from. Audience
analysis starts from this instead of guessing.

### Voice and Style

Voice description, US or UK spelling, heading case, Oxford comma, banned
phrases, and paths to two or three posts that sound right. First draft reads
the samples; copy edit enforces the rules.

### Platform — drives `publish-package`

| Key | Example |
| --- | --- |
| Platform | Hugo |
| Content directory | `content/posts/` |
| File naming | `YYYY-MM-DD-slug.md` or `slug/index.md` |
| Front matter schema | `title`, `date`, `description`, `tags`, `draft` |
| Image directory | `static/images/<slug>/` |
| Preview command | `hugo server -D` |
| Build command | `hugo` |

`publish-package` writes the post to the content directory with front matter
built from this schema, keeps it marked as a draft, and runs the exact
preview or build command recorded here. When a key is missing it asks, so
record the answer here to avoid being asked again. The `platform-publishing`
skill lists conventions per platform.

### Distribution Channels

The channels you actually use. `promotion-plan` and `repurposing` choose only
from this list.

### Known Constraints

Length limits, legal review, embargoes, sponsor rules.

## `org.md` and `team.md`

The templates ship sensible defaults — human approval of every post, no
fabrication, disclosure of sponsorships and AI assistance where required,
licensed images only, alt text everywhere, one branch per post, the author
posts to social channels personally. Edit them to match how you work.

## Learnings

In profiles with `learnings: on`, each stage keeps a diary at
`<record>/<phase>/<stage>/memory.md`. Before the gate, the conductor proposes
candidate learnings; the ones you accept are appended to the right memory
file. Learnings are advisory and never contradict a broader rule. See
`core/protocols/learnings.md`.
