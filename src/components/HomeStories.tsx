import { Container } from '@/components/common'
import { stories } from '@/config/home/stories'
import { useMotion } from '@/hooks/useMotion'
import { cx } from '@/lib/cx'

export function HomeStories() {
  const motionRef = useMotion<HTMLElement>()

  return (
    <section
      ref={motionRef}
      className="bg-[rgba(238,244,212,0.65)] py-16 sm:py-20 lg:py-[120px]"
    >
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div data-reveal="heading" className="flex flex-col gap-3.5">
            <p className="w-fit rounded-full bg-stage-middle px-4 py-1.5 text-eyebrow font-medium text-teal uppercase">
              #KabirForLife
            </p>
            <h2 className="max-w-[493px] font-medium text-[32px] leading-[1.1] text-navy lg:text-display">
              Stories from our happy families
            </h2>
          </div>
          <p data-reveal="heading" className="text-lead font-normal text-slate">
            Real stories. Lifelong connections.
          </p>
        </div>

        <ul className="mt-10 grid items-stretch gap-5 lg:mt-12 lg:grid-cols-3">
          {stories.map((story) => (
            <li
              key={story.id}
              data-reveal="item"
              data-hover="lift"
              className={cx(
                'flex flex-col rounded-2xl p-7 will-change-transform',
                story.cardClass,
                story.shadowClass,
              )}
            >
              <div className="flex flex-col gap-4">
                <p className="inline-flex w-fit items-center gap-1.5 rounded-full bg-canvas px-3 py-1.5 shadow-soft">
                  <span className="relative size-3 shrink-0" aria-hidden="true">
                    <img
                      src={story.star}
                      alt=""
                      width={12}
                      height={12}
                      className="absolute inset-0 block size-full max-w-none"
                    />
                  </span>
                  <span className="text-caption font-medium text-navy">
                    Parent story
                  </span>
                </p>
                {story.quote}
              </div>
              <div className="mt-5 flex flex-col gap-0.5 lg:mt-auto lg:pt-5">
                <p className="text-eyebrow font-semibold text-navy">
                  {story.name}
                </p>
                <p className="text-caption font-light text-muted">{story.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
