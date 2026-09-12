---
name: TechNews.sys
description: Radar de tecnología aplicada, presentado como un archivo con procedencia visible.
colors:
  paper: "#e8dfc8"
  paper-raised: "#f1e9d4"
  paper-deep: "#ddd0ab"
  ink: "#211d17"
  ink-muted: "#6b6252"
  ribbon: "#a13328"
  ribbon-dark: "#7c2620"
  gap: "#8a8f94"
  rule: "#cabb98"
typography:
  display:
    fontFamily: "Vollkorn, Georgia, serif"
    fontWeight: 700
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Source Sans 3, system-ui, sans-serif"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "11px"
    letterSpacing: "0.1em"
rounded:
  none: "0px"
spacing:
  card-padding: "24px"
  card-padding-lg: "32px"
components:
  link-primary:
    textColor: "{colors.ink}"
  link-primary-hover:
    textColor: "{colors.ribbon}"
  button-outline:
    textColor: "{colors.ink}"
    padding: "10px 20px"
  button-outline-hover:
    backgroundColor: "{colors.ribbon}"
    textColor: "{colors.paper}"
---

# Design System: TechNews.sys

## Overview

**Creative North Star: "The Custody Ledger"**

TechNews.sys reads as an archive that shows its receipts, not a dashboard that announces itself. The site replaced its original near-black, neon-accent "AI dark mode" — a category default the redesign explicitly rejected — with a warm archival ledger: buff paper, ink-black text, and exactly one accent, ribbon-red, reserved for the parts of the page that carry documented provenance (a source, a translation, a verified mark) rather than for ordinary interactive chrome. Every article is treated as a catalogued record: it enters with a visible custody stamp (fuente · autor · traducción) instead of a generic category badge, and a small drawn ribbon-bookmark tag marks each record the way a physical bookmark ribbon marks a page. The system is unapologetically flat, restrained, and text-forward — appropriate for a "Read" surface where comprehension and scanability outrank ornament.

**Key Characteristics:**
- Archival buff ground, never dark mode.
- Ribbon-red is a meaning, not a link color: it marks provenance, not interactivity in general.
- No eyebrow labels above headings, anywhere. Headings speak first; metadata (source, date, category) always follows.
- One drawn signature mark — the ribbon-bookmark tag — repeats across every record (home card, article, 404) instead of a generic icon set.

## Colors

The palette is a single warm neutral (paper) paired with a single saturated accent (ribbon), in a Restrained color strategy: the accent covers a small, deliberate fraction of any screen.

### Primary
- **Ribbon Red** (`#a13328`): the sole accent. Used only for the bookmark-tag mark, the custody-stamp seal dot, section subheadings inside long-form articles, citation links to original sources, and the underline thread that appears under navigation links on hover. Not used as a default text or link color.
- **Ribbon Dark** (`#7c2620`): hover/active state of Ribbon Red.

### Neutral
- **Paper** (`#e8dfc8`): page background.
- **Paper Raised** (`#f1e9d4`): card and header surfaces, one step lighter than the page to read as a distinct "card stock" without a shadow.
- **Paper Deep** (`#ddd0ab`): reserved for a pressed/deepest surface; not yet used in a shipped component.
- **Ink** (`#211d17`): primary text, headings, borders on interactive elements.
- **Ink Muted** (`#6b6252`): secondary text, metadata, captions.
- **Gap** (`#8a8f94`): dashed rules marking a boundary, an empty state, or "the record ends here" (footer top rule, 404 card border, source-citation divider).
- **Rule** (`#cabb98`): hairline solid borders between content blocks (card borders, section dividers).

### Named Rules
**The Custody-Only Rule.** Ribbon-red never appears as an ambient link or navigation color. If an element's only job is "this is clickable," it stays ink with an underline; red is reserved for elements whose job is "this is documented."

## Typography

**Display Font:** Vollkorn (serif, with Georgia fallback)
**Body Font:** Source Sans 3 (with system-ui fallback)
**Label/Mono Font:** JetBrains Mono

**Character:** Vollkorn carries the ledger/book-antiqua weight for headlines and section markers; Source Sans 3 is a plain, highly legible workhorse for long-form reading; JetBrains Mono renders dated, catalog-style metadata in small caps, evoking a stamped accession number.

### Hierarchy
- **Display** (700, `text-4xl`–`text-6xl`, tight tracking): page and article H1s.
- **Headline** (700, `text-2xl`–`text-3xl`): card and section H2s.
- **Title** (600, `text-2xl`, Ribbon Red): in-article section markers (H3) — a deliberate exception to the custody-only rule, since these function as ledger annotations, not navigation.
- **Body** (400, `text-lg`, 1.6 line-height): article prose, measured to stay within a comfortable reading column (`max-w-3xl` container).
- **Label** (500, 11px, `tracking-widest`, uppercase, mono): custody-stamp metadata, nav links, dated tags.

### Named Rules
**The No-Eyebrow Rule.** No label, badge, or kicker ever sits above a heading. Category, source, and reading-time metadata render after the heading it describes, never before.

## Layout

Single-column content on a `max-w-6xl` (home/global) or `max-w-3xl` (article) centered container, consistent with the incumbent structure. The home grid resolves to a single column below `lg` (1024px) and a 3-column grid at `lg`+, with the featured record spanning 2 columns — unchanged from the prior implementation, since the grid topology itself was sound. Section rhythm: generous separation between the hero and the record grid (`mb-12`/`mb-16`), tighter grouping within a record (`gap-4`/`mb-4`) between a heading and its immediate supporting text.

## Elevation & Depth

