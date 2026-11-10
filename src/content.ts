// Every fact and quote below is sourced; see the Sources table in README.md. Image credits live in ASSETS.md.
// In body text, *asterisks* mark show titles, which render in italics.

export const phantomSteps = [
  {
    year: '2013',
    title: 'Straight onto the road',
    body: 'Soon after she moved to New York, Celia was cast in the 25th Anniversary North American Tour of *The Phantom of the Opera*, directed by Laurence Connor. She played the Princess. She also understudied Christine Daaé.',
    image: 'phantom-masquerade',
    alt: 'Celia backstage in her Masquerade costume beside a castmate dressed as Carlotta',
  },
  {
    year: '2014',
    title: 'Christine Daaé',
    body: 'After a year as the understudy she became the Christine alternate. “I went on for that part two times a week,” she says, “and I was in the ensemble for the rest of the time.”',
    image: 'phantom-stage',
    alt: 'Christine Daaé in white, kneeling in a pool of light as the Phantom reaches for her',
  },
  {
    year: '2015',
    title: 'City to city',
    body: 'In April 2015 the tour spent about two weeks at the Wharton Center in East Lansing, Michigan. That June it opened in Los Angeles.',
    image: 'phantom-mirror',
    alt: 'Celia reflected in a lit dressing-room mirror, in costume',
  },
  {
    year: '2016',
    title: 'Last shows',
    body: 'Her last shows with the tour came in March 2016, after two and a half years on the road.',
    image: 'phantom-quickchange',
    alt: 'Celia from behind in a ruffled lavender costume, backstage',
  },
]

export const newYorkCredits = [
  {
    show: 'Desperate Measures',
    role: 'Standby, Bella Rose and Susanna',
    venue: 'The York Theatre Company → New World Stages',
    note: '“I’ve gone on about 35 times in six months, which is quite a lot for a stand-by.” The show won two Drama Desk Awards, for music and for lyrics. It also won the Outer Critics Circle Award for best new Off-Broadway musical.',
    image: 'dm-bella',
    alt: 'Celia as saloon girl Bella Rose in a teal corset and cowboy boots',
  },
  {
    show: 'The Secret Garden',
    role: 'Lily',
    venue: 'Virginia Stage Company · 2019',
    note: 'She played Lily at Virginia Stage Company in 2019, the same year *Wicked* cast her.',
    image: 'lily-secret-garden',
    alt: 'Celia as Lily in The Secret Garden, in pearls and a jewelled bodice',
  },
  {
    show: 'Random Acts of Flyness',
    role: 'Co-Star',
    venue: 'HBO · dir. Terence Nance',
    note: 'A co-star role in Terence Nance’s HBO series. Her New York credits also include *Generation Me* at NYMF and *Jane Eyre* at 54 Below.',
    image: 'portrait-teal-2',
    alt: 'Portrait of Celia against a deep teal backdrop',
  },
]

export type TimelineItem = { date: string; title: string; body: string; image?: string; caption?: string }

