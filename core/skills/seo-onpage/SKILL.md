---
name: seo-onpage
description: >
  Use when researching search intent and keywords for a blog post, writing
  slugs, title tags, meta descriptions, Open Graph fields, and alt text,
  structuring headings, planning internal links, choosing canonical URLs for
  cross-posts, or reviewing a post's search performance. Applies to any blog
  platform. People-first SEO: readability always wins over keyword placement.
license: MIT
compatibility: Any blog platform or static site generator.
---

# On-Page SEO for Blog Posts

Apply this skill whenever a stage decides how a post will be found through
search: keyword research, headings, metadata, internal links, images, and
post-publication search review.

## When this skill applies

- Discover: identifying search intent and building the keyword map.
- Outline: mapping reader questions and secondary keywords to sections.
- Publish: writing metadata, linking the post into the archive.
- Evolve: reading search console data and planning refreshes.

## Principles

- Write for the reader first. Search engines reward pages that satisfy the
  query; they penalise pages written for crawlers.
- One post, one primary query. Two posts targeting the same query compete
  with each other; merge or differentiate them.
- Match the dominant intent of the query, not just its words.
- Never invent search volume, difficulty, or ranking data. Use only numbers
  the author supplies from a real tool, and name the tool and date.

## Search intent

| Intent | The searcher wants | Fitting post shape |
| --- | --- | --- |
| Informational | To understand or learn | Explainer, tutorial, deep dive |
| Navigational | A specific site or page | Usually not a blog target |
| Commercial | To compare before choosing | Comparison, review, "X vs Y" |
| Transactional | To do or buy something now | Usually a product page, not a post |

Check intent by reading what currently ranks for the query: if the results
are all step-by-step guides, an opinion essay will not satisfy it.

## Keyword map

- **Primary keyword**: the one query the post must answer best.
- **Secondary keywords**: 3–8 synonyms, phrasings, and sub-topics.
- **Questions**: the "how/why/what/when" questions readers ask; each should
  map to a section or an FAQ entry.
- **Archive check**: existing posts on the blog that target the same query,
  and whether to link, merge, or differentiate.

## Headings and body

- Exactly one H1, normally the post title.
- H2/H3 headings describe their section's content; a reader skimming only
  the headings should understand the post.
- Use the primary keyword naturally in the H1, the first paragraph, and at
  least one H2. Never force it; synonyms are fine.
- Answer the core question early. Put the direct answer before the
  background.
- Keep paragraphs short and scannable; use lists and tables where the
  content is genuinely list- or table-shaped.

## Metadata checklist

- [ ] **Slug**: short, lowercase, hyphenated, descriptive; drop stop words;
      no dates unless the blog's URL scheme includes them. Never change a
      published slug without a redirect.
- [ ] **Title tag**: roughly 50–60 characters so it is not truncated; lead
      with the specific benefit; may differ from the H1.
- [ ] **Meta description**: roughly 150–160 characters; states what the
      reader gets; written as a sentence, not a keyword list.
- [ ] **Open Graph / social**: `og:title`, `og:description`, `og:image`
      (commonly 1200×630), and the platform's Twitter/X card fields.
- [ ] **Canonical URL**: self-referencing on the blog; cross-posts point
      their canonical to the blog's URL.
- [ ] **Dates**: published and updated dates in front matter, so the
      platform can emit them.

## Images

- Descriptive file names (`kubernetes-pod-lifecycle.png`, not `img1.png`).
- Alt text describes the content and the point of the image. Decorative
  images get empty alt text (`alt=""`).
- Compress images and set width and height to avoid layout shift.

## Links

- 2–5 internal links to related posts, with descriptive anchor text (never
  "click here").
- Propose back-links from older, relevant posts to the new one.
- External links go to authoritative, primary sources.
- Check every link resolves before publishing.

## Structured data

- Most platforms emit `Article`/`BlogPosting` automatically; verify rather
  than duplicate it.
- Add `HowTo` or `FAQPage` only when the content genuinely matches and the
  platform supports it. Structured data that misdescribes the page is worse
  than none.

## Post-publication review

- Give a post time to be indexed before judging it.
- Read search console queries: impressions without clicks suggest a weak
  title or description; clicks for unexpected queries suggest a section to
  expand or a new post.
- Refresh underperforming posts rather than publishing near-duplicates.

## Common pitfalls

- Keyword stuffing and unnatural repetition.
- Clickbait titles the body does not pay off.
- Several posts competing for one query (cannibalisation).
- Changing slugs without redirects.
- Missing or generic alt text.
- Cross-posting without a canonical URL.

## How this skill plugs into my-blog-dlc

- `keyword-research`: record intent, primary and secondary keywords,
  questions, and archive conflicts in `keyword-map`.
- `structure-outline` and `headline-and-hook`: map keywords and questions to
  sections; keep the primary keyword natural in headline options.
- `seo-optimization`: write slug, title tag, meta description, Open Graph
  fields, canonical, alt text, and internal links in `seo-metadata`.
- `promotion-plan` and `repurposing`: cross-posts set a canonical URL back to
  the blog.
- `performance-review` and `content-refresh`: use search console evidence in
  `performance-report` and `refresh-plan`.
- Record the blog's URL scheme, slug conventions, and SEO tooling in project
  memory at `blogdlc/spaces/default/memory/project.md`.
