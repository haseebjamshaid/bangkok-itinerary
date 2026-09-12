# Bangkok Field Notes

A six-day Bangkok itinerary for 11–16 November 2026, built as a single self-contained
HTML page. Mobile-first — it's meant to be opened on a phone while standing on a platform.

**Live:** https://haseebjamshaid.github.io/bangkok-itinerary/

## What it does

- One tab per day, each with a hand-drawn map of that day's route.
- Every leg between two stops lists the exact transport: which line, which direction,
  how many stops, which exit, the fare and the journey time.
- Tap the map to open it full screen. Tap a dashed route and it highlights in the colour
  of the line you'd ride, with the full hop-by-hop breakdown beside it.
- Colour-coded transport patches: BTS Sukhumvit, BTS Silom, MRT Blue, Airport Rail Link,
  Khlong Saen Saep canal boat, cross-river ferry, bus, motorbike taxi, bicycle.

## Files

| File | Purpose |
|---|---|
| `index.html` | The deployed page. Built — do not edit directly. |
| `bangkok-field-notes.html` | Source: the page body, all itinerary data lives in the `<script>` block. |
| `build.js` | Wraps the source in a full HTML document (doctype, charset, viewport meta). |

## Editing

Change the itinerary in `bangkok-field-notes.html` — the `DAYS` array near the top of
the script holds every stop, time, note and transport leg. Then rebuild:

```bash
node build.js
```

No dependencies, no build toolchain. `index.html` is the only file GitHub Pages serves.

## Notes

Prices and opening hours were checked in September 2026 and drift. The maps are stylised
route diagrams with hand-placed pins — accurate to a few hundred metres, not for navigation.
