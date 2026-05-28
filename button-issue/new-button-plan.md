# New Button System — Plan

A clean, Webflow-native replacement for the current `.basic_bttn` button system. Built entirely inside Webflow (Designer + Project Settings → Custom Code) with **zero dependency on the external `styles.css`** file. Coexists with the old buttons so migration is page-by-page and safe.

---

## Why we're doing this

The current `.basic_bttn` system has accumulated problems that compound every time we touch it:

1. **`styles.css` is partially duplicated.** Lines 64–797 are repeated as 2084–2808, and 1134–1565 as 3124–3557. Every fix has to be made twice or it silently regresses.
2. **Per-page `<style>` patches.** Pages like `homepage.html` carry stacked `<style>` blocks in `<head>` (e.g. lines 113–140) that `!important`-override the same rule three times. Each patch was an attempt to fix the same class of bug.
3. **The arrow is recolored with `filter: brightness(0)` chains.** Because the arrow is an `<img>` loading a hardcoded white SVG, we can't inherit color from CSS — so every variant (dark mode, hover, alt button, header button, per-section bg) needs its own filter override. The exclusion list at `styles.css:213-220` uses `:not()` with descendant selectors that don't actually work the way they read.
4. **The user-visible bug.** On a light page background with a dark button, the arrow renders dark on dark and disappears.

The fix isn't another patch. It's a clean parallel system that solves the underlying coloring problem once.

---

## The core idea

Instead of fighting `<img>` color with filters, build the button so the **arrow inherits the button's text color automatically**. Two ingredients:

1. **Inline SVG** with `fill="currentColor"` instead of an external `<img>`
2. **CSS custom properties** (`--cta-bg`, `--cta-fg`) that contexts override, with the button itself never knowing what mode it's in

When the button's `color` is white, the arrow is white. When `color` is charcoal, the arrow is charcoal. There's nothing else to coordinate.

---

## Goal: Webflow-native, no external dependency

Everything for the new button lives inside Webflow:

- **Visual styling** (layout, sizing, hover background) → Webflow Designer styling panel
- **Dynamic behaviors** (CSS variables, dark mode flips, slide animation, section-bg overrides) → one small Custom Code block in **Project Settings → Custom Code → Head Code**
- **The button itself** → a Webflow **Component** so every instance updates from one source

No edits to the repo's `styles.css`. No per-page `<style>` patches. The new system is fully managed through the Webflow Designer.

---

## Class taxonomy

Five classes total. Compare to the old system's 12+ class names per button instance.

| Class | Required? | Purpose |
|---|---|---|
| `cta` | Yes | The button itself (root) |
| `cta_label` | Yes | The text label |
| `cta_icon_track` | Yes | Fixed-width clipping container for the slide animation |
| `cta_icon` | Yes | The arrow SVG (used on both arrows) |
| `cta_icon_trail` | Yes | Combo class on the second arrow (the one that slides in) |
| `is_inverse` | Optional | Modifier — light button on a dark surface |

**Open question for naming**: confirm `.cta`, or pick `.btn` / `.sc_btn` / `.cta_btn`. It just needs to not collide with `.basic_bttn`.

---

## HTML structure

This is what each button instance looks like in the rendered page (and what the Webflow Component contains):

```html
<a href="#" class="cta">
  <span class="cta_label">Watch</span>
  <span class="cta_icon_track">
    <svg class="cta_icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
    </svg>
    <svg class="cta_icon cta_icon_trail" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
    </svg>
  </span>
</a>
```

Note: the SVG path is the Material Design `arrow_forward` shape, matching the existing arrow asset.

---

## Build it in Webflow (Designer steps)

### Step 1 — Create the component skeleton

1. Drop a **Link Block** on the canvas. Class it `cta`.
2. Inside the Link Block, add a **Text Block**. Class it `cta_label`. Set the text to "Watch" (placeholder).
3. After the Text Block, add a **Div Block**. Class it `cta_icon_track`.
4. Inside `cta_icon_track`, add an **HTML Embed** element. Paste this SVG into it:

   ```html
   <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;position:absolute;inset:0;">
     <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
   </svg>
   ```

   Class the Embed `cta_icon`.
