# Image assets

Every photo on this site comes from Celia's current website, celiahottenstein.com. Nothing here is generated, stock, or taken from elsewhere. `scripts/fetch-images.sh` downloads each original from her Squarespace CDN and writes two optimized WebP copies to `public/images/`: `<name>.webp` (up to 1800px) and `<name>-sm.webp` (up to 800px).

## Licensing status: needs sign-off before launch

**No image is confirmed as licensed for reuse.** These photos appear publicly on her site, but that does not mean this site may republish them. Before the site goes public:

1. Celia approves every image and caption.
2. Each photographer, or whoever holds the rights, confirms the photo may be used and how they want to be credited. This matters most for the Wicked tour production photos (Joan Marcus, licensed through the production) and the Phantom backstage photo (Matthew Murphy).
3. Photographers marked "unconfirmed" below are identified, or their photos are replaced.
4. The photos marked "not used" are dropped from `scripts/fetch-images.sh` and `public/images/`, so they are not published with the build.

The site has no AI-generated imagery and must never present generated images as Celia's own photography. Generated images may be used only for moodboards or concept work, and must be labelled as such.

## Sources

CDN prefix for every path below: `https://images.squarespace-cdn.com/content/v1/57164493d51cd48f82af7ad1/`

"Her caption" is the caption Celia's own site gives the photo, when it has one. "Page" is where the photo appears on celiahottenstein.com.

### Portraits

| File | Used on this site | Path (after CDN prefix) | Page | Her caption | Photographer | Status |
|---|---|---|---|---|---|---|
| portrait-noir | Hero, og:image | `1520394153324-WW1KAORWGOUHL1QVMWUF/unnamed.jpg` | /gallery | none | Unconfirmed | Not cleared |
| portrait-bw | Prologue, Stills | `1495510358775-QS1K3ZANMTZAAIZUPW8X/170504_CeliaH_876-2.jpg` | /gallery | none | Unconfirmed (filename suggests a May 4, 2017 shoot) | Not cleared |
| portrait-teal-1 | Now, Stills | `1518500207757-J3YZPICHS4NUB1YXS2PR/IMG_2218.JPG` | /gallery | none | Unconfirmed | Not cleared |
| portrait-teal-2 | Entr'acte card (Random Acts of Flyness), Stills | `1518500210131-FXUKWIT3ZWVE0MA913GO/IMG_2204.JPG` | /gallery | none | Unconfirmed | Not cleared |
| portrait-teal-3 | Contact background, Stills | `1518500207499-WMFW9LEMHVS3NAG10RKZ/341A5BD6-4CD3-4B63-8412-B00DBB915665.JPG` | /gallery | none | Unconfirmed | Not cleared |
| portrait-black | Stills | `1548088346508-QDD22ZFRA82RE1K9VOZV/Celia+Hottenstein+Headshot+2019.jpg` | /gallery | none | Unconfirmed | Not cleared |
| portrait-light | Stills | `1548884924840-ZBR0JROW9G1ZL7WTLU1N/Hottenstein_Celia_3244_ret4.jpg` | /gallery | none | Unconfirmed | Not cleared |
| portrait-grey | Stills | `1548884917031-82K2ZQ9HDRI96MVV3E40/Hottenstein_Celia_3046_ret3.jpg` | /gallery | none | Unconfirmed | Not cleared |
| headshot-green | Stills; also the "Download headshot" link | `d0a7f867-5d81-4452-a692-dc31c7eabca1/Celia+Hottenstein+Headshot.jpeg` | /resume | none | Unconfirmed | Not cleared |

Her homepage credits "Nelson Hancock Photography" on one portrait (`1614731801678-Q19PN1GMEPB42IJLIEPA`, white sweater). This site does not use that photo, and the credit should not be assumed to cover the portraits above.

### The Phantom of the Opera (North American tour, 2013–2016)

