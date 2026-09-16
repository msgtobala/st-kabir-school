import { Container } from '@/components/common'
import { values } from '@/config/home/values'
import { useMotion } from '@/hooks/useMotion'
import { cx } from '@/lib/cx'

export function HomeValues() {
  const motionRef = useMotion<HTMLElement>()

  return (
    <section
      ref={motionRef}
      className="bg-canvas pt-4 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-20"
    >
      <Container>
        <div
          data-reveal="heading"
          className="mx-auto flex max-w-[477px] flex-col items-center gap-2.5 text-center"
        >
          <p className="font-medium text-[20px] leading-normal text-coral uppercase">
            The St. Kabir Way
          </p>
          <h2 className="font-medium text-[32px] leading-[1.1] text-navy sm:text-display">
            Think. Thrive.
            <br />
            Become. Belong.
          </h2>
        </div>

        <ul className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {values.map((value) => (
            <li
              key={value.id}
              data-reveal="item"
              data-hover="lift"
              className={cx(
                'flex min-h-[347px] flex-col rounded-lg px-5 pt-10 pb-5 will-change-transform',
                value.cardClass,
              )}
            >
              <span className="relative size-20 shrink-0" aria-hidden="true">
                <img
                  src={value.icon}
                  alt=""
                  width={80}
                  height={80}
                  className="absolute inset-0 block size-full max-w-none"
                />
              </span>
              <h3 className="mt-[72px] font-normal text-section text-navy">
                {value.title}
              </h3>
              <p className="mt-4 text-body text-muted-dark">
                {value.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