export const wickedTimeline: TimelineItem[] = [
  {
    date: 'May 8, 2005',
    title: 'A seat in the audience',
    body: '“I saw *Wicked* in 2005 and always knew that I wanted to be in it and I always wanted to play Glinda.”',
  },
  {
    date: '2013 – 2019',
    title: 'Five auditions',
    body: 'Over six years she auditioned for *Wicked* about five times. Each time she went out for Glinda: as understudy, on tour or as standby. In May 2019 she was finally cast.',
  },
  {
    date: 'July 1, 2019',
    title: 'Broadway debut',
    body: 'She joined the ensemble at the Gershwin Theatre. Her parts included a university student, a guest at a ball and a member of an angry mob. She also understudied Glinda, and later Nessarose.',
    image: 'glinda-gown-2019',
    caption: 'In Glinda’s gown, September 2019',
  },
  {
    date: 'March 7, 2020',
    title: 'Into the bubble',
    body: 'Her first performance as Glinda. About 100 people came to see her, many from Northeastern Pennsylvania. She couldn’t pick them out: “I was blinded by the lights.” She was scheduled for seven shows but got only two. Broadway shut down on March 12. “I always take a moment to be grateful, and I’m grateful I had those two performances.”',
    image: 'glinda-debut-2020',
    caption: 'Glinda, March 2020',
  },
  {
    date: 'Through April 2023',
    title: 'Ten times as Glinda',
    body: 'She stayed with the Broadway company until April 2023. In that time, she says, “I went on for Glinda 10 times.”',
  },
  {
    date: 'May 2, 2023',
    title: 'Glinda, every night',
    body: 'She was cast in February. Her tour debut came at the Fabulous Fox in St. Louis, opposite Olivia Valli’s Elphaba. “At first, it was hard to believe that I was getting to play this role every night for a year. It almost didn’t feel real.”',
    image: 'tour-witches',
    caption: 'With Olivia Valli. Photo: Joan Marcus',
  },
  {
    date: 'May 21, 2024',
    title: 'Back to the Gershwin',
    body: 'After a year on tour she rejoined the Broadway ensemble. Playbill lists her as Glinda at certain performances.',
  },
  {
    date: 'June 28, 2026',
    title: 'Last day in the ensemble',
    body: '“Roughly 1,665 shows. 79 shows as Nessa. 19 shows as Glinda… Being in the ensemble of this show is something I am so proud of.”',
  },
  {
    date: 'June 30, 2026',
    title: 'Glinda standby',
    body: 'Two days later she became the standby for Glinda on Broadway. “Here’s to the next chapter!”',
    image: 'glinda-shoba',
    caption: 'With Shoba Narayan, March 2020',
  },
]

export const stats = [
  { value: '5', label: 'auditions before *Wicked* cast her' },
  { value: '1,665', label: 'Broadway shows in her ensemble track, roughly' },
  { value: '19', label: 'Broadway performances as Glinda by June 2026' },
  { value: '1', label: 'year as Glinda on the national tour' },
]

export const quotes = [
  {
    text: 'The witches carry the show, and it’s been really good for me to take on that responsibility.',
    source: 'Tribeza, 2024',
  },
  {
    text: 'My favorite scene to do is ‘Popular.’ It’s pretty difficult to do… I’m always out of breath!',
    source: 'Tribeza, 2024',
  },
  {
    text: 'Bringing yourself to a character is what makes it so special.',
    source: 'Phindie, 2023',
  },
  {
    text: 'I would say follow your dreams and stop at nothing.',
    source: 'Her advice to young actors, WNEP, 2020',
  },
]

export const encore = [
  {
    date: 'June 30, 2026',
    title: 'Glinda standby',
    body: 'She takes over as standby for Glinda at the Gershwin Theatre.',
  },
  {
    date: 'July 30, 2026',
    title: 'Broadway in Bryant Park',
    body: 'She sings “Popular” for *Wicked* on the Bryant Park stage.',
  },
  {
    date: 'September 25, 2026',
    title: 'Luzerne County’s 240th',
    body: 'Back home in Wilkes-Barre, she sings the national anthem with the NEPA Philharmonic at the F.M. Kirby Center. She also performs songs from *Oklahoma!*, *Anastasia* and *Company*. With her husband, Travis Taber, she sings “People Will Say We’re in Love.”',
  },
]

export type Still = {
  name: string
  alt: string
  tag: 'Portraits' | 'On stage' | 'Backstage'
  credit?: string
  wide?: boolean
  /** CSS object-position for the cropped tile, when Celia is off-centre. */
  focus?: string
}