5. Duplicate the Embed. Add the combo class `cta_icon_trail` to the duplicate.
6. Right-click the Link Block → **Create Component**. Name it `Button / Primary`. Define a Component property for the link target and one for the label text.

### Step 2 — Style `cta` in the Designer

With the `cta` class selected:

| Property | Value |
|---|---|
| Display | Inline Flex |
| Align Items | Center |
| Gap | 0.75em |
| Padding | 0.875em 1.5em |
| Background | `var(--charcoal-black)` (or pick the swatch) |
| Color | `var(--pure-white)` |
| Border | 1px solid transparent |
| Border Radius | (whatever matches the existing button — likely 999px or 0) |
| Text Decoration | None |
| Transition | `background 300ms ease, color 300ms ease` |

**Hover state** (in the State dropdown):
- Background: a slightly translucent variant — e.g. `rgba(255, 255, 255, 0.15)` over the charcoal

### Step 3 — Style `cta_icon_track` in the Designer

| Property | Value |
|---|---|
| Position | Relative |
| Display | Inline Flex |
| Width | 1.25em |
| Height | 1.25em |
| Flex | 0 0 auto (don't grow, don't shrink) |
| Overflow | Hidden |

### Step 4 — Add the Custom Code block

Webflow Designer can't express CSS variables flips, the `:not()` selector for the slide animation, or the `body.dark_mode` and `[data-bg-color]` overrides. Those go in **Project Settings → Custom Code → Head Code**:

```html
<style>
/* ============================================================
   .cta — site-wide button component
   Coloring is driven by --cta-bg and --cta-fg. Contexts override
   these variables; the button + arrow follow automatically via
   currentColor. No filters, no !important, no per-page patches.
   ============================================================ */

.cta {
  --cta-bg: var(--charcoal-black);
  --cta-fg: var(--pure-white);
  --cta-bg-hover: rgba(255, 255, 255, 0.15);

  background: var(--cta-bg);
  color: var(--cta-fg);
}

.cta:hover {
  background: var(--cta-bg-hover);
}

/* ----- Hover slide animation ----- */
.cta_icon {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.65s cubic-bezier(0.19, 1, 0.22, 1);
}

.cta_icon_trail {
  transform: translateX(-100%);
}

.cta:hover .cta_icon:not(.cta_icon_trail) { transform: translateX(100%); }
.cta:hover .cta_icon_trail                { transform: translateX(0); }

/* ----- Modifier: inverse (light button on dark surface) ----- */
.cta.is_inverse {
  --cta-bg: var(--pure-white);
  --cta-fg: var(--charcoal-black);
  --cta-bg-hover: rgba(0, 0, 0, 0.1);
}

/* ----- Site-wide dark mode flips the default ----- */
body.dark_mode .cta {
  --cta-bg: var(--pure-white);
  --cta-fg: var(--charcoal-black);
  --cta-bg-hover: rgba(255, 255, 255, 0.27);
}

body.dark_mode .cta.is_inverse {
  --cta-bg: var(--charcoal-black);
  --cta-fg: var(--pure-white);
  --cta-bg-hover: rgba(255, 255, 255, 0.15);
}
</style>
```

That block is the entire dynamic-behavior layer. ~40 lines, replacing roughly 700 lines of duplicated CSS in `styles.css`.

---

## Why this works (the one trick worth understanding)

The arrow SVGs have `fill="currentColor"`. CSS `currentColor` resolves to the value of the `color` property on the same element. The `<svg>` is a child of `.cta`, which sets `color: var(--cta-fg)`. So:

- `--cta-fg: white` → `.cta { color: white }` → `currentColor` → arrow renders white
- `--cta-fg: charcoal` → `.cta { color: charcoal }` → `currentColor` → arrow renders charcoal

Anything that changes `--cta-fg` automatically recolors both the label *and* the arrow. There is no second coordination point.

The variants (`is_inverse`, `body.dark_mode`, etc.) only need to set the variable. They never touch the arrow directly.

---

## Migration plan

The new component lives alongside `.basic_bttn`. Zero collision because the class names are completely different. You can stop the migration at any phase and the site keeps working.

