import { useEffect, useRef, useState } from 'react'
import { stills } from './content'
import { Photo } from './Photo'

const filters = ['All', 'Portraits', 'On stage', 'Backstage'] as const

export function Stills() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')
  const [open, setOpen] = useState<number | null>(null)
  const shown = filter === 'All' ? stills : stills.filter((s) => s.tag === filter)
  const dialog = useRef<HTMLDialogElement>(null)
  const opener = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const d = dialog.current
    if (!d) return
    if (open !== null && !d.open) d.showModal()
    if (open === null && d.open) d.close()
  }, [open])

  const step = (dir: number) => setOpen((i) => (i === null ? i : (i + dir + shown.length) % shown.length))
  const current = open !== null ? shown[open] : null

  return (
    <section id="stills" className="stills">
      <div className="wrap">
        <div className="stills__head">
          <div>
            <p className="label" data-reveal>
              Stills
            </p>
            <h2 className="statement statement--sm" data-reveal>
              Photographs.
            </h2>
          </div>
          <div className="filters" role="group" aria-label="Filter photos">
            {filters.map((f) => (
              <button key={f} aria-pressed={filter === f} onClick={() => setFilter(f)}>
                {f}
              </button>
            ))}
          </div>
        </div>
        <ul className="gallery">
          {shown.map((s, i) => (
            <li key={s.name} className={s.wide ? 'is-wide' : ''}>
              <button
                onClick={(e) => {
                  opener.current = e.currentTarget
                  setOpen(i)
                }}
              >
                <Photo
                  name={s.name}
                  alt={s.alt}
                  sizes={s.wide ? '(max-width: 880px) 100vw, 50vw' : '(max-width: 880px) 50vw, 25vw'}
                  style={s.focus ? { objectPosition: s.focus } : undefined}
                />
                <span className="gallery__tag">{s.tag}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialog}
        className="lightbox"
        aria-label="Photo viewer"
        onClose={() => {
          setOpen(null)
          opener.current?.focus()
        }}
        onClick={(e) => e.target === e.currentTarget && setOpen(null)}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') step(1)
          if (e.key === 'ArrowLeft') step(-1)
        }}
      >
        {current && (
          <figure>
            <Photo name={current.name} alt={current.alt} loading="eager" />
            <figcaption>
              <span>{current.alt}</span>
              {current.credit && <span className="lightbox__credit">Photo: {current.credit}</span>}
              <span className="lightbox__count">
                {open! + 1} / {shown.length}
              </span>
            </figcaption>
          </figure>
        )}
        <button className="lightbox__btn lightbox__prev" onClick={() => step(-1)} aria-label="Previous photo">
          ←
        </button>
        <button className="lightbox__btn lightbox__next" onClick={() => step(1)} aria-label="Next photo">
          →
        </button>
        <button className="lightbox__close" onClick={() => setOpen(null)} aria-label="Close">
          ×
        </button>
      </dialog>
    </section>
  )
}