| File | Used on this site | Path (after CDN prefix) | Page | Her caption | Photographer | Status |
|---|---|---|---|---|---|---|
| phantom-masquerade | Act One, step 2013 | `1461107461721-05A2FH08WK8QSHKFZT2C/IMG_1989.jpg` | /gallery | none | Unconfirmed (looks like a backstage snapshot) | Not cleared |
| phantom-stage | Act One, step 2014; "Think of Me" video poster | `1461107287378-QAZ4CSI01NISTC276UYE/tumblr_nk8d0bq5Ho1sk5qfno1_1280.jpg` | /gallery | none | Unconfirmed. This looks like a production photo, and the filename shows it was saved from Tumblr. | Not cleared |
| phantom-mirror | Act One, step 2015; Stills | `1461107310481-FTTA3UAB55L9ZY1EWDQD/Matthew+Murphy+Phantom+backstage+1.jpg` | /gallery | none | **Matthew Murphy** (named in the filename) | Not cleared |
| phantom-quickchange | Act One, step 2016 | `1461107409150-UCFAKPNY9CTC2WBR4H86/a32cee_48727b540d0741068f0f40d3b04e9d1e.jpg` | /gallery | none | Unconfirmed | Not cleared |
| phantom-backstage | Stills (crop anchored on Celia, at the left) | `1461107516008-7C6MRD6UL4G16IZC6LCB/IMG_6741.jpg` | /gallery | none | Unconfirmed | Not cleared |
| phantom-opening-la | Not used | `1517257929999-B892VT6M6E0QM155UPPI/040A47D6-BA55-4C38-8E7D-DADF6AFAD303.JPG` | / | "with Alexandra Pernice at the opening night party for The Phantom of the Opera in Los Angeles, CA, June 2015" | Unconfirmed | Not cleared |

Her homepage captions a different photo (`1531978766829-ZXXV44AIJW2TZD0VLK3O/IMG_6972.jpg`, the same lavender costume seen from the front) "Quick change during one of my last shows in The Phantom of the Opera North American tour in March of 2016". The 2016 step uses the uncaptioned photo from behind and only states the fact (her last shows were in March 2016).

### New York and regional

| File | Used on this site | Path (after CDN prefix) | Page | Her caption | Photographer | Status |
|---|---|---|---|---|---|---|
| dm-bella | Entr'acte card; "What Is This Feeling?" video poster | `1531978053343-567MQGN8RBSKMZFMSH9R/Bella1.jpg` | / | "Desperate Measures at New World Stages, June 2018" | Unconfirmed | Not cleared |
| dm-bella-2 | Stills | `1531978598139-V47HRQCXF4MS4XCGIKDK/bella2.jpg` | / | "Desperate Measures at New World Stages, June 2018" | Unconfirmed | Not cleared |
| dm-opening | Stills | `1531978156733-QOXVB6FAOZGSAZAM1WEV/DMopeningnight.jpg` | / | "Opening Night of Desperate Measures at New World Stages, The Palm, NYC, June 2018" | Unconfirmed | Not cleared |
| lily-secret-garden | Entr'acte card | `1550629364520-GTYKXI787XTNCTPAFR44/Lily+Secret+Garden.jpg` | / | "Lily in The Secret Garden at Virginia Stage Company, February 2019" | Unconfirmed | Not cleared |
| philadelphia-house | Not used (too soft at full width) | `1461097997499-KYZKBZF9WL8Y0MAL4O6X/IMG_2309.jpg` | / | "Academy of the Arts, Philadelphia, PA, April 2014" | Probably Celia's own phone photo (unconfirmed) | Not cleared |
| albuquerque | Stills (crop anchored on Celia, who stands right of centre) | `1531977968179-3L1QSXOLQU5767WBCTIX/Abq1.jpg` | / | "Albuquerque, NM, June 2018" | Unconfirmed | Not cleared |

### Wicked