export const stills: Still[] = [
  { name: 'portrait-teal-1', alt: 'Portrait of Celia against a deep teal backdrop', tag: 'Portraits' },
  { name: 'tour-bubble', alt: 'Glinda descending in the bubble, Wicked national tour', tag: 'On stage', credit: 'Joan Marcus', wide: true },
  { name: 'portrait-bw', alt: 'Black-and-white portrait of Celia, eyes closed', tag: 'Portraits' },
  { name: 'tour-popular', alt: 'Celia as Glinda in pink during “Popular”, Elphaba watching', tag: 'On stage', credit: 'Joan Marcus', wide: true },
  { name: 'phantom-mirror', alt: 'Celia in a dressing-room mirror on the Phantom tour', tag: 'Backstage', credit: 'Matthew Murphy', wide: true },
  { name: 'portrait-black', alt: 'Celia in a black top, soft window light', tag: 'Portraits' },
  { name: 'tour-emerald', alt: 'Glinda at a microphone in the Emerald City', tag: 'On stage', credit: 'Joan Marcus', wide: true },
  { name: 'dm-bella-2', alt: 'Celia as saloon girl Bella Rose in Desperate Measures', tag: 'Backstage' },
  { name: 'portrait-teal-3', alt: 'Celia with her hand at her collar, teal backdrop', tag: 'Portraits' },
  { name: 'tour-field', alt: 'Glinda kneeling in her blue gown in a field, Elphaba behind her', tag: 'On stage', credit: 'Joan Marcus', wide: true },
  { name: 'tour-arrival', alt: 'Glinda in her bubble gown, surrounded by the citizens of Oz', tag: 'On stage', credit: 'Joan Marcus', wide: true },
  { name: 'glinda-gown-2019', alt: 'Celia in Glinda’s bubble gown with wand and crown, 2019', tag: 'Backstage' },
  { name: 'portrait-light', alt: 'Celia in a black top, light backdrop', tag: 'Portraits' },
  { name: 'headshot-green', alt: 'Celia smiling, blonde hair loose, against a green backdrop', tag: 'Portraits', wide: true },
  { name: 'tour-dancing', alt: 'Glinda in pink, swept up in a dance', tag: 'On stage', credit: 'Joan Marcus', wide: true },
  { name: 'phantom-backstage', alt: 'Celia backstage on the Phantom tour with a castmate in costume', tag: 'Backstage', focus: '12% 25%' },
  { name: 'albuquerque', alt: 'Celia in a blush dress at a bulb-lit dressing-room mirror', tag: 'Backstage', focus: '88% 30%' },
  { name: 'portrait-grey', alt: 'Celia in a grey V-neck, natural light', tag: 'Portraits' },
  { name: 'tour-farewell', alt: 'Glinda and Elphaba face off, wand against broom', tag: 'On stage', credit: 'Joan Marcus', wide: true },
  { name: 'dm-opening', alt: 'Celia at the opening of Desperate Measures at New World Stages', tag: 'Backstage', wide: true },
  { name: 'tour-dorm', alt: 'Glinda and Elphaba in their room at Shiz', tag: 'On stage', credit: 'Joan Marcus', wide: true },
]

export const videos = [
  {
    id: 'pRUqJQ7sZfw',
    title: '“Think of Me”',
    from: 'The Phantom of the Opera',
    where: 'At This Performance · The Green Room 42 · Nov 19, 2018',
    poster: 'phantom-stage',
  },
  {
    id: '9zqKgRRKsU0',
    title: '“What Is This Feeling?”',
    from: 'Desperate Measures',
    where: 'At This Performance · The Green Room 42 · Nov 19, 2018',
    poster: 'dm-bella',
  },
  {
    id: 'eHRrV8yhvRs',
    title: '“Mannequin”',
    from: 'with The Skivvies',
    where: 'Katy Perry cover with Lauren Molina & Nick Cearley',
    poster: 'golden-hour',
  },
]

export const credits = [
  {
    heading: 'Broadway & National Tour',
    rows: [
      ['Wicked', 'Glinda Standby', 'Broadway · dir. Joe Mantello'],
      ['Wicked', 'Glinda', 'National Tour · dir. Joe Mantello'],
      ['Wicked', 'Ensemble · u/s Glinda & Nessarose', 'Broadway · dir. Joe Mantello'],
      ['The Phantom of the Opera', 'Christine Daaé (alternate)', 'National Tour · dir. Laurence Connor'],
    ],
  },
  {
    heading: 'New York',
    rows: [
      ['Desperate Measures', 'Bella Rose / Susanna Standby', 'New World Stages'],
      ['Desperate Measures', 'Bella Rose / Susanna Standby', 'The York Theatre Company'],
      ['Generation Me', 'Addison DeVoe', 'NYMF'],
    ],
  },
  {
    heading: 'Regional',
    rows: [
      ['The Secret Garden', 'Lily', 'Virginia Stage Company'],
      ['Bliss (reading)', 'Princess Piper', 'Goodspeed Opera House · dir. Kelly Devine'],
      ['A Very Brady Musical (virtual reading)', 'Marcia Brady', 'Ogunquit Playhouse'],
      ['Nine', 'Giulietta / Olga Von Sturm', 'SpeakEasy Stage Company'],
    ],
  },
  {
    heading: 'Television & Concerts',
    rows: [
      ['Random Acts of Flyness', 'Co-Star', 'HBO · dir. Terence Nance'],
      ['The Four Phantoms', 'Guest Artist', 'Touring · music supervisor David Caddick'],
      ['Jane Eyre', 'Blanche Ingram / Helen Burns', '54 Below · dir. Robbie Rozelle'],
    ],
  },
]