### Phase 1 — Set up once (one session)

1. Build the `cta` Component in Webflow following the Designer steps above
2. Paste the Custom Code block into Project Settings → Custom Code → Head Code
3. Publish to staging
4. Smoke test on a hidden page: light mode, dark mode, hover, in a `[data-bg-color="grey"]` section, in a `[data-bg-color="charcoal-black"]` section
5. Verify the slide animation works on hover

### Phase 2 — Migrate page by page

For each page in the site:

1. Find every `.basic_bttn` instance on the page
2. Replace with the `cta` Component (Webflow's Swap Element feature, or delete + drop fresh)
3. Add the `is_inverse` combo class only where the button needs to flip (rare)
4. **Delete the inline `<style>` patches** in that page's head custom code that target `.basic_bttn .bttn_txt`
5. Smoke test light + dark + hover before publishing

Suggested page order (lowest risk first):
1. A low-traffic content page (test the migration mechanics)
2. Homepage
3. Navigation / header buttons (these have the most variants in the old system)
4. Footer
5. Section template pages
6. Long-tail pages

### Phase 3 — Cleanup once everything is migrated

Once no `.basic_bttn` instances remain on any published page:

1. **Delete from `styles.css`**:
   - Lines 64–797 (the original `.basic_bttn` block)
   - Lines 2084–2808 (the duplicate)
   - Lines 1134–1565 (button-related per-section overrides)
   - Lines 3124–3557 (the duplicate of those)
   - Any remaining `.bttn_icon`, `.bttn_icon_drk`, `.bttn_icon_last`, `.bttn_txt`, `.bttn_alt`, `.bttn_nav` rules
2. **Delete from every page's head custom code**: any `<style>` block targeting `body.dark_mode .basic_bttn`
3. **Optionally rename** `.cta` → `.btn` if you want a shorter final name. There's no longer anything to collide with.
4. **Delete the CDN arrow asset** (`arrow_forward.svg`) from Webflow's asset library if nothing else references it.

---

## What this kills, by the numbers

| Thing being deleted | Lines / count |
|---|---|
| `.basic_bttn*` rules in `styles.css` (original block) | ~734 |
| Duplicate `.basic_bttn*` block in `styles.css` (lines 2084+) | ~734 |
| Per-section button overrides in `styles.css` | ~430 |
| Duplicate per-section block | ~430 |
| Per-page `<style>` patches (estimate, ~3 per page × N pages) | ~30 per page |
| Class names per button instance | from 12+ to 4 |
| `!important` declarations | from many to zero |

---

## Open decisions before building

1. **Class name**: `.cta`, `.btn`, `.sc_btn`, or `.cta_btn`?
2. **Inverse modifier name**: `is_inverse`, `cta_alt`, `on_dark`?
3. **Color tokens**: confirm `var(--charcoal-black)` and `var(--pure-white)` are already defined as Webflow color variables. (They appear to be, based on existing usage in `styles.css`.)
4. **Border radius**: pill-shaped (999px) or square (0px) — match the existing button's visual style.
5. **Font family / weight**: confirm the button inherits the site's default body font, or specify a override.
6. **Should header buttons (`.hdr_bttn`) use the same `cta` component**, or do they need a separate variant for the smaller header layout? (Recommendation: same component, different sizing context — header sizing comes from the parent nav layout, not the button itself.)

---

## Risk and rollback

**Risk during Phase 2**: low. New buttons are additive — old buttons keep working untouched until you replace them.

**Rollback**: if a migrated page has a problem, swap the `cta` component back to a `basic_bttn` instance. The old CSS is still there. Zero data loss.

**Risk during Phase 3 cleanup**: medium. Deleting from `styles.css` is irreversible without git. Do cleanup in a single PR with a clear diff so it can be reverted as one unit if a stray `.basic_bttn` is found.

---

## Next step

Confirm the four open decisions above (or override them with your own answers), and I'll write the final paste-ready version of:

1. The exact Designer-class settings
2. The exact Custom Code block (with naming finalized)
3. A one-page migration checklist you can tick through per page
