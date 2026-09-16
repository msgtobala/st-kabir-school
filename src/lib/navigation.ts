import type { MouseEvent } from 'react'
import type { NavItem } from '@/models/navigation'
import { homeSectionIds } from '@/config/navigation'
import { gsap, prefersReducedMotion } from '@/lib/gsap'

const UNREADY_PATHS = new Set([
  '/learning',
  '/life-at-school',
  '/admissions',
  '/contact',
])

let hashScrollTween: gsap.core.Tween | null = null

export function hashFromTo(to: string) {
  const index = to.indexOf('#')
  return index === -1 ? '' : to.slice(index)
}

export function stayOnPageIfUnready(event: MouseEvent, to: string) {
  if (UNREADY_PATHS.has(to)) {
    event.preventDefault()
  }
}

export function isNavItemActive(
  item: NavItem,
  pathname: string,
  hash: string,
  navIsActive: boolean,
) {
  const itemHash = hashFromTo(item.to)
  if (itemHash) {
    if (pathname !== '/') return false
    if (hash === itemHash) return true
    return itemHash === `#${homeSectionIds.banner}` && (hash === '' || hash === '#')
  }
  if (item.end && pathname === '/') return hash === '' || hash === '#'
  return navIsActive
}

function hashId(hash: string) {
  return decodeURIComponent(hash.replace(/^#/, ''))
}

export function getHashScrollTop(hash: string) {
  const id = hashId(hash)
  if (!id) return null
  if (id === homeSectionIds.banner) return 0
  const node = document.getElementById(id)
  if (!node || node.getAttribute('aria-hidden') === 'true') return null
  const header = document.querySelector('header')
  const offset = (header?.getBoundingClientRect().height ?? 80) + 16
  return Math.max(0, node.getBoundingClientRect().top + window.scrollY - offset)
}

export function isHashAligned(hash: string) {
  const top = getHashScrollTop(hash)
  if (top == null) return false
  return Math.abs(window.scrollY - top) < 48
}

export function scrollToHash(hash: string) {
  const top = getHashScrollTop(hash)
  if (top == null) return false

  hashScrollTween?.kill()

  if (prefersReducedMotion() || Math.abs(window.scrollY - top) < 2) {
    window.scrollTo(0, top)
    return true
  }

  const distance = Math.abs(top - window.scrollY)
  const duration = Math.min(1.85, Math.max(0.9, distance / 2100))
  const proxy = { y: window.scrollY }

  hashScrollTween = gsap.to(proxy, {
    y: top,
    duration,
    ease: 'power3.inOut',
    overwrite: true,
    onUpdate: () => window.scrollTo(0, proxy.y),
    onComplete: () => {
      const settled = getHashScrollTop(hash)
      if (settled == null || Math.abs(window.scrollY - settled) < 48) return
      const correct = { y: window.scrollY }
      hashScrollTween = gsap.to(correct, {
        y: settled,
        duration: 0.45,
        ease: 'power2.out',
        overwrite: true,
        onUpdate: () => window.scrollTo(0, correct.y),
      })
    },
  })

  return true
}
