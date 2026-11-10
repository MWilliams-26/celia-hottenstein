# Celia Hottenstein: a night at the theatre

A surprise redesign of [celiahottenstein.com](https://www.celiahottenstein.com/) for Celia Hottenstein, Glinda standby in *Wicked* on Broadway since June 30, 2026. The site tells her story as a career journey and presents her as a leading lady.

## Creative direction

The site is a theatre programme told in acts. Visitors take their seats, the house lights dim, and her career plays out scene by scene.

- **Palette.** Ink black and champagne gold set the house. Act One (*Phantom*) adds crimson. Act Two (*Wicked*) turns midnight blue with ice blue and a faint iridescence that recalls Glinda's bubble.
- **Type.** Cormorant, a high-contrast Garamond for display sizes, sets her name, the act titles, headings and quotes, often in italics. Jost, a geometric sans in the spirit of 1920s Playbill lettering, sets the programme notes and the letter-spaced labels. Both are self-hosted variable fonts from Fontsource. Cormorant defaults to old-style figures, so the page switches to lining figures for dates and stats.
- **Voice.** The story is told in Celia's own words wherever she has said something on the record, and in plain facts everywhere else. Nothing is invented. In `src/content.ts`, show titles are marked with `*asterisks*` and render in italics.
- **Running order.**
  - Hero: a pointer-following spotlight on a noir portrait.
  - Credits marquee.
  - **Prologue**: Kingston, PA, where she sang "Do Re Mi" at her first audition.
  - **Act One**: the *Phantom* tour as a sticky, scroll-driven sequence.
  - **Entr'acte**: New York, 2016–2019.
  - **Act Two**: *Wicked*, with a full-bleed bubble opener, a timeline that fills as you scroll, the tour mosaic, and stats.
  - In her own words.
  - **Now**: 2026.
  - Offstage.
  - Stills: a filterable gallery with a lightbox.
  - Watch: YouTube embeds that load only when clicked.
  - Credits: a Playbill-style "Who's Who" sheet and press links.
  - Stage door: contact details.
- **Imagery.** Every photo is Celia's own, taken from her current site. Nothing is generated. See [ASSETS.md](ASSETS.md) for sources, credits, and the licensing sign-off needed before launch.

The design is bespoke. No component library shaped it.

## Run it

Requires Node 22+ and pnpm.

```sh
pnpm install
pnpm dev       # http://localhost:5173
pnpm build     # type-check and build to dist/
pnpm preview   # serve dist/
```

In an Amp orb, `amp orb services ensure` starts the dev server from `.amp/services.yaml` and prints its portal URL.

The images in `public/images/` are committed. `pnpm images` (`scripts/fetch-images.sh`, which needs `curl` and ImageMagick) regenerates them from her Squarespace CDN.

## Where things live

- `src/content.ts`: every fact, quote, credit, gallery entry, video, and press link.
- `src/Photo.tsx`: renders every photo with its intrinsic size, so nothing shifts while it loads, and a `srcset` of the 800px and full-size copies.
- `src/image-sizes.json`: those sizes, written by `scripts/image-sizes.sh` (which `pnpm images` runs).
- `src/App.tsx`: the sections.
- `src/Stills.tsx`: the gallery and lightbox.
- `src/hooks.ts`: hooks for scroll reveals, the active scroll step, and scroll progress.
- `src/styles.css`: the full design.

## Sources

Every claim on the site comes from one of these sources. Quotes are copied exactly; the only change is that "fiance" is spelled "fiancé" where it appears in the GLAMoms quote.

| Source | Used for |
|---|---|
| [Her About page](https://www.celiahottenstein.com/about) | Cast in the *Phantom* tour on moving to New York; a year as Christine understudy, then a year and a half as alternate (two and a half years in all); understudying Glinda and Nessarose; Glinda on the national tour May 2023 – May 2024 |
| [Her homepage captions](https://www.celiahottenstein.com/) | *Phantom* opening in Los Angeles, June 2015; her last *Phantom* shows, March 2016; Lily, Virginia Stage Company; photo dates and places (see ASSETS.md) |
| [Her résumé, June 2023](https://images.squarespace-cdn.com/content/v1/57164493d51cd48f82af7ad1/b2f17d71-3613-42e7-9657-52577a435d7f/%E2%80%8EHottenstein+Resume+June+2023.%E2%80%8E1.jpeg) | Credits table and directors (Joe Mantello, Laurence Connor, Kelly Devine, Terence Nance, Robbie Rozelle, David Caddick); *Generation Me*, *Jane Eyre*; training; special skills |
| [Her contact page](https://www.celiahottenstein.com/contact) | BBR commercial and voiceover representation: Doug Kesten, Tracey Goldblum, (323) 852-9559 |
| [Her Instagram post, June 28, 2026](https://www.instagram.com/p/DaIpZA8jsG3) | Last day in the ensemble: "Roughly 1,665 shows. 79 shows as Nessa. 19 shows as Glinda…", "Being in the ensemble of this show is something I am so proud of", "Here's to the next chapter!" |
| [GLAMoms, May 2023](https://greaterlansingareamoms.com/meet-celia-hottenstein-glinda-the-good-witch-from-wicked/) | "Paralyzingly shy"; Kait Kerrigan and her advice; "Do Re Mi"; "I still remember that audition!"; "I have been performing ever since"; saw *Wicked* May 8, 2005; the five auditions and the tracks; cast May 2019; Christine "two times a week"; Wharton Center, April 2015; cast as tour Glinda in February 2023; Travis Taber (met in the company, toured 2014–2016, in the Broadway company since 2016, understudies Fiyero); dog Sawyer; John Muir Trail; dressing-room photos, candles and room spray; "my own spices, olive oil and a frying pan…" |
| [Times Leader, Oct 2018](https://www.timesleader.com/features/720486/kingston-native-celia-hottenstein-is-off-broadway-standby) | Music Box Dinner Playhouse, Little Theatre of Wilkes-Barre; ballet with Kristin Degnan at Ballet Northeast, where her mother was on the faculty; Miss Adelaide at Wyoming Valley West; Polly Peachum at Wyoming Seminary's Performing Arts Institute; "novice nun" and "saloon girl"; "I love Bella Rose…"; "about 35 times in six months"; York Theatre → New World Stages; the awards |
| [Times Leader, Mar 2020](https://www.timesleader.com/features/778136/kingstons-celia-hottenstein-makes-broadway-principal-debut) | July 1, 2019 debut at the Gershwin; the ensemble parts (university student, ball guest, angry mob); "They hooked me into the bubble…"; about 100 people came; "I was blinded by the lights"; two performances (March 7–8), then the March 12 shutdown; "I always take a moment to be grateful…" |
| [WNEP, May 2020](https://www.wnep.com/article/features/only-on-16/kingston-natives-broadway-dreams-on-hold-during-covid19/523-ce6e8470-8aa5-4c3d-aec6-57ae81950aef) | Scheduled for seven Glinda performances, got two; Music Box Dinner Playhouse in Swoyersville; "Without those opportunities…"; "I would say follow your dreams and stop at nothing." |
| [Phindie, Nov 2023](https://phindie.com/23759-life-in-oz-interview-with-celia-hottenstein-in-wicked/) | "I went on for Glinda 10 times"; "At first, it was hard to believe…"; "Bringing yourself to a character…"; "I love travel and adventure" |
| [Tribeza, Mar 2024](https://tribeza.com/arts/performing-arts/wicked-austin-celia-hottenstein) | Auditions began "about eleven years ago" (hence 2013–2019); with the Broadway company until April 2023; "The witches carry the show…"; "I feel really lucky…"; "My favorite scene to do is 'Popular'…"; Joan Marcus credits for tour frames 0162r and 0222r, with Olivia Valli as Elphaba |
| [Playbill, 2023](https://playbill.com/article/olivia-valli-and-celia-hottenstein-to-become-new-leads-in-national-tour-of-wicked) | Tour Glinda opposite Olivia Valli from May 2, 2023, at the Fabulous Fox, St. Louis |
| [Playbill person page](https://playbill.com/person/celia-hottenstein) | Return to the Broadway company May 21, 2024; "Glinda [at certain performances]"; standby from June 30, 2026 |
| [IBDB](https://www.ibdb.com/broadway-cast-staff/celia-hottenstein-500592) | *Phantom* Princess and Christine understudy from 2013; tour Glinda May 2, 2023 – May 5, 2024; Glinda standby from June 30, 2026 |
| [BroadwayWorld, July 30, 2026](https://www.broadwayworld.com/article/Casts-of-TITANIQUE-WICKED-More-Will-Perform-at-Broadway-in-Bryant-Park-Today-20260730) | Broadway in Bryant Park, *Wicked*, July 30, 2026. That she sang "Popular" comes from the title of BroadwayWorld's Instagram reel ("WICKED's Celia Hottenstein Performs 'Popular' at Broadway in Bryant Park"). |
| [Citizens' Voice, Aug 2026](https://www.citizensvoice.com/2026/08/26/nepa-philharmonic-event-on-sept-25-celebrates-luzerne-countys-240th-americas-250th-anniversaries), [its photo gallery, Sep 26, 2026](https://www.citizensvoice.com/2026/09/26/photo-gallery-luzerne-county-celebrates-240th-anniversary) and [Times Leader, Sep 25, 2026](https://www.timesleader.com/news/1760771/luzerne-county-celebrates-240th-anniversary) | September 25, 2026 concert at the F.M. Kirby Center with the NEPA Philharmonic; the national anthem; songs from *Oklahoma!*, *Anastasia* and *Company*; "People Will Say We're in Love" with her husband, Travis Taber; both in the Broadway company of *Wicked* |
| [Playbill: *Desperate Measures* track breakdown](https://playbill.com/article/track-by-track-breakdown-peter-kellogg-and-david-friedman-go-deep-on-their-desperate-measures-score) | "What Is This Feeling?" is Susanna's song in *Desperate Measures* (her standby role), not the *Wicked* number |

The wedding date isn't on the site because no source confirms it. GLAMoms gave a planned date of September 2024, and the 2026 coverage calls Travis her husband.