| File | Used on this site | Path (after CDN prefix) | Page | Her caption | Photographer | Status |
|---|---|---|---|---|---|---|
| glinda-gown-2019 | Timeline, July 1, 2019; Stills | `1608865419918-QFO6S4IVNFKROQMDYA3P/A2149E33-A4B1-48A9-BFF1-669F36319C36.jpg` | / | "Wicked, September 2019" | Unconfirmed | Not cleared |
| glinda-debut-2020 | Timeline, March 7, 2020 | `1614714283785-23MBKVNKYLTT0TEWPJQ5/EE4A3192-62FC-4D86-A10C-ABD2211DB937.JPG` | / | "Glinda, March 2020" | Unconfirmed | Not cleared |
| glinda-shoba | Timeline, June 30, 2026 (captioned with its real date, March 2020) | `1608865797262-YKUBF6UR4H1M6SXH1F1C/D50E0CB1-72EF-44CF-ABDB-1DC85F09A5A6.jpg` | / | "Wicked: with Shoba Narayan, March of 2020" | Unconfirmed (looks like a dressing-room snapshot) | Not cleared |
| tour-bubble | Act Two opener, Stills | `1699635351339-GRV3Y38BIWVL5FU08SGP/23-5wickedmunchkin_0190r-4.jpg` | /gallery | none | **Joan Marcus** (2023 tour production photography) | Not cleared |
| tour-witches | Timeline, May 2, 2023 | `1687887106714-4CHJ44JKRKJNQKHYOD5A/23-5wickedmunchkin_0162r.jpg` | /gallery | none | **Joan Marcus** (Tribeza prints this frame, 0162r, with the credit) | Not cleared |
| tour-popular | Tour mosaic, Stills | `1699635668061-VE6YVRNJ7VKGC5PN1DHG/23-5wickedmunchkin_0023r+copy.jpg` | /gallery | none | **Joan Marcus** | Not cleared |
| tour-emerald | Tour mosaic, Stills | `1699635670312-PO4PF976U78KNR0D9FUL/23-5wickedmunchkin_0135r+copy.jpg` | /gallery | none | **Joan Marcus** | Not cleared |
| tour-field | Tour mosaic, Stills | `1699635668237-XC62OJ4UPF1R4MK1HHUI/23-5wickedmunchkin_0229r+copy.jpg` | /gallery | none | **Joan Marcus** | Not cleared |
| tour-dancing | Stills | `1687887117344-J7ILN2QZSOTLC7SWN48K/23-5wickedmunchkin_0004r.jpg` | /gallery | none | **Joan Marcus** | Not cleared |
| tour-farewell | Tour mosaic, Stills | `1699635670460-FWU2PGJ4RBR35JCFM1I1/23-5wickedmunchkin_0222r+copy.jpg` | /gallery | none | **Joan Marcus** | Not cleared |
| tour-dorm | Stills | `1687887100973-ZM5DDJO6L13QPXM0VLE3/23-5wickedmunchkin_0034r.jpg` | /gallery | none | **Joan Marcus** | Not cleared |
| tour-arrival | Tour mosaic, Stills | `1699635530681-BYAR4GRI01MOV3TDULKB/23-5wickedmunchkin_0273r+copy.jpg` | /gallery | none | **Joan Marcus** | Not cleared |
| tour-bubble-company | Not used | `1699635530681-P5Z3I7N411E43SIIXB10/23-5wickedmunchkin_0280r+copy.jpg` | /gallery | none | **Joan Marcus** | Not cleared |
| tour-ozdust | Not used | `1699635532991-4W51TFAIFU71FXLV676S/23-5wickedmunchkin_0339r+copy.jpg` | /gallery | none | **Joan Marcus** | Not cleared |

All `23-5wickedmunchkin_*` files come from the same 2023 tour photo call. Joan Marcus is credited for frame 0162r in Tribeza ("photo by Joan Marcus"), and the rest share its filename series. Confirm the credit line the Wicked production requires.

### Offstage

| File | Used on this site | Path (after CDN prefix) | Page | Her caption | Photographer | Status |
|---|---|---|---|---|---|---|
| zebra-canyon | Offstage | `1614714145164-WDWKOTFVKBMMEW1TT67M/IMG_1021.JPG` | / | "Zebra Canyon, Escalante, UT - August 2020" | Unconfirmed | Not cleared |
| golden-hour | Offstage; "Mannequin" video poster | `1614732472323-SLS4OAYNRUANXQ04OU27/3H1A8072.jpg` | / | "taken by Travis Taber Photography, May 2020" | **Travis Taber** | Not cleared |
| london-tea | Not used | `1461097548462-IASYAGQA5VMAFI2MD1UY/IMG_3771.jpg` | / | "Tea time in London, August 2014" | Unconfirmed | Not cleared |

## Linked, not hosted

- **Résumé** (the "Download résumé" button) links to her June 2023 résumé image on her site. It predates her Glinda standby contract, so ask whether she has a newer one.
- **YouTube videos** are embedded from youtube-nocookie.com only after a visitor clicks play. Celia's channel posted "Think of Me" and "What Is This Feeling?". The Skivvies' "Mannequin" was posted by Lauren Molina.
