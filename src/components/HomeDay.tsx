import { Container } from '@/components/common'
import { slots } from '@/config/home/day'
import { useMotion } from '@/hooks/useMotion'
import { cx } from '@/lib/cx'
import { OptimizedImage } from '@/components/common/OptimizedImage'
import { bannerDay } from '@/resources/images/day'

export function HomeDay() {
  const motionRef = useMotion<HTMLElement>()

  return (
    <section
      ref={motionRef}
      className="relative isolate overflow-hidden bg-canvas lg:h-[852px]"
    >
      <div className="absolute inset-0 hidden overflow-hidden lg:block">
        <OptimizedImage
          src={bannerDay}
          alt="Students of St. Kabir School gathered around letters, books, and play materials"
          className="absolute inset-0 size-full max-w-none object-cover object-bottom"
        />
      </div>

      <Container className="relative z-10 py-12 lg:flex lg:h-full lg:flex-col lg:justify-center lg:py-0">
        <p
          data-reveal="heading"
          className="font-medium text-[20px] leading-normal text-coral uppercase"
        >
          Joy in every hour
        </p>
        <h2
          data-reveal="heading"
          className="mt-2 max-w-[344px] font-medium text-[32px] leading-[1.1] text-navy sm:text-display"
        >
          A little day at St. Kabir
        </h2>

        <ul className="mt-7 grid max-w-[632px] grid-cols-1 gap-5 sm:grid-cols-2">
          {slots.map((slot) => (
            <li
              key={slot.time}
              data-reveal="item"
              data-hover="lift"
              className="flex flex-col items-start gap-5 rounded-md border border-solid border-border-soft p-3 will-change-transform"
            >
              <p className="rounded-sm border border-solid border-border-soft px-3 py-1.5 text-eyebrow font-medium text-navy">
                {slot.time}
              </p>
              <div className="flex w-full max-w-[280px] flex-col gap-2">
                <h3
                  className={cx(
                    'font-medium text-[20px] leading-normal',
                    slot.titleClass,
                  )}
                >
                  {slot.title}
                </h3>
                <p className="text-eyebrow font-normal text-muted">
                  {slot.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>

      <div className="relative h-[min(70vw,28rem)] overflow-hidden lg:hidden">
        <OptimizedImage
          src={bannerDay}
          alt=""
          className="absolute inset-0 size-full max-w-none object-cover object-right"
        />
      </div>
    </section>
  )
}
