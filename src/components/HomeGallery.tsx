import { useCallback, useEffect, useRef, useState } from 'react'
import { Container } from '@/components/common'
import { OptimizedImage } from '@/components/common/OptimizedImage'
import {
  PAGE_COUNT,
  rowOne,
  rowThree,
  rowTwo,
} from '@/config/home/gallery'
import { useMotion } from '@/hooks/useMotion'
import { cx } from '@/lib/cx'
import type { GalleryPhoto } from '@/models/home/gallery'

function GalleryTile({ photo }: { photo: GalleryPhoto }) {
  return (
    <div
      data-hover="zoom"
      className="relative h-[476px] shrink-0 overflow-hidden rounded-lg"
      style={{ width: photo.boxWidth }}
    >
      {photo.object ? (
        <OptimizedImage
          src={photo.src}
          alt={photo.alt}
          className={cx(
            'absolute inset-0 size-full max-w-none',
            photo.object === 'bottom' ? 'object-cover object-bottom' : 'object-cover',
          )}
        />
      ) : (
        <OptimizedImage
          src={photo.src}
          alt={photo.alt}
          className="absolute max-w-none"
          style={photo.crop}
        />
      )}
    </div>
  )
}

function GalleryRow({ photos }: { photos: GalleryPhoto[] }) {
  return (
    <div className="flex gap-5">
      {photos.map((photo) => (
        <GalleryTile key={photo.id} photo={photo} />
      ))}
    </div>
  )
}

export function HomeGallery() {
  const motionRef = useMotion<HTMLElement>()
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [page, setPage] = useState(0)

  const updatePage = useCallback(() => {
    const node = scrollerRef.current
    if (!node) return
    const max = node.scrollWidth - node.clientWidth
    if (max <= 0) {
      setPage(0)
      return
    }
    const next = Math.round((node.scrollLeft / max) * (PAGE_COUNT - 1))
    setPage(Math.max(0, Math.min(PAGE_COUNT - 1, next)))
  }, [])

  useEffect(() => {
    const node = scrollerRef.current
    if (!node) return
    updatePage()
    node.addEventListener('scroll', updatePage, { passive: true })
    window.addEventListener('resize', updatePage)
    return () => {
      node.removeEventListener('scroll', updatePage)
      window.removeEventListener('resize', updatePage)
    }
  }, [updatePage])

  const goToPage = (index: number) => {
    const node = scrollerRef.current
    if (!node) return
    const max = node.scrollWidth - node.clientWidth
    node.scrollTo({
      left: max * (index / (PAGE_COUNT - 1)),
      behavior: 'smooth',
    })
  }

  return (
    <section ref={motionRef} className="bg-canvas pt-[60px] pb-8">
      <Container>
        <div
          data-reveal="heading"
          className="flex flex-col items-center gap-2 text-center"
        >
          <p className="font-medium text-[20px] leading-normal text-coral uppercase">
            Gallery
          </p>
          <h2 className="font-medium text-[32px] leading-[1.1] text-navy lg:text-display">
            Little moments, big memories
          </h2>
        </div>
      </Container>

      <div
        ref={scrollerRef}
        className="mt-10 overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth [scrollbar-width:none] sm:mt-12 lg:mt-[58px] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex w-[3616px] flex-col gap-5">
          <GalleryRow photos={rowOne} />
          <GalleryRow photos={rowTwo} />
          <GalleryRow photos={rowThree} />
        </div>
      </div>

      <div
        className="mt-8 flex h-[10px] items-center justify-center gap-2"
        role="tablist"
        aria-label="Gallery pages"
      >
        {Array.from({ length: PAGE_COUNT }, (_, index) => {
          const active = index === page
          return (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={active}
              aria-label={`Show gallery page ${index + 1}`}
              onClick={() => goToPage(index)}
              data-hover="press"
              className={cx(
                'rounded-full bg-coral will-change-transform',
                active ? 'size-2.5' : 'size-2 opacity-35',
              )}
            />
          )
        })}
      </div>
    </section>
  )
}
