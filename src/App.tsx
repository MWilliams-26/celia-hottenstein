import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from 'react'
import {
  credits,
  encore,
  links,
  newYorkCredits,
  phantomSteps,
  press,
  quotes,
  stats,
  training,
  videos,
  wickedTimeline,
} from './content'
import { useActiveStep, useReveal, useScrollProgress } from './hooks'
import { Photo } from './Photo'
import { Stills } from './Stills'

const nav = [
  ['Story', '#story'],
  ['Stage', '#phantom'],
  ['Wicked', '#wicked'],
  ['Stills', '#stills'],
  ['Watch', '#watch'],
  ['Credits', '#credits'],
  ['Contact', '#contact'],
]

export function Star({ className = '' }: { className?: string }) {
  return (
    <svg className={`star ${className}`} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0Z" />
    </svg>
  )
}

/** Renders *asterisk-marked* show titles from content.ts in italics. */
function rich(text: string) {
  return text.split('*').map((part, i) => (i % 2 ? <em key={i}>{part}</em> : part))
}

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])
  return (
    <nav className={`nav ${scrolled ? 'nav--solid' : ''} ${open ? 'nav--open' : ''}`} aria-label="Primary">
      <a className="nav__mark" href="#top" onClick={() => setOpen(false)}>
        Celia Hottenstein
      </a>
      <button
        className="nav__toggle"
        aria-expanded={open}
        aria-controls="nav-links"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        <span aria-hidden="true" />
      </button>
      <ul id="nav-links" className="nav__links">
        {nav.map(([label, href]) => (
          <li key={href}>
            <a href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function Hero() {
  const ref = useRef<HTMLElement>(null)
  const move = (e: PointerEvent<HTMLElement>) => {
    if (e.pointerType !== 'mouse' || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--sx', `${((e.clientX - r.left) / r.width) * 100}%`)
    ref.current.style.setProperty('--sy', `${((e.clientY - r.top) / r.height) * 100}%`)
  }
  return (
    <header id="top" className="hero" ref={ref} onPointerMove={move}>
      <div className="hero__stage" aria-hidden="true">
        <Photo
          className="hero__portrait"
          name="portrait-noir"
          alt=""
          sizes="(max-width: 880px) 100vw, min(64vw, 1000px)"
          loading="eager"
          fetchPriority="high"
        />
        <div className="hero__spot" />
      </div>
      <div className="hero__copy">
        <p className="eyebrow hero__eyebrow">
          <Star /> Glinda Standby · <em>Wicked</em> · Broadway
        </p>
        <h1 className="hero__name">
          <span className="hero__first">Celia</span>
          <span className="hero__last">Hottenstein</span>
        </h1>
        <p className="hero__lede">
          From the audience in 2005 <span className="nowrap">to Glinda on Broadway.</span>
        </p>
        <a className="hero__cue" href="#story">
          <span>Begin the story</span>
          <span className="hero__cue-line" aria-hidden="true" />
        </a>
      </div>
      <dl className="hero__ticket">
        <div>
          <dt>Now appearing</dt>
          <dd>
            <em>Wicked</em>, Gershwin Theatre
          </dd>
        </div>
        <div>
          <dt>Role</dt>
          <dd>Glinda (Standby)</dd>
        </div>
      </dl>
    </header>
  )
}

function Marquee() {
  const items = ['Wicked · Broadway', 'Wicked · National Tour', 'The Phantom of the Opera', 'Desperate Measures', 'The Secret Garden', 'The Four Phantoms']
  const row = (
    <div className="marquee__row">
      {items.map((t) => (
        <span key={t}>
          {t} <Star />
        </span>
      ))}
    </div>
  )
  return (
    <div className="marquee" role="marquee" aria-label="Selected credits">
      <div className="marquee__track">
        {row}
        <div aria-hidden="true">{row}</div>
      </div>
    </div>
  )
}

function Prologue() {
  return (
    <section id="story" className="prologue">
      <div className="wrap">
        <div className="prologue__intro">
          <div>
            <p className="label" data-reveal>
              Prologue · Kingston, Pennsylvania
            </p>
            <h2 className="statement" data-reveal>
              “I actually became involved in theatre because I was <em>paralyzingly shy.</em>”
            </h2>
            <p className="statement__source" data-reveal>
              Celia, to GLAMoms, 2023
            </p>
          </div>
          <figure className="prologue__portrait" data-reveal>
            <Photo
              name="portrait-bw"
              alt="Black-and-white portrait of Celia, eyes closed, hands at her collar"
              sizes="(max-width: 880px) 280px, 340px"
            />
          </figure>
        </div>
        <div className="prologue__grid">
          <div className="prose" data-reveal>
            <p className="dropcap">
              Celia grew up in Kingston, Pennsylvania. She was so shy that her parents went looking for advice. They
              asked Kait Kerrigan, a lyricist who had gone to Celia’s high school. Her answer: “You know, take her to
              the local community theatre and have her audition. It might help break her out of her shell.” At seven
              or eight, Celia auditioned for <em>The Sound of Music</em>. She sang “Do Re Mi.” “I still remember that
              audition!” she says. “I have been performing ever since.”
            </p>
            <p>
              Until her mid-teens she performed at the Music Box Dinner Playhouse in Swoyersville and the Little
              Theatre of Wilkes-Barre. She also studied ballet with Kristin Degnan at Ballet Northeast, where her
              mother was on the faculty. At Wyoming Valley West High School she played Miss Adelaide in{' '}
              <em>Guys and Dolls</em>. At Wyoming Seminary’s Performing Arts Institute she was Polly Peachum in{' '}
              <em>The Threepenny Opera</em>. Then came a BFA in Musical Theatre at The Boston Conservatory.
            </p>
          </div>
          <figure className="pull" data-reveal>
            <blockquote>
              “Without those opportunities, I wouldn’t have been able to foster my love for theater… Without that, I
              would not be where I am today.”
            </blockquote>
            <figcaption>On her hometown stages, WNEP, 2020</figcaption>
          </figure>
        </div>
        <dl className="facts" data-reveal>
          <div>
            <dt>Hometown</dt>
            <dd>Kingston, PA</dd>
          </div>
          <div>
            <dt>First audition</dt>
            <dd>
              <em>The Sound of Music</em>
            </dd>
          </div>
          <div>
            <dt>First song on stage</dt>
            <dd>“Do Re Mi”</dd>
          </div>
          <div>
            <dt>Training</dt>
            <dd>BFA, The Boston Conservatory</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

function ActHeader({ act, title, sub }: { act: string; title: string; sub: string }) {
  return (
    <header className="act" data-reveal>
      <p className="act__num">
        <span>{act}</span>
      </p>
      <h2 className="act__title">{title}</h2>
      <p className="act__sub">{sub}</p>
    </header>
  )
}

function Phantom() {
  const ref = useRef<HTMLDivElement>(null)
  const active = useActiveStep(ref)
  return (
    <section id="phantom" className="phantom">
      <div className="wrap">
        <ActHeader act="Act One" title="The Phantom of the Opera" sub="25th Anniversary North American Tour · 2013–2016" />
      </div>
      <div className="scrolly wrap" ref={ref}>
        <div className="scrolly__frame">
          {phantomSteps.map((s, i) => (
            <Photo
              key={s.image}
              name={s.image}
              alt={s.alt}
              sizes="(max-width: 880px) 1px, 55vw"
              className={i === active ? 'is-active' : ''}
              aria-hidden={i !== active}
            />
          ))}
          <span className="scrolly__year" aria-hidden="true">
            {phantomSteps[active].year}
          </span>
        </div>
        <ol className="scrolly__steps">
          {phantomSteps.map((s, i) => (
            <li key={s.year} data-step={i} className={i === active ? 'is-active' : ''}>
              <Photo className="scrolly__inline" name={s.image} alt={s.alt} sizes="(max-width: 880px) 100vw, 1px" />
              <p className="scrolly__kicker">{s.year}</p>
              <h3>{s.title}</h3>
              <p>{rich(s.body)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Entracte() {
  return (
    <section className="entracte">
      <div className="wrap">
        <header className="entracte__head">
          <p className="label" data-reveal>
            Entr’acte · New York, 2016–2019
          </p>
          <h2 className="statement statement--sm" data-reveal>
            Some days a novice nun, other days a saloon girl.
          </h2>
          <figure className="pull pull--inline" data-reveal>
            <blockquote>“I love Bella Rose. She’s super funny, a mix between Lucille Ball and Carol Burnett.”</blockquote>
            <figcaption>Times Leader, 2018</figcaption>
          </figure>
        </header>
        <div className="cards">
          {newYorkCredits.map((c, i) => (
            <article className="card" key={c.show} data-reveal style={{ '--d': `${i * 90}ms` } as CSSProperties}>
              <div className="card__img">
                <Photo name={c.image} alt={c.alt} sizes="(max-width: 880px) 100vw, 30vw" />
              </div>
              <p className="card__venue">{c.venue}</p>
              <h3>
                <em>{c.show}</em>
              </h3>
              <p className="card__role">{c.role}</p>
              <p className="card__note">{rich(c.note)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Wicked() {
  const timeline = useRef<HTMLOListElement>(null)
  useScrollProgress(timeline)
  const mosaic = [
    ['tour-popular', '“Popular”', 'Celia as Glinda in pink during “Popular”, Elphaba watching'],
    ['tour-emerald', 'In the Emerald City', 'Celia as Glinda at a microphone in the Emerald City'],
    ['tour-field', 'With Elphaba', 'Celia as Glinda kneeling in her blue gown in a field, Elphaba behind her'],
    ['tour-arrival', 'With the citizens of Oz', 'Celia as Glinda in her bubble gown among the citizens of Oz'],
    ['tour-farewell', 'With Olivia Valli as Elphaba', 'Glinda and Elphaba face off, wand against broom'],
  ]
  return (
    <section id="wicked" className="wicked">
      <div className="wicked__open">
        <Photo name="tour-bubble" alt="Celia as Glinda descending in the bubble, haloed by a ring of light" />
        <div className="wicked__open-copy wrap">
          <ActHeader act="Act Two" title="Wicked" sub="Broadway · National Tour · 2019 to now" />
        </div>
        <div className="iridescence" aria-hidden="true" />
      </div>

      <div className="wrap">
        <figure className="pull pull--grand" data-reveal>
          <blockquote>
            “They hooked me into the bubble, handed me my wand and <em>sent me right up.</em>”
          </blockquote>
          <figcaption>On her first performance as Glinda, Times Leader, 2020</figcaption>
        </figure>

        <ol className="timeline" ref={timeline}>
          {wickedTimeline.map((t, i) => (
            <li key={t.date} className={`timeline__item ${i % 2 ? 'is-right' : ''}`} data-reveal>
              <span className="timeline__dot" aria-hidden="true">
                <Star />
              </span>
              <div className="timeline__text">
                <p className="timeline__date">{t.date}</p>
                <h3>{t.title}</h3>
                <p>{rich(t.body)}</p>
              </div>
              {t.image && (
                <figure className="timeline__img">
                  <div className="timeline__frame">
                    <Photo name={t.image} alt="" sizes="(max-width: 880px) 260px, 360px" />
                  </div>
                  <figcaption>{t.caption}</figcaption>
                </figure>
              )}
            </li>
          ))}
        </ol>
      </div>

      <div className="starring">
        <div className="wrap starring__head" data-reveal>
          <p className="label label--ice">
            Starring as Glinda
            <br />
            North American Tour · <span className="nowrap">2023–2024</span>
          </p>
          <figure className="starring__lede">
            <blockquote>
              “I feel really lucky that I was given the trust to carry the show and play this role for a year.”
            </blockquote>
            <figcaption>Tribeza, 2024</figcaption>
          </figure>
        </div>
        <div className="mosaic">
          {mosaic.map(([name, cap, alt], i) => (
            <figure key={name} className={`mosaic__item mosaic__item--${i}`} data-reveal>
              <Photo name={name} alt={alt} sizes={i === 0 ? '(max-width: 880px) 100vw, 50vw' : '(max-width: 880px) 50vw, 50vw'} />
              <figcaption>{cap}</figcaption>
            </figure>
          ))}
        </div>
        <p className="wrap credit-line">Production photography by Joan Marcus</p>
      </div>

      <div className="wrap">
        <dl className="stats">
          {stats.map((s) => (
            <div key={s.label} data-reveal>
              <dt>{rich(s.label)}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function Words() {
  return (
    <section className="words" aria-label="In her own words">
      <div className="wrap">
        <p className="label" data-reveal>
          In her own words
        </p>
        <ul className="words__list">
          {quotes.map((q) => (
            <li key={q.text} data-reveal>
              <blockquote>“{q.text}”</blockquote>
              <cite>{q.source}</cite>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Encore() {
  return (
    <section id="now" className="encore">
      <div className="wrap encore__grid">
        <div className="encore__portrait" data-reveal>
          <Photo name="portrait-teal-1" alt="Portrait of Celia against a deep teal backdrop" sizes="(max-width: 880px) 100vw, 40vw" />
        </div>
        <div>
          <p className="label" data-reveal>
            Now · 2026
          </p>
          <h2 className="statement statement--sm" data-reveal>
            Standby for Glinda at the <em>Gershwin.</em>
          </h2>
          <ul className="encore__list">
            {encore.map((e) => (
              <li key={e.title} data-reveal>
                <p className="encore__date">{e.date}</p>
                <h3>{e.title}</h3>
                <p>{rich(e.body)}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Offstage() {
  return (
    <section className="offstage">
      <div className="wrap offstage__grid">
        <div className="offstage__copy">
          <p className="label" data-reveal>
            Offstage
          </p>
          <h2 className="statement statement--sm" data-reveal>
            “I love travel and <em>adventure.</em>”
          </h2>
          <p className="statement__source" data-reveal>
            Celia, to Phindie, 2023
          </p>
          <div className="prose" data-reveal>
            <p>
              Celia is married to Travis Taber. They met in the Broadway company of <em>Wicked</em>. He joined it in
              2016 after two years on the show’s national tour. He understudies Fiyero. They have a dog named Sawyer.
            </p>
            <p>
              Together they have backpacked sections of the John Muir Trail in California. On tour she makes her
              dressing room feel like home with family photos, candles and room spray. She also packs “my own spices,
              olive oil and a frying pan so that I can make food in every city!”
            </p>
          </div>
        </div>
        <figure className="offstage__a" data-reveal>
          <Photo
            name="zebra-canyon"
            alt="Celia in the narrow striped walls of Zebra Canyon, Utah"
            sizes="(max-width: 880px) 50vw, 28vw"
          />
          <figcaption>Zebra Canyon, Escalante, Utah, August 2020</figcaption>
        </figure>
        <figure className="offstage__b" data-reveal>
          <Photo
            name="golden-hour"
            alt="Celia in a wide-brimmed hat lit by golden late-afternoon sun"
            sizes="(max-width: 880px) 50vw, 20vw"
          />
          <figcaption>May 2020. Photo: Travis Taber</figcaption>
        </figure>
      </div>
    </section>
  )
}

function Watch() {
  const [playing, setPlaying] = useState<string | null>(null)
  return (
    <section id="watch" className="watch">
      <div className="wrap">
        <p className="label" data-reveal>
          Watch
        </p>
        <h2 className="statement statement--sm" data-reveal>
          Performances on YouTube.
        </h2>
        <div className="videos">
          {videos.map((v, i) => (
            <article key={v.id} className={`video ${i === 0 ? 'video--lead' : ''}`} data-reveal>
              <div className="video__frame">
                {playing === v.id ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0`}
                    title={`${v.title}, ${v.from}`}
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <button className="video__poster" onClick={() => setPlaying(v.id)}>
                    <Photo name={v.poster} alt="" sizes={i === 0 ? '(max-width: 880px) 100vw, 60vw' : '(max-width: 880px) 100vw, 35vw'} />
                    <span className="video__play" aria-hidden="true" />
                    <span className="sr-only">
                      Play {v.title}, {v.from}
                    </span>
                  </button>
                )}
              </div>
              <h3>
                {v.title} <span>{v.from}</span>
              </h3>
              <p>{v.where}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Credits() {
  return (
    <section id="credits" className="credits">
      <div className="wrap">
        <div className="playbill" data-reveal>
          <header className="playbill__head">
            <p className="label">Who’s Who in the Cast</p>
            <h2>Celia Hottenstein</h2>
          </header>
          <div className="playbill__cols">
            {credits.map((group) => (
              <div key={group.heading} className="playbill__group">
                <h3>{group.heading}</h3>
                <table>
                  <tbody>
                    {group.rows.map(([show, role, where]) => (
                      <tr key={show + role + where}>
                        <th scope="row">{show}</th>
                        <td>{role}</td>
                        <td>{where}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
            <div className="playbill__group">
              <h3>Training & Skills</h3>
              <table>
                <tbody>
                  {training.map(([k, v]) => (
                    <tr key={k}>
                      <th scope="row">{k}</th>
                      <td colSpan={2}>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="playbill__actions">
            <a className="btn" href={links.resume} target="_blank" rel="noreferrer">
              Download résumé
            </a>
            <a className="btn btn--ghost" href={links.headshot} target="_blank" rel="noreferrer">
              Download headshot
            </a>
          </div>
        </div>

        <div className="press" data-reveal>
          <p className="label">In the press</p>
          <ul>
            {press.map((p) => (
              <li key={p.url}>
                <a href={p.url} target="_blank" rel="noreferrer">
                  <span className="press__outlet">{p.outlet}</span>
                  <span className="press__title">{p.title}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <Photo className="contact__bg" name="portrait-teal-3" alt="" sizes="(max-width: 880px) 100vw, 58vw" />
      <div className="wrap contact__inner">
        <p className="label" data-reveal>
          Stage door
        </p>
        <h2 className="contact__title" data-reveal>
          For bookings, concerts <em>&amp; press</em>
        </h2>
        <div className="contact__cols" data-reveal>
          <div>
            <h3>Commercial & Voiceover</h3>
            <p>
              <a href={links.agency} target="_blank" rel="noreferrer">
                Brady, Brannon &amp; Rich
              </a>
              <br />
              Doug Kesten · Tracey Goldblum
              <br />
              <a href="tel:+13238529559">(323) 852-9559</a>
            </p>
          </div>
          <div>
            <h3>Instagram</h3>
            <p>
              <a href={links.instagram} target="_blank" rel="noreferrer">
                @celiahottenstein
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <p className="footer__name">
          Celia Hottenstein <Star />
        </p>
        <p className="footer__meta">
          © {new Date().getFullYear()} Celia Hottenstein · Photos from Celia’s collection · Wicked tour photos by
          Joan Marcus · Phantom backstage photo by Matthew Murphy
        </p>
        <a className="footer__top" href="#top">
          Curtain ↑
        </a>
      </div>
    </footer>
  )
}

export default function App() {
  useReveal()
  return (
    <>
      <a className="skip" href="#story">
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Prologue />
        <Phantom />
        <Entracte />
        <Wicked />
        <Words />
        <Encore />
        <Offstage />
        <Stills />
        <Watch />
        <Credits />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