export const training = [
  ['The Boston Conservatory', 'BFA, Musical Theatre'],
  ['Voice', 'Mike Ruckles, Mary Saunders, Cathy Rand, Bruce Kolb'],
  ['Acting', 'The Freeman Studio, Steve McConnell, Ken Baltin (Meisner), Chris Webb'],
  ['On Camera', 'Bob Krakower, The Kimball Studio, Lesly Kahn & Company'],
  ['Improv', 'Upright Citizens Brigade'],
  ['Special skills', 'Cello, piano, some pointe work, sight-reading'],
]

export const links = {
  instagram: 'https://www.instagram.com/celiahottenstein/',
  resume:
    'https://images.squarespace-cdn.com/content/v1/57164493d51cd48f82af7ad1/b2f17d71-3613-42e7-9657-52577a435d7f/%E2%80%8EHottenstein+Resume+June+2023.%E2%80%8E1.jpeg',
  headshot:
    'https://images.squarespace-cdn.com/content/v1/57164493d51cd48f82af7ad1/d0a7f867-5d81-4452-a692-dc31c7eabca1/Celia+Hottenstein+Headshot.jpeg',
  agency: 'https://www.bbrtalentagency.com',
}

export const press = [
  { outlet: 'Playbill', title: 'Olivia Valli and Celia Hottenstein Are New Leads in National Tour of Wicked Starting May 2', url: 'https://playbill.com/article/olivia-valli-and-celia-hottenstein-to-become-new-leads-in-national-tour-of-wicked' },
  { outlet: 'Tribeza', title: 'Defying Gravity in Austin with Celia Hottenstein of “Wicked”', url: 'https://tribeza.com/arts/performing-arts/wicked-austin-celia-hottenstein' },
  { outlet: 'Phindie', title: 'Life in Oz: Interview with Celia Hottenstein in WICKED', url: 'https://phindie.com/23759-life-in-oz-interview-with-celia-hottenstein-in-wicked/' },
  { outlet: 'GLAMoms', title: 'Meet Celia Hottenstein: Glinda the Good Witch from WICKED!', url: 'https://greaterlansingareamoms.com/meet-celia-hottenstein-glinda-the-good-witch-from-wicked/' },
  { outlet: 'WNEP', title: 'Pandemic shuts down Broadway and puts Kingston native’s dreams on hold', url: 'https://www.wnep.com/article/features/only-on-16/kingston-natives-broadway-dreams-on-hold-during-covid19/523-ce6e8470-8aa5-4c3d-aec6-57ae81950aef' },
  { outlet: 'Times Leader', title: 'Kingston’s Celia Hottenstein makes Broadway principal debut', url: 'https://www.timesleader.com/features/778136/kingstons-celia-hottenstein-makes-broadway-principal-debut' },
  { outlet: 'Times Leader', title: 'Kingston native Celia Hottenstein is Off-Broadway standby', url: 'https://www.timesleader.com/features/720486/kingston-native-celia-hottenstein-is-off-broadway-standby' },
  { outlet: 'The Citizens’ Voice', title: 'NEPA Philharmonic event on Sept. 25 celebrates Luzerne County’s 240th, America’s 250th anniversaries', url: 'https://www.citizensvoice.com/2026/08/26/nepa-philharmonic-event-on-sept-25-celebrates-luzerne-countys-240th-americas-250th-anniversaries' },
]
