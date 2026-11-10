import { useEffect, useState, type RefObject } from 'react'

/** Adds `is-in` to every [data-reveal] element the first time it scrolls into view. */
export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: '0px 0px -12% 0px' },
    )
    document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

/** Index of the child [data-step] closest to the vertical middle of the viewport. */
export function useActiveStep(container: RefObject<HTMLElement | null>) {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const steps = container.current?.querySelectorAll<HTMLElement>('[data-step]')
    if (!steps?.length) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.step))
        }
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    steps.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [container])
  return active
}

/** Writes the element's scroll progress (0 → 1 while it crosses the viewport) to --progress. */
export function useScrollProgress(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let frame = 0
    const update = () => {
      frame = 0
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      const p = Math.min(1, Math.max(0, (vh * 0.6 - r.top) / r.height))
      el.style.setProperty('--progress', p.toFixed(4))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [ref])
}
