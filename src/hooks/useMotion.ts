import { useRef } from 'react'
import {
  gsap,
  prefersReducedMotion,
  ScrollTrigger,
  useGSAP,
} from '@/lib/gsap'

type MotionOptions = {
  immediate?: boolean
}

function bindHover(
  elements: HTMLElement[],
  varsIn: gsap.TweenVars,
  varsOut: gsap.TweenVars,
) {
  const cleanups: Array<() => void> = []

  elements.forEach((el) => {
    const enter = () => gsap.to(el, { ...varsIn, overwrite: 'auto' })
    const leave = () => gsap.to(el, { ...varsOut, overwrite: 'auto' })
    el.addEventListener('pointerenter', enter)
    el.addEventListener('pointerleave', leave)
    el.addEventListener('blur', leave)
    cleanups.push(() => {
      el.removeEventListener('pointerenter', enter)
      el.removeEventListener('pointerleave', leave)
      el.removeEventListener('blur', leave)
    })
  })

  return () => cleanups.forEach((fn) => fn())
}

export function useMotion<T extends HTMLElement = HTMLElement>(
  options: MotionOptions = {},
) {
  const ref = useRef<T>(null)

  useGSAP(
    () => {
      const root = ref.current
      if (!root || prefersReducedMotion()) return

      const headings = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll('[data-reveal="heading"]'),
      )
      const items = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll('[data-reveal="item"]'),
      )

      if (headings.length || items.length) {
        const alreadyInView =
          options.immediate ||
          root.getBoundingClientRect().top < window.innerHeight * 0.82

        const tl = gsap.timeline({
          defaults: { ease: 'power3.out' },
          scrollTrigger: alreadyInView
            ? undefined
            : {
                trigger: root,
                start: 'top 82%',
                once: true,
                invalidateOnRefresh: true,
              },
        })

        if (headings.length) {
          tl.fromTo(
            headings,
            { y: 28, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, stagger: 0.08 },
          )
        }

        if (items.length) {
          tl.fromTo(
            items,
            { y: 36, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.65, stagger: 0.1 },
            headings.length ? '-=0.45' : 0,
          )
        }
      }

      const liftCleanup = bindHover(
        gsap.utils.toArray<HTMLElement>(
          root.querySelectorAll('[data-hover="lift"]'),
        ),
        { y: -8, duration: 0.35, ease: 'power2.out' },
        { y: 0, duration: 0.4, ease: 'power2.out' },
      )

      const pressCleanup = bindHover(
        gsap.utils.toArray<HTMLElement>(
          root.querySelectorAll('[data-hover="press"]'),
        ),
        { scale: 1.05, y: -2, duration: 0.25, ease: 'power2.out' },
        { scale: 1, y: 0, duration: 0.3, ease: 'power2.out' },
      )

      const zoomCleanups = gsap.utils
        .toArray<HTMLElement>(root.querySelectorAll('[data-hover="zoom"]'))
        .map((el) => {
          const target =
            el.querySelector('[data-image-full]') ??
            el.querySelector('img') ??
            el
          gsap.set(target, { transformOrigin: 'center center' })
          const enter = () =>
            gsap.to(target, {
              scale: 1.06,
              duration: 0.5,
              ease: 'power2.out',
              overwrite: 'auto',
            })
          const leave = () =>
            gsap.to(target, {
              scale: 1,
              duration: 0.55,
              ease: 'power2.out',
              overwrite: 'auto',
            })
          el.addEventListener('pointerenter', enter)
          el.addEventListener('pointerleave', leave)
          return () => {
            el.removeEventListener('pointerenter', enter)
            el.removeEventListener('pointerleave', leave)
          }
        })

      const refresh = () => ScrollTrigger.refresh()
      const raf = requestAnimationFrame(refresh)
      window.addEventListener('load', refresh)

      return () => {
        cancelAnimationFrame(raf)
        window.removeEventListener('load', refresh)
        liftCleanup()
        pressCleanup()
        zoomCleanups.forEach((fn) => fn())
      }
    },
    { scope: ref },
  )

  return ref
}

export function usePressHover<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null)

  useGSAP(
    () => {
      const el = ref.current
      if (!el) return

      if (prefersReducedMotion()) return

      const enter = () =>
        gsap.to(el, {
          scale: 1.05,
          y: -2,
          duration: 0.25,
          ease: 'power2.out',
          overwrite: 'auto',
        })
      const leave = () =>
        gsap.to(el, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: 'power2.out',
          overwrite: 'auto',
        })
      const down = () =>
        gsap.to(el, {
          scale: 0.97,
          duration: 0.12,
          ease: 'power2.out',
          overwrite: 'auto',
        })

      el.addEventListener('pointerenter', enter)
      el.addEventListener('pointerleave', leave)
      el.addEventListener('pointerdown', down)
      el.addEventListener('pointerup', enter)
      el.addEventListener('blur', leave)

      return () => {
        el.removeEventListener('pointerenter', enter)
        el.removeEventListener('pointerleave', leave)
        el.removeEventListener('pointerdown', down)
        el.removeEventListener('pointerup', enter)
        el.removeEventListener('blur', leave)
      }
    },
    { scope: ref },
  )

  return ref
}