Flat by design — no box-shadows anywhere in the system. Depth is conveyed by paper value shifts (Paper → Paper Raised) and 1px hairline borders (Rule), never by shadow. This matches the archival material: a card catalog entry sits on the page as a distinct sheet, not as a floating panel.

### Named Rules
**The Flat-Ledger Rule.** A record is a sheet of paper on a desk, not a floating card. Depth comes from a border and a value shift, never a blurred shadow.

## Shapes

Square corners throughout (`rounded: none`). Borders are 1px hairline (Rule color) for passive containers and 2px solid (Ink) for interactive or emphasized elements (buttons, avatar frames, the article's inner header border). The one curved form in the system is the ribbon-bookmark tag's triangular notch — a drawn SVG shape, not a CSS radius.

## Components

### Buttons
- **Shape:** square corners, 2px solid Ink border.
- **Primary (404 "Volver al archivo"):** transparent fill, Ink text/border at rest; fills solid Ribbon Red with Paper text on hover.
- **Citation link ("Ver publicación original"):** Ribbon Red border and text at rest, tinted Ribbon Red background on hover — the one button that is red by default, because its entire function is provenance.

### Cards / Containers ("Records")
- **Corner style:** square.
- **Background:** Paper Raised.
- **Border:** 1px Rule.
- **Signature mark:** a drawn ribbon-bookmark SVG tag (`RibbonTag` component), absolutely positioned overlapping the card's top edge — the recurring identity mark across every record (home card, article header, 404 card).
- **Shadow strategy:** none (see Elevation & Depth).

### Custody Stamp (signature component)
A small-caps mono metadata line (`CustodyStamp` component) rendering `FUENTE · AUTOR · TRADUCCIÓN · PUBLICADO`-style entries joined by middle-dots, preceded by a small circular Ribbon-Red-bordered "seal" mark. Always renders after the heading/subheading it describes, never before. The publish date is the real date the piece went live on TechNews.sys (from `post.publishedAt` in `data/posts.js`), never the original source's date — that distinction stays with the `FUENTE` entry. This is the mechanism that makes the direction's core promise — every piece shows its paper trail — visible on the page rather than buried in a footer link.

### Source Citation Block (signature component)
A row holding the "material original..." credit line, the `CopyCitationStamp` copy-to-clipboard action, and the "Ver publicación original" link to the source. Renders once, directly under the article's `<header>` (title, subtitle, custody stamp, byline) and before the body text starts — never at the bottom of the article. A reader must see where a piece came from before reading it, not after.

### Reading Progress + Section Index (signature components)
Long-form articles (roughly 1500+ words) get two wayfinding aids, both scoped to the `<article>` element's own scroll range, not the whole page: `ReadingProgress`, a 1px Ribbon-Red fill bar fixed to the very top of the viewport plus a small "% leído" tag, and `SectionIndex`, a sticky right-hand rail (desktop `xl:` and up only) listing the article's `<h3>` sections, highlighting the one currently in view and jumping to it on click. Both compute their state directly off a plain `scroll` listener and `getBoundingClientRect` — not `animejs`, not `IntersectionObserver`. Both were tried first: `animejs`'s `onScroll` progress mode and `IntersectionObserver` both rely on browser scheduling (rAF / intersection callbacks) that Chrome throttles or skips entirely in backgrounded tabs, so neither updated reliably; a direct scroll-event calculation has no such dependency. `animejs` was removed from the project entirely once nothing used it anymore. The page's own scroll physics stay untouched — no hijacked/eased native scroll.

### Back to Top (signature component)
A tiny (40px) square `BackToTop` button, fixed to the bottom-right corner, holding a drawn upward-arrow mark (never a unicode "↑" or emoji) that links home — an arrow reads as "return," where a hamburger mark would misread as "open menu." Rendered globally in the layout but only visible past 480px of scroll, so it never competes with content on short pages (home) and only appears once a page is actually long enough to need it (a long article). Added 2026-09-11 after the redesign dropped the header's `sticky` positioning, leaving long articles with no persistent way back to the hub.

### Navigation
- Wordmark in Vollkorn, `.sys` suffix in muted mono. Nav links in uppercase mono; hover state changes text to Ink and draws a Ribbon-Red underline thread (the "ribbon" motif reappearing as a literal thread under text). No background pill, no active-state fill.

## Do's and Don'ts

### Do:
- **Do** keep Ribbon Red to provenance marks, citation links, and in-article section titles — check any new red usage against the Custody-Only Rule before shipping it.
- **Do** put the drawn `RibbonTag` mark on any new "record" surface (a future article, a future index page) to keep the signature consistent.
- **Do** render a `CustodyStamp` after every article's heading block once real per-article source/author/translator data exists.
- **Do** place the Source Citation Block right after the article header, before the body — on every future article, not just this one. Confirmed by the user 2026-09-11 after the first draft shipped it at the bottom.
- **Do** add `ReadingProgress` + `SectionIndex` to any future long-form article (roughly 1500+ words); skip both on short pieces where a full viewport or two covers the whole piece.

### Don't:
- **Don't** add a badge, pill, or eyebrow label above any heading — the No-Eyebrow Rule is absolute, confirmed during this redesign's own finish review after the first draft shipped one by mistake.
- **Don't** reintroduce shadows, gradients, or rounded corners; the flat/square ledger language is a deliberate, committed choice, not a placeholder.
- **Don't** invent a publish date or a second source for the Bill Gates piece — the only confirmed source is gatesnotes.com; PRODUCT.md's Evidence on Hand section is the source of truth for what's real.
