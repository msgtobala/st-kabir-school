import { useCallback, useEffect, useRef, useState } from 'react'
import { Container } from '@/components/common'
import { OptimizedImage } from '@/components/common/OptimizedImage'
import { stages } from '@/config/home/journey'
import { useMotion } from '@/hooks/useMotion'
import { cx } from '@/lib/cx'
import type { Stage } from '@/models/home/journey'
import { arrowLeft, arrowRight } from '@/resources/icons'

const CARD_STEP = 400

function ArrowButton({
  src,
  label,
  disabled,
  onClick,
}: {
  src: string
  label: string
  disabled: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      data-hover="press"
      className="relative size-10 shrink-0 will-change-transform disabled:cursor-not-allowed disabled:opacity-30"
    >
      <img
        src={src}
        alt=""
        width={40}
        height={40}
        className="absolute inset-0 block size-full max-w-none"
      />
    </button>
  )
}

function StageCard({ stage }: { stage: Stage }) {
  return (
    <article
      data-reveal="item"
      data-hover="lift"
      className={cx(
        'relative h-[508px] w-[380px] shrink-0 snap-start overflow-hidden rounded-lg will-change-transform',
        stage.cardClass,
      )}
    >
      <div className="absolute top-0 left-0 h-[238px] w-[380px] overflow-hidden">
        <OptimizedImage
          src={stage.image}
          alt={stage.title}
          className="absolute max-w-none"
          style={stage.imageCrop}
        />
      </div>
      <div className="absolute top-[266px] left-5 flex w-[min(340px,calc(100%-2.5rem))] flex-col gap-8">
        <div className="flex flex-col gap-1.5 text-navy">
          <p className="text-caption font-normal uppercase opacity-60">
            {stage.age}
          </p>
          <h3 className="text-title font-normal">{stage.title}</h3>
          <p className="text-eyebrow font-light leading-[1.2]">
            {stage.description}
          </p>
        </div>
        <ul className="flex flex-wrap gap-2">
          {stage.chips.map((chip) => (
            <li
              key={chip}
              className={cx(
                'rounded-pill px-3 py-1.5 text-caption whitespace-nowrap text-navy',
                stage.chipClass,
              )}
            >
              {chip}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export function HomeJourney() {
  const motionRef = useMotion<HTMLElement>()
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const updateScrollState = useCallback(() => {
    const node = scrollerRef.current
    if (!node) return
    const max = node.scrollWidth - node.clientWidth
    setAtStart(node.scrollLeft <= 4)
    setAtEnd(node.scrollLeft >= max - 4)
  }, [])

  useEffect(() => {
    const node = scrollerRef.current
    if (!node) return
    updateScrollState()
    node.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)
    return () => {
      node.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [updateScrollState])

  const scrollByCard = (direction: -1 | 1) => {
    const node = scrollerRef.current
    if (!node) return
    const index = Math.round(node.scrollLeft / CARD_STEP)
    const next = Math.max(0, Math.min(stages.length - 1, index + direction))
    node.scrollTo({ left: next * CARD_STEP, behavior: 'smooth' })
  }

  return (
    <section
      ref={motionRef}
      className="bg-canvas pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20"
    >
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div data-reveal="heading" className="max-w-[747px]">
            <p className="font-medium text-[20px] leading-normal text-coral uppercase">
              One school. One journey.
            </p>
            <h2 className="mt-3 max-w-[496px] font-medium text-[32px] leading-[1.1] text-navy sm:text-display">
              Why wait to choose the right school later?
            </h2>
            <p className="mt-4 text-base leading-[1.4] text-slate sm:mt-5 sm:text-[20px]">
              Your child&apos;s first years shape how they learn, communicate,
              make friends, build confidence and see themselves. At St. Kabir,
              pre-primary isn&apos;t a separate beginning before &quot;real
              school&quot; starts. It is Day 1 of the entire St. Kabir journey.
            </p>
          </div>
          <div className="flex items-center gap-3 self-end">
            <ArrowButton
              src={arrowLeft}
              label="Show previous stages"
              disabled={atStart}
              onClick={() => scrollByCard(-1)}
            />
            <ArrowButton
              src={arrowRight}
              label="Show next stages"
              disabled={atEnd}
              onClick={() => scrollByCard(1)}
            />
          </div>
        </div>
      </Container>

      <div
        ref={scrollerRef}
        className="mt-8 flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory overscroll-x-contain pt-2 pb-4 pl-5 scroll-pl-5 sm:mt-10 sm:pl-8 sm:scroll-pl-8 lg:pl-[max(4.5rem,calc((100vw-90rem)/2+4.5rem))] lg:scroll-pl-[max(4.5rem,calc((100vw-90rem)/2+4.5rem))] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {stages.map((stage) => (
          <StageCard key={stage.id} stage={stage} />
        ))}
        <div
          className="w-5 shrink-0 sm:w-8 lg:w-gutter"
          aria-hidden="true"
        />
      </div>
    </section>
  )
}
