import type { CSSProperties } from 'react'
import { Container } from '@/components/common'
import { OptimizedImage } from '@/components/common/OptimizedImage'
import { educators } from '@/config/home/educators'
import { useMotion } from '@/hooks/useMotion'
import { cx } from '@/lib/cx'
import type { Educator } from '@/models/home/educators'

function EducatorCard({ educator }: { educator: Educator }) {
  return (
    <article
      className={cx(
        'flex h-[442px] w-[324px] shrink-0 flex-col overflow-hidden rounded-lg border-[3px] border-solid bg-canvas',
        educator.borderClass,
      )}
    >
      <div
        data-hover="zoom"
        className={cx(
          'relative h-[280px] min-h-[280px] w-full shrink-0 overflow-hidden',
          educator.photoClass,
        )}
      >
        <OptimizedImage
          src={educator.image}
          alt={educator.name}
          className="absolute inset-0 size-full max-w-none object-cover"
          style={{ objectPosition: educator.objectPosition }}
          loading="eager"
        />
      </div>
      <div className="flex flex-col items-center gap-1.5 px-5 pt-5 pb-6 text-center">
        <h3 className="font-medium text-[20px] leading-normal text-navy">
          {educator.name}
        </h3>
        <p className="text-base leading-normal text-muted">{educator.tenure}</p>
        <p className="text-base leading-normal text-muted">{educator.bio}</p>
      </div>
    </article>
  )
}

const MARQUEE_COPIES = 4

function EducatorTrack({ hidden }: { hidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 gap-7 pr-7"
      aria-hidden={hidden ? true : undefined}
    >
      {educators.map((educator) => (
        <EducatorCard key={educator.id} educator={educator} />
      ))}
    </div>
  )
}

export function HomeEducators() {
  const motionRef = useMotion<HTMLElement>()

  return (
    <section
      ref={motionRef}
      className="bg-cream-soft py-16 sm:py-20 lg:py-[80px]"
    >
      <Container>
        <div
          data-reveal="heading"
          className="flex flex-col items-center gap-2.5 text-center"
        >
          <p className="font-medium text-[20px] leading-normal text-coral uppercase">
            Our Educators
          </p>
          <h2 className="font-medium text-[32px] leading-[1.1] text-navy lg:text-display">
            Their biggest support
          </h2>
        </div>
      </Container>

      <div className="home-educators-marquee-viewport mt-10 overflow-hidden motion-reduce:overflow-x-auto sm:mt-12">
        <div
          className="home-educators-marquee"
          style={{ '--marquee-copies': MARQUEE_COPIES } as CSSProperties}
        >
          {Array.from({ length: MARQUEE_COPIES }, (_, index) => (
            <EducatorTrack key={index} hidden={index > 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
