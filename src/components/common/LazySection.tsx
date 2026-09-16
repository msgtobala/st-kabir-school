import { type ComponentType, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router'
import { ScrollTrigger } from '@/lib/gsap'

type LazySectionProps = {
  loader: () => Promise<{ default: ComponentType }>
  minHeight: string
  id?: string
}

export function LazySection({ loader, minHeight, id }: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { hash } = useLocation()
  const [Section, setSection] = useState<ComponentType | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node || Section) return

    const load = () => {
      void loader().then((module) => {
        setSection(() => module.default)
        requestAnimationFrame(() => ScrollTrigger.refresh())
      })
    }

    if (hash) {
      load()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        load()
      },
      { rootMargin: '400px 0px', threshold: 0.01 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [loader, hash, Section])

  return (
    <div
      id={id}
      ref={ref}
      className={id ? 'scroll-mt-20 sm:scroll-mt-24' : undefined}
      style={Section ? undefined : { minHeight }}
      aria-hidden={Section ? undefined : true}
    >
      {Section ? <Section /> : null}
    </div>
  )
}
