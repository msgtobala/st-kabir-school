import { Container } from '@/components/common'
import { OptimizedImage } from '@/components/common/OptimizedImage'
import { activities } from '@/config/home/beyond'
import { useMotion } from '@/hooks/useMotion'
import { cx } from '@/lib/cx'

export function HomeBeyond() {
  const motionRef = useMotion<HTMLElement>()

  return (
    <section
      ref={motionRef}
      className="bg-[rgba(255,249,240,0.5)] py-12 sm:py-16 lg:py-20"
    >
      <Container>
        <div
          data-reveal="heading"
          className="flex max-w-[629px] flex-col gap-2.5"
        >
          <p className="font-medium text-[20px] leading-normal text-coral uppercase">
            Beyond the Classroom
          </p>
          <h2 className="font-medium text-[32px] leading-[1.1] text-navy lg:text-display">
            The world is a classroom too.
          </h2>
        </div>

        <ul className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-3">
          {activities.map((activity) => (
            <li
              key={activity.id}
              data-reveal="item"
              className="flex flex-col gap-3.5"
            >
              <div
                data-hover="zoom"
                className="relative aspect-[413/370] w-full overflow-hidden rounded-lg"
              >
                <OptimizedImage
                  src={activity.image}
                  alt={activity.title}
                  className="absolute max-w-none"
                  style={activity.imageCrop}
                />
              </div>
              <p
                className={cx(
                  'w-fit rounded-md px-3.5 py-1.5 text-eyebrow text-navy',
                  activity.tagClass,
                )}
              >
                {activity.tag}
              </p>
              <h3 className="font-medium text-[20px] leading-normal text-navy">
                {activity.title}
              </h3>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
